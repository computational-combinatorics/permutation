"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._copy = _copy;

/**
 * Copy an input permutation to an output array.
 *
 * @param {Array} sigma The input permutation.
 * @param {Number} n The size of the input permutation to copy.
 * @param {Array} tau The output array.
 */
function _copy(sigma, n, tau) {

  for (var i = 0; i < n; ++i) {
    tau[i] = sigma[i];
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9fY29weS5qcyJdLCJuYW1lcyI6WyJfY29weSIsInNpZ21hIiwibiIsInRhdSIsImkiXSwibWFwcGluZ3MiOiI7Ozs7O1FBUWdCQSxLLEdBQUFBLEs7O0FBUGhCOzs7Ozs7O0FBT08sU0FBU0EsS0FBVCxDQUFpQkMsS0FBakIsRUFBeUJDLENBQXpCLEVBQTZCQyxHQUE3QixFQUFtQzs7QUFFekMsT0FBTSxJQUFJQyxJQUFJLENBQWQsRUFBa0JBLElBQUlGLENBQXRCLEVBQTBCLEVBQUVFLENBQTVCO0FBQWdDRCxRQUFJQyxDQUFKLElBQVNILE1BQU1HLENBQU4sQ0FBVDtBQUFoQztBQUVBIiwiZmlsZSI6Il9jb3B5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIENvcHkgYW4gaW5wdXQgcGVybXV0YXRpb24gdG8gYW4gb3V0cHV0IGFycmF5LlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHNpZ21hIFRoZSBpbnB1dCBwZXJtdXRhdGlvbi5cbiAqIEBwYXJhbSB7TnVtYmVyfSBuIFRoZSBzaXplIG9mIHRoZSBpbnB1dCBwZXJtdXRhdGlvbiB0byBjb3B5LlxuICogQHBhcmFtIHtBcnJheX0gdGF1IFRoZSBvdXRwdXQgYXJyYXkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfY29weSAoIHNpZ21hICwgbiAsIHRhdSApIHtcblxuXHRmb3IgKCBsZXQgaSA9IDAgOyBpIDwgbiA7ICsraSApIHRhdVtpXSA9IHNpZ21hW2ldIDtcblxufVxuXG4iXX0=