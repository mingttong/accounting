/**
 * @author zhouwunan
 */

/**
 * ********** InterceptorManager.js ******************
 */
class InterceptorManager {
    hanlders = [];
    /**
     * 添加拦截器
     * @param {Function} fn
     */
    use(fn) {
        this.hanlders.push(fn);
        return this.hanlders.length - 1;
    }
    forEach(fn) {
        this.hanlders.forEach(h => {
            fn && fn(h);
        });
    }
}

/**
 * ********** Core.js ******************
 */
const defaultConfig = {
    url: '/',
    data: {},
    timeout: 60 * 1000,
};

class Core {
    constructor(config) {
        const { header, baseURL } = config;
        this.config = Object.assign({}, defaultConfig, {
            header,
        });
        this.baseURL = baseURL;
    }
    // 拦截器
    interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager(),
    }
    get(url, data, cfg) {
        return this.request({
            method: 'GET',
            url,
            data,
            ...this.config,
            ...cfg,
        });
    }
    post(url, data, cfg) {
        return this.request({
            method: 'POST',
            url,
            data,
            ...this.config,
            ...cfg,
        });
    }
    /**
     * 基方法
     * @param {Object} config 请求配置文件
     */
    request(config) {
        const {
            method,
            url,
            data,

            header,
            timeout,
        } = config;
        const self = this;

        self.interceptors.request.forEach(interceptor => {
            config = (interceptor && interceptor(config)) || config;
        });

        return new Promise((resolve, reject) => {
            let timer = null;
            // 记录task引用，用于 abort
            const requestTask = wx.request({
                method,
                url: this.baseURL + url,
                data,
                header: {
                    'content-type': method === 'GET' ?
                        'application/json' :
                        'application/x-www-form-urlencoded;charset=utf-8',
                    ...header,
                },
                dataType: 'json',
                success(res) {
                    let result = res;

                    self.interceptors.response.forEach(interceptor => {
                        result = (interceptor && interceptor(config)) || config;
                    });

                    resolve(result);
                },
                fail(err) {
                    reject(err);
                },
                complete() {
                    timer && clearTimeout(timer);
                },
            });

            timer = setTimeout(() => {
                console.log('timeout...');
                requestTask && requestTask.abort();
            }, timeout);
        });
    }
}

/**
 * ************ ajax.js *********************
 */

const ajax = new Core({
    baseURL: 'https://yaofa.58.com',
    header: {
        reqfrom: 'biz_assistant',
    },
});

ajax.interceptors.request.use(config => {
    console.log('request interceptor', config);
    return config;
});
ajax.interceptors.response.use(response => {
    console.log('response interceptor', response);
    return response;
});

const get = (...props) => ajax.get(...props);
const post = (...props) => ajax.post(...props);

export default ajax;

export {
    get,
    post,
};
