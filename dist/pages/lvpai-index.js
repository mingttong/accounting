'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _mixins = require('./mixins/index.js');

var _mixins2 = _interopRequireDefault(_mixins);

var _mock = require('./mock.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import { wechat } from './utils/index';
// import { post } from '../http/index';

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
            navigationBarTitleText: '首页',
            backgroundColor: '#eee'
        }, _this.mixins = [_mixins2.default], _this.data = {
            curTab: 0,
            list: []
        }, _this.methods = {
            selectTab: function selectTab(idx) {
                this.curTab = +idx;
            },
            toDetail: function toDetail(type) {
                var url = '/pages/lvpai-home-page-cus';

                if (type === 1 || type === '1') {
                    url = '/pages/lvpai-home-page';
                }
                wx.navigateTo({
                    url: url
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad() {
            var list = _mock.index.list;

            this.list = list;
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/lvpai-index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImx2cGFpLWluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImJhY2tncm91bmRDb2xvciIsIm1peGlucyIsImRhdGEiLCJjdXJUYWIiLCJsaXN0IiwibWV0aG9kcyIsInNlbGVjdFRhYiIsImlkeCIsInRvRGV0YWlsIiwidHlwZSIsInVybCIsInd4IiwibmF2aWdhdGVUbyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0FBRUE7QUFDQTs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QixJQURuQjtBQUVMQyw2QkFBaUI7QUFGWixTLFFBSVRDLE0sR0FBUyxrQixRQUNUQyxJLEdBQU87QUFDSEMsb0JBQVEsQ0FETDtBQUVIQyxrQkFBTTtBQUZILFMsUUFTUEMsTyxHQUFVO0FBQ05DLHFCQURNLHFCQUNJQyxHQURKLEVBQ1M7QUFDWCxxQkFBS0osTUFBTCxHQUFjLENBQUNJLEdBQWY7QUFDSCxhQUhLO0FBSU5DLG9CQUpNLG9CQUlHQyxJQUpILEVBSVM7QUFDWCxvQkFBSUMsTUFBTSw0QkFBVjs7QUFFQSxvQkFBSUQsU0FBUyxDQUFULElBQWNBLFNBQVMsR0FBM0IsRUFBZ0M7QUFDNUJDLDBCQUFNLHdCQUFOO0FBQ0g7QUFDREMsbUJBQUdDLFVBQUgsQ0FBYztBQUNWRjtBQURVLGlCQUFkO0FBR0g7QUFiSyxTOzs7OztpQ0FMRDtBQUFBLGdCQUNHTixJQURILGVBQ0dBLElBREg7O0FBRUwsaUJBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNIOzs7O0VBYjhCLGVBQUtTLEk7O2tCQUFuQmhCLEsiLCJmaWxlIjoibHZwYWktaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IG1peGluIGZyb20gJy4vbWl4aW5zJztcbmltcG9ydCB7IGluZGV4IH0gZnJvbSAnLi9tb2NrJztcblxuLy8gaW1wb3J0IHsgd2VjaGF0IH0gZnJvbSAnLi91dGlscy9pbmRleCc7XG4vLyBpbXBvcnQgeyBwb3N0IH0gZnJvbSAnLi4vaHR0cC9pbmRleCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfpppbpobUnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZWVlJyxcbiAgICB9O1xuICAgIG1peGlucyA9IFttaXhpbl07XG4gICAgZGF0YSA9IHtcbiAgICAgICAgY3VyVGFiOiAwLFxuICAgICAgICBsaXN0OiBbXSxcbiAgICB9O1xuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgY29uc3QgeyBsaXN0IH0gPSBpbmRleDtcbiAgICAgICAgdGhpcy5saXN0ID0gbGlzdDtcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgICBzZWxlY3RUYWIoaWR4KSB7XG4gICAgICAgICAgICB0aGlzLmN1clRhYiA9ICtpZHg7XG4gICAgICAgIH0sXG4gICAgICAgIHRvRGV0YWlsKHR5cGUpIHtcbiAgICAgICAgICAgIGxldCB1cmwgPSAnL3BhZ2VzL2x2cGFpLWhvbWUtcGFnZS1jdXMnO1xuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gMSB8fCB0eXBlID09PSAnMScpIHtcbiAgICAgICAgICAgICAgICB1cmwgPSAnL3BhZ2VzL2x2cGFpLWhvbWUtcGFnZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuIl19