'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bitreversal = bitreversal;

var _permutation = require('./permutation');

var _bitreversal2 = require('./_bitreversal');

/**
 * Returns a newly allocated array containing the bitreversal permutation for
 * input <code>n</code> items. Note that <code>n</code> MUST be a power of
 * <code>2</code>.
 *
 * @param {Number} n The size of the permutation, must be a power of
 * <code>2</code>.
 * @returns {Array} The bitreversal permutation of size <code>n</code>.
 */
function bitreversal(n) {

  var sigma = (0, _permutation.permutation)(n);

  (0, _bitreversal2._bitreversal)(sigma, n);

  return sigma;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9iaXRyZXZlcnNhbC5qcyJdLCJuYW1lcyI6WyJiaXRyZXZlcnNhbCIsIm4iLCJzaWdtYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFZZ0JBLFcsR0FBQUEsVzs7QUFaaEI7O0FBQ0E7O0FBRUE7Ozs7Ozs7OztBQVNPLFNBQVNBLFdBQVQsQ0FBdUJDLENBQXZCLEVBQTJCOztBQUVqQyxNQUFNQyxRQUFRLDhCQUFhRCxDQUFiLENBQWQ7O0FBRUEsa0NBQWNDLEtBQWQsRUFBc0JELENBQXRCOztBQUVBLFNBQU9DLEtBQVA7QUFFQSIsImZpbGUiOiJiaXRyZXZlcnNhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBlcm11dGF0aW9uIH0gZnJvbSAnLi9wZXJtdXRhdGlvbicgO1xuaW1wb3J0IHsgX2JpdHJldmVyc2FsIH0gZnJvbSAnLi9fYml0cmV2ZXJzYWwnIDtcblxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3bHkgYWxsb2NhdGVkIGFycmF5IGNvbnRhaW5pbmcgdGhlIGJpdHJldmVyc2FsIHBlcm11dGF0aW9uIGZvclxuICogaW5wdXQgPGNvZGU+bjwvY29kZT4gaXRlbXMuIE5vdGUgdGhhdCA8Y29kZT5uPC9jb2RlPiBNVVNUIGJlIGEgcG93ZXIgb2ZcbiAqIDxjb2RlPjI8L2NvZGU+LlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBuIFRoZSBzaXplIG9mIHRoZSBwZXJtdXRhdGlvbiwgbXVzdCBiZSBhIHBvd2VyIG9mXG4gKiA8Y29kZT4yPC9jb2RlPi5cbiAqIEByZXR1cm5zIHtBcnJheX0gVGhlIGJpdHJldmVyc2FsIHBlcm11dGF0aW9uIG9mIHNpemUgPGNvZGU+bjwvY29kZT4uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiaXRyZXZlcnNhbCAoIG4gKSB7XG5cblx0Y29uc3Qgc2lnbWEgPSBwZXJtdXRhdGlvbiggbiApIDtcblxuXHRfYml0cmV2ZXJzYWwoIHNpZ21hICwgbiApIDtcblxuXHRyZXR1cm4gc2lnbWEgO1xuXG59XG5cbiJdfQ==