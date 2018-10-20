/**
 * @description 用于图片裁剪
 * 第一次调用将需要裁剪的图片路径传入
 * 第二次调用的时候将裁剪好的图片路径传入。
 * // where want to clip picture
 * const result = await clipHelper(originPath);
 * // clip.wpy
 * clipHelper(clippedPath);
 */
import wepy from 'wepy';

let callback = null;

export default (v) => {
    if (!v) {
        return;
    }

    // 加入到队列
    if (!callback) {
        wepy.navigateTo({
            url: `/pages/lab/clip?url=${v}`,
        });
        return new Promise(resolve => {
            callback = resolve;
        });
    }

    // 执行队列
    wepy.navigateBack();
    callback(v);
    callback = null;
};

export const promisify = (wxApi) => (cfg) => new Promise((resolve, reject) => {
    wxApi(Object.assign(cfg, {
        success(res) {
            resolve(res);
        },
        fail({ errMsg }) {
            reject(new Error(errMsg));
        },
    }));
});

// 节流
export const getThrottle = (timeout) => {
    let timer = null;

    return (cb) => {
        if (timer) {
            return;
        }

        cb && cb();
        timer = setTimeout(() => {
            timer = null;
        }, timeout);
    };
};

// 保留小数
export const getFixed = (num, m) => Math.round(num * (10 ** m)) / (10 ** m);
