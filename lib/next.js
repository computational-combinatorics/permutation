'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.next = next;

var _copy = require('./copy');

var _next2 = require('./_next');

var _reverse = require('./reverse');

function next(sigma) {

	var rho = (0, _copy.copy)(sigma);

	if (!(0, _next2._next)(rho, rho.length)) (0, _reverse.reverse)(rho);

	return rho;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9uZXh0LmpzIl0sIm5hbWVzIjpbIm5leHQiLCJzaWdtYSIsInJobyIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFJZ0JBLEksR0FBQUEsSTs7QUFKaEI7O0FBQ0E7O0FBQ0E7O0FBRU8sU0FBU0EsSUFBVCxDQUFnQkMsS0FBaEIsRUFBd0I7O0FBRTlCLEtBQU1DLE1BQU0sZ0JBQU1ELEtBQU4sQ0FBWjs7QUFFQSxLQUFLLENBQUUsa0JBQU9DLEdBQVAsRUFBYUEsSUFBSUMsTUFBakIsQ0FBUCxFQUFtQyxzQkFBU0QsR0FBVDs7QUFFbkMsUUFBT0EsR0FBUDtBQUVBIiwiZmlsZSI6Im5leHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb3B5IH0gZnJvbSAnLi9jb3B5JyA7XG5pbXBvcnQgeyBfbmV4dCB9IGZyb20gJy4vX25leHQnIDtcbmltcG9ydCB7IHJldmVyc2UgfSBmcm9tICcuL3JldmVyc2UnIDtcblxuZXhwb3J0IGZ1bmN0aW9uIG5leHQgKCBzaWdtYSApIHtcblxuXHRjb25zdCByaG8gPSBjb3B5KCBzaWdtYSApIDtcblxuXHRpZiAoICEgX25leHQoIHJobyAsIHJoby5sZW5ndGggKSApIHJldmVyc2UoIHJobyApIDtcblxuXHRyZXR1cm4gcmhvIDtcblxufVxuXG4iXX0=