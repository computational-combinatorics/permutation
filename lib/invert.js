'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.invert = invert;

var _permutation = require('./permutation');

var _invert2 = require('./_invert');

/**
 * Computes the inverse <code>tau</code> of the input permutation
 * <code>sigma</code>, that is, the permutation such that <code>compose(sigma,
 * tau)</code> returns <code>identity(sigma.length)</code>. Alternatives
 * include using {@link _invertcycles} and {@link itranspositions}.
 *
 * @param {Array} sigma The input permutation.
 * @returns {Array} The inverse of the input permutation.
 */
function invert(sigma) {

  var tau = (0, _permutation.permutation)(sigma.length);

  (0, _invert2._invert)(sigma, sigma.length, tau);

  return tau;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbnZlcnQuanMiXSwibmFtZXMiOlsiaW52ZXJ0Iiwic2lnbWEiLCJ0YXUiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7O1FBWWdCQSxNLEdBQUFBLE07O0FBWmhCOztBQUNBOztBQUVBOzs7Ozs7Ozs7QUFTTyxTQUFTQSxNQUFULENBQWtCQyxLQUFsQixFQUEwQjs7QUFFaEMsTUFBTUMsTUFBTSw4QkFBYUQsTUFBTUUsTUFBbkIsQ0FBWjs7QUFFQSx3QkFBU0YsS0FBVCxFQUFpQkEsTUFBTUUsTUFBdkIsRUFBZ0NELEdBQWhDOztBQUVBLFNBQU9BLEdBQVA7QUFFQSIsImZpbGUiOiJpbnZlcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwZXJtdXRhdGlvbiB9IGZyb20gJy4vcGVybXV0YXRpb24nIDtcbmltcG9ydCB7IF9pbnZlcnQgfSBmcm9tICcuL19pbnZlcnQnIDtcblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgaW52ZXJzZSA8Y29kZT50YXU8L2NvZGU+IG9mIHRoZSBpbnB1dCBwZXJtdXRhdGlvblxuICogPGNvZGU+c2lnbWE8L2NvZGU+LCB0aGF0IGlzLCB0aGUgcGVybXV0YXRpb24gc3VjaCB0aGF0IDxjb2RlPmNvbXBvc2Uoc2lnbWEsXG4gKiB0YXUpPC9jb2RlPiByZXR1cm5zIDxjb2RlPmlkZW50aXR5KHNpZ21hLmxlbmd0aCk8L2NvZGU+LiBBbHRlcm5hdGl2ZXNcbiAqIGluY2x1ZGUgdXNpbmcge0BsaW5rIF9pbnZlcnRjeWNsZXN9IGFuZCB7QGxpbmsgaXRyYW5zcG9zaXRpb25zfS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBzaWdtYSBUaGUgaW5wdXQgcGVybXV0YXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFRoZSBpbnZlcnNlIG9mIHRoZSBpbnB1dCBwZXJtdXRhdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludmVydCAoIHNpZ21hICkge1xuXG5cdGNvbnN0IHRhdSA9IHBlcm11dGF0aW9uKCBzaWdtYS5sZW5ndGggKSA7XG5cblx0X2ludmVydCggc2lnbWEgLCBzaWdtYS5sZW5ndGggLCB0YXUgKSA7XG5cblx0cmV0dXJuIHRhdSA7XG5cbn1cbiJdfQ==