'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.copy = copy;

var _permutation = require('./permutation');

var _copy2 = require('./_copy');

/**
 * Make a copy of the input permutation.
 *
 * @param {Array} sigma The input permutation.
 * @returns {Array} The copy.
 */
function copy(sigma) {

  var rho = (0, _permutation.permutation)(sigma.length);

  (0, _copy2._copy)(sigma, sigma.length, rho);

  return rho;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb3B5LmpzIl0sIm5hbWVzIjpbImNvcHkiLCJzaWdtYSIsInJobyIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFTZ0JBLEksR0FBQUEsSTs7QUFUaEI7O0FBQ0E7O0FBRUE7Ozs7OztBQU1PLFNBQVNBLElBQVQsQ0FBZ0JDLEtBQWhCLEVBQXdCOztBQUU5QixNQUFNQyxNQUFNLDhCQUFhRCxNQUFNRSxNQUFuQixDQUFaOztBQUVBLG9CQUFPRixLQUFQLEVBQWVBLE1BQU1FLE1BQXJCLEVBQThCRCxHQUE5Qjs7QUFFQSxTQUFPQSxHQUFQO0FBRUEiLCJmaWxlIjoiY29weS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBlcm11dGF0aW9uIH0gZnJvbSAnLi9wZXJtdXRhdGlvbicgO1xuaW1wb3J0IHsgX2NvcHkgfSBmcm9tICcuL19jb3B5JyA7XG5cbi8qKlxuICogTWFrZSBhIGNvcHkgb2YgdGhlIGlucHV0IHBlcm11dGF0aW9uLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHNpZ21hIFRoZSBpbnB1dCBwZXJtdXRhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gVGhlIGNvcHkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3B5ICggc2lnbWEgKSB7XG5cblx0Y29uc3QgcmhvID0gcGVybXV0YXRpb24oIHNpZ21hLmxlbmd0aCApIDtcblxuXHRfY29weSggc2lnbWEgLCBzaWdtYS5sZW5ndGggLCByaG8gKSA7XG5cblx0cmV0dXJuIHJobyA7XG5cbn1cblxuIl19