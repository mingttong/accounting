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
            navigationBarTitleText: '摄影师主页',
            backgroundColor: '#eee'
        }, _this.mixins = [_mixins2.default], _this.data = {
            videos: []
        }, _this.methods = {
            getCall: function getCall() {
                wx.showModal({
                    content: '获取电话成功！'
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad() {
            var videos = _mock.homePage.videos;

            this.videos = videos;
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/lvpai-home-page'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImx2cGFpLWhvbWUtcGFnZS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtaXhpbnMiLCJkYXRhIiwidmlkZW9zIiwibWV0aG9kcyIsImdldENhbGwiLCJ3eCIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVBO0FBQ0E7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0IsT0FEbkI7QUFFTEMsNkJBQWlCO0FBRlosUyxRQUlUQyxNLEdBQVMsa0IsUUFDVEMsSSxHQUFPO0FBQ0hDLG9CQUFRO0FBREwsUyxRQVFQQyxPLEdBQVU7QUFDTkMsbUJBRE0scUJBQ0k7QUFDTkMsbUJBQUdDLFNBQUgsQ0FBYTtBQUNUQyw2QkFBUztBQURBLGlCQUFiO0FBR0g7QUFMSyxTOzs7OztpQ0FMRDtBQUFBLGdCQUNHTCxNQURILGtCQUNHQSxNQURIOztBQUVMLGlCQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDSDs7OztFQVo4QixlQUFLTSxJOztrQkFBbkJaLEsiLCJmaWxlIjoibHZwYWktaG9tZS1wYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCBtaXhpbiBmcm9tICcuL21peGlucyc7XG5pbXBvcnQgeyBob21lUGFnZSB9IGZyb20gJy4vbW9jayc7XG5cbi8vIGltcG9ydCB7IHdlY2hhdCB9IGZyb20gJy4vdXRpbHMvaW5kZXgnO1xuLy8gaW1wb3J0IHsgcG9zdCB9IGZyb20gJy4uL2h0dHAvaW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5pGE5b2x5biI5Li76aG1JyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2VlZScsXG4gICAgfTtcbiAgICBtaXhpbnMgPSBbbWl4aW5dO1xuICAgIGRhdGEgPSB7XG4gICAgICAgIHZpZGVvczogW10sXG4gICAgfTtcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGNvbnN0IHsgdmlkZW9zIH0gPSBob21lUGFnZTtcbiAgICAgICAgdGhpcy52aWRlb3MgPSB2aWRlb3M7XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgICAgZ2V0Q2FsbCgpIHtcbiAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgY29udGVudDogJ+iOt+WPlueUteivneaIkOWKn++8gScsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuIl19