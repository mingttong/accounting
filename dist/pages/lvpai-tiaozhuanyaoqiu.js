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
            images: []
        }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad() {
            wx.navigateTo({
                url: '/pages/lvpai-my-require'
            });
            var images = _mock.comment.images;

            this.images = images;
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/lvpai-tiaozhuanyaoqiu'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImx2cGFpLXRpYW96aHVhbnlhb3FpdS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtaXhpbnMiLCJkYXRhIiwiaW1hZ2VzIiwibWV0aG9kcyIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0FBRUE7QUFDQTs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QixJQURuQjtBQUVMQyw2QkFBaUI7QUFGWixTLFFBSVRDLE0sR0FBUyxrQixRQUNUQyxJLEdBQU87QUFDSEMsb0JBQVE7QUFETCxTLFFBV1BDLE8sR0FBVSxFOzs7OztpQ0FSRDtBQUNMQyxlQUFHQyxVQUFILENBQWM7QUFDVkMscUJBQUs7QUFESyxhQUFkO0FBREssZ0JBSUdKLE1BSkgsaUJBSUdBLE1BSkg7O0FBS0wsaUJBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNIOzs7O0VBZjhCLGVBQUtLLEk7O2tCQUFuQlgsSyIsImZpbGUiOiJsdnBhaS10aWFvemh1YW55YW9xaXUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IG1peGluIGZyb20gJy4vbWl4aW5zJztcbmltcG9ydCB7IGNvbW1lbnQgfSBmcm9tICcuL21vY2snO1xuXG4vLyBpbXBvcnQgeyB3ZWNoYXQgfSBmcm9tICcuL3V0aWxzL2luZGV4Jztcbi8vIGltcG9ydCB7IHBvc3QgfSBmcm9tICcuLi9odHRwL2luZGV4JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mmlumhtScsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNlZWUnLFxuICAgIH07XG4gICAgbWl4aW5zID0gW21peGluXTtcbiAgICBkYXRhID0ge1xuICAgICAgICBpbWFnZXM6IFtdLFxuICAgIH07XG4gICAgb25Mb2FkKCkge1xuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgIHVybDogJy9wYWdlcy9sdnBhaS1teS1yZXF1aXJlJyxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHsgaW1hZ2VzIH0gPSBjb21tZW50O1xuICAgICAgICB0aGlzLmltYWdlcyA9IGltYWdlcztcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgIH07XG59XG4iXX0=