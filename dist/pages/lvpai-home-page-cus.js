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
            navigationBarTitleText: '拍客详情',
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/lvpai-home-page-cus'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImx2cGFpLWhvbWUtcGFnZS1jdXMuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiYmFja2dyb3VuZENvbG9yIiwibWl4aW5zIiwiZGF0YSIsInZpZGVvcyIsIm1ldGhvZHMiLCJnZXRDYWxsIiwid3giLCJzaG93TW9kYWwiLCJjb250ZW50IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQTtBQUNBOztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCLE1BRG5CO0FBRUxDLDZCQUFpQjtBQUZaLFMsUUFJVEMsTSxHQUFTLGtCLFFBQ1RDLEksR0FBTztBQUNIQyxvQkFBUTtBQURMLFMsUUFRUEMsTyxHQUFVO0FBQ05DLG1CQURNLHFCQUNJO0FBQ05DLG1CQUFHQyxTQUFILENBQWE7QUFDVEMsNkJBQVM7QUFEQSxpQkFBYjtBQUdIO0FBTEssUzs7Ozs7aUNBTEQ7QUFBQSxnQkFDR0wsTUFESCxrQkFDR0EsTUFESDs7QUFFTCxpQkFBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0g7Ozs7RUFaOEIsZUFBS00sSTs7a0JBQW5CWixLIiwiZmlsZSI6Imx2cGFpLWhvbWUtcGFnZS1jdXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IG1peGluIGZyb20gJy4vbWl4aW5zJztcbmltcG9ydCB7IGhvbWVQYWdlIH0gZnJvbSAnLi9tb2NrJztcblxuLy8gaW1wb3J0IHsgd2VjaGF0IH0gZnJvbSAnLi91dGlscy9pbmRleCc7XG4vLyBpbXBvcnQgeyBwb3N0IH0gZnJvbSAnLi4vaHR0cC9pbmRleCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmi43lrqLor6bmg4UnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZWVlJyxcbiAgICB9O1xuICAgIG1peGlucyA9IFttaXhpbl07XG4gICAgZGF0YSA9IHtcbiAgICAgICAgdmlkZW9zOiBbXSxcbiAgICB9O1xuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgY29uc3QgeyB2aWRlb3MgfSA9IGhvbWVQYWdlO1xuICAgICAgICB0aGlzLnZpZGVvcyA9IHZpZGVvcztcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgICBnZXRDYWxsKCkge1xuICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiAn6I635Y+W55S16K+d5oiQ5Yqf77yBJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH07XG59XG4iXX0=