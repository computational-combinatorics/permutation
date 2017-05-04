"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._invert = _invert;
/**
 * Fills an input array with the inverse <code>rho</code> of the input
 * permutation <code>sigma</code>, that is, the permutation such that
 * <code>compose(rho, sigma)</code> returns
 * <code>identity(sigma.length)</code>.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9faW52ZXJ0LmpzIl0sIm5hbWVzIjpbIl9pbnZlcnQiLCJzaWdtYSIsIm4iLCJ0YXUiLCJpIl0sIm1hcHBpbmdzIjoiOzs7OztRQVVnQkEsTyxHQUFBQSxPO0FBVmhCOzs7Ozs7Ozs7O0FBVU8sU0FBU0EsT0FBVCxDQUFtQkMsS0FBbkIsRUFBMkJDLENBQTNCLEVBQStCQyxHQUEvQixFQUFxQzs7QUFFM0MsT0FBTSxJQUFJQyxJQUFJLENBQWQsRUFBa0JBLElBQUlGLENBQXRCLEVBQTBCLEVBQUVFLENBQTVCO0FBQWdDRCxRQUFJRixNQUFNRyxDQUFOLENBQUosSUFBZ0JBLENBQWhCO0FBQWhDO0FBRUEiLCJmaWxlIjoiX2ludmVydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRmlsbHMgYW4gaW5wdXQgYXJyYXkgd2l0aCB0aGUgaW52ZXJzZSA8Y29kZT5yaG88L2NvZGU+IG9mIHRoZSBpbnB1dFxuICogcGVybXV0YXRpb24gPGNvZGU+c2lnbWE8L2NvZGU+LCB0aGF0IGlzLCB0aGUgcGVybXV0YXRpb24gc3VjaCB0aGF0XG4gKiA8Y29kZT5jb21wb3NlKHJobywgc2lnbWEpPC9jb2RlPiByZXR1cm5zXG4gKiA8Y29kZT5pZGVudGl0eShzaWdtYS5sZW5ndGgpPC9jb2RlPi5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBzaWdtYSBUaGUgaW5wdXQgcGVybXV0YXRpb24uXG4gKiBAcGFyYW0ge051bWJlcn0gbiBUaGUgc2l6ZSBvZiB0aGUgaW5wdXQgcGVybXV0YXRpb24uXG4gKiBAcGFyYW0ge0FycmF5fSB0YXUgVGhlIGFycmF5IHdoZXJlIHRvIHB1dCB0aGUgaW52ZXJzZSBvZiB0aGUgaW5wdXQgcGVybXV0YXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfaW52ZXJ0ICggc2lnbWEgLCBuICwgdGF1ICkge1xuXG5cdGZvciAoIGxldCBpID0gMCA7IGkgPCBuIDsgKytpICkgdGF1W3NpZ21hW2ldXSA9IGkgO1xuXG59XG5cbiJdfQ==