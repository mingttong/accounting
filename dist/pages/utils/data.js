'use strict';

var _http = require('./../../http/index.js');

var _globalService = require('./../../globalService.js');

var _globalService2 = _interopRequireDefault(_globalService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var storageNameDict = {
    // 查询收入列表、支出列表对应缓存的storage名
    income: 'incomeList',
    outgo: 'outgoList'

};

module.exports = {
    /**
     * 获取类别列表，包括收入和支出
     */
    getCategoryList: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'outgo';
            var storageName, listCache, list;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            storageName = storageNameDict[type];
                            listCache = _globalService2.default.get(storageName);

                            // if (listCache && listCache.length) {
                            //     return listCache;
                            // }

                            _context.next = 4;
                            return (0, _http.get)('/category/' + type);

                        case 4:
                            list = _context.sent;

                            _globalService2.default.set(storageName, list);

                            return _context.abrupt('return', list);

                        case 7:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function getCategoryList() {
            return _ref.apply(this, arguments);
        }

        return getCategoryList;
    }()
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEuanMiXSwibmFtZXMiOlsic3RvcmFnZU5hbWVEaWN0IiwiaW5jb21lIiwib3V0Z28iLCJtb2R1bGUiLCJleHBvcnRzIiwiZ2V0Q2F0ZWdvcnlMaXN0IiwidHlwZSIsInN0b3JhZ2VOYW1lIiwibGlzdENhY2hlIiwiZ2V0IiwibGlzdCIsInNldCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxrQkFBa0I7QUFDcEI7QUFDQUMsWUFBUSxZQUZZO0FBR3BCQyxXQUFPOztBQUhhLENBQXhCOztBQU9BQyxPQUFPQyxPQUFQLEdBQWlCO0FBQ2I7OztBQUdNQyxtQkFKTztBQUFBO0FBQUEsZ0JBSVNDLElBSlQsdUVBSWdCLE9BSmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtIQyx1Q0FMRyxHQUtXUCxnQkFBZ0JNLElBQWhCLENBTFg7QUFNSEUscUNBTkcsR0FNUyx3QkFBT0MsR0FBUCxDQUFXRixXQUFYLENBTlQ7O0FBUVQ7QUFDQTtBQUNBOztBQVZTO0FBQUEsbUNBWVUsOEJBQWlCRCxJQUFqQixDQVpWOztBQUFBO0FBWUhJLGdDQVpHOztBQWFULG9EQUFPQyxHQUFQLENBQVdKLFdBQVgsRUFBd0JHLElBQXhCOztBQWJTLDZEQWVGQSxJQWZFOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsQ0FBakIiLCJmaWxlIjoiZGF0YS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldCB9IGZyb20gJy4uLy4uL2h0dHAnO1xuaW1wb3J0IGdsb2JhbCBmcm9tICcuLi8uLi9nbG9iYWxTZXJ2aWNlJztcblxuY29uc3Qgc3RvcmFnZU5hbWVEaWN0ID0ge1xuICAgIC8vIOafpeivouaUtuWFpeWIl+ihqOOAgeaUr+WHuuWIl+ihqOWvueW6lOe8k+WtmOeahHN0b3JhZ2XlkI1cbiAgICBpbmNvbWU6ICdpbmNvbWVMaXN0JyxcbiAgICBvdXRnbzogJ291dGdvTGlzdCcsXG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIC8qKlxuICAgICAqIOiOt+WPluexu+WIq+WIl+ihqO+8jOWMheaLrOaUtuWFpeWSjOaUr+WHulxuICAgICAqL1xuICAgIGFzeW5jIGdldENhdGVnb3J5TGlzdCh0eXBlID0gJ291dGdvJykge1xuICAgICAgICBjb25zdCBzdG9yYWdlTmFtZSA9IHN0b3JhZ2VOYW1lRGljdFt0eXBlXTtcbiAgICAgICAgY29uc3QgbGlzdENhY2hlID0gZ2xvYmFsLmdldChzdG9yYWdlTmFtZSk7XG5cbiAgICAgICAgLy8gaWYgKGxpc3RDYWNoZSAmJiBsaXN0Q2FjaGUubGVuZ3RoKSB7XG4gICAgICAgIC8vICAgICByZXR1cm4gbGlzdENhY2hlO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgY29uc3QgbGlzdCA9IGF3YWl0IGdldChgL2NhdGVnb3J5LyR7dHlwZX1gKTtcbiAgICAgICAgZ2xvYmFsLnNldChzdG9yYWdlTmFtZSwgbGlzdCk7XG5cbiAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfSxcbn07Il19