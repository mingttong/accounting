/**
 * @desc 将微信的回调Api转为Promise
 */
module.exports = {
    /**
     * @desc 获取用户当前设置信息（权限）
     * 对返回的权限对象数据结构进行优化，去除掉前置的'scope'
     */
    getSetting() {
        return new Promise((resolve, reject) => {
            wx.getSetting({
                success({ authSetting }) {
                    const result = {};
                    Object.keys(authSetting).forEach(key => {
                        const value = authSetting[key];
                        key = key.replace('scope.', '');
                        result[key] = value;
                    });

                    resolve(result);
                },
                fail: reason => reject(reason),
            })
        });
    },

    getUserInfo() {
        return new Promise((resolve, reject) => {
            wx.getUserInfo({
                timeout: 60000,
                success({ userInfo }) {
                    resolve(userInfo);
                },
                fail(res) {
                    reject(res);
                },
            });
        });
    },
};