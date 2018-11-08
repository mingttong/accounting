
/**
 * ************** config/ajax.js ******************
 */
const defaultConfig = {
    host: 'https://yaofa.58.com',
    timeout: 60 * 1000,
    data: {
        test: '',
    },
    header: {
        reqfrom: 'biz_assistant',
    },
};

/**
 * ********** InterceptorManager.js ******************
 */
class InterceptorManager {
    hanlders = [];
    /**
     * 添加拦截器
     * @param {Function} fn
     */
    use(fulfilled, rejected = err => console.log(err)) {
        this.hanlders.push({ fulfilled, rejected });
        return this.hanlders.length - 1;
    }
    forEach(fn) {
        this.hanlders.forEach(h => {
            fn && fn(h);
        });
    }
    forEachReverse(fn) {
        const len = this.hanlders.length;
        for (let i = len - 1; i >= 0; i -= 1) {
            const h = this.hanlders[i];
            fn && fn(h);
        }
    }
}

/**
 * **************** dispatchRequest ****************
 */
/**
     * 传入callback则认为以回调的方式调用，返回requestTask
     * 不传callback则返回Promise对象
     *
     * @param {Object} config 调用的配置
     * method 请求的方法
     * url 路径
     * data 数据，会覆盖默认数据
     * host 域名路径
     * callback 返回的第一个参数为err，第二个参数为data
     * timeout 设置超时
     * header 设置请求的header
     * before 请求前执行的方法，返回false则不执行此次请求
     * after 请求返回时执行的方法，返回false则此次执行报错
     */
const dispatchRequest = (config) => {
    const {
        method,
        url,
        data,

        host,
        callback,
        timeout,
        header,

        before,
        after,
    } = config;

    let requestTask = null;

    const promise = new Promise((resolve, reject) => {
        let timer = null;
        requestTask = wx.request({
            url: host + url,
            data,
            method,
            dataType: 'json',
            header: {
                'content-type': method === 'GET' ?
                    'application/json' :
                    'application/x-www-form-urlencoded;charset=utf-8',
                ...header,
            },
            success(res) {
                const data = res;
                callback && callback(null, data);
                resolve(data);
            },
            fail({ errMsg }) {
                callback && callback(errMsg);
                reject(errMsg);
            },
            complete() {
                timer && clearTimeout(timer);
            },
        });

        timer = setTimeout(() => {
            requestTask && requestTask.abort();
        }, timeout);
    });

    return callback ? requestTask : promise;
};

/**
 * ************* http/core.js ******************
 */
class Request {
    constructor(config) {
        this.defaultConfig = config;
    }
    // 拦截器
    interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager(),
    }
    request(config) {
        config = Object.assign({}, this.defaultConfig, config);
        const chain = [dispatchRequest, undefined];
        let promise = Promise.resolve(config);

        // 倒叙插入，实现先进先出 first-in-first-out
        this.interceptors.request.forEachReverse(interceptor => {
            chain.unshift(interceptor.fulfilled, interceptor.rejected);
        });
        this.interceptors.response.forEach(interceptor => {
            chain.push(interceptor.fulfilled, interceptor.rejected);
        });

        while (chain.length) {
            promise = promise.then(chain.shift(), chain.shift());
        }

        return promise;
    }
}

const resolveParams = (args) => {
    const [url] = args;
    let [, data, callback] = args;

    if (typeof data === 'function') {
        callback = data;
        data = {};
    }

    return [url, data, callback];
};

/**
 * ************** ajax.js ****************
 */

const yaofaAjax = new Request(defaultConfig);

/**
 * 使用拦截器增加行为
 */

// 请求拦截器
const reqInterceptors = [
    // 输出请求信息
    [
        config => {
            const { url, data } = config;
            console.log('请求接口', url);
            console.log('请求参数', data);
            return config;
        },
    ],
    // 加载提示
    [
        config => {
            console.log('展示Loading');
            wx.showNavigationBarLoading && wx.showNavigationBarLoading();
            return config;
        },
    ],
];

// 响应拦截器
const resInterceptors = [
    // 关闭加载提示
    [
        response => {
            wx.hideNavigationBarLoading && wx.hideNavigationBarLoading();
            return response;
        },
    ],
    // 输出返回
    [
        response => {
            console.log('请求返回', response);
            return response;
        },
    ],
    // 根据返回的请求进行操作
    [
        response => {
            const { state, msg } = response.data;

            if (state === 100) {
                return response.data;
            }

            if (state === -10001) {
                console.log('请重新登录');
                throw new Error('重新登录拉');
            }

            throw new Error(msg);
        },
    ],
];

reqInterceptors.forEach(args => {
    yaofaAjax.interceptors.request.use(...args);
});
resInterceptors.forEach(args => {
    console.log(args);
    yaofaAjax.interceptors.response.use(...args);
});

const get = (...args) => {
    const [url, data, callback] = resolveParams(args);
    return yaofaAjax.request({
        method: 'GET',
        url,
        data,
        callback,
    });
};

const post = (...args) => {
    const [url, data, callback] = resolveParams(args);
    return yaofaAjax.request({
        method: 'POST',
        url,
        data,
        callback,
    });
};
const getWithPPU = (...args) => {
    const [url, data, callback] = resolveParams(args);
    const ppu = wx.getStorageSync('ppu');
    return yaofaAjax.request({
        method: 'GET',
        url,
        data,
        callback,
        header: {
            PPU: ppu,
        },
    });
};
const postWithPPU = (...args) => {
    const [url, data, callback] = resolveParams(args);
    const ppu = wx.getStorageSync('ppu');
    return yaofaAjax.request({
        method: 'POST',
        url,
        data,
        callback,
        header: {
            PPU: ppu,
        },
    });
};
const request = (...args) => yaofaAjax.request(...args);

export {
    get,
    post,
    getWithPPU,
    postWithPPU,
    request,
};
