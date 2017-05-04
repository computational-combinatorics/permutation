"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._invert = _invert;
/**
 * Fills an input array with the inverse <code>tau</code> of the input
 * permutation <code>sigma</code>, that is, the permutation such that
 * <code>compose(sigma, tau)</code> returns
 * <code>identity(sigma.length)</code>. See {@link invert} for the higher level
 * API.
 *
 * @param {Array} sigma The input permutation.
 * @param {Number} n The size of the input permutation.
 * @param {Array} tau The array where to put the inverse of the input permutation.
 */
function _invert(sigma, n, tau) {

  for (var i = 0; i < n; ++i) {
    tau[sigma[i]] = i;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9faW52ZXJ0LmpzIl0sIm5hbWVzIjpbIl9pbnZlcnQiLCJzaWdtYSIsIm4iLCJ0YXUiLCJpIl0sIm1hcHBpbmdzIjoiOzs7OztRQVdnQkEsTyxHQUFBQSxPO0FBWGhCOzs7Ozs7Ozs7OztBQVdPLFNBQVNBLE9BQVQsQ0FBbUJDLEtBQW5CLEVBQTJCQyxDQUEzQixFQUErQkMsR0FBL0IsRUFBcUM7O0FBRTNDLE9BQU0sSUFBSUMsSUFBSSxDQUFkLEVBQWtCQSxJQUFJRixDQUF0QixFQUEwQixFQUFFRSxDQUE1QjtBQUFnQ0QsUUFBSUYsTUFBTUcsQ0FBTixDQUFKLElBQWdCQSxDQUFoQjtBQUFoQztBQUVBIiwiZmlsZSI6Il9pbnZlcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEZpbGxzIGFuIGlucHV0IGFycmF5IHdpdGggdGhlIGludmVyc2UgPGNvZGU+dGF1PC9jb2RlPiBvZiB0aGUgaW5wdXRcbiAqIHBlcm11dGF0aW9uIDxjb2RlPnNpZ21hPC9jb2RlPiwgdGhhdCBpcywgdGhlIHBlcm11dGF0aW9uIHN1Y2ggdGhhdFxuICogPGNvZGU+Y29tcG9zZShzaWdtYSwgdGF1KTwvY29kZT4gcmV0dXJuc1xuICogPGNvZGU+aWRlbnRpdHkoc2lnbWEubGVuZ3RoKTwvY29kZT4uIFNlZSB7QGxpbmsgaW52ZXJ0fSBmb3IgdGhlIGhpZ2hlciBsZXZlbFxuICogQVBJLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHNpZ21hIFRoZSBpbnB1dCBwZXJtdXRhdGlvbi5cbiAqIEBwYXJhbSB7TnVtYmVyfSBuIFRoZSBzaXplIG9mIHRoZSBpbnB1dCBwZXJtdXRhdGlvbi5cbiAqIEBwYXJhbSB7QXJyYXl9IHRhdSBUaGUgYXJyYXkgd2hlcmUgdG8gcHV0IHRoZSBpbnZlcnNlIG9mIHRoZSBpbnB1dCBwZXJtdXRhdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9pbnZlcnQgKCBzaWdtYSAsIG4gLCB0YXUgKSB7XG5cblx0Zm9yICggbGV0IGkgPSAwIDsgaSA8IG4gOyArK2kgKSB0YXVbc2lnbWFbaV1dID0gaSA7XG5cbn1cbiJdfQ==