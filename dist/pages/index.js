'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _mixins = require('./mixins/index.js');

var _mixins2 = _interopRequireDefault(_mixins);

var _http = require('./../http/index.js');

var _globalService = require('./../globalService.js');

var _globalService2 = _interopRequireDefault(_globalService);

var _utils = require('./utils/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
    _inherits(Index, _wepy$page);

    function Index() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Index);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            totalIncome: '0',
            totalOutgo: '0',
            bills: [],
            isLoading: true,
            weekDict: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
            isEditing: false,
            selectedIdsObj: {} // 以对象的方式保存选中了哪些
        }, _this.config = {
            backgroundColor: '#EEEEEE'
        }, _this.components = {}, _this.mixins = [_mixins2.default], _this.methods = {
            addbill: function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    wx.navigateTo({
                                        url: '/pages/edit'
                                    });

                                case 1:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                function addbill() {
                    return _ref2.apply(this, arguments);
                }

                return addbill;
            }(),
            activeMultiChoose: function activeMultiChoose() {
                this.isEditing = true;
                this.selectedIdsObj = {};
                console.log('active multi choose');
                // this.$apply();
            },
            selectItem: function selectItem(id) {
                if (this.selectedIdsObj[id]) {
                    delete this.selectedIdsObj[id];
                } else {
                    this.selectedIdsObj[id] = true;
                }
            },
            deleteItems: function () {
                var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                    var ids, _ref4, confirm, result;

                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    _context2.prev = 0;
                                    ids = Object.keys(this.selectedIdsObj); // 不放到computed里，只有在真正需要时才转成数组

                                    if (ids.length) {
                                        _context2.next = 6;
                                        break;
                                    }

                                    _context2.next = 5;
                                    return _utils.wechat.showModal({
                                        content: '请选择账单!'
                                    });

                                case 5:
                                    return _context2.abrupt('return', false);

                                case 6:
                                    _context2.next = 8;
                                    return _utils.wechat.showModal({
                                        content: '确认删除选中的账单?（无法撤回）'
                                    });

                                case 8:
                                    _ref4 = _context2.sent;
                                    confirm = _ref4.confirm;

                                    if (confirm) {
                                        _context2.next = 12;
                                        break;
                                    }

                                    return _context2.abrupt('return', false);

                                case 12:
                                    _context2.next = 14;
                                    return (0, _http.post)('/bill/deleteMany', {
                                        ids: ids
                                    });

                                case 14:
                                    result = _context2.sent;


                                    console.log(result);

                                    this.selectedIdsObj = {};
                                    this.isEditing = false;
                                    this.$apply();

                                    this.loadData();
                                    return _context2.abrupt('return', result);

                                case 23:
                                    _context2.prev = 23;
                                    _context2.t0 = _context2['catch'](0);

                                    this.handleError(_context2.t0);
                                    return _context2.abrupt('return', false);

                                case 27:
                                case 'end':
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, this, [[0, 23]]);
                }));

                function deleteItems() {
                    return _ref3.apply(this, arguments);
                }

                return deleteItems;
            }(),
            cancelEdit: function cancelEdit() {
                this.isEditing = false;
                this.$apply();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return this.loadData();

                            case 2:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function onLoad() {
                return _ref5.apply(this, arguments);
            }

            return onLoad;
        }()
    }, {
        key: 'loadData',
        value: function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var _ref7, bills, totalIncome, totalOutgo;

                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.prev = 0;
                                _context4.next = 3;
                                return (0, _http.get)('/bill');

                            case 3:
                                _ref7 = _context4.sent;
                                bills = _ref7.bills;
                                totalIncome = _ref7.totalIncome;
                                totalOutgo = _ref7.totalOutgo;

                                this.bills = bills;
                                this.totalIncome = totalIncome;
                                this.totalOutgo = totalOutgo;
                                this.isLoading = false;
                                this.$apply();
                                _context4.next = 17;
                                break;

                            case 14:
                                _context4.prev = 14;
                                _context4.t0 = _context4['catch'](0);

                                this.handleError(_context4.t0);

                            case 17:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this, [[0, 14]]);
            }));

            function loadData() {
                return _ref6.apply(this, arguments);
            }

            return loadData;
        }()
    }, {
        key: 'onShow',
        value: function () {
            var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                if (!_globalService2.default.get('billUpdated')) {
                                    _context5.next = 4;
                                    break;
                                }

                                _globalService2.default.set('billUpdated', false);
                                _context5.next = 4;
                                return this.loadData();

                            case 4:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function onShow() {
                return _ref8.apply(this, arguments);
            }

            return onShow;
        }()
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiZGF0YSIsInRvdGFsSW5jb21lIiwidG90YWxPdXRnbyIsImJpbGxzIiwiaXNMb2FkaW5nIiwid2Vla0RpY3QiLCJpc0VkaXRpbmciLCJzZWxlY3RlZElkc09iaiIsImNvbmZpZyIsImJhY2tncm91bmRDb2xvciIsImNvbXBvbmVudHMiLCJtaXhpbnMiLCJtZXRob2RzIiwiYWRkYmlsbCIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsImFjdGl2ZU11bHRpQ2hvb3NlIiwiY29uc29sZSIsImxvZyIsInNlbGVjdEl0ZW0iLCJpZCIsImRlbGV0ZUl0ZW1zIiwiaWRzIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJjb25maXJtIiwicmVzdWx0IiwiJGFwcGx5IiwibG9hZERhdGEiLCJoYW5kbGVFcnJvciIsImNhbmNlbEVkaXQiLCJnZXQiLCJzZXQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsSSxHQUFPO0FBQ0hDLHlCQUFhLEdBRFY7QUFFSEMsd0JBQVksR0FGVDtBQUdIQyxtQkFBTyxFQUhKO0FBSUhDLHVCQUFXLElBSlI7QUFLSEMsc0JBQVUsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsRUFBeUIsSUFBekIsRUFBK0IsSUFBL0IsRUFBcUMsSUFBckMsQ0FMUDtBQU1IQyx1QkFBVyxLQU5SO0FBT0hDLDRCQUFnQixFQVBiLENBT2lCO0FBUGpCLFMsUUFTUEMsTSxHQUFTO0FBQ0xDLDZCQUFpQjtBQURaLFMsUUFHVEMsVSxHQUFhLEUsUUFDYkMsTSxHQUFTLGtCLFFBMEJUQyxPLEdBQVU7QUFDQUMsbUJBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUZDLHVDQUFHQyxVQUFILENBQWM7QUFDVkMsNkNBQUs7QUFESyxxQ0FBZDs7QUFGRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQU9OQyw2QkFQTSwrQkFPYztBQUNoQixxQkFBS1gsU0FBTCxHQUFpQixJQUFqQjtBQUNBLHFCQUFLQyxjQUFMLEdBQXNCLEVBQXRCO0FBQ0FXLHdCQUFRQyxHQUFSLENBQVkscUJBQVo7QUFDQTtBQUNILGFBWks7QUFjTkMsc0JBZE0sc0JBY0tDLEVBZEwsRUFjUztBQUNYLG9CQUFJLEtBQUtkLGNBQUwsQ0FBb0JjLEVBQXBCLENBQUosRUFBNkI7QUFDekIsMkJBQU8sS0FBS2QsY0FBTCxDQUFvQmMsRUFBcEIsQ0FBUDtBQUNILGlCQUZELE1BRU87QUFDSCx5QkFBS2QsY0FBTCxDQUFvQmMsRUFBcEIsSUFBMEIsSUFBMUI7QUFDSDtBQUNKLGFBcEJLO0FBc0JBQyx1QkF0QkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF3QlFDLHVDQXhCUixHQXdCY0MsT0FBT0MsSUFBUCxDQUFZLEtBQUtsQixjQUFqQixDQXhCZCxFQXdCZ0Q7O0FBeEJoRCx3Q0EwQk9nQixJQUFJRyxNQTFCWDtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDJDQTJCWSxjQUFPQyxTQUFQLENBQWlCO0FBQ25CQyxpREFBUztBQURVLHFDQUFqQixDQTNCWjs7QUFBQTtBQUFBLHNFQThCYSxLQTlCYjs7QUFBQTtBQUFBO0FBQUEsMkNBaUM0QixjQUFPRCxTQUFQLENBQWlCO0FBQ3ZDQyxpREFBUztBQUQ4QixxQ0FBakIsQ0FqQzVCOztBQUFBO0FBQUE7QUFpQ1VDLDJDQWpDVixTQWlDVUEsT0FqQ1Y7O0FBQUEsd0NBcUNPQSxPQXJDUDtBQUFBO0FBQUE7QUFBQTs7QUFBQSxzRUFzQ2EsS0F0Q2I7O0FBQUE7QUFBQTtBQUFBLDJDQXlDdUIsZ0JBQUssa0JBQUwsRUFBeUI7QUFDMUNOO0FBRDBDLHFDQUF6QixDQXpDdkI7O0FBQUE7QUF5Q1FPLDBDQXpDUjs7O0FBNkNFWiw0Q0FBUUMsR0FBUixDQUFZVyxNQUFaOztBQUVBLHlDQUFLdkIsY0FBTCxHQUFzQixFQUF0QjtBQUNBLHlDQUFLRCxTQUFMLEdBQWlCLEtBQWpCO0FBQ0EseUNBQUt5QixNQUFMOztBQUVBLHlDQUFLQyxRQUFMO0FBbkRGLHNFQW9EU0YsTUFwRFQ7O0FBQUE7QUFBQTtBQUFBOztBQXNERSx5Q0FBS0csV0FBTDtBQXRERixzRUF1RFMsS0F2RFQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUEyRE5DLHNCQTNETSx3QkEyRE87QUFDVCxxQkFBSzVCLFNBQUwsR0FBaUIsS0FBakI7QUFDQSxxQkFBS3lCLE1BQUw7QUFDSDtBQTlESyxTOzs7Ozs7Ozs7Ozs7dUNBeEJBLEtBQUtDLFFBQUwsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1Q0FLK0MsZUFBSSxPQUFKLEM7Ozs7QUFBekM3QixxQyxTQUFBQSxLO0FBQU9GLDJDLFNBQUFBLFc7QUFBYUMsMEMsU0FBQUEsVTs7QUFDNUIscUNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLHFDQUFLRixXQUFMLEdBQW1CQSxXQUFuQjtBQUNBLHFDQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLHFDQUFLRSxTQUFMLEdBQWlCLEtBQWpCO0FBQ0EscUNBQUsyQixNQUFMOzs7Ozs7OztBQUVBLHFDQUFLRSxXQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUNBTUEsd0JBQU9FLEdBQVAsQ0FBVyxhQUFYLEM7Ozs7O0FBQ0Esd0RBQU9DLEdBQVAsQ0FBVyxhQUFYLEVBQTBCLEtBQTFCOzt1Q0FDTSxLQUFLSixRQUFMLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFwQ2lCLGVBQUtLLEk7O2tCQUFuQnRDLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IG1peGluIGZyb20gJy4vbWl4aW5zJztcbmltcG9ydCB7IGdldCwgcG9zdCB9IGZyb20gJy4uL2h0dHAnO1xuaW1wb3J0IGdsb2JhbCBmcm9tICcuLi9nbG9iYWxTZXJ2aWNlJztcbmltcG9ydCB7IHdlY2hhdCB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgZGF0YSA9IHtcbiAgICAgICAgdG90YWxJbmNvbWU6ICcwJyxcbiAgICAgICAgdG90YWxPdXRnbzogJzAnLFxuICAgICAgICBiaWxsczogW10sXG4gICAgICAgIGlzTG9hZGluZzogdHJ1ZSxcbiAgICAgICAgd2Vla0RpY3Q6IFsn5ZGo5pelJywgJ+WRqOS4gCcsICflkajkuownLCAn5ZGo5LiJJywgJ+WRqOWbmycsICflkajkupQnLCAn5ZGo5YWtJ10sXG4gICAgICAgIGlzRWRpdGluZzogZmFsc2UsXG4gICAgICAgIHNlbGVjdGVkSWRzT2JqOiB7fSwgLy8g5Lul5a+56LGh55qE5pa55byP5L+d5a2Y6YCJ5Lit5LqG5ZOq5LqbXG4gICAgfTtcbiAgICBjb25maWcgPSB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNFRUVFRUUnLFxuICAgIH07XG4gICAgY29tcG9uZW50cyA9IHt9O1xuICAgIG1peGlucyA9IFttaXhpbl07XG4gICAgYXN5bmMgb25Mb2FkKCkge1xuICAgICAgICBhd2FpdCB0aGlzLmxvYWREYXRhKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgbG9hZERhdGEoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB7IGJpbGxzLCB0b3RhbEluY29tZSwgdG90YWxPdXRnbyB9ID0gYXdhaXQgZ2V0KCcvYmlsbCcpO1xuICAgICAgICAgICAgdGhpcy5iaWxscyA9IGJpbGxzO1xuICAgICAgICAgICAgdGhpcy50b3RhbEluY29tZSA9IHRvdGFsSW5jb21lO1xuICAgICAgICAgICAgdGhpcy50b3RhbE91dGdvID0gdG90YWxPdXRnbztcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIG9uU2hvdygpIHtcbiAgICAgICAgLy8g5pu05paw5LqG6LSm5Y2V5pWw5o2u77yM6ZyA6KaB6YeN5paw5Yqg6L295pWw5o2uXG4gICAgICAgIGlmIChnbG9iYWwuZ2V0KCdiaWxsVXBkYXRlZCcpKSB7XG4gICAgICAgICAgICBnbG9iYWwuc2V0KCdiaWxsVXBkYXRlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMubG9hZERhdGEoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICAgIGFzeW5jIGFkZGJpbGwoKSB7XG4gICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvZWRpdCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBhY3RpdmVNdWx0aUNob29zZSgpIHtcbiAgICAgICAgICAgIHRoaXMuaXNFZGl0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJZHNPYmogPSB7fTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhY3RpdmUgbXVsdGkgY2hvb3NlJyk7XG4gICAgICAgICAgICAvLyB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNlbGVjdEl0ZW0oaWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSWRzT2JqW2lkXSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNlbGVjdGVkSWRzT2JqW2lkXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZElkc09ialtpZF0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGFzeW5jIGRlbGV0ZUl0ZW1zKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZHMgPSBPYmplY3Qua2V5cyh0aGlzLnNlbGVjdGVkSWRzT2JqKTsgLy8g5LiN5pS+5YiwY29tcHV0ZWTph4zvvIzlj6rmnInlnKjnnJ/mraPpnIDopoHml7bmiY3ovazmiJDmlbDnu4RcblxuICAgICAgICAgICAgICAgIGlmICghaWRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB3ZWNoYXQuc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfor7fpgInmi6notKbljZUhJyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCB7IGNvbmZpcm0gfSA9IGF3YWl0IHdlY2hhdC5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn56Gu6K6k5Yig6Zmk6YCJ5Lit55qE6LSm5Y2VP++8iOaXoOazleaSpOWbnu+8iScsXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWNvbmZpcm0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBvc3QoJy9iaWxsL2RlbGV0ZU1hbnknLCB7XG4gICAgICAgICAgICAgICAgICAgIGlkcyxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSWRzT2JqID0ge307XG4gICAgICAgICAgICAgICAgdGhpcy5pc0VkaXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNhbmNlbEVkaXQoKSB7XG4gICAgICAgICAgICB0aGlzLmlzRWRpdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuIl19