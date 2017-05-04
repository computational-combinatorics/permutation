'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._next = _next;

var _transpose2 = require('./_transpose');

var _reverse2 = require('./_reverse');

/**
 * Updates the input permutation to the next one ___in-place___. Returns true
 * unless the input permutation is the last for its elements. In that case, the
 * input permutation remains untouched.
 *
 * @param {Array} sigma The input permutation (modified in-place).
 * @param {Number} n The size of the input permutation.
 * @returns {Boolean} Whether the input permutation is
 * __NOT__ the last for its elements.
 */
function _next(sigma, n) {

	var i = n - 1;

	while (i > 0) {

		--i;

		if (sigma[i] > sigma[i + 1]) continue;

		var j = n - 1;

		while (sigma[j] < sigma[i]) {
			--j;
		}(0, _transpose2._transpose)(i, j, sigma);

		(0, _reverse2._reverse)(sigma, i + 1, n);

		return true;
	}

	return false;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9fbmV4dC5qcyJdLCJuYW1lcyI6WyJfbmV4dCIsInNpZ21hIiwibiIsImkiLCJqIl0sIm1hcHBpbmdzIjoiOzs7OztRQWFnQkEsSyxHQUFBQSxLOztBQWJoQjs7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQVVPLFNBQVNBLEtBQVQsQ0FBaUJDLEtBQWpCLEVBQXlCQyxDQUF6QixFQUE2Qjs7QUFFbkMsS0FBSUMsSUFBSUQsSUFBSSxDQUFaOztBQUVBLFFBQVFDLElBQUksQ0FBWixFQUFnQjs7QUFFZixJQUFFQSxDQUFGOztBQUVBLE1BQUtGLE1BQU1FLENBQU4sSUFBV0YsTUFBTUUsSUFBRSxDQUFSLENBQWhCLEVBQTZCOztBQUU3QixNQUFJQyxJQUFJRixJQUFJLENBQVo7O0FBRUEsU0FBUUQsTUFBTUcsQ0FBTixJQUFXSCxNQUFNRSxDQUFOLENBQW5CO0FBQThCLEtBQUVDLENBQUY7QUFBOUIsR0FFQSw0QkFBWUQsQ0FBWixFQUFnQkMsQ0FBaEIsRUFBb0JILEtBQXBCOztBQUVBLDBCQUFVQSxLQUFWLEVBQWtCRSxJQUFJLENBQXRCLEVBQTBCRCxDQUExQjs7QUFFQSxTQUFPLElBQVA7QUFFQTs7QUFFRCxRQUFPLEtBQVA7QUFFQSIsImZpbGUiOiJfbmV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF90cmFuc3Bvc2UgfSBmcm9tICcuL190cmFuc3Bvc2UnIDtcbmltcG9ydCB7IF9yZXZlcnNlIH0gZnJvbSAnLi9fcmV2ZXJzZScgO1xuXG4vKipcbiAqIFVwZGF0ZXMgdGhlIGlucHV0IHBlcm11dGF0aW9uIHRvIHRoZSBuZXh0IG9uZSBfX19pbi1wbGFjZV9fXy4gUmV0dXJucyB0cnVlXG4gKiB1bmxlc3MgdGhlIGlucHV0IHBlcm11dGF0aW9uIGlzIHRoZSBsYXN0IGZvciBpdHMgZWxlbWVudHMuIEluIHRoYXQgY2FzZSwgdGhlXG4gKiBpbnB1dCBwZXJtdXRhdGlvbiByZW1haW5zIHVudG91Y2hlZC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBzaWdtYSBUaGUgaW5wdXQgcGVybXV0YXRpb24gKG1vZGlmaWVkIGluLXBsYWNlKS5cbiAqIEBwYXJhbSB7TnVtYmVyfSBuIFRoZSBzaXplIG9mIHRoZSBpbnB1dCBwZXJtdXRhdGlvbi5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBXaGV0aGVyIHRoZSBpbnB1dCBwZXJtdXRhdGlvbiBpc1xuICogX19OT1RfXyB0aGUgbGFzdCBmb3IgaXRzIGVsZW1lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gX25leHQgKCBzaWdtYSAsIG4gKSB7XG5cblx0bGV0IGkgPSBuIC0gMSA7XG5cblx0d2hpbGUgKCBpID4gMCApIHtcblxuXHRcdC0taSA7XG5cblx0XHRpZiAoIHNpZ21hW2ldID4gc2lnbWFbaSsxXSApIGNvbnRpbnVlIDtcblxuXHRcdGxldCBqID0gbiAtIDEgO1xuXG5cdFx0d2hpbGUgKCBzaWdtYVtqXSA8IHNpZ21hW2ldICkgLS1qIDtcblxuXHRcdF90cmFuc3Bvc2UoIGkgLCBqICwgc2lnbWEgKSA7XG5cblx0XHRfcmV2ZXJzZSggc2lnbWEgLCBpICsgMSAsIG4gKSA7XG5cblx0XHRyZXR1cm4gdHJ1ZSA7XG5cblx0fVxuXG5cdHJldHVybiBmYWxzZSA7XG5cbn1cblxuIl19