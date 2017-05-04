"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._transposition = _transposition;

/**
 * Helper method for {@link transposition}.
 * Transposes <code>a</code> with <code>b</code> in <code>sigma</code> provided
 * <code>sigma[a] === a</code> and <code>sigma[b] === b</code>.
 *
 * @param {Number} a First index.
 * @param {Number} b Second index.
 * @param {Array} sigma Input permutation.
 */
function _transposition(a, b, sigma) {

  sigma[a] = b;
  sigma[b] = a;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9fdHJhbnNwb3NpdGlvbi5qcyJdLCJuYW1lcyI6WyJfdHJhbnNwb3NpdGlvbiIsImEiLCJiIiwic2lnbWEiXSwibWFwcGluZ3MiOiI7Ozs7O1FBVWdCQSxjLEdBQUFBLGM7O0FBVGhCOzs7Ozs7Ozs7QUFTTyxTQUFTQSxjQUFULENBQTBCQyxDQUExQixFQUE4QkMsQ0FBOUIsRUFBa0NDLEtBQWxDLEVBQTBDOztBQUVoREEsUUFBTUYsQ0FBTixJQUFXQyxDQUFYO0FBQ0FDLFFBQU1ELENBQU4sSUFBV0QsQ0FBWDtBQUVBIiwiZmlsZSI6Il90cmFuc3Bvc2l0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIEhlbHBlciBtZXRob2QgZm9yIHtAbGluayB0cmFuc3Bvc2l0aW9ufS5cbiAqIFRyYW5zcG9zZXMgPGNvZGU+YTwvY29kZT4gd2l0aCA8Y29kZT5iPC9jb2RlPiBpbiA8Y29kZT5zaWdtYTwvY29kZT4gcHJvdmlkZWRcbiAqIDxjb2RlPnNpZ21hW2FdID09PSBhPC9jb2RlPiBhbmQgPGNvZGU+c2lnbWFbYl0gPT09IGI8L2NvZGU+LlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBhIEZpcnN0IGluZGV4LlxuICogQHBhcmFtIHtOdW1iZXJ9IGIgU2Vjb25kIGluZGV4LlxuICogQHBhcmFtIHtBcnJheX0gc2lnbWEgSW5wdXQgcGVybXV0YXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfdHJhbnNwb3NpdGlvbiAoIGEgLCBiICwgc2lnbWEgKSB7XG5cblx0c2lnbWFbYV0gPSBiIDtcblx0c2lnbWFbYl0gPSBhIDtcblxufVxuXG4iXX0=