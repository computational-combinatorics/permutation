'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transpose = transpose;

var _copy = require('./copy');

var _transpose2 = require('./_transpose');

/**
 * Creates a copy of the input permutation, applies an input transpose,
 * then returns the result.
 *
 * @param {Array} sigma The input permutation.
 * @param {Number} a The first index of the transpose.
 * @param {Number} b The second index of the transpose.
 * @returns {Array} The result.
 */
function transpose(sigma, a, b) {

  var rho = (0, _copy.copy)(sigma);

  (0, _transpose2._transpose)(a, b, rho);

  return rho;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90cmFuc3Bvc2UuanMiXSwibmFtZXMiOlsidHJhbnNwb3NlIiwic2lnbWEiLCJhIiwiYiIsInJobyJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFZZ0JBLFMsR0FBQUEsUzs7QUFaaEI7O0FBQ0E7O0FBRUE7Ozs7Ozs7OztBQVNPLFNBQVNBLFNBQVQsQ0FBcUJDLEtBQXJCLEVBQTZCQyxDQUE3QixFQUFpQ0MsQ0FBakMsRUFBcUM7O0FBRTNDLE1BQU1DLE1BQU0sZ0JBQU1ILEtBQU4sQ0FBWjs7QUFFQSw4QkFBWUMsQ0FBWixFQUFnQkMsQ0FBaEIsRUFBb0JDLEdBQXBCOztBQUVBLFNBQU9BLEdBQVA7QUFFQSIsImZpbGUiOiJ0cmFuc3Bvc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb3B5IH0gZnJvbSAnLi9jb3B5JyA7XG5pbXBvcnQgeyBfdHJhbnNwb3NlIH0gZnJvbSAnLi9fdHJhbnNwb3NlJyA7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIGlucHV0IHBlcm11dGF0aW9uLCBhcHBsaWVzIGFuIGlucHV0IHRyYW5zcG9zZSxcbiAqIHRoZW4gcmV0dXJucyB0aGUgcmVzdWx0LlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHNpZ21hIFRoZSBpbnB1dCBwZXJtdXRhdGlvbi5cbiAqIEBwYXJhbSB7TnVtYmVyfSBhIFRoZSBmaXJzdCBpbmRleCBvZiB0aGUgdHJhbnNwb3NlLlxuICogQHBhcmFtIHtOdW1iZXJ9IGIgVGhlIHNlY29uZCBpbmRleCBvZiB0aGUgdHJhbnNwb3NlLlxuICogQHJldHVybnMge0FycmF5fSBUaGUgcmVzdWx0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNwb3NlICggc2lnbWEgLCBhICwgYiApIHtcblxuXHRjb25zdCByaG8gPSBjb3B5KCBzaWdtYSApIDtcblxuXHRfdHJhbnNwb3NlKCBhICwgYiAsIHJobyApIDtcblxuXHRyZXR1cm4gcmhvIDtcblxufVxuXG4iXX0=