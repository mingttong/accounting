// mixins/index.js
import wepy from 'wepy';

export default class mixin extends wepy.mixin {
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
    }

    handleError(msg) {
        console.log(msg);
    }
}
