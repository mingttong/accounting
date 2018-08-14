'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _data = require('./utils/data.js');

var _globalService = require('./../globalService.js');

var _globalService2 = _interopRequireDefault(_globalService);

var _mixins = require('./mixins/index.js');

var _mixins2 = _interopRequireDefault(_mixins);

var _http = require('./../http/index.js');

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
            incomeList: [],
            outgoList: [],
            curTypeIndex: 0, // 当前选中type的id
            type: '',
            typeObj: {},
            typeList: [],
            subtype: []
        }, _this.config = {}, _this.components = {}, _this.mixins = [_mixins2.default], _this.watch = {
            typeObj: function typeObj(v) {
                this.subtype = v.subtype || [];
            }
        }, _this.methods = {
            /**
             * 选择大类
             */
            selectType: function selectType(e) {
                var index = e.target.dataset.index;

                this.curTypeIndex = index;
                this.typeObj = this.typeList[index];
            },

            /**
             * 选择子类
             */
            selectItem: function selectItem(id) {
                var toFilterList = []; // 要被筛选的列表
                toFilterList = this.subtype; // 因为节点事件方法还不能传对象，所以目前只能先拿到id后再从列表中查找

                var item = toFilterList.find(function (v) {
                    return +v.id === +id;
                }) || {};

                if (!item) {
                    console.log('ERROR: 选择类型出错');
                }

                _globalService2.default.set('category', item);
                wx.navigateBack();
            },
            star: function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id, _star) {
                    var postData;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.prev = 0;
                                    postData = { categoryId: id, type: this.type };

                                    if (!_star) {
                                        _context.next = 7;
                                        break;
                                    }

                                    _context.next = 5;
                                    return (0, _http.post)('/collection/delete', postData);

                                case 5:
                                    _context.next = 9;
                                    break;

                                case 7:
                                    _context.next = 9;
                                    return (0, _http.post)('/collection/add', postData);

                                case 9:

                                    this.loadData(this.type);
                                    _context.next = 15;
                                    break;

                                case 12:
                                    _context.prev = 12;
                                    _context.t0 = _context['catch'](0);

                                    this.handleError(_context.t0);

                                case 15:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, this, [[0, 12]]);
                }));

                function star(_x, _x2) {
                    return _ref2.apply(this, arguments);
                }

                return star;
            }()
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(options) {
                var _options$type, type;

                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _options$type = options.type, type = _options$type === undefined ? 'outgo' : _options$type;
                                _context2.prev = 1;
                                _context2.next = 4;
                                return this.loadData(type);

                            case 4:
                                _context2.next = 9;
                                break;

                            case 6:
                                _context2.prev = 6;
                                _context2.t0 = _context2['catch'](1);

                                this.handleError(_context2.t0);

                            case 9:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this, [[1, 6]]);
            }));

            function onLoad(_x3) {
                return _ref3.apply(this, arguments);
            }

            return onLoad;
        }()
    }, {
        key: 'loadData',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(type) {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return (0, _data.getCategoryList)(type);

                            case 2:
                                this.typeList = _context3.sent;

                                this.type = type;
                                this.typeObj = this.typeList[this.curTypeIndex];
                                this.$apply();

                            case 6:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function loadData(_x4) {
                return _ref4.apply(this, arguments);
            }

            return loadData;
        }()

        // TODO: watch可以作为一个点来说

    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/category'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiZGF0YSIsImluY29tZUxpc3QiLCJvdXRnb0xpc3QiLCJjdXJUeXBlSW5kZXgiLCJ0eXBlIiwidHlwZU9iaiIsInR5cGVMaXN0Iiwic3VidHlwZSIsImNvbmZpZyIsImNvbXBvbmVudHMiLCJtaXhpbnMiLCJ3YXRjaCIsInYiLCJtZXRob2RzIiwic2VsZWN0VHlwZSIsImUiLCJpbmRleCIsInRhcmdldCIsImRhdGFzZXQiLCJzZWxlY3RJdGVtIiwiaWQiLCJ0b0ZpbHRlckxpc3QiLCJpdGVtIiwiZmluZCIsImNvbnNvbGUiLCJsb2ciLCJzZXQiLCJ3eCIsIm5hdmlnYXRlQmFjayIsInN0YXIiLCJwb3N0RGF0YSIsImNhdGVnb3J5SWQiLCJsb2FkRGF0YSIsImhhbmRsZUVycm9yIiwib3B0aW9ucyIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxJLEdBQU87QUFDSEMsd0JBQVksRUFEVDtBQUVIQyx1QkFBVyxFQUZSO0FBR0hDLDBCQUFjLENBSFgsRUFHYztBQUNqQkMsa0JBQU0sRUFKSDtBQUtIQyxxQkFBUyxFQUxOO0FBTUhDLHNCQUFVLEVBTlA7QUFPSEMscUJBQVM7QUFQTixTLFFBU1BDLE0sR0FBUyxFLFFBQ1RDLFUsR0FBYSxFLFFBQ2JDLE0sR0FBUyxrQixRQW1CVEMsSyxHQUFRO0FBQ0pOLG1CQURJLG1CQUNJTyxDQURKLEVBQ087QUFDUCxxQkFBS0wsT0FBTCxHQUFlSyxFQUFFTCxPQUFGLElBQWEsRUFBNUI7QUFDSDtBQUhHLFMsUUFNUk0sTyxHQUFVO0FBQ047OztBQUdBQyxzQkFKTSxzQkFJS0MsQ0FKTCxFQUlRO0FBQUEsb0JBQ0ZDLEtBREUsR0FDUUQsRUFBRUUsTUFBRixDQUFTQyxPQURqQixDQUNGRixLQURFOztBQUVWLHFCQUFLYixZQUFMLEdBQW9CYSxLQUFwQjtBQUNBLHFCQUFLWCxPQUFMLEdBQWUsS0FBS0MsUUFBTCxDQUFjVSxLQUFkLENBQWY7QUFDSCxhQVJLOztBQVNOOzs7QUFHQUcsc0JBWk0sc0JBWUtDLEVBWkwsRUFZUztBQUNYLG9CQUFJQyxlQUFlLEVBQW5CLENBRFcsQ0FDWTtBQUN2QkEsK0JBQWUsS0FBS2QsT0FBcEIsQ0FGVyxDQUVrQjs7QUFFN0Isb0JBQU1lLE9BQU9ELGFBQWFFLElBQWIsQ0FBa0IsVUFBQ1gsQ0FBRDtBQUFBLDJCQUFPLENBQUNBLEVBQUVRLEVBQUgsS0FBVSxDQUFDQSxFQUFsQjtBQUFBLGlCQUFsQixLQUEyQyxFQUF4RDs7QUFFQSxvQkFBSSxDQUFDRSxJQUFMLEVBQVc7QUFDUEUsNEJBQVFDLEdBQVIsQ0FBWSxlQUFaO0FBQ0g7O0FBRUQsd0NBQU9DLEdBQVAsQ0FBVyxVQUFYLEVBQXVCSixJQUF2QjtBQUNBSyxtQkFBR0MsWUFBSDtBQUNILGFBeEJLO0FBMEJBQyxnQkExQkE7QUFBQSxxR0EwQktULEVBMUJMLEVBMEJTUyxLQTFCVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTRCUUMsNENBNUJSLEdBNEJtQixFQUFFQyxZQUFZWCxFQUFkLEVBQWtCaEIsTUFBTSxLQUFLQSxJQUE3QixFQTVCbkI7O0FBQUEseUNBOEJNeUIsS0E5Qk47QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSwyQ0ErQlksZ0JBQUssb0JBQUwsRUFBMkJDLFFBQTNCLENBL0JaOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsMkNBaUNZLGdCQUFLLGlCQUFMLEVBQXdCQSxRQUF4QixDQWpDWjs7QUFBQTs7QUFvQ0UseUNBQUtFLFFBQUwsQ0FBYyxLQUFLNUIsSUFBbkI7QUFwQ0Y7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBc0NFLHlDQUFLNkIsV0FBTDs7QUF0Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxTOzs7Ozs7a0dBeEJHQyxPOzs7Ozs7O2dEQUNrQkEsTyxDQUFuQjlCLEksRUFBQUEsSSxpQ0FBTyxPOzs7dUNBR0wsS0FBSzRCLFFBQUwsQ0FBYzVCLElBQWQsQzs7Ozs7Ozs7OztBQUVOLHFDQUFLNkIsV0FBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0FJTzdCLEk7Ozs7Ozt1Q0FDVywyQkFBZ0JBLElBQWhCLEM7OztBQUF0QixxQ0FBS0UsUTs7QUFDTCxxQ0FBS0YsSUFBTCxHQUFZQSxJQUFaO0FBQ0EscUNBQUtDLE9BQUwsR0FBZSxLQUFLQyxRQUFMLENBQWMsS0FBS0gsWUFBbkIsQ0FBZjtBQUNBLHFDQUFLZ0MsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHSjs7Ozs7RUE5QitCLGVBQUtDLEk7O2tCQUFuQnJDLEsiLCJmaWxlIjoiY2F0ZWdvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IHsgZ2V0Q2F0ZWdvcnlMaXN0IH0gZnJvbSAnLi91dGlscy9kYXRhJztcbmltcG9ydCBnbG9iYWwgZnJvbSAnLi4vZ2xvYmFsU2VydmljZSc7XG5pbXBvcnQgbWl4aW4gZnJvbSAnLi9taXhpbnMnO1xuaW1wb3J0IHsgcG9zdCB9IGZyb20gJy4uL2h0dHAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgZGF0YSA9IHtcbiAgICAgICAgaW5jb21lTGlzdDogW10sXG4gICAgICAgIG91dGdvTGlzdDogW10sXG4gICAgICAgIGN1clR5cGVJbmRleDogMCwgLy8g5b2T5YmN6YCJ5LitdHlwZeeahGlkXG4gICAgICAgIHR5cGU6ICcnLFxuICAgICAgICB0eXBlT2JqOiB7fSxcbiAgICAgICAgdHlwZUxpc3Q6IFtdLFxuICAgICAgICBzdWJ0eXBlOiBbXSxcbiAgICB9O1xuICAgIGNvbmZpZyA9IHt9O1xuICAgIGNvbXBvbmVudHMgPSB7fTtcbiAgICBtaXhpbnMgPSBbbWl4aW5dO1xuICAgIGFzeW5jIG9uTG9hZChvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSA9ICdvdXRnbycgfSA9IG9wdGlvbnM7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMubG9hZERhdGEodHlwZSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBsb2FkRGF0YSh0eXBlKSB7XG4gICAgICAgIHRoaXMudHlwZUxpc3QgPSBhd2FpdCBnZXRDYXRlZ29yeUxpc3QodHlwZSk7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMudHlwZU9iaiA9IHRoaXMudHlwZUxpc3RbdGhpcy5jdXJUeXBlSW5kZXhdO1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH1cblxuICAgIC8vIFRPRE86IHdhdGNo5Y+v5Lul5L2c5Li65LiA5Liq54K55p2l6K+0XG4gICAgd2F0Y2ggPSB7XG4gICAgICAgIHR5cGVPYmoodikge1xuICAgICAgICAgICAgdGhpcy5zdWJ0eXBlID0gdi5zdWJ0eXBlIHx8IFtdO1xuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICog6YCJ5oup5aSn57G7XG4gICAgICAgICAqL1xuICAgICAgICBzZWxlY3RUeXBlKGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgaW5kZXggfSA9IGUudGFyZ2V0LmRhdGFzZXQ7XG4gICAgICAgICAgICB0aGlzLmN1clR5cGVJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgdGhpcy50eXBlT2JqID0gdGhpcy50eXBlTGlzdFtpbmRleF07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDpgInmi6nlrZDnsbtcbiAgICAgICAgICovXG4gICAgICAgIHNlbGVjdEl0ZW0oaWQpIHtcbiAgICAgICAgICAgIGxldCB0b0ZpbHRlckxpc3QgPSBbXTsgLy8g6KaB6KKr562b6YCJ55qE5YiX6KGoXG4gICAgICAgICAgICB0b0ZpbHRlckxpc3QgPSB0aGlzLnN1YnR5cGU7IC8vIOWboOS4uuiKgueCueS6i+S7tuaWueazlei/mOS4jeiDveS8oOWvueixoe+8jOaJgOS7peebruWJjeWPquiDveWFiOaLv+WIsGlk5ZCO5YaN5LuO5YiX6KGo5Lit5p+l5om+XG5cbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB0b0ZpbHRlckxpc3QuZmluZCgodikgPT4gK3YuaWQgPT09ICtpZCkgfHwge307XG5cbiAgICAgICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUjog6YCJ5oup57G75Z6L5Ye66ZSZJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGdsb2JhbC5zZXQoJ2NhdGVnb3J5JywgaXRlbSk7XG4gICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soKTtcbiAgICAgICAgfSxcblxuICAgICAgICBhc3luYyBzdGFyKGlkLCBzdGFyKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3REYXRhID0geyBjYXRlZ29yeUlkOiBpZCwgdHlwZTogdGhpcy50eXBlIH07XG5cbiAgICAgICAgICAgICAgICBpZiAoc3Rhcikge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBwb3N0KCcvY29sbGVjdGlvbi9kZWxldGUnLCBwb3N0RGF0YSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgcG9zdCgnL2NvbGxlY3Rpb24vYWRkJywgcG9zdERhdGEpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMubG9hZERhdGEodGhpcy50eXBlKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9O1xufVxuIl19