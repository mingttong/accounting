// mixins/index.js
import wepy from 'wepy';
import global from '../../globalService';

export default class mixin extends wepy.mixin {

    handleError(msg) {
        console.log('ERROR: -----------');
        console.log(msg);
    }

    handleUserInfo({ detail, callback }) {
        const { errMsg, userInfo } = detail;

        if (userInfo) {
            this.isLogin = true; // 更新

            global.set('userInfo', userInfo);
            global.set('isLogin', true);

            callback && callback(userInfo);

        } else {
            console.log(errMsg);
        }
    }
}
