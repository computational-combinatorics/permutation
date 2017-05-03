'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.compose = compose;

var _permutation = require('./permutation');

var _compose2 = require('./_compose');

function compose(sigma, tau) {

	var rho = (0, _permutation.permutation)(sigma.length);

	var i = 0;

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = (0, _compose2._compose)(sigma, tau)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var r = _step.value;


			rho[i] = r;
			++i;
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	return rho;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21wb3NlLmpzIl0sIm5hbWVzIjpbImNvbXBvc2UiLCJzaWdtYSIsInRhdSIsInJobyIsImxlbmd0aCIsImkiLCJyIl0sIm1hcHBpbmdzIjoiOzs7OztRQUdnQkEsTyxHQUFBQSxPOztBQUhoQjs7QUFDQTs7QUFFTyxTQUFTQSxPQUFULENBQW1CQyxLQUFuQixFQUEyQkMsR0FBM0IsRUFBaUM7O0FBRXZDLEtBQU1DLE1BQU0sOEJBQWFGLE1BQU1HLE1BQW5CLENBQVo7O0FBRUEsS0FBSUMsSUFBSSxDQUFSOztBQUp1QztBQUFBO0FBQUE7O0FBQUE7QUFNdkMsdUJBQWlCLHdCQUFVSixLQUFWLEVBQWtCQyxHQUFsQixDQUFqQiw4SEFBMkM7QUFBQSxPQUEvQkksQ0FBK0I7OztBQUUxQ0gsT0FBSUUsQ0FBSixJQUFTQyxDQUFUO0FBQ0EsS0FBRUQsQ0FBRjtBQUVBO0FBWHNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBYXZDLFFBQU9GLEdBQVA7QUFFQSIsImZpbGUiOiJjb21wb3NlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGVybXV0YXRpb24gfSBmcm9tICcuL3Blcm11dGF0aW9uJyA7XG5pbXBvcnQgeyBfY29tcG9zZSB9IGZyb20gJy4vX2NvbXBvc2UnIDtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvc2UgKCBzaWdtYSAsIHRhdSApIHtcblxuXHRjb25zdCByaG8gPSBwZXJtdXRhdGlvbiggc2lnbWEubGVuZ3RoICkgO1xuXG5cdGxldCBpID0gMCA7XG5cblx0Zm9yICggY29uc3QgciBvZiBfY29tcG9zZSggc2lnbWEgLCB0YXUgKSApIHtcblxuXHRcdHJob1tpXSA9IHIgO1xuXHRcdCsraSA7XG5cblx0fVxuXG5cdHJldHVybiByaG8gO1xuXG59XG5cbiJdfQ==