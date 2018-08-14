'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.post = exports.get = undefined;

var _url = require('./url.js');

Object.keys(_url).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _url[key];
        }
    });
});

var _globalService = require('./../globalService.js');

var _globalService2 = _interopRequireDefault(_globalService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var baseURL = 'https://fuchyou.com';

var ajax = function ajax(url, method) {
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var cfg = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var header = cfg.header,
        _cfg$dataType = cfg.dataType,
        dataType = _cfg$dataType === undefined ? 'json' : _cfg$dataType,
        _cfg$timeout = cfg.timeout,
        timeout = _cfg$timeout === undefined ? 60000 : _cfg$timeout;


    return new Promise(function (resolve, reject) {
        var reqTask = wx.request({
            url: baseURL + url,
            data: data,
            dataType: dataType,
            header: header,
            method: method,
            success: function success(_ref) {
                var errMsg = _ref.errMsg,
                    statusCode = _ref.statusCode,
                    _ref$data = _ref.data,
                    data = _ref$data.data,
                    errmsg = _ref$data.errmsg,
                    errno = _ref$data.errno;

                if (statusCode === 200 && errno === 0) {
                    resolve(data);
                } else {
                    reject({ errMsg: errMsg, errmsg: errmsg });
                }
            },
            fail: function fail(res) {
                reject({ errMsg: res });
            },
            complete: function complete() {
                // 500ms后才关闭，提升体验
                setTimeout(function () {
                    wx.hideLoading();
                }, 500);
            }
        });

        wx.showLoading({
            title: '加载中'
        });

        // v1.4.0
        if (reqTask.abort) {
            // 超时设置
            setTimeout(function () {
                reqTask.abort();
                wx.hideLoading();
            }, timeout);
        }
    });
};

var getCode = function getCode() {
    return new Promise(function (resolve, reject) {
        wx.login({
            success: function success(_ref2) {
                var errCode = _ref2.errCode,
                    code = _ref2.code;

                if (code) {
                    resolve(code);
                } else {
                    reject(errCode);
                }
            },
            fail: function fail(e) {
                reject(e);
            }
        });
    });
};

var getSessionId = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var code, _ref4, sessionId;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        if (!_globalService2.default.get('sessionId')) {
                            _context.next = 2;
                            break;
                        }

                        return _context.abrupt('return', _globalService2.default.get('sessionId'));

                    case 2:
                        _context.prev = 2;
                        _context.next = 5;
                        return getCode();

                    case 5:
                        code = _context.sent;
                        _context.next = 8;
                        return ajax('/login', 'GET', { code: code });

                    case 8:
                        _ref4 = _context.sent;
                        sessionId = _ref4.sessionId;


                        _globalService2.default.set('sessionId', sessionId);
                        return _context.abrupt('return', sessionId);

                    case 14:
                        _context.prev = 14;
                        _context.t0 = _context['catch'](2);
                        throw _context.t0;

                    case 17:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined, [[2, 14]]);
    }));

    return function getSessionId() {
        return _ref3.apply(this, arguments);
    };
}();

/**
 * @desc http不同于ajax的地方在于每次请求都会带上参数sessionId
 * @param {String} url 
 * @param {String} method 
 * @param {Object} data 
 * @param {Object} cfg 
 */
var http = function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url) {
        var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
        var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var cfg = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        var sessionId;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.prev = 0;
                        _context2.next = 3;
                        return getSessionId();

                    case 3:
                        sessionId = _context2.sent;
                        _context2.next = 6;
                        return ajax(url, method, Object.assign(data, { sessionId: sessionId }), cfg);

                    case 6:
                        return _context2.abrupt('return', _context2.sent);

                    case 9:
                        _context2.prev = 9;
                        _context2.t0 = _context2['catch'](0);
                        throw _context2.t0;

                    case 12:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined, [[0, 9]]);
    }));

    return function http(_x6) {
        return _ref5.apply(this, arguments);
    };
}();

var get = exports.get = function get(url, data) {
    var cfg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return http(url, 'GET', data, cfg);
};

var post = exports.post = function post(url, data) {
    var cfg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return http(url, 'POST', data, cfg);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImJhc2VVUkwiLCJhamF4IiwidXJsIiwibWV0aG9kIiwiZGF0YSIsImNmZyIsImhlYWRlciIsImRhdGFUeXBlIiwidGltZW91dCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxVGFzayIsInd4IiwicmVxdWVzdCIsInN1Y2Nlc3MiLCJlcnJNc2ciLCJzdGF0dXNDb2RlIiwiZXJybXNnIiwiZXJybm8iLCJmYWlsIiwicmVzIiwiY29tcGxldGUiLCJzZXRUaW1lb3V0IiwiaGlkZUxvYWRpbmciLCJzaG93TG9hZGluZyIsInRpdGxlIiwiYWJvcnQiLCJnZXRDb2RlIiwibG9naW4iLCJlcnJDb2RlIiwiY29kZSIsImUiLCJnZXRTZXNzaW9uSWQiLCJnZXQiLCJzZXNzaW9uSWQiLCJzZXQiLCJodHRwIiwiT2JqZWN0IiwiYXNzaWduIiwicG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBc0dBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUF0R0E7Ozs7Ozs7O0FBQ0EsSUFBTUEsVUFBVSxxQkFBaEI7O0FBRUEsSUFBTUMsT0FBTyxTQUFQQSxJQUFPLENBQUNDLEdBQUQsRUFBTUMsTUFBTixFQUFzQztBQUFBLFFBQXhCQyxJQUF3Qix1RUFBakIsRUFBaUI7QUFBQSxRQUFiQyxHQUFhLHVFQUFQLEVBQU87QUFBQSxRQUN2Q0MsTUFEdUMsR0FDUUQsR0FEUixDQUN2Q0MsTUFEdUM7QUFBQSx3QkFDUUQsR0FEUixDQUMvQkUsUUFEK0I7QUFBQSxRQUMvQkEsUUFEK0IsaUNBQ3BCLE1BRG9CO0FBQUEsdUJBQ1FGLEdBRFIsQ0FDWkcsT0FEWTtBQUFBLFFBQ1pBLE9BRFksZ0NBQ0YsS0FERTs7O0FBRy9DLFdBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQyxZQUFNQyxVQUFVQyxHQUFHQyxPQUFILENBQVc7QUFDdkJaLGlCQUFLRixVQUFV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aUNBSEQ7QUFBQTtBQUFBLCtCQUlRbEMsS0FBS0MsR0FBTCxFQUFVQyxNQUFWLEVBQWtCbUMsT0FBT0MsTUFBUCxDQUFjbkMsSUFBZCxFQUFvQixFQUFFK0Isb0JBQUYsRUFBcEIsQ0FBbEIsRUFBc0Q5QixHQUF0RCxDQUpSOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUDs7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFOOztBQVVPLElBQU02QixvQkFBTSxTQUFOQSxHQUFNLENBQUNoQyxHQUFELEVBQU1FLElBQU47QUFBQSxRQUFZQyxHQUFaLHVFQUFrQixFQUFsQjtBQUFBLFdBQXlCZ0MsS0FBS25DLEdBQUwsRUFBVSxLQUFWLEVBQWlCRSxJQUFqQixFQUF1QkMsR0FBdkIsQ0FBekI7QUFBQSxDQUFaOztBQUVBLElBQU1tQyxzQkFBTyxTQUFQQSxJQUFPLENBQUN0QyxHQUFELEVBQU1FLElBQU47QUFBQSxRQUFZQyxHQUFaLHVFQUFrQixFQUFsQjtBQUFBLFdBQXlCZ0MsS0FBS25DLEdBQUwsRUFBVSxNQUFWLEVBQWtCRSxJQUFsQixFQUF3QkMsR0FBeEIsQ0FBekI7QUFBQSxDQUFiIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdsb2JhbCBmcm9tICcuLi9nbG9iYWxTZXJ2aWNlJztcbmNvbnN0IGJhc2VVUkwgPSAnaHR0cHM6Ly9mdWNoeW91LmNvbSc7XG5cbmNvbnN0IGFqYXggPSAodXJsLCBtZXRob2QsIGRhdGEgPSB7fSwgY2ZnID0ge30pID0+IHtcbiAgICBjb25zdCB7IGhlYWRlciwgZGF0YVR5cGUgPSAnanNvbicsIHRpbWVvdXQgPSA2MDAwMCB9ID0gY2ZnO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgcmVxVGFzayA9IHd4LnJlcXVlc3Qoe1xuICAgICAgICAgICAgdXJsOiBiYXNlVVJMICsgdXJsLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIGRhdGFUeXBlLFxuICAgICAgICAgICAgaGVhZGVyLFxuICAgICAgICAgICAgbWV0aG9kLFxuICAgICAgICAgICAgc3VjY2Vzcyh7IGVyck1zZywgc3RhdHVzQ29kZSwgZGF0YTogeyBkYXRhLCBlcnJtc2csIGVycm5vIH19KSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1c0NvZGUgPT09IDIwMCAmJiBlcnJubyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCh7IGVyck1zZywgZXJybXNnIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmYWlsKHJlcykge1xuICAgICAgICAgICAgICAgIHJlamVjdCh7IGVyck1zZzogcmVzIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbXBsZXRlKCkge1xuICAgICAgICAgICAgICAgIC8vIDUwMG1z5ZCO5omN5YWz6Zet77yM5o+Q5Y2H5L2T6aqMXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgICAgICAgIHRpdGxlOiAn5Yqg6L295LitJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gdjEuNC4wXG4gICAgICAgIGlmIChyZXFUYXNrLmFib3J0KSB7XG4gICAgICAgICAgICAvLyDotoXml7borr7nva5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlcVRhc2suYWJvcnQoKTtcbiAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xuICAgICAgICAgICAgfSwgdGltZW91dCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbmNvbnN0IGdldENvZGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd3gubG9naW4oe1xuICAgICAgICAgICAgc3VjY2Vzcyh7IGVyckNvZGUsIGNvZGUgfSkge1xuICAgICAgICAgICAgICAgIGlmIChjb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoY29kZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVyckNvZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmYWlsKGUpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuY29uc3QgZ2V0U2Vzc2lvbklkID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgaWYgKGdsb2JhbC5nZXQoJ3Nlc3Npb25JZCcpKSB7XG4gICAgICAgIHJldHVybiBnbG9iYWwuZ2V0KCdzZXNzaW9uSWQnKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBjb2RlID0gYXdhaXQgZ2V0Q29kZSgpO1xuICAgICAgICBjb25zdCB7IHNlc3Npb25JZCB9ID0gYXdhaXQgYWpheCgnL2xvZ2luJywgJ0dFVCcsIHsgY29kZSB9KTtcblxuICAgICAgICBnbG9iYWwuc2V0KCdzZXNzaW9uSWQnLCBzZXNzaW9uSWQpO1xuICAgICAgICByZXR1cm4gc2Vzc2lvbklkO1xuXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAZGVzYyBodHRw5LiN5ZCM5LqOYWpheOeahOWcsOaWueWcqOS6juavj+asoeivt+axgumDveS8muW4puS4iuWPguaVsHNlc3Npb25JZFxuICogQHBhcmFtIHtTdHJpbmd9IHVybCBcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2QgXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YSBcbiAqIEBwYXJhbSB7T2JqZWN0fSBjZmcgXG4gKi9cbmNvbnN0IGh0dHAgPSBhc3luYyAodXJsLCBtZXRob2QgPSAnR0VUJywgZGF0YSA9IHt9LCBjZmcgPSB7fSkgPT4ge1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2Vzc2lvbklkID0gYXdhaXQgZ2V0U2Vzc2lvbklkKCk7XG4gICAgICAgIHJldHVybiBhd2FpdCBhamF4KHVybCwgbWV0aG9kLCBPYmplY3QuYXNzaWduKGRhdGEsIHsgc2Vzc2lvbklkIH0pLCBjZmcpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXQgPSAodXJsLCBkYXRhLCBjZmcgPSB7fSkgPT4gaHR0cCh1cmwsICdHRVQnLCBkYXRhLCBjZmcpO1xuXG5leHBvcnQgY29uc3QgcG9zdCA9ICh1cmwsIGRhdGEsIGNmZyA9IHt9KSA9PiBodHRwKHVybCwgJ1BPU1QnLCBkYXRhLCBjZmcpO1xuXG5leHBvcnQgKiBmcm9tICcuL3VybCc7XG4iXX0=