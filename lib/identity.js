'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.identity = identity;

var _permutation = require('./permutation');

var _identity2 = require('./_identity');

function identity(n) {

	var rho = (0, _permutation.permutation)(n);

	(0, _identity2._identity)(rho, n);

	return rho;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pZGVudGl0eS5qcyJdLCJuYW1lcyI6WyJpZGVudGl0eSIsIm4iLCJyaG8iXSwibWFwcGluZ3MiOiI7Ozs7O1FBR2dCQSxRLEdBQUFBLFE7O0FBSGhCOztBQUNBOztBQUVPLFNBQVNBLFFBQVQsQ0FBb0JDLENBQXBCLEVBQXdCOztBQUU5QixLQUFNQyxNQUFNLDhCQUFhRCxDQUFiLENBQVo7O0FBRUEsMkJBQVdDLEdBQVgsRUFBaUJELENBQWpCOztBQUVBLFFBQU9DLEdBQVA7QUFFQSIsImZpbGUiOiJpZGVudGl0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBlcm11dGF0aW9uIH0gZnJvbSAnLi9wZXJtdXRhdGlvbicgO1xuaW1wb3J0IHsgX2lkZW50aXR5IH0gZnJvbSAnLi9faWRlbnRpdHknIDtcblxuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5ICggbiApIHtcblxuXHRjb25zdCByaG8gPSBwZXJtdXRhdGlvbiggbiApIDtcblxuXHRfaWRlbnRpdHkoIHJobyAsIG4gKSA7XG5cblx0cmV0dXJuIHJobyA7XG5cbn1cblxuIl19