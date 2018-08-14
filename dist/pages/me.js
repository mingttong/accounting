'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _mixins = require('./mixins/index.js');

var _mixins2 = _interopRequireDefault(_mixins);

var _index = require('./utils/index.js');

var _index2 = require('./../http/index.js');

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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            backgroundColor: '#eee'
        }, _this.mixins = [_mixins2.default], _this.data = {
            avatar: '',
            nickName: '',
            showUserInfo: false,
            isLoading: true
        }, _this.methods = {
            onGetUserInfo: function () {
                var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
                    var detail = _ref2.detail;
                    var userInfo, errMsg;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    userInfo = detail.userInfo, errMsg = detail.errMsg;

                                    if (userInfo) {
                                        _context.next = 4;
                                        break;
                                    }

                                    console.log(errMsg);
                                    return _context.abrupt('return');

                                case 4:

                                    this.showUserInfo = true;
                                    _context.next = 7;
                                    return this.updateUserInfo(userInfo);

                                case 7:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                function onGetUserInfo(_x) {
                    return _ref3.apply(this, arguments);
                }

                return onGetUserInfo;
            }()
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var _ref5, userInfoAuth, userInfo;

                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                console.log('onLoad');

                                _context2.prev = 1;
                                _context2.next = 4;
                                return _index.wechat.getSetting();

                            case 4:
                                _ref5 = _context2.sent;
                                userInfoAuth = _ref5.userInfo;

                                if (!userInfoAuth) {
                                    _context2.next = 14;
                                    break;
                                }

                                this.showUserInfo = true;
                                _context2.next = 10;
                                return _index.wechat.getUserInfo();

                            case 10:
                                userInfo = _context2.sent;

                                console.log(userInfo);
                                _context2.next = 14;
                                return this.updateUserInfo(userInfo);

                            case 14:

                                this.isLoading = false;
                                this.$apply();
                                _context2.next = 21;
                                break;

                            case 18:
                                _context2.prev = 18;
                                _context2.t0 = _context2['catch'](1);

                                this.handleError(_context2.t0);

                            case 21:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this, [[1, 18]]);
            }));

            function onLoad() {
                return _ref4.apply(this, arguments);
            }

            return onLoad;
        }()

        /**
         * @desc 更新用户数据，前端更新，以及数据库更新
         */

    }, {
        key: 'updateUserInfo',
        value: function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(userInfo) {
                var avatarUrl, nickName, gender, city, province, country, language;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                avatarUrl = userInfo.avatarUrl, nickName = userInfo.nickName, gender = userInfo.gender, city = userInfo.city, province = userInfo.province, country = userInfo.country, language = userInfo.language;


                                this.avatar = avatarUrl;
                                this.nickName = nickName;

                                _context3.prev = 3;
                                _context3.next = 6;
                                return (0, _index2.post)('/user/update', {
                                    avatarUrl: avatarUrl,
                                    nickName: nickName,
                                    gender: gender,
                                    city: city,
                                    province: province,
                                    country: country,
                                    language: language
                                });

                            case 6:
                                _context3.next = 11;
                                break;

                            case 8:
                                _context3.prev = 8;
                                _context3.t0 = _context3['catch'](3);

                                this.handleError(_context3.t0);

                            case 11:

                                this.$apply();

                            case 12:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this, [[3, 8]]);
            }));

            function updateUserInfo(_x2) {
                return _ref6.apply(this, arguments);
            }

            return updateUserInfo;
        }()
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/me'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwiYmFja2dyb3VuZENvbG9yIiwibWl4aW5zIiwiZGF0YSIsImF2YXRhciIsIm5pY2tOYW1lIiwic2hvd1VzZXJJbmZvIiwiaXNMb2FkaW5nIiwibWV0aG9kcyIsIm9uR2V0VXNlckluZm8iLCJkZXRhaWwiLCJ1c2VySW5mbyIsImVyck1zZyIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGVVc2VySW5mbyIsImdldFNldHRpbmciLCJ1c2VySW5mb0F1dGgiLCJnZXRVc2VySW5mbyIsIiRhcHBseSIsImhhbmRsZUVycm9yIiwiYXZhdGFyVXJsIiwiZ2VuZGVyIiwiY2l0eSIsInByb3ZpbmNlIiwiY291bnRyeSIsImxhbmd1YWdlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxNLEdBQVM7QUFDTEMsNkJBQWlCO0FBRFosUyxRQUdUQyxNLEdBQVMsa0IsUUFDVEMsSSxHQUFPO0FBQ0hDLG9CQUFRLEVBREw7QUFFSEMsc0JBQVUsRUFGUDtBQUdIQywwQkFBYyxLQUhYO0FBSUhDLHVCQUFXO0FBSlIsUyxRQTREUEMsTyxHQUFVO0FBQ0FDLHlCQURBO0FBQUE7QUFBQSx3QkFDZ0JDLE1BRGhCLFNBQ2dCQSxNQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTUMsNENBRk4sR0FFMkJELE1BRjNCLENBRU1DLFFBRk4sRUFFZ0JDLE1BRmhCLEdBRTJCRixNQUYzQixDQUVnQkUsTUFGaEI7O0FBQUEsd0NBSUdELFFBSkg7QUFBQTtBQUFBO0FBQUE7O0FBS0VFLDRDQUFRQyxHQUFSLENBQVlGLE1BQVo7QUFMRjs7QUFBQTs7QUFTRix5Q0FBS04sWUFBTCxHQUFvQixJQUFwQjtBQVRFO0FBQUEsMkNBVUksS0FBS1MsY0FBTCxDQUFvQkosUUFBcEIsQ0FWSjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLFM7Ozs7Ozs7Ozs7Ozs7QUFyRE5FLHdDQUFRQyxHQUFSLENBQVksUUFBWjs7Ozt1Q0FHNkMsY0FBT0UsVUFBUCxFOzs7O0FBQXZCQyw0QyxTQUFWTixROztxQ0FFSk0sWTs7Ozs7QUFDQSxxQ0FBS1gsWUFBTCxHQUFvQixJQUFwQjs7dUNBQ3VCLGNBQU9ZLFdBQVAsRTs7O0FBQWpCUCx3Qzs7QUFDTkUsd0NBQVFDLEdBQVIsQ0FBWUgsUUFBWjs7dUNBQ00sS0FBS0ksY0FBTCxDQUFvQkosUUFBcEIsQzs7OztBQUdWLHFDQUFLSixTQUFMLEdBQWlCLEtBQWpCO0FBQ0EscUNBQUtZLE1BQUw7Ozs7Ozs7O0FBRUEscUNBQUtDLFdBQUw7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSVI7Ozs7Ozs7a0dBR3FCVCxROzs7Ozs7QUFFYlUseUMsR0FPQVYsUSxDQVBBVSxTLEVBQ0FoQixRLEdBTUFNLFEsQ0FOQU4sUSxFQUNBaUIsTSxHQUtBWCxRLENBTEFXLE0sRUFDQUMsSSxHQUlBWixRLENBSkFZLEksRUFDQUMsUSxHQUdBYixRLENBSEFhLFEsRUFDQUMsTyxHQUVBZCxRLENBRkFjLE8sRUFDQUMsUSxHQUNBZixRLENBREFlLFE7OztBQUdKLHFDQUFLdEIsTUFBTCxHQUFjaUIsU0FBZDtBQUNBLHFDQUFLaEIsUUFBTCxHQUFnQkEsUUFBaEI7Ozs7dUNBR1Usa0JBQUssY0FBTCxFQUFxQjtBQUN2QmdCLHdEQUR1QjtBQUV2QmhCLHNEQUZ1QjtBQUd2QmlCLGtEQUh1QjtBQUl2QkMsOENBSnVCO0FBS3ZCQyxzREFMdUI7QUFNdkJDLG9EQU51QjtBQU92QkM7QUFQdUIsaUNBQXJCLEM7Ozs7Ozs7Ozs7QUFVTixxQ0FBS04sV0FBTDs7OztBQUdKLHFDQUFLRCxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBOUQyQixlQUFLUSxJOztrQkFBbkI1QixLIiwiZmlsZSI6Im1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCBtaXhpbiBmcm9tICcuL21peGlucyc7XG5pbXBvcnQgeyB3ZWNoYXQgfSBmcm9tICcuL3V0aWxzL2luZGV4JztcbmltcG9ydCB7IHBvc3QgfSBmcm9tICcuLi9odHRwL2luZGV4JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2VlZScsXG4gICAgfTtcbiAgICBtaXhpbnMgPSBbbWl4aW5dO1xuICAgIGRhdGEgPSB7XG4gICAgICAgIGF2YXRhcjogJycsXG4gICAgICAgIG5pY2tOYW1lOiAnJyxcbiAgICAgICAgc2hvd1VzZXJJbmZvOiBmYWxzZSxcbiAgICAgICAgaXNMb2FkaW5nOiB0cnVlLFxuICAgIH07XG4gICAgYXN5bmMgb25Mb2FkKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnb25Mb2FkJyk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHsgdXNlckluZm86IHVzZXJJbmZvQXV0aCB9ID0gYXdhaXQgd2VjaGF0LmdldFNldHRpbmcoKTtcblxuICAgICAgICAgICAgaWYgKHVzZXJJbmZvQXV0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1VzZXJJbmZvID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VySW5mbyA9IGF3YWl0IHdlY2hhdC5nZXRVc2VySW5mbygpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXJJbmZvKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVVzZXJJbmZvKHVzZXJJbmZvKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAZGVzYyDmm7TmlrDnlKjmiLfmlbDmja7vvIzliY3nq6/mm7TmlrDvvIzku6Xlj4rmlbDmja7lupPmm7TmlrBcbiAgICAgKi9cbiAgICBhc3luYyB1cGRhdGVVc2VySW5mbyh1c2VySW5mbykge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBhdmF0YXJVcmwsXG4gICAgICAgICAgICBuaWNrTmFtZSxcbiAgICAgICAgICAgIGdlbmRlcixcbiAgICAgICAgICAgIGNpdHksXG4gICAgICAgICAgICBwcm92aW5jZSxcbiAgICAgICAgICAgIGNvdW50cnksXG4gICAgICAgICAgICBsYW5ndWFnZSxcbiAgICAgICAgfSA9IHVzZXJJbmZvO1xuXG4gICAgICAgIHRoaXMuYXZhdGFyID0gYXZhdGFyVXJsO1xuICAgICAgICB0aGlzLm5pY2tOYW1lID0gbmlja05hbWU7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHBvc3QoJy91c2VyL3VwZGF0ZScsIHtcbiAgICAgICAgICAgICAgICBhdmF0YXJVcmwsXG4gICAgICAgICAgICAgICAgbmlja05hbWUsXG4gICAgICAgICAgICAgICAgZ2VuZGVyLFxuICAgICAgICAgICAgICAgIGNpdHksXG4gICAgICAgICAgICAgICAgcHJvdmluY2UsXG4gICAgICAgICAgICAgICAgY291bnRyeSxcbiAgICAgICAgICAgICAgICBsYW5ndWFnZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgICBhc3luYyBvbkdldFVzZXJJbmZvKHsgZGV0YWlsIH0pIHtcbiAgICAgICAgICAgIGNvbnN0IHsgdXNlckluZm8sIGVyck1zZyB9ID0gZGV0YWlsO1xuXG4gICAgICAgICAgICBpZiAoIXVzZXJJbmZvKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyTXNnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2hvd1VzZXJJbmZvID0gdHJ1ZTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlVXNlckluZm8odXNlckluZm8pO1xuICAgICAgICB9LFxuICAgIH07XG59XG4iXX0=