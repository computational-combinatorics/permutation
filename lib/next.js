'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.next = next;

var _copy = require('./copy');

var _next2 = require('./_next');

var _reverse = require('./reverse');

/**
 * Computes the permutation that follows the input permutation. If the input
 * permutation is the last for its elements, return the first for its elements.
 * The input permutation is not altered.
 *
 * @param {Array} sigma The input permutation.
 * @returns {Array} The next permutation.
 */
function next(sigma) {

  var rho = (0, _copy.copy)(sigma);

  if (!(0, _next2._next)(rho, rho.length)) (0, _reverse.reverse)(rho);

  return rho;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9uZXh0LmpzIl0sIm5hbWVzIjpbIm5leHQiLCJzaWdtYSIsInJobyIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFZZ0JBLEksR0FBQUEsSTs7QUFaaEI7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7O0FBUU8sU0FBU0EsSUFBVCxDQUFnQkMsS0FBaEIsRUFBd0I7O0FBRTlCLE1BQU1DLE1BQU0sZ0JBQU1ELEtBQU4sQ0FBWjs7QUFFQSxNQUFLLENBQUUsa0JBQU9DLEdBQVAsRUFBYUEsSUFBSUMsTUFBakIsQ0FBUCxFQUFtQyxzQkFBU0QsR0FBVDs7QUFFbkMsU0FBT0EsR0FBUDtBQUVBIiwiZmlsZSI6Im5leHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb3B5IH0gZnJvbSAnLi9jb3B5JyA7XG5pbXBvcnQgeyBfbmV4dCB9IGZyb20gJy4vX25leHQnIDtcbmltcG9ydCB7IHJldmVyc2UgfSBmcm9tICcuL3JldmVyc2UnIDtcblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgcGVybXV0YXRpb24gdGhhdCBmb2xsb3dzIHRoZSBpbnB1dCBwZXJtdXRhdGlvbi4gSWYgdGhlIGlucHV0XG4gKiBwZXJtdXRhdGlvbiBpcyB0aGUgbGFzdCBmb3IgaXRzIGVsZW1lbnRzLCByZXR1cm4gdGhlIGZpcnN0IGZvciBpdHMgZWxlbWVudHMuXG4gKiBUaGUgaW5wdXQgcGVybXV0YXRpb24gaXMgbm90IGFsdGVyZWQuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gc2lnbWEgVGhlIGlucHV0IHBlcm11dGF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBUaGUgbmV4dCBwZXJtdXRhdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5leHQgKCBzaWdtYSApIHtcblxuXHRjb25zdCByaG8gPSBjb3B5KCBzaWdtYSApIDtcblxuXHRpZiAoICEgX25leHQoIHJobyAsIHJoby5sZW5ndGggKSApIHJldmVyc2UoIHJobyApIDtcblxuXHRyZXR1cm4gcmhvIDtcblxufVxuXG4iXX0=