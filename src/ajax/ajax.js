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

const request = (config) => {
    config = Object.assign({}, defaultConfig, config);
    // TODO: 优化
    config.data = Object.assign({}, defaultConfig.data, config.data);
    config.header = Object.assign({}, defaultConfig.header, config.header);

    const {
        url,
        data,

        host,
        callback,
        timeout,
        header,

        before,
        after,
    } = config;
    let { method } = config;
    method = method.toUpperCase();

    let requestTask = null;

    const promise = new Promise((resolve, reject) => {
        if (before && before() === false) {
            !callback && reject(new Error('before-fn abort'));
            callback && callback('before-fn abort');
            return null;
        }

        console.log('请求接口', url);
        console.log('请求参数', data);

        wx.showNavigationBarLoading && wx.showNavigationBarLoading();

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
            success(response) {
                if (after && after() === false) {
                    !callback && reject(new Error('after-fn abort'));
                    callback && callback('after-fn abort');
                    return;
                }

                const { state, msg } = response.data;

                if (state === 100) {
                    !callback && resolve(response.data);
                    callback && callback(null, response.data);
                    return;
                }

                if (state === -10001) {
                    !callback && reject(new Error('请重新登录'));
                    callback && callback('请重新登录');
                    return;
                }

                !callback && resolve(data);
                callback && callback(msg);
            },
            fail({ errMsg }) {
                if (after && after() === false) {
                    !callback && reject(new Error('after-fn abort'));
                    callback && callback('after-fn abort');
                    return;
                }

                !callback && reject(errMsg);
                callback && callback(errMsg);
            },
            complete() {
                timer && clearTimeout(timer);

                wx.hideNavigationBarLoading && wx.hideNavigationBarLoading();
            },
        });

        timer = setTimeout(() => {
            requestTask && requestTask.abort();
        }, timeout);
    });

    return callback ? requestTask : promise;
};

const resolveParams = (args) => {
    const [url] = args;
    let [, data, callback] = args;

    if (typeof data === 'function') {
        callback = data;
        data = {};
    }

    return [url, data, callback];
};

const get = (...args) => {
    const [url, data, callback] = resolveParams(args);
    return request({
        method: 'GET',
        url,
        data,
        callback,
    });
};

const post = (...args) => {
    const [url, data, callback] = resolveParams(args);
    return request({
        method: 'POST',
        url,
        data,
        callback,
    });
};
const getWithPPU = (...args) => {
    const [url, data, callback] = resolveParams(args);
    const ppu = wx.getStorageSync('ppu');
    return request({
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
    return request({
        method: 'POST',
        url,
        data,
        callback,
        header: {
            PPU: ppu,
        },
    });
};

export {
    get,
    post,
    getWithPPU,
    postWithPPU,
    request,
};

