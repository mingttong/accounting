'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _utils = require('./utils/index.js');

var _globalService = require('./../globalService.js');

var _globalService2 = _interopRequireDefault(_globalService);

var _http = require('./../http/index.js');

var _mixins = require('./mixins/index.js');

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var typeList = ['outgo', 'income'];

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
            id: '',
            tabId: 0,
            time: '',
            date: '',
            category: null, // 类别
            categoryId: null, // 类别id
            money: 0,
            comment: '',
            canSubmit: false // 是否能提交
        }, _this.config = {}, _this.components = {}, _this.mixins = [_mixins2.default], _this.computed = {
            money: function money() {
                var v = this.money;

                if (+v) {
                    return (+v).toFixed(2);
                }

                return v;
            },
            canSubmit: function canSubmit() {
                return !!(this.money && this.category && this.time);
            }
        }, _this.methods = {
            switchTab: function switchTab(id) {
                this.category = '';
                this.tabId = +id;

                _globalService2.default.set('category', '');
            },
            pickHandle: function pickHandle(propName, e) {
                var value = e.detail.value;

                this[propName] = value;
            },
            selectCategory: function selectCategory(tabId) {
                var url = '/pages/category?type=' + typeList[tabId];
                wx.navigateTo({
                    url: url
                });
            },

            // TODO: 对输入框的事件作统一处理，看这个能不能说
            inputHandle: function inputHandle(propName, e) {
                var value = e.detail.value;

                this[propName] = value;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
                var id, type, money, category, cateogryId, dataTime, comment, _dataTime$match, _dataTime$match2, date, time;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                id = options.id;

                                if (id) {
                                    this.id = id;

                                    type = options.type, money = options.money, category = options.category, cateogryId = options.category_id, dataTime = options.time, comment = options.comment;
                                    _dataTime$match = dataTime.match(/([0-9]{4}-[0-9]{2}-[0-9]{2}) ([0-9]{2}:[0-9]{2})/), _dataTime$match2 = _slicedToArray(_dataTime$match, 3), date = _dataTime$match2[1], time = _dataTime$match2[2];

                                    // TODO: 如何优化？只能Object.assign？

                                    this.tabId = type === 'outgo' ? 0 : 1;
                                    this.money = money;
                                    this.category = category;
                                    this.categoryId = cateogryId;
                                    this.date = date;
                                    this.time = time;
                                    this.comment = comment;
                                    this.$apply();
                                } else {
                                    this.date = (0, _utils.getCurrentDate)();
                                    this.time = (0, _utils.getCurrentTime)();
                                    this.$apply();
                                }

                            case 2:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function onLoad(_x) {
                return _ref2.apply(this, arguments);
            }

            return onLoad;
        }()
    }, {
        key: 'onShow',
        value: function onShow() {
            var category = _globalService2.default.get('category');

            if (category) {
                this.category = category.name;
                this.categoryId = category.id;
            }
        }
    }, {
        key: 'save',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
                var data, categoryId, tabId, id;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.prev = 0;
                                data = e.detail.value;
                                categoryId = this.categoryId, tabId = this.tabId, id = this.id;
                                _context2.next = 5;
                                return (0, _http.post)('/bill/save', Object.assign(data, {
                                    id: id,
                                    categoryId: categoryId,
                                    type: typeList[tabId]
                                }));

                            case 5:

                                this.editComplete();
                                _context2.next = 11;
                                break;

                            case 8:
                                _context2.prev = 8;
                                _context2.t0 = _context2['catch'](0);

                                this.handleError(_context2.t0);

                            case 11:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this, [[0, 8]]);
            }));

            function save(_x2) {
                return _ref3.apply(this, arguments);
            }

            return save;
        }()
    }, {
        key: 'editComplete',
        value: function editComplete() {
            _globalService2.default.emit('completeSaveBill');
            wx.navigateBack();
        }
    }, {
        key: 'delete',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var _ref5, confirm, id;

                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.prev = 0;
                                _context3.next = 3;
                                return _utils.wechat.showModal({
                                    title: '注意',
                                    content: '是否删除该条数据？'
                                });

                            case 3:
                                _ref5 = _context3.sent;
                                confirm = _ref5.confirm;

                                if (confirm) {
                                    _context3.next = 7;
                                    break;
                                }

                                return _context3.abrupt('return');

                            case 7:
                                id = this.id;
                                _context3.next = 10;
                                return (0, _http.post)('/bill/delete', {
                                    id: id
                                });

                            case 10:

                                this.editComplete();
                                _context3.next = 16;
                                break;

                            case 13:
                                _context3.prev = 13;
                                _context3.t0 = _context3['catch'](0);

                                this.handleError(_context3.t0);

                            case 16:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this, [[0, 13]]);
            }));

            function _delete() {
                return _ref4.apply(this, arguments);
            }

            return _delete;
        }()

        // TODO: 计算属性可以作为一个点来说

    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/edit'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQuanMiXSwibmFtZXMiOlsidHlwZUxpc3QiLCJJbmRleCIsImRhdGEiLCJpZCIsInRhYklkIiwidGltZSIsImRhdGUiLCJjYXRlZ29yeSIsImNhdGVnb3J5SWQiLCJtb25leSIsImNvbW1lbnQiLCJjYW5TdWJtaXQiLCJjb25maWciLCJjb21wb25lbnRzIiwibWl4aW5zIiwiY29tcHV0ZWQiLCJ2IiwidG9GaXhlZCIsIm1ldGhvZHMiLCJzd2l0Y2hUYWIiLCJzZXQiLCJwaWNrSGFuZGxlIiwicHJvcE5hbWUiLCJlIiwidmFsdWUiLCJkZXRhaWwiLCJzZWxlY3RDYXRlZ29yeSIsInVybCIsInd4IiwibmF2aWdhdGVUbyIsImlucHV0SGFuZGxlIiwib3B0aW9ucyIsInR5cGUiLCJjYXRlb2dyeUlkIiwiY2F0ZWdvcnlfaWQiLCJkYXRhVGltZSIsIm1hdGNoIiwiJGFwcGx5IiwiZ2V0IiwibmFtZSIsIk9iamVjdCIsImFzc2lnbiIsImVkaXRDb21wbGV0ZSIsImhhbmRsZUVycm9yIiwiZW1pdCIsIm5hdmlnYXRlQmFjayIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsImNvbmZpcm0iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFLQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQVcsQ0FBQyxPQUFELEVBQVUsUUFBVixDQUFqQjs7SUFFcUJDLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsSSxHQUFPO0FBQ0hDLGdCQUFJLEVBREQ7QUFFSEMsbUJBQU8sQ0FGSjtBQUdIQyxrQkFBTSxFQUhIO0FBSUhDLGtCQUFNLEVBSkg7QUFLSEMsc0JBQVUsSUFMUCxFQUthO0FBQ2hCQyx3QkFBWSxJQU5ULEVBTWU7QUFDbEJDLG1CQUFPLENBUEo7QUFRSEMscUJBQVMsRUFSTjtBQVNIQyx1QkFBVyxLQVRSLENBU2U7QUFUZixTLFFBV1BDLE0sR0FBUyxFLFFBQ1RDLFUsR0FBYSxFLFFBQ2JDLE0s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SztBQUNBaEIsMEMsR0FBMEIsSSxDQUExQkEsVSxFQUFZSixLLEdBQWMsSSxDQUFkQSxLLEVBQU9ELEUsR0FBTyxJLENBQVBBLEU7O3VDQUVyQixnQkFBSyxZQUFMLEVBQW1CcUMsT0FBT0MsTUFBUCxDQUFjdkMsSUFBZCxFQUFvQjtBQUN6Q0MsMENBRHlDO0FBRXpDSywwREFGeUM7QUFHekN3QiwwQ0FBTWhDLFNBQVNJLEtBQVQ7QUFIbUMsaUNBQXBCLENBQW5CLEM7Ozs7QUFNTixxQ0FBS3NDLFlBQUw7Ozs7Ozs7O0FBRUEscUNBQUtDLFdBQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1Q0FJTztBQUNYLG9DQUFPQyxJQUFQLENBQVksa0JBQVo7QUFDQWhCLGVBQUdpQixZQUFIO0FBQ0g7Ozs7Ozs7Ozs7Ozs7dUNBSWlDLGNBQU9DLFNBQVAsQ0FBaUI7QUFDdkNDLDJDQUFPLElBRGdDO0FBRXZDQyw2Q0FBUztBQUY4QixpQ0FBakIsQzs7OztBQUFsQkMsdUMsU0FBQUEsTzs7b0NBS0hBLE87Ozs7Ozs7O0FBSUc5QyxrQyxHQUFPLEksQ0FBUEEsRTs7dUNBRUYsZ0JBQUssY0FBTCxFQUFxQjtBQUN2QkE7QUFEdUIsaUNBQXJCLEM7Ozs7QUFJTixxQ0FBS3VDLFlBQUw7Ozs7Ozs7O0FBRUEscUNBQUtDLFdBQUw7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSVI7Ozs7O0VBckcrQixlQUFLTyxJOztrQkFBbkJqRCxLIiwiZmlsZSI6ImVkaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IHtcbiAgICBnZXRDdXJyZW50VGltZSxcbiAgICBnZXRDdXJyZW50RGF0ZSxcbiAgICB3ZWNoYXQsXG59IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IGdsb2JhbCBmcm9tICcuLi9nbG9iYWxTZXJ2aWNlJztcbmltcG9ydCB7IHBvc3QgfSBmcm9tICcuLi9odHRwJztcbmltcG9ydCBtaXhpbiBmcm9tICcuL21peGlucyc7XG5cbmNvbnN0IHR5cGVMaXN0ID0gWydvdXRnbycsICdpbmNvbWUnXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGRhdGEgPSB7XG4gICAgICAgIGlkOiAnJyxcbiAgICAgICAgdGFiSWQ6IDAsXG4gICAgICAgIHRpbWU6ICcnLFxuICAgICAgICBkYXRlOiAnJyxcbiAgICAgICAgY2F0ZWdvcnk6IG51bGwsIC8vIOexu+WIq1xuICAgICAgICBjYXRlZ29yeUlkOiBudWxsLCAvLyDnsbvliKtpZFxuICAgICAgICBtb25leTogMCxcbiAgICAgICAgY29tbWVudDogJycsXG4gICAgICAgIGNhblN1Ym1pdDogZmFsc2UsIC8vIOaYr+WQpuiDveaPkOS6pFxuICAgIH07XG4gICAgY29uZmlnID0ge307XG4gICAgY29tcG9uZW50cyA9IHt9O1xuICAgIG1peGlucyA9IFttaXhpbl07XG4gICAgYXN5bmMgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgeyBpZCB9ID0gb3B0aW9ucztcbiAgICAgICAgaWYgKGlkKSB7XG4gICAgICAgICAgICB0aGlzLmlkID0gaWQ7XG5cbiAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgIG1vbmV5LFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5LFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5X2lkOiBjYXRlb2dyeUlkLFxuICAgICAgICAgICAgICAgIHRpbWU6IGRhdGFUaW1lLFxuICAgICAgICAgICAgICAgIGNvbW1lbnQsXG4gICAgICAgICAgICB9ID0gb3B0aW9ucztcblxuICAgICAgICAgICAgY29uc3QgWywgZGF0ZSwgdGltZV0gPSBkYXRhVGltZS5tYXRjaCgvKFswLTldezR9LVswLTldezJ9LVswLTldezJ9KSAoWzAtOV17Mn06WzAtOV17Mn0pLyk7XG5cbiAgICAgICAgICAgIC8vIFRPRE86IOWmguS9leS8mOWMlu+8n+WPquiDvU9iamVjdC5hc3NpZ27vvJ9cbiAgICAgICAgICAgIHRoaXMudGFiSWQgPSB0eXBlID09PSAnb3V0Z28nID8gMCA6IDE7XG4gICAgICAgICAgICB0aGlzLm1vbmV5ID0gbW9uZXk7XG4gICAgICAgICAgICB0aGlzLmNhdGVnb3J5ID0gY2F0ZWdvcnk7XG4gICAgICAgICAgICB0aGlzLmNhdGVnb3J5SWQgPSBjYXRlb2dyeUlkO1xuICAgICAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICAgICAgICAgIHRoaXMudGltZSA9IHRpbWU7XG4gICAgICAgICAgICB0aGlzLmNvbW1lbnQgPSBjb21tZW50O1xuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGF0ZSA9IGdldEN1cnJlbnREYXRlKCk7XG4gICAgICAgICAgICB0aGlzLnRpbWUgPSBnZXRDdXJyZW50VGltZSgpO1xuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU2hvdygpIHtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBnbG9iYWwuZ2V0KCdjYXRlZ29yeScpO1xuXG4gICAgICAgIGlmIChjYXRlZ29yeSkge1xuICAgICAgICAgICAgdGhpcy5jYXRlZ29yeSA9IGNhdGVnb3J5Lm5hbWU7XG4gICAgICAgICAgICB0aGlzLmNhdGVnb3J5SWQgPSBjYXRlZ29yeS5pZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIHNhdmUoZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgeyB2YWx1ZTogZGF0YSB9ID0gZS5kZXRhaWw7XG4gICAgICAgICAgICBjb25zdCB7IGNhdGVnb3J5SWQsIHRhYklkLCBpZCB9ID0gdGhpcztcblxuICAgICAgICAgICAgYXdhaXQgcG9zdCgnL2JpbGwvc2F2ZScsIE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5SWQsXG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZUxpc3RbdGFiSWRdLFxuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICB0aGlzLmVkaXRDb21wbGV0ZSgpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVkaXRDb21wbGV0ZSgpIHtcbiAgICAgICAgZ2xvYmFsLmVtaXQoJ2NvbXBsZXRlU2F2ZUJpbGwnKTtcbiAgICAgICAgd3gubmF2aWdhdGVCYWNrKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZGVsZXRlKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgeyBjb25maXJtIH0gPSBhd2FpdCB3ZWNoYXQuc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+azqOaEjycsXG4gICAgICAgICAgICAgICAgY29udGVudDogJ+aYr+WQpuWIoOmZpOivpeadoeaVsOaNru+8nycsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCFjb25maXJtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB7IGlkIH0gPSB0aGlzO1xuXG4gICAgICAgICAgICBhd2FpdCBwb3N0KCcvYmlsbC9kZWxldGUnLCB7XG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5lZGl0Q29tcGxldGUoKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUT0RPOiDorqHnrpflsZ7mgKflj6/ku6XkvZzkuLrkuIDkuKrngrnmnaXor7RcbiAgICBjb21wdXRlZCA9IHtcbiAgICAgICAgbW9uZXkoKSB7XG4gICAgICAgICAgICBjb25zdCB2ID0gdGhpcy5tb25leTtcblxuICAgICAgICAgICAgaWYgKCt2KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgrdikudG9GaXhlZCgyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY2FuU3VibWl0KCkge1xuICAgICAgICAgICAgcmV0dXJuICEhKHRoaXMubW9uZXkgJiYgdGhpcy5jYXRlZ29yeSAmJiB0aGlzLnRpbWUpO1xuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgICBzd2l0Y2hUYWIoaWQpIHtcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnkgPSAnJztcbiAgICAgICAgICAgIHRoaXMudGFiSWQgPSAraWQ7XG5cbiAgICAgICAgICAgIGdsb2JhbC5zZXQoJ2NhdGVnb3J5JywgJycpO1xuICAgICAgICB9LFxuICAgICAgICBwaWNrSGFuZGxlKHByb3BOYW1lLCBlKSB7XG4gICAgICAgICAgICBjb25zdCB7IHZhbHVlIH0gPSBlLmRldGFpbDtcbiAgICAgICAgICAgIHRoaXNbcHJvcE5hbWVdID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNlbGVjdENhdGVnb3J5KHRhYklkKSB7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBgL3BhZ2VzL2NhdGVnb3J5P3R5cGU9JHt0eXBlTGlzdFt0YWJJZF19YDtcbiAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICAvLyBUT0RPOiDlr7novpPlhaXmoYbnmoTkuovku7bkvZznu5/kuIDlpITnkIbvvIznnIvov5nkuKrog73kuI3og73or7RcbiAgICAgICAgaW5wdXRIYW5kbGUocHJvcE5hbWUsIGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IGUuZGV0YWlsO1xuICAgICAgICAgICAgdGhpc1twcm9wTmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuIl19