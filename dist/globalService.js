'use strict';

// TODO: 全局变量在此管理，看能不能说
// 分为不存storage（状态）和存在storage（数据），缓存是否做超时设置

var data = {
    category: '', // 当前所选种类
    billUpdated: false,
    outgoList: [],
    incomeList: []
};

// 存在storage里的全局变量
var storageNameList = ['isLogin', 'userInfo'];

var emitStore = {
    completeSaveBill: function completeSaveBill() {
        globalSerice.set('billUpdated', true);
        globalSerice.set('category', '');
    }
};

var globalSerice = {
    set: function set(name, v) {

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
    get: function get(name) {
        if (~storageNameList.indexOf(name)) {
            return wx.getStorageSync(name);
        }

        return data[name];
    },
    emit: function emit(eventName) {
        var eventFunc = emitStore[eventName];
        return eventFunc && eventFunc();
    }
};

module.exports = globalSerice;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsb2JhbFNlcnZpY2UuanMiXSwibmFtZXMiOlsiZGF0YSIsImNhdGVnb3J5IiwiYmlsbFVwZGF0ZWQiLCJvdXRnb0xpc3QiLCJpbmNvbWVMaXN0Iiwic3RvcmFnZU5hbWVMaXN0IiwiZW1pdFN0b3JlIiwiY29tcGxldGVTYXZlQmlsbCIsImdsb2JhbFNlcmljZSIsInNldCIsIm5hbWUiLCJ2IiwiaW5kZXhPZiIsInd4Iiwic2V0U3RvcmFnZVN5bmMiLCJjb25zb2xlIiwibG9nIiwiZ2V0IiwiZ2V0U3RvcmFnZVN5bmMiLCJlbWl0IiwiZXZlbnROYW1lIiwiZXZlbnRGdW5jIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBLElBQU1BLE9BQU87QUFDVEMsY0FBVSxFQURELEVBQ0s7QUFDZEMsaUJBQWEsS0FGSjtBQUdUQyxlQUFXLEVBSEY7QUFJVEMsZ0JBQVk7QUFKSCxDQUFiOztBQU9BO0FBQ0EsSUFBTUMsa0JBQWtCLENBQUMsU0FBRCxFQUFZLFVBQVosQ0FBeEI7O0FBRUEsSUFBTUMsWUFBWTtBQUNkQyxvQkFEYyw4QkFDSztBQUNmQyxxQkFBYUMsR0FBYixDQUFpQixhQUFqQixFQUFnQyxJQUFoQztBQUNBRCxxQkFBYUMsR0FBYixDQUFpQixVQUFqQixFQUE2QixFQUE3QjtBQUNIO0FBSmEsQ0FBbEI7O0FBT0EsSUFBTUQsZUFBZ0I7QUFDbEJDLE9BRGtCLGVBQ2RDLElBRGMsRUFDUkMsQ0FEUSxFQUNMOztBQUVULFlBQUksQ0FBQ04sZ0JBQWdCTyxPQUFoQixDQUF3QkYsSUFBeEIsQ0FBTCxFQUFvQztBQUNoQ0csZUFBR0MsY0FBSCxDQUFrQkosSUFBbEIsRUFBd0JDLENBQXhCO0FBQ0EsbUJBQU9BLENBQVA7QUFDSDs7QUFFRFgsYUFBS1UsSUFBTCxJQUFhQyxDQUFiOztBQUVBSSxnQkFBUUMsR0FBUixDQUFZaEIsSUFBWjs7QUFFQSxlQUFPVyxDQUFQO0FBQ0gsS0FiaUI7OztBQWVsQjs7O0FBR0FNLE9BbEJrQixlQWtCZFAsSUFsQmMsRUFrQlI7QUFDTixZQUFJLENBQUNMLGdCQUFnQk8sT0FBaEIsQ0FBd0JGLElBQXhCLENBQUwsRUFBb0M7QUFDaEMsbUJBQU9HLEdBQUdLLGNBQUgsQ0FBa0JSLElBQWxCLENBQVA7QUFDSDs7QUFFRCxlQUFPVixLQUFLVSxJQUFMLENBQVA7QUFDSCxLQXhCaUI7QUEwQmxCUyxRQTFCa0IsZ0JBMEJiQyxTQTFCYSxFQTBCRjtBQUNaLFlBQU1DLFlBQVlmLFVBQVVjLFNBQVYsQ0FBbEI7QUFDQSxlQUFPQyxhQUFhQSxXQUFwQjtBQUNIO0FBN0JpQixDQUF0Qjs7QUFnQ0FDLE9BQU9DLE9BQVAsR0FBaUJmLFlBQWpCIiwiZmlsZSI6Imdsb2JhbFNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUT0RPOiDlhajlsYDlj5jph4/lnKjmraTnrqHnkIbvvIznnIvog73kuI3og73or7Rcbi8vIOWIhuS4uuS4jeWtmHN0b3JhZ2XvvIjnirbmgIHvvInlkozlrZjlnKhzdG9yYWdl77yI5pWw5o2u77yJ77yM57yT5a2Y5piv5ZCm5YGa6LaF5pe26K6+572uXG5cbmNvbnN0IGRhdGEgPSB7XG4gICAgY2F0ZWdvcnk6ICcnLCAvLyDlvZPliY3miYDpgInnp43nsbtcbiAgICBiaWxsVXBkYXRlZDogZmFsc2UsXG4gICAgb3V0Z29MaXN0OiBbXSxcbiAgICBpbmNvbWVMaXN0OiBbXSxcbn07XG5cbi8vIOWtmOWcqHN0b3JhZ2Xph4znmoTlhajlsYDlj5jph49cbmNvbnN0IHN0b3JhZ2VOYW1lTGlzdCA9IFsnaXNMb2dpbicsICd1c2VySW5mbyddO1xuXG5jb25zdCBlbWl0U3RvcmUgPSB7XG4gICAgY29tcGxldGVTYXZlQmlsbCgpIHtcbiAgICAgICAgZ2xvYmFsU2VyaWNlLnNldCgnYmlsbFVwZGF0ZWQnLCB0cnVlKTtcbiAgICAgICAgZ2xvYmFsU2VyaWNlLnNldCgnY2F0ZWdvcnknLCAnJyk7XG4gICAgfSxcbn07XG5cbmNvbnN0IGdsb2JhbFNlcmljZSA9ICB7XG4gICAgc2V0KG5hbWUsIHYpIHtcblxuICAgICAgICBpZiAofnN0b3JhZ2VOYW1lTGlzdC5pbmRleE9mKG5hbWUpKSB7XG4gICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYyhuYW1lLCB2KTtcbiAgICAgICAgICAgIHJldHVybiB2O1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVtuYW1lXSA9IHY7XG5cbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBkZXNjIOWPr+S7peiOt+WPluS4gOS4quaIluWkmuS4qu+8jOiOt+WPluWkmuS4quWImeaMiemhuuW6j+WPlmRhdGHkuK3nmoTlgLzlubbku6XmlbDnu4TnmoTmlrnlvI/ov5Tlm57jgIJcbiAgICAgKi9cbiAgICBnZXQobmFtZSkge1xuICAgICAgICBpZiAofnN0b3JhZ2VOYW1lTGlzdC5pbmRleE9mKG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gd3guZ2V0U3RvcmFnZVN5bmMobmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF0YVtuYW1lXTtcbiAgICB9LFxuXG4gICAgZW1pdChldmVudE5hbWUpIHtcbiAgICAgICAgY29uc3QgZXZlbnRGdW5jID0gZW1pdFN0b3JlW2V2ZW50TmFtZV07XG4gICAgICAgIHJldHVybiBldmVudEZ1bmMgJiYgZXZlbnRGdW5jKCk7XG4gICAgfSxcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZ2xvYmFsU2VyaWNlOyJdfQ==