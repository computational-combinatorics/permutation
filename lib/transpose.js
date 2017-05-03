'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.transpose = transpose;

var _copy = require('./copy');

var _transpose2 = require('./_transpose');

function transpose(sigma, a, b) {

	var rho = (0, _copy.copy)(sigma);

	(0, _transpose2._transpose)(a, b, rho);

	return rho;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90cmFuc3Bvc2UuanMiXSwibmFtZXMiOlsidHJhbnNwb3NlIiwic2lnbWEiLCJhIiwiYiIsInJobyJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFHZ0JBLFMsR0FBQUEsUzs7QUFIaEI7O0FBQ0E7O0FBRU8sU0FBU0EsU0FBVCxDQUFxQkMsS0FBckIsRUFBNkJDLENBQTdCLEVBQWlDQyxDQUFqQyxFQUFxQzs7QUFFM0MsS0FBTUMsTUFBTSxnQkFBTUgsS0FBTixDQUFaOztBQUVBLDZCQUFZQyxDQUFaLEVBQWdCQyxDQUFoQixFQUFvQkMsR0FBcEI7O0FBRUEsUUFBT0EsR0FBUDtBQUVBIiwiZmlsZSI6InRyYW5zcG9zZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvcHkgfSBmcm9tICcuL2NvcHknIDtcbmltcG9ydCB7IF90cmFuc3Bvc2UgfSBmcm9tICcuL190cmFuc3Bvc2UnIDtcblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zcG9zZSAoIHNpZ21hICwgYSAsIGIgKSB7XG5cblx0Y29uc3QgcmhvID0gY29weSggc2lnbWEgKSA7XG5cblx0X3RyYW5zcG9zZSggYSAsIGIgLCByaG8gKSA7XG5cblx0cmV0dXJuIHJobyA7XG5cbn1cblxuIl19