'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.invert = invert;

var _permutation = require('./permutation');

var _invert2 = require('./_invert');

/**
 * Computes the inverse <code>rho</code> of the input permutation
 * <code>sigma</code>, that is, the permutation such that <code>compose(rho,
 * sigma)</code> returns <code>identity(sigma.length)</code>.
 *
 * @param {Array} sigma The input permutation.
 * @returns {Array} The inverse of the input permutation.
 */
function invert(sigma) {

  var rho = (0, _permutation.permutation)(sigma.length);

  (0, _invert2._invert)(sigma, sigma.length, rho);

  return rho;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbnZlcnQuanMiXSwibmFtZXMiOlsiaW52ZXJ0Iiwic2lnbWEiLCJyaG8iLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7O1FBV2dCQSxNLEdBQUFBLE07O0FBWGhCOztBQUNBOztBQUVBOzs7Ozs7OztBQVFPLFNBQVNBLE1BQVQsQ0FBa0JDLEtBQWxCLEVBQTBCOztBQUVoQyxNQUFNQyxNQUFNLDhCQUFhRCxNQUFNRSxNQUFuQixDQUFaOztBQUVBLHdCQUFTRixLQUFULEVBQWlCQSxNQUFNRSxNQUF2QixFQUFnQ0QsR0FBaEM7O0FBRUEsU0FBT0EsR0FBUDtBQUVBIiwiZmlsZSI6ImludmVydC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBlcm11dGF0aW9uIH0gZnJvbSAnLi9wZXJtdXRhdGlvbicgO1xuaW1wb3J0IHsgX2ludmVydCB9IGZyb20gJy4vX2ludmVydCcgO1xuXG4vKipcbiAqIENvbXB1dGVzIHRoZSBpbnZlcnNlIDxjb2RlPnJobzwvY29kZT4gb2YgdGhlIGlucHV0IHBlcm11dGF0aW9uXG4gKiA8Y29kZT5zaWdtYTwvY29kZT4sIHRoYXQgaXMsIHRoZSBwZXJtdXRhdGlvbiBzdWNoIHRoYXQgPGNvZGU+Y29tcG9zZShyaG8sXG4gKiBzaWdtYSk8L2NvZGU+IHJldHVybnMgPGNvZGU+aWRlbnRpdHkoc2lnbWEubGVuZ3RoKTwvY29kZT4uXG4gKlxuICogQHBhcmFtIHtBcnJheX0gc2lnbWEgVGhlIGlucHV0IHBlcm11dGF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBUaGUgaW52ZXJzZSBvZiB0aGUgaW5wdXQgcGVybXV0YXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnQgKCBzaWdtYSApIHtcblxuXHRjb25zdCByaG8gPSBwZXJtdXRhdGlvbiggc2lnbWEubGVuZ3RoICkgO1xuXG5cdF9pbnZlcnQoIHNpZ21hICwgc2lnbWEubGVuZ3RoICwgcmhvICkgO1xuXG5cdHJldHVybiByaG8gO1xuXG59XG5cbiJdfQ==