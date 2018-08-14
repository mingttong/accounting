'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _globalService = require('./../../globalService.js');

var _globalService2 = _interopRequireDefault(_globalService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // mixins/index.js


var mixin = function (_wepy$mixin) {
    _inherits(mixin, _wepy$mixin);

    function mixin() {
        _classCallCheck(this, mixin);

        return _possibleConstructorReturn(this, (mixin.__proto__ || Object.getPrototypeOf(mixin)).apply(this, arguments));
    }

    _createClass(mixin, [{
        key: 'handleError',
        value: function handleError(msg) {
            console.log('ERROR: -----------');
            console.log(msg);
        }
    }, {
        key: 'handleUserInfo',
        value: function handleUserInfo(_ref) {
            var detail = _ref.detail,
                callback = _ref.callback;
            var errMsg = detail.errMsg,
                userInfo = detail.userInfo;


            if (userInfo) {
                this.isLogin = true; // 更新

                _globalService2.default.set('userInfo', userInfo);
                _globalService2.default.set('isLogin', true);

                callback && callback(userInfo);
            } else {
                console.log(errMsg);
            }
        }
    }]);

    return mixin;
}(_wepy2.default.mixin);

exports.default = mixin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1peGluIiwibXNnIiwiY29uc29sZSIsImxvZyIsImRldGFpbCIsImNhbGxiYWNrIiwiZXJyTXNnIiwidXNlckluZm8iLCJpc0xvZ2luIiwic2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7K2VBRkE7OztJQUlxQkEsSzs7Ozs7Ozs7Ozs7b0NBRUxDLEcsRUFBSztBQUNiQyxvQkFBUUMsR0FBUixDQUFZLG9CQUFaO0FBQ0FELG9CQUFRQyxHQUFSLENBQVlGLEdBQVo7QUFDSDs7OzZDQUVvQztBQUFBLGdCQUFwQkcsTUFBb0IsUUFBcEJBLE1BQW9CO0FBQUEsZ0JBQVpDLFFBQVksUUFBWkEsUUFBWTtBQUFBLGdCQUN6QkMsTUFEeUIsR0FDSkYsTUFESSxDQUN6QkUsTUFEeUI7QUFBQSxnQkFDakJDLFFBRGlCLEdBQ0pILE1BREksQ0FDakJHLFFBRGlCOzs7QUFHakMsZ0JBQUlBLFFBQUosRUFBYztBQUNWLHFCQUFLQyxPQUFMLEdBQWUsSUFBZixDQURVLENBQ1c7O0FBRXJCLHdDQUFPQyxHQUFQLENBQVcsVUFBWCxFQUF1QkYsUUFBdkI7QUFDQSx3Q0FBT0UsR0FBUCxDQUFXLFNBQVgsRUFBc0IsSUFBdEI7O0FBRUFKLDRCQUFZQSxTQUFTRSxRQUFULENBQVo7QUFFSCxhQVJELE1BUU87QUFDSEwsd0JBQVFDLEdBQVIsQ0FBWUcsTUFBWjtBQUNIO0FBQ0o7Ozs7RUFyQjhCLGVBQUtOLEs7O2tCQUFuQkEsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIG1peGlucy9pbmRleC5qc1xuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgZ2xvYmFsIGZyb20gJy4uLy4uL2dsb2JhbFNlcnZpY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBtaXhpbiBleHRlbmRzIHdlcHkubWl4aW4ge1xuXG4gICAgaGFuZGxlRXJyb3IobXNnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUjogLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgY29uc29sZS5sb2cobXNnKTtcbiAgICB9XG5cbiAgICBoYW5kbGVVc2VySW5mbyh7IGRldGFpbCwgY2FsbGJhY2sgfSkge1xuICAgICAgICBjb25zdCB7IGVyck1zZywgdXNlckluZm8gfSA9IGRldGFpbDtcblxuICAgICAgICBpZiAodXNlckluZm8pIHtcbiAgICAgICAgICAgIHRoaXMuaXNMb2dpbiA9IHRydWU7IC8vIOabtOaWsFxuXG4gICAgICAgICAgICBnbG9iYWwuc2V0KCd1c2VySW5mbycsIHVzZXJJbmZvKTtcbiAgICAgICAgICAgIGdsb2JhbC5zZXQoJ2lzTG9naW4nLCB0cnVlKTtcblxuICAgICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2sodXNlckluZm8pO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJNc2cpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19