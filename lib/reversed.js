'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reversed = reversed;

var _copy = require('./copy');

var _reverse = require('./reverse');

/**
 * Outputs a new permutation that is the reverse of the input permutation.
 *
 * @param {Array} sigma The input permutation.
 * @returns {Array} The reverse of the input permutation.
 */
function reversed(sigma) {

  var rho = (0, _copy.copy)(sigma);

  (0, _reverse.reverse)(rho);

  return rho;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXZlcnNlZC5qcyJdLCJuYW1lcyI6WyJyZXZlcnNlZCIsInNpZ21hIiwicmhvIl0sIm1hcHBpbmdzIjoiOzs7OztRQVNnQkEsUSxHQUFBQSxROztBQVRoQjs7QUFDQTs7QUFFQTs7Ozs7O0FBTU8sU0FBU0EsUUFBVCxDQUFvQkMsS0FBcEIsRUFBNEI7O0FBRWxDLE1BQU1DLE1BQU0sZ0JBQU1ELEtBQU4sQ0FBWjs7QUFFQSx3QkFBU0MsR0FBVDs7QUFFQSxTQUFPQSxHQUFQO0FBRUEiLCJmaWxlIjoicmV2ZXJzZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb3B5IH0gZnJvbSAnLi9jb3B5JyA7XG5pbXBvcnQgeyByZXZlcnNlIH0gZnJvbSAnLi9yZXZlcnNlJyA7XG5cbi8qKlxuICogT3V0cHV0cyBhIG5ldyBwZXJtdXRhdGlvbiB0aGF0IGlzIHRoZSByZXZlcnNlIG9mIHRoZSBpbnB1dCBwZXJtdXRhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBzaWdtYSBUaGUgaW5wdXQgcGVybXV0YXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFRoZSByZXZlcnNlIG9mIHRoZSBpbnB1dCBwZXJtdXRhdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJldmVyc2VkICggc2lnbWEgKSB7XG5cblx0Y29uc3QgcmhvID0gY29weSggc2lnbWEgKSA7XG5cblx0cmV2ZXJzZSggcmhvICkgO1xuXG5cdHJldHVybiByaG8gO1xuXG59XG5cbiJdfQ==