// TODO: 全局变量在此管理，看能不能说
// 分为不存storage（状态）和存在storage（数据），缓存是否做超时设置

const data = {
    category: '', // 当前所选种类
    billUpdated: false,
    outgoList: [],
    incomeList: [],
};

// 存在storage里的全局变量
const storageNameList = ['isLogin', 'userInfo'];

const emitStore = {
    completeSaveBill() {
        globalSerice.set('billUpdated', true);
        globalSerice.set('category', '');
    },
};

const globalSerice =  {
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

        console.log(data);

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

    emit(eventName) {
        const eventFunc = emitStore[eventName];
        return eventFunc && eventFunc();
    },
};

module.exports = globalSerice;