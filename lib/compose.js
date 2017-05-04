'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.compose = compose;

var _permutation = require('./permutation');

var _compose2 = require('./_compose');

/**
 * Compose two input permutations. The resulting permutation is output as an
 * array of indices.
 *
 * @param {Array} sigma The first input permutation.
 * @param {Array} tau The second input permutation.
 * @returns {Array} The resulting permutation as an array.
 */
function compose(sigma, tau) {

	// TODO replace with Array.from( _compose...

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21wb3NlLmpzIl0sIm5hbWVzIjpbImNvbXBvc2UiLCJzaWdtYSIsInRhdSIsInJobyIsImxlbmd0aCIsImkiLCJyIl0sIm1hcHBpbmdzIjoiOzs7OztRQVdnQkEsTyxHQUFBQSxPOztBQVhoQjs7QUFDQTs7QUFFQTs7Ozs7Ozs7QUFRTyxTQUFTQSxPQUFULENBQW1CQyxLQUFuQixFQUEyQkMsR0FBM0IsRUFBaUM7O0FBRXZDOztBQUVBLEtBQU1DLE1BQU0sOEJBQWFGLE1BQU1HLE1BQW5CLENBQVo7O0FBRUEsS0FBSUMsSUFBSSxDQUFSOztBQU51QztBQUFBO0FBQUE7O0FBQUE7QUFRdkMsdUJBQWlCLHdCQUFVSixLQUFWLEVBQWtCQyxHQUFsQixDQUFqQiw4SEFBMkM7QUFBQSxPQUEvQkksQ0FBK0I7OztBQUUxQ0gsT0FBSUUsQ0FBSixJQUFTQyxDQUFUO0FBQ0EsS0FBRUQsQ0FBRjtBQUVBO0FBYnNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBZXZDLFFBQU9GLEdBQVA7QUFFQSIsImZpbGUiOiJjb21wb3NlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGVybXV0YXRpb24gfSBmcm9tICcuL3Blcm11dGF0aW9uJyA7XG5pbXBvcnQgeyBfY29tcG9zZSB9IGZyb20gJy4vX2NvbXBvc2UnIDtcblxuLyoqXG4gKiBDb21wb3NlIHR3byBpbnB1dCBwZXJtdXRhdGlvbnMuIFRoZSByZXN1bHRpbmcgcGVybXV0YXRpb24gaXMgb3V0cHV0IGFzIGFuXG4gKiBhcnJheSBvZiBpbmRpY2VzLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHNpZ21hIFRoZSBmaXJzdCBpbnB1dCBwZXJtdXRhdGlvbi5cbiAqIEBwYXJhbSB7QXJyYXl9IHRhdSBUaGUgc2Vjb25kIGlucHV0IHBlcm11dGF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBUaGUgcmVzdWx0aW5nIHBlcm11dGF0aW9uIGFzIGFuIGFycmF5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcG9zZSAoIHNpZ21hICwgdGF1ICkge1xuXG5cdC8vIFRPRE8gcmVwbGFjZSB3aXRoIEFycmF5LmZyb20oIF9jb21wb3NlLi4uXG5cblx0Y29uc3QgcmhvID0gcGVybXV0YXRpb24oIHNpZ21hLmxlbmd0aCApIDtcblxuXHRsZXQgaSA9IDAgO1xuXG5cdGZvciAoIGNvbnN0IHIgb2YgX2NvbXBvc2UoIHNpZ21hICwgdGF1ICkgKSB7XG5cblx0XHRyaG9baV0gPSByIDtcblx0XHQrK2kgO1xuXG5cdH1cblxuXHRyZXR1cm4gcmhvIDtcblxufVxuXG4iXX0=