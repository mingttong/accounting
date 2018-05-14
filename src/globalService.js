const data = {
    category: '',
};

const storageNameList = ['isLogin', 'userInfo'];

module.exports = {
    setCategory(v) {
        if (({}).toString.call(v) !== '[object Object]') {
            data.category = { id: -1, name: '' };
            return;
        }

        data.category = v;
    },

    set(name, v) {

        if (~storageNameList.indexOf(name)) {
            wx.setStorageSync(name, v);
            return v;
        }

        data[name] = v;
        return v;
    },

    /**
     * @desc 可以获取一个或多个，获取多个则按顺序取data中的值并以数组的方式返回。
     */
    get(name) {
        if (~storageNameList.indexOf(name)) {
            return wx.getStorageSync(name);
        }

        return data[name];
    },
};