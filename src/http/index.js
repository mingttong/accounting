const baseURL = 'https://xxx';

const ajax = (url, method, data = {}, cfg = {}) => {
    const { header, dataType = 'json', timeout = 60000 } = cfg;

    return new Promise((resolve, reject) => {
        const reqTask = wx.request({
            url: baseURL + url,
            data,
            dataType,
            header,
            method,
            success({ statusCode, data: { data, errmsg, errno } }) {
                if (statusCode === 200 && errno === 0) {
                    resolve(data);
                } else {
                    reject(new Error(errmsg));
                }
            },
            fail(err) {
                reject(new Error(err));
            },
            complete() {
                // 500ms后才关闭，提升体验
                setTimeout(() => {
                    wx.hideLoading();
                }, 500);
            },
        });

        wx.showLoading({
            title: '加载中',
        });

        // v1.4.0
        if (reqTask.abort) {
            // 超时设置
            setTimeout(() => {
                reqTask.abort();
                wx.hideLoading();
            }, timeout);
        }
    });
};

const getCode = () => new Promise((resolve, reject) => {
    wx.login({
        success({ errCode, code }) {
            if (code) {
                resolve(code);
            } else {
                reject(errCode);
            }
        },
        fail(e) {
            reject(e);
        },
    });
});

const getSessionId = async () => {
    if (global.get('sessionId')) {
        return global.get('sessionId');
    }

    try {
        const code = await getCode();
        const { sessionId } = await ajax('/login', 'GET', { code });

        global.set('sessionId', sessionId);
        return sessionId;
    } catch (e) {
        throw e;
    }
};

/**
 * @desc http不同于ajax的地方在于每次请求都会带上参数sessionId
 * @param {String} url
 * @param {String} method
 * @param {Object} data
 * @param {Object} cfg
 */
const http = async (url, method = 'GET', data = {}, cfg = {}) => {
    try {
        const sessionId = await getSessionId();
        return await ajax(url, method, Object.assign(data, { sessionId }), cfg);
    } catch (e) {
        throw e;
    }
};

export const get = (url, data, cfg = {}) => http(url, 'GET', data, cfg);

export const post = (url, data, cfg = {}) => http(url, 'POST', data, cfg);

export * from './url';
