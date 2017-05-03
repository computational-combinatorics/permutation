'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.apply = apply;

var _identity = require('./identity');

var _apply2 = require('./_apply');

function apply(n, transpositions) {

	var rho = (0, _identity.identity)(n);

	(0, _apply2._apply)(transpositions, rho);

	return rho;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHBseS5qcyJdLCJuYW1lcyI6WyJhcHBseSIsIm4iLCJ0cmFuc3Bvc2l0aW9ucyIsInJobyJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFHZ0JBLEssR0FBQUEsSzs7QUFIaEI7O0FBQ0E7O0FBRU8sU0FBU0EsS0FBVCxDQUFpQkMsQ0FBakIsRUFBcUJDLGNBQXJCLEVBQXNDOztBQUU1QyxLQUFNQyxNQUFNLHdCQUFVRixDQUFWLENBQVo7O0FBRUEscUJBQVFDLGNBQVIsRUFBeUJDLEdBQXpCOztBQUVBLFFBQU9BLEdBQVA7QUFFQSIsImZpbGUiOiJhcHBseS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlkZW50aXR5IH0gZnJvbSAnLi9pZGVudGl0eScgO1xuaW1wb3J0IHsgX2FwcGx5IH0gZnJvbSAnLi9fYXBwbHknIDtcblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5ICggbiAsIHRyYW5zcG9zaXRpb25zICkge1xuXG5cdGNvbnN0IHJobyA9IGlkZW50aXR5KCBuICkgO1xuXG5cdF9hcHBseSggdHJhbnNwb3NpdGlvbnMgLCByaG8gKSA7XG5cblx0cmV0dXJuIHJobyA7XG5cbn1cblxuIl19