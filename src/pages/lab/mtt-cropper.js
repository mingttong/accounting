const validator = (instance, o) => {
    Object.defineProperties(instance, o);
};

let device = null;
const getDevice = () => {
    if (!device) {
        device = wx.getSystemInfoSync();
    }
    return device;
};

const firstLetterUpper = str => str.charAt(0).toUpperCase() + str.slice(1);

const isFunction = obj => typeof obj === 'function';

/**
 * 获取最新缩放值
 * @param oldScale 上一次触摸结束后的缩放值
 * @param oldDistance 上一次触摸结束后的双指距离
 * @param zoom 缩放系数
 * @param touch0 第一指touch对象
 * @param touch1 第二指touch对象
 * @returns {*}
 */
const getNewScale = (oldScale, oldDistance, zoom, touch0, touch1) => {
    // 计算二指最新距离
    const xMove = Math.round(touch1.x - touch0.x);
    const yMove = Math.round(touch1.y - touch0.y);
    const newDistance = Math.round(Math.sqrt((xMove ** 2) + (yMove ** 2)));

    return oldScale + (0.001 * (zoom * (newDistance - oldDistance)));
};

const setTouchState = (instance, ...args) => {

    TOUCH_STATE.forEach(function(key, i) {
        if (arg[i] !== undefined) {
            instance[key] = args[i];
        }
    });
}

const tmp = {};
const DEFAULT = {
    id: {
        default: 'cropper',
        get() {
            return tmp.id;
        },
        set(value) {
            if (typeof value !== 'string') {
                console.log(`id: ${value} is invalid`);
            }
            tmp.id = value;
        },
    },
    width: {
        default: 750,
        get() {
            return tmp.width;
        },
        set(value) {
            if (typeof value !== 'number') {
                console.log(`width: ${value} is invalid`);
            }
            tmp.width = value;
        },
    },
    height: {
        default: 750,
        get() {
            return tmp.height;
        },
        set(value) {
            if (typeof value !== 'number') {
                console.log(`height: ${value} is invalid`);
            }
            tmp.height = value;
        },
    },
    scale: {
        default: 2.5,
        get() {
            return tmp.scale;
        },
        set(value) {
            if (typeof value !== 'number') {
                console.log(`scale: ${value} is invalid`);
            }
            tmp.scale = value;
        },
    },
    zoom: {
        default: 5,
        get() {
            return tmp.zoom;
        },
        set(value) {
            if (typeof value !== 'number') {
                console.log(`zoom: ${value} is invalid`);
            } else if (value < 0 || value > 10) {
                console.log('zoom should be ranged in 0 ~ 10');
            }
            tmp.zoom = value;
        },
    },
    src: {
        default: 'cropper',
        get() {
            return tmp.src;
        },
        set(value) {
            if (typeof value !== 'string') {
                console.log(`id: ${value} is invalid`);
            }
            tmp.src = value;
        },
    },
    cut: {
        default: {},
        get() {
            return tmp.cut;
        },
        set(value) {
            if (typeof value !== 'object') {
                console.log(`id: ${value} is invalid`);
            }
            tmp.cut = value;
        },
    },
    onReady: {
        default: null,
        get() {
            return tmp.ready;
        },
        set(value) {
            tmp.ready = value;
        },
    },
    onBeforeImageLoad: {
        default: null,
        get() {
            return tmp.beforeImageLoad;
        },
        set(value) {
            tmp.beforeImageLoad = value;
        },
    },
    onImageLoad: {
        default: null,
        get() {
            return tmp.imageLoad;
        },
        set(value) {
            tmp.imageLoad = value;
        },
    },
    onBeforeDraw: {
        default: null,
        get() {
            return tmp.beforeDraw;
        },
        set(value) {
            tmp.beforeDraw = value;
        },
    },
};
const EVENT_TYPE = ['ready', 'beforeImageLoad', 'beforeDraw', 'imageLoad'];

const oneTouchStart = Symbol('oneTouchStart');
const oneTouchMove = Symbol('oneTouchMove');
const twoTouchStart = Symbol('twoTouchStart');
const twoTouchMove = Symbol('twoTouchMove');
const xtouchEnd = Symbol('xtouchEnd');

export default class Cropper {
    // 图片坐标
    // imgLeft
    // imgTop

    // 裁剪框坐标
    // x
    // y
    constructor(opt) {
        const $default = {};

        validator(this, DEFAULT);

        // 加载默认配置
        Object.keys(DEFAULT).forEach(key => {
            $default[key] = DEFAULT[key].default;
        });

        Object.assign(this, $default, opt);

        this.prepare();
        this.attachPage();
        this.createCtx();
        this.observer();
        this.init();
    }

    prepare() {
        const ref = getDevice();
        const { windowWidth } = ref;
        this.deviceRatio = windowWidth / 750;
    }

    attachPage() {
        const pages = getCurrentPages();
        //  获取到当前page上下文
        const pageContext = pages[pages.length - 1];
        //  把this依附在Page上下文的wecropper属性上，便于在page钩子函数中访问
        pageContext.wecropper = this;
    }

    createCtx() {
        const { id } = this;
        if (id) {
            this.ctx = wx.createCanvasContext(id);
        } else {
            console.log("constructor: create canvas context failed, 'id' must be valuable");
        }
    }

    observer() {
        this.on = (event, fn) => {
            if (!~EVENT_TYPE.indexOf(event)) {
                console.log(`event: ${event} is invalid`);
                return this;
            }

            if (typeof fn !== 'function') {
                return this;
            }

            if (event === 'ready') {
                fn(this);
            } else {
                this[`on${firstLetterUpper(event)}`] = fn;
            }

            return this;
        };
    }

    init() {
        const { src } = this;

        typeof this.onReady === 'function' && this.onReady(this.ctx, this);

        if (src) {
            this.pushOrigin(src);
        }
        setTouchState(this, false, false, false);

        this.oldScale = 1;
        this.newScale = 1;

        return this;
    }

    [oneTouchStart](touch) {
        this.touchX0 = Math.round(touch.x);
        this.touchY0 = Math.round(touch.y);
    }
    [oneTouchMove](touch) {
        // 计算单指移动的距离
        if (this.touchended) {
            return this.updateCanvas();
        }

        const xMove = Math.round(touch.x - this.touchX0);
        const yMove = Math.round(touch.y - this.touchY0);

        const imgLeft = Math.round(this.rectX + xMove);
        const imgTop = Math.round(this.rectY + yMove);

        this.outsideBound(imgLeft, imgTop);

        this.updateCanvas();
    }
    [twoTouchStart](touch0, touch1) {
        this.touchX1 = Math.round(this.rectX + (this.scaleWidth / 2));
        this.touchY1 = Math.round(this.rectY + (this.scaleHeight / 2));

        // 计算两指距离
        const xMove = Math.round(touch1.x - touch0.x);
        const yMove = Math.round(touch1.y - touch0.y);
        const oldDistance = Math.round(Math.sqrt((xMove * xMove) + (yMove * yMove)));

        this.oldDistance = oldDistance;
    }
    [twoTouchMove](touch0, touch1) {
        const {
            oldScale,
            oldDistance,
            scale,
            zoom,
        } = this;

        this.newScale = getNewScale(oldScale, oldDistance, zoom, touch0, touch1);

        //  设定缩放范围
        this.newScale <= 1 && (this.newScale = 1);
        this.newScale >= scale && (this.newScale = scale);

        this.scaleWidth = Math.round(this.newScale * this.baseWidth);
        this.scaleHeight = Math.round(this.newScale * this.baseHeight);
        const imgLeft = Math.round(this.touchX1 - (this.scaleWidth / 2));
        const imgTop = Math.round(this.touchY1 - (this.scaleHeight / 2));

        this.outsideBound(imgLeft, imgTop);

        this.updateCanvas();
    }
    [xtouchEnd]() {
        this.oldScale = this.newScale;
        this.rectX = this.imgLeft;
        this.rectY = this.imgTop;
    }

    /**
     * 设置边界
     * @param imgLeft 图片左上角横坐标值
     * @param imgTop 图片左上角纵坐标值
     */
    outsideBound(newImgLeft, newImgTop) {
        // 裁剪框默认宽度，即整个画布宽度
        // 裁剪框默认高度，即整个画布高度
        const {
            width: boundWidth,
            height: boundHeight,
            cut = {},
        } = this;

        const {
            x = 0,
            y = 0,
            width = boundWidth,
            height = boundHeight,
        } = cut;

        if (newImgLeft >= x) {
            this.imgLeft = x;
        } else if ((this.scaleWidth + newImgLeft) - x <= width) {
            this.imgLeft = (x + width) - this.scaleWidth;
        } else {
            this.imgLeft = newImgLeft;
        }

        if (newImgTop >= y) {
            this.imgTop = y;
        } else if ((this.scaleHeight + newImgTop) - y <= height) {
            this.imgTop = (y + height) - this.scaleHeight;
        } else {
            this.imgTop = newImgTop;
        }
    }

    /**
     * 设置边界样式
     * @param color 边界颜色
     */
    setBoundStyle() {
        /**
         * @author mingttong
         */
        // 裁剪框默认宽度，即整个画布宽度
        // 裁剪框默认高度，即整个画布高度
        const {
            width: boundWidth,
            height: boundHeight,
            cut = {},
        } = this;

        const {
            x = 0,
            y = 0,
            width = boundWidth,
            height = boundHeight,
        } = cut;

        const {
            color = '#04b00f',
            mask = 'rgba(0, 0, 0, 0.3)',
            lineWidth = 1,
        } = this;
        // 自由裁剪的样式
        // const boundOption = [{
        //         start: { x: x - lineWidth, y: y + 10 - lineWidth },
        //         step1: { x: x - lineWidth, y: y - lineWidth },
        //         step2: { x: x + 10 - lineWidth, y: y - lineWidth }
        //     },
        //     {
        //         start: { x: x - lineWidth, y: y + height - 10 + lineWidth },
        //         step1: { x: x - lineWidth, y: y + height + lineWidth },
        //         step2: { x: x + 10 - lineWidth, y: y + height + lineWidth }
        //     },
        //     {
        //         start: { x: x + width - 10 + lineWidth, y: y - lineWidth },
        //         step1: { x: x + width + lineWidth, y: y - lineWidth },
        //         step2: { x: x + width + lineWidth, y: y + 10 - lineWidth }
        //     },
        //     {
        //         start: { x: x + width + lineWidth, y: y + height - 10 + lineWidth },
        //         step1: { x: x + width + lineWidth, y: y + height + lineWidth },
        //         step2: { x: x + width - 10 + lineWidth, y: y + height + lineWidth }
        //     }
        // ];

        // 比例裁剪的样式
        const boundOption = [
            [
                { x, y },
                { x: x + width, y },
            ],
            [
                { x: x + width, y },
                { x: x + width, y: y + height },
            ],
            [
                { x: x + width, y: y + height },
                { x, y: y + height },
            ],
            [
                { x, y: y + height },
                { x, y },
            ],
        ];

        // 绘制半透明层
        this.ctx.beginPath();
        this.ctx.setFillStyle(mask);
        this.ctx.fillRect(0, 0, x, boundHeight);
        this.ctx.fillRect(x, 0, width, y);
        this.ctx.fillRect(x, y + height, width, (boundHeight - y) - height);
        this.ctx.fillRect(x + width, 0, (boundWidth - x) - width, boundHeight);
        this.ctx.fill();

        boundOption.forEach(op => {
            this.ctx.beginPath();
            this.ctx.setStrokeStyle(color);
            this.ctx.setLineWidth(lineWidth);
            op.forEach((pos, i) => {
                if (i === 0) {
                    this.ctx.moveTo(pos.x, pos.y);
                }
                this.ctx.lineTo(pos.x, pos.y);
            });
            this.ctx.stroke();
        });
    }

    updateCanvas() {
        if (this.croperTarget) {
            //  画布绘制图片
            this.ctx.drawImage(
                this.croperTarget,
                this.imgLeft,
                this.imgTop,
                this.scaleWidth,
                this.scaleHeight,
            );
        }
        isFunction(this.onBeforeDraw) && this.onBeforeDraw(this.ctx, this);

        this.setBoundStyle(); // 设置边界样式
        this.ctx.draw();
        return this;
    }

    pushOrigin(src) {
        const {
            width: boundWidth, // 裁剪框默认宽度，即整个画布宽度
            height: boundHeight, // 裁剪框默认高度，即整个画布高度
            cut = {},
        } = this;

        const {
            x = 0,
            y = 0,
            width = boundWidth,
            height = boundHeight,
        } = cut;

        this.src = src;

        isFunction(this.onBeforeImageLoad) && this.onBeforeImageLoad(this.ctx, this);

        // TODO: 转为Promise
        wx.getImageInfo({
            src,
            success: res => {
                const innerAspectRatio = res.width / res.height;

                this.croperTarget = res.path;

                if (innerAspectRatio < width / height) {
                    // 裁剪框要宽一些
                    this.rectX = x;
                    this.baseWidth = width;
                    this.baseHeight = width / innerAspectRatio;
                    this.rectY = (y - Math.abs((height - this.baseHeight) / 2));
                } else {
                    // 裁剪框要高一些
                    this.rectY = y;
                    this.baseWidth = height * innerAspectRatio;
                    this.baseHeight = height;
                    this.rectX = x - Math.abs((width - this.baseWidth) / 2);
                }

                this.imgLeft = this.rectX;
                this.imgTop = this.rectY;
                this.scaleWidth = this.baseWidth;
                this.scaleHeight = this.baseHeight;

                this.updateCanvas();

                isFunction(this.onImageLoad) && this.onImageLoad(this.ctx, this);
            },
        });

        this.update();
        return this;
    }

    // TODO: 稍后加上这个方法
    // getCropperBase64(done = () => {}) {
    //     const {
    //         id,
    //         width: boundWidth, // 裁剪框默认宽度，即整个画布宽度
    //         height: boundHeight, // 裁剪框默认高度，即整个画布高度
    //         cut = {},
    //     } = this;

    //     const {
    //         x = 0,
    //         y = 0,
    //         width = boundWidth,
    //         height = boundHeight,
    //     } = cut;

    //     CanvasToBase64.convertToBMP({
    //         canvasId: id,
    //         x,
    //         y,
    //         width,
    //         height,
    //     }, done);
    // }

    getCropperImage(...args) {
        const {
            id,
            deviceRatio,
            width: boundWidth, // 裁剪框默认宽度，即整个画布宽度
            height: boundHeight, // 裁剪框默认高度，即整个画布高度
            cut = {},
        } = this;

        let {
            x = 0,
            y = 0,
            width = boundWidth,
            height = boundHeight,
        } = cut;

        const ARG_TYPE = ({}).toString.call(args[0]);
        const fn = args[args.length - 1];

        switch (ARG_TYPE) {
        case '[object Object]': {
            const ref = args[0];
            const { quality = 10 } = ref;

            /**
             * @author mingttong
             */
            width = ref.width || width;
            height = ref.height || height;
            x = ref.x || x;
            y = ref.y || y;

            if (typeof quality !== 'number') {
                console.log(`quality：${quality} is invalid`);
            } else if (quality < 0 || quality > 10) {
                console.log('quality should be ranged in 0 ~ 10');
            }

            wx.canvasToTempFilePath({
                canvasId: id,
                x,
                y,
                width,
                height,
                destWidth: width * quality / (deviceRatio * 10),
                destHeight: height * quality / (deviceRatio * 10),
                success(res) {
                    isFunction(fn) && fn.call(this, res.tempFilePath);
                },
                fail() {
                    isFunction(fn) && fn.call(this, null);
                },
            });
            break;
        }
        case '[object Function]': {
            wx.canvasToTempFilePath({
                canvasId: id,
                x,
                y,
                width,
                height,
                destWidth: width / deviceRatio,
                destHeight: height / deviceRatio,
                success(res) {
                    isFunction(fn) && fn.call(this, res.tempFilePath);
                },
                fail() {
                    isFunction(fn) && fn.call(this, null);
                },
            });
            break;
        }
        default: {
            break;
        }
        }

        return this;
    }
}
