const baseURL = 'https://fuchyou.com';

const ajax = (url, method, data, cfg = {}) => {
    const { header, dataType = 'json', timeout = 60000 } = cfg;

    return new Promise((resolve, reject) => {
        const reqTask = wx.request({
            url: baseURL + url,
            data,
            dataType,
            header,
            success(res) {
                resolve(res);
            },
            fail(res) {
                reject(res);
            },
        });

        // v1.4.0
        if (reqTask.abort) {
            // 超时设置
            setTimeout(() => {
                reqTask.abort();
            }, timeout);
        }
    });
};

export const get = (url, data, cfg = {}) => ajax(url, 'GET', data, cfg);

export const post = (url, data, cfg = {}) => ajax(url, 'POST', data, cfg);

export * from './url';
