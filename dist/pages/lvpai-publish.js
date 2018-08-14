'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _mixins = require('./mixins/index.js');

var _mixins2 = _interopRequireDefault(_mixins);

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
            navigationBarTitleText: '我的发布',
            backgroundColor: '#eee'
        }, _this.mixins = [_mixins2.default], _this.data = {
            avatar: '',
            nickName: '',
            showUserInfo: false,
            isLoading: true
        }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/lvpai-publish'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImx2cGFpLXB1Ymxpc2guanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiYmFja2dyb3VuZENvbG9yIiwibWl4aW5zIiwiZGF0YSIsImF2YXRhciIsIm5pY2tOYW1lIiwic2hvd1VzZXJJbmZvIiwiaXNMb2FkaW5nIiwibWV0aG9kcyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QixNQURuQjtBQUVMQyw2QkFBaUI7QUFGWixTLFFBSVRDLE0sR0FBUyxrQixRQUNUQyxJLEdBQU87QUFDSEMsb0JBQVEsRUFETDtBQUVIQyxzQkFBVSxFQUZQO0FBR0hDLDBCQUFjLEtBSFg7QUFJSEMsdUJBQVc7QUFKUixTLFFBU1BDLE8sR0FBVSxFOzs7OztpQ0FIRCxDQUNSOzs7O0VBYjhCLGVBQUtDLEk7O2tCQUFuQlgsSyIsImZpbGUiOiJsdnBhaS1wdWJsaXNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCBtaXhpbiBmcm9tICcuL21peGlucyc7XG4vLyBpbXBvcnQgeyB3ZWNoYXQgfSBmcm9tICcuL3V0aWxzL2luZGV4Jztcbi8vIGltcG9ydCB7IHBvc3QgfSBmcm9tICcuLi9odHRwL2luZGV4JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahOWPkeW4gycsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNlZWUnLFxuICAgIH07XG4gICAgbWl4aW5zID0gW21peGluXTtcbiAgICBkYXRhID0ge1xuICAgICAgICBhdmF0YXI6ICcnLFxuICAgICAgICBuaWNrTmFtZTogJycsXG4gICAgICAgIHNob3dVc2VySW5mbzogZmFsc2UsXG4gICAgICAgIGlzTG9hZGluZzogdHJ1ZSxcbiAgICB9O1xuICAgIG9uTG9hZCgpIHtcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgIH07XG59XG4iXX0=