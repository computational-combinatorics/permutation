'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.copy = copy;

var _permutation = require('./permutation');

var _copy2 = require('./_copy');

function copy(sigma) {

	var rho = (0, _permutation.permutation)(sigma.length);

	(0, _copy2._copy)(sigma, sigma.length, rho);

	return rho;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb3B5LmpzIl0sIm5hbWVzIjpbImNvcHkiLCJzaWdtYSIsInJobyIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFHZ0JBLEksR0FBQUEsSTs7QUFIaEI7O0FBQ0E7O0FBRU8sU0FBU0EsSUFBVCxDQUFnQkMsS0FBaEIsRUFBd0I7O0FBRTlCLEtBQU1DLE1BQU0sOEJBQWFELE1BQU1FLE1BQW5CLENBQVo7O0FBRUEsbUJBQU9GLEtBQVAsRUFBZUEsTUFBTUUsTUFBckIsRUFBOEJELEdBQTlCOztBQUVBLFFBQU9BLEdBQVA7QUFFQSIsImZpbGUiOiJjb3B5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGVybXV0YXRpb24gfSBmcm9tICcuL3Blcm11dGF0aW9uJyA7XG5pbXBvcnQgeyBfY29weSB9IGZyb20gJy4vX2NvcHknIDtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvcHkgKCBzaWdtYSApIHtcblxuXHRjb25zdCByaG8gPSBwZXJtdXRhdGlvbiggc2lnbWEubGVuZ3RoICkgO1xuXG5cdF9jb3B5KCBzaWdtYSAsIHNpZ21hLmxlbmd0aCAsIHJobyApIDtcblxuXHRyZXR1cm4gcmhvIDtcblxufVxuXG4iXX0=