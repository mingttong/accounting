'use strict';

/**
 * @desc 将微信的回调Api转为Promise
 */
module.exports = {
    /**
     * @desc 获取用户当前设置信息（权限）
     * 对返回的权限对象数据结构进行优化，去除掉前置的'scope'
     */
    getSetting: function getSetting() {
        return new Promise(function (resolve, reject) {
            wx.getSetting({
                success: function success(_ref) {
                    var authSetting = _ref.authSetting;

                    var result = {};
                    Object.keys(authSetting).forEach(function (key) {
                        var value = authSetting[key];
                        key = key.replace('scope.', '');
                        result[key] = value;
                    });

                    resolve(result);
                },

                fail: function fail(reason) {
                    return reject(reason);
                }
            });
        });
    },
    getUserInfo: function getUserInfo() {
        return new Promise(function (resolve, reject) {
            wx.getUserInfo({
                timeout: 60000,
                success: function success(_ref2) {
                    var userInfo = _ref2.userInfo;

                    resolve(userInfo);
                },
                fail: function fail(res) {
                    reject(res);
                }
            });
        });
    },
    showModal: function showModal(_ref3) {
        var _ref3$title = _ref3.title,
            title = _ref3$title === undefined ? '注意' : _ref3$title,
            content = _ref3.content;

        return new Promise(function (resolve, reject) {
            wx.showModal({
                title: title,
                content: content,
                success: function success(e) {
                    resolve(e);
                },
                fail: function fail(e) {
                    reject(e);
                }
            });
        });
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlY2hhdEFwaS5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiZ2V0U2V0dGluZyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwid3giLCJzdWNjZXNzIiwiYXV0aFNldHRpbmciLCJyZXN1bHQiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsInZhbHVlIiwia2V5IiwicmVwbGFjZSIsImZhaWwiLCJyZWFzb24iLCJnZXRVc2VySW5mbyIsInRpbWVvdXQiLCJ1c2VySW5mbyIsInJlcyIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsImUiXSwibWFwcGluZ3MiOiI7O0FBQUE7OztBQUdBQSxPQUFPQyxPQUFQLEdBQWlCO0FBQ2I7Ozs7QUFJQUMsY0FMYSx3QkFLQTtBQUNULGVBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQ0MsZUFBR0osVUFBSCxDQUFjO0FBQ1ZLLHVCQURVLHlCQUNlO0FBQUEsd0JBQWZDLFdBQWUsUUFBZkEsV0FBZTs7QUFDckIsd0JBQU1DLFNBQVMsRUFBZjtBQUNBQywyQkFBT0MsSUFBUCxDQUFZSCxXQUFaLEVBQXlCSSxPQUF6QixDQUFpQyxlQUFPO0FBQ3BDLDRCQUFNQyxRQUFRTCxZQUFZTSxHQUFaLENBQWQ7QUFDQUEsOEJBQU1BLElBQUlDLE9BQUosQ0FBWSxRQUFaLEVBQXNCLEVBQXRCLENBQU47QUFDQU4sK0JBQU9LLEdBQVAsSUFBY0QsS0FBZDtBQUNILHFCQUpEOztBQU1BVCw0QkFBUUssTUFBUjtBQUNILGlCQVZTOztBQVdWTyxzQkFBTTtBQUFBLDJCQUFVWCxPQUFPWSxNQUFQLENBQVY7QUFBQTtBQVhJLGFBQWQ7QUFhSCxTQWRNLENBQVA7QUFlSCxLQXJCWTtBQXVCYkMsZUF2QmEseUJBdUJDO0FBQ1YsZUFBTyxJQUFJZixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDQyxlQUFHWSxXQUFILENBQWU7QUFDWEMseUJBQVMsS0FERTtBQUVYWix1QkFGVywwQkFFVztBQUFBLHdCQUFaYSxRQUFZLFNBQVpBLFFBQVk7O0FBQ2xCaEIsNEJBQVFnQixRQUFSO0FBQ0gsaUJBSlU7QUFLWEosb0JBTFcsZ0JBS05LLEdBTE0sRUFLRDtBQUNOaEIsMkJBQU9nQixHQUFQO0FBQ0g7QUFQVSxhQUFmO0FBU0gsU0FWTSxDQUFQO0FBV0gsS0FuQ1k7QUFxQ2JDLGFBckNhLDRCQXFDdUI7QUFBQSxnQ0FBeEJDLEtBQXdCO0FBQUEsWUFBeEJBLEtBQXdCLCtCQUFoQixJQUFnQjtBQUFBLFlBQVZDLE9BQVUsU0FBVkEsT0FBVTs7QUFDaEMsZUFBTyxJQUFJckIsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQ0MsZUFBR2dCLFNBQUgsQ0FBYTtBQUNUQyw0QkFEUztBQUVUQyxnQ0FGUztBQUdUakIsdUJBSFMsbUJBR0RrQixDQUhDLEVBR0U7QUFDUHJCLDRCQUFRcUIsQ0FBUjtBQUNILGlCQUxRO0FBTVRULG9CQU5TLGdCQU1KUyxDQU5JLEVBTUQ7QUFDSnBCLDJCQUFPb0IsQ0FBUDtBQUNIO0FBUlEsYUFBYjtBQVVILFNBWE0sQ0FBUDtBQVlIO0FBbERZLENBQWpCIiwiZmlsZSI6IndlY2hhdEFwaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGRlc2Mg5bCG5b6u5L+h55qE5Zue6LCDQXBp6L2s5Li6UHJvbWlzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAvKipcbiAgICAgKiBAZGVzYyDojrflj5bnlKjmiLflvZPliY3orr7nva7kv6Hmga/vvIjmnYPpmZDvvIlcbiAgICAgKiDlr7nov5Tlm57nmoTmnYPpmZDlr7nosaHmlbDmja7nu5PmnoTov5vooYzkvJjljJbvvIzljrvpmaTmjonliY3nva7nmoQnc2NvcGUnXG4gICAgICovXG4gICAgZ2V0U2V0dGluZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHd4LmdldFNldHRpbmcoe1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3MoeyBhdXRoU2V0dGluZyB9KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhhdXRoU2V0dGluZykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBhdXRoU2V0dGluZ1trZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ga2V5LnJlcGxhY2UoJ3Njb3BlLicsICcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZhaWw6IHJlYXNvbiA9PiByZWplY3QocmVhc29uKSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBnZXRVc2VySW5mbygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHd4LmdldFVzZXJJbmZvKHtcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiA2MDAwMCxcbiAgICAgICAgICAgICAgICBzdWNjZXNzKHsgdXNlckluZm8gfSkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHVzZXJJbmZvKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZhaWwocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXMpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIHNob3dNb2RhbCh7IHRpdGxlID0gJ+azqOaEjycsIGNvbnRlbnR9KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQsXG4gICAgICAgICAgICAgICAgc3VjY2VzcyhlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmYWlsKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSxcbn07Il19