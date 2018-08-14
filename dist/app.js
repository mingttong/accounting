'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_wepy$app) {
    _inherits(_class, _wepy$app);

    function _class() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, _class);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            pages: ['pages/lvpai-index', 'pages/index', 'pages/me', 'pages/edit', 'pages/category', 'pages/login', 'pages/lvpai-my-require', 'pages/lvpai-recommand', 'pages/lvpai-home-page', 'pages/lvpai-confirm', 'pages/lvpai-comment', 'pages/lvpai-person-info', 'pages/lvpai-my-time', 'pages/lvpai-recommand-bus', // 摄影师角度
            'pages/lvpai-home-page-cus', // 顾客的主页
            'pages/lvpai-order-info', 'pages/lvpai-publish', 'pages/lvpai-gerenzhongxin', 'pages/lvpai-tiaozhuanyaoqiu'],
            window: {
                backgroundTextStyle: 'light',
                navigationBarBackgroundColor: '#333333',
                navigationBarTitleText: '记账小程序',
                navigationBarTextStyle: 'white'
            },
            tabBar: {
                list: [{
                    pagePath: 'pages/lvpai-index',
                    text: '首页',
                    iconPath: '/assets/index.png',
                    selectedIconPath: '/assets/index-select.png'
                }, {
                    pagePath: 'pages/lvpai-index',
                    text: '分享美照',
                    iconPath: '/assets/publish.png',
                    selectedIconPath: '/assets/publish-select.png'
                }, {
                    pagePath: 'pages/lvpai-tiaozhuanyaoqiu',
                    text: '发布消息',
                    iconPath: '/assets/add.png',
                    selectedIconPath: '/assets/add-select.png'
                }, {
                    pagePath: 'pages/lvpai-gerenzhongxin',
                    text: '个人中心',
                    iconPath: '/assets/center.png',
                    selectedIconPath: '/assets/center-select.png'
                }]
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(_class, [{
        key: 'onLaunch',
        value: function onLaunch() {
            console.log('on launch');
        }
    }]);

    return _class;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_class, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJsaXN0IiwicGFnZVBhdGgiLCJ0ZXh0IiwiaWNvblBhdGgiLCJzZWxlY3RlZEljb25QYXRoIiwiY29uc29sZSIsImxvZyIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MExBR0lBLE0sR0FBUztBQUNMQyxtQkFBTyxDQUNILG1CQURHLEVBRUgsYUFGRyxFQUdILFVBSEcsRUFJSCxZQUpHLEVBS0gsZ0JBTEcsRUFNSCxhQU5HLEVBT0gsd0JBUEcsRUFRSCx1QkFSRyxFQVNILHVCQVRHLEVBVUgscUJBVkcsRUFXSCxxQkFYRyxFQVlILHlCQVpHLEVBYUgscUJBYkcsRUFjSCwyQkFkRyxFQWMwQjtBQUM3Qix1Q0FmRyxFQWUwQjtBQUM3QixvQ0FoQkcsRUFpQkgscUJBakJHLEVBa0JILDJCQWxCRyxFQW1CSCw2QkFuQkcsQ0FERjtBQXNCTEMsb0JBQVE7QUFDSkMscUNBQXFCLE9BRGpCO0FBRUpDLDhDQUE4QixTQUYxQjtBQUdKQyx3Q0FBd0IsT0FIcEI7QUFJSkMsd0NBQXdCO0FBSnBCLGFBdEJIO0FBNEJMQyxvQkFBUTtBQUNKQyxzQkFBTSxDQUNGO0FBQ0lDLDhCQUFVLG1CQURkO0FBRUlDLDBCQUFNLElBRlY7QUFHSUMsOEJBQVUsbUJBSGQ7QUFJSUMsc0NBQWtCO0FBSnRCLGlCQURFLEVBT0Y7QUFDSUgsOEJBQVUsbUJBRGQ7QUFFSUMsMEJBQU0sTUFGVjtBQUdJQyw4QkFBVSxxQkFIZDtBQUlJQyxzQ0FBa0I7QUFKdEIsaUJBUEUsRUFhRjtBQUNJSCw4QkFBVSw2QkFEZDtBQUVJQywwQkFBTSxNQUZWO0FBR0lDLDhCQUFVLGlCQUhkO0FBSUlDLHNDQUFrQjtBQUp0QixpQkFiRSxFQW1CRjtBQUNJSCw4QkFBVSwyQkFEZDtBQUVJQywwQkFBTSxNQUZWO0FBR0lDLDhCQUFVLG9CQUhkO0FBSUlDLHNDQUFrQjtBQUp0QixpQkFuQkU7QUFERjtBQTVCSCxTOzs7OzttQ0EwREU7QUFDUEMsb0JBQVFDLEdBQVIsQ0FBWSxXQUFaO0FBQ0g7Ozs7RUE3RHdCLGVBQUtDLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgICAgcGFnZXM6IFtcbiAgICAgICAgICAgICdwYWdlcy9sdnBhaS1pbmRleCcsXG4gICAgICAgICAgICAncGFnZXMvaW5kZXgnLFxuICAgICAgICAgICAgJ3BhZ2VzL21lJyxcbiAgICAgICAgICAgICdwYWdlcy9lZGl0JyxcbiAgICAgICAgICAgICdwYWdlcy9jYXRlZ29yeScsXG4gICAgICAgICAgICAncGFnZXMvbG9naW4nLFxuICAgICAgICAgICAgJ3BhZ2VzL2x2cGFpLW15LXJlcXVpcmUnLFxuICAgICAgICAgICAgJ3BhZ2VzL2x2cGFpLXJlY29tbWFuZCcsXG4gICAgICAgICAgICAncGFnZXMvbHZwYWktaG9tZS1wYWdlJyxcbiAgICAgICAgICAgICdwYWdlcy9sdnBhaS1jb25maXJtJyxcbiAgICAgICAgICAgICdwYWdlcy9sdnBhaS1jb21tZW50JyxcbiAgICAgICAgICAgICdwYWdlcy9sdnBhaS1wZXJzb24taW5mbycsXG4gICAgICAgICAgICAncGFnZXMvbHZwYWktbXktdGltZScsXG4gICAgICAgICAgICAncGFnZXMvbHZwYWktcmVjb21tYW5kLWJ1cycsIC8vIOaRhOW9seW4iOinkuW6plxuICAgICAgICAgICAgJ3BhZ2VzL2x2cGFpLWhvbWUtcGFnZS1jdXMnLCAvLyDpob7lrqLnmoTkuLvpobVcbiAgICAgICAgICAgICdwYWdlcy9sdnBhaS1vcmRlci1pbmZvJyxcbiAgICAgICAgICAgICdwYWdlcy9sdnBhaS1wdWJsaXNoJyxcbiAgICAgICAgICAgICdwYWdlcy9sdnBhaS1nZXJlbnpob25neGluJyxcbiAgICAgICAgICAgICdwYWdlcy9sdnBhaS10aWFvemh1YW55YW9xaXUnLFxuICAgICAgICBdLFxuICAgICAgICB3aW5kb3c6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnIzMzMzMzMycsXG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6K6w6LSm5bCP56iL5bqPJyxcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICd3aGl0ZScsXG4gICAgICAgIH0sXG4gICAgICAgIHRhYkJhcjoge1xuICAgICAgICAgICAgbGlzdDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9sdnBhaS1pbmRleCcsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICfpppbpobUnLFxuICAgICAgICAgICAgICAgICAgICBpY29uUGF0aDogJy9hc3NldHMvaW5kZXgucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJy9hc3NldHMvaW5kZXgtc2VsZWN0LnBuZycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvbHZwYWktaW5kZXgnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAn5YiG5Lqr576O54WnJyxcbiAgICAgICAgICAgICAgICAgICAgaWNvblBhdGg6ICcvYXNzZXRzL3B1Ymxpc2gucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJy9hc3NldHMvcHVibGlzaC1zZWxlY3QucG5nJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9sdnBhaS10aWFvemh1YW55YW9xaXUnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAn5Y+R5biD5raI5oGvJyxcbiAgICAgICAgICAgICAgICAgICAgaWNvblBhdGg6ICcvYXNzZXRzL2FkZC5wbmcnLFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnL2Fzc2V0cy9hZGQtc2VsZWN0LnBuZycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvbHZwYWktZ2VyZW56aG9uZ3hpbicsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICfkuKrkurrkuK3lv4MnLFxuICAgICAgICAgICAgICAgICAgICBpY29uUGF0aDogJy9hc3NldHMvY2VudGVyLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICcvYXNzZXRzL2NlbnRlci1zZWxlY3QucG5nJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICB9XG5cbiAgICBvbkxhdW5jaCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ29uIGxhdW5jaCcpO1xuICAgIH1cbn1cbiJdfQ==