'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._permutations = _permutations;

var _next2 = require('./_next');

var _marked = [_permutations].map(regeneratorRuntime.mark);

/**
 * Yields all permutations starting from a given one and ending at the last
 * permutation.
 *
 * @param {Array} sigma The starting permutation.
 * @param {Number} n The size of the permutation.
 * @returns {Iterator} Iterator over all permutations between the starting one
 * and the last permutation on its elements.
 */
function _permutations(sigma, n) {
  return regeneratorRuntime.wrap(function _permutations$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return sigma;

        case 2:
          if ((0, _next2._next)(sigma, n)) {
            _context.next = 0;
            break;
          }

        case 3:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9fcGVybXV0YXRpb25zLmpzIl0sIm5hbWVzIjpbIl9wZXJtdXRhdGlvbnMiLCJzaWdtYSIsIm4iXSwibWFwcGluZ3MiOiI7Ozs7O1FBV2lCQSxhLEdBQUFBLGE7O0FBWGpCOztlQVdpQkEsYTs7QUFUakI7Ozs7Ozs7OztBQVNPLFNBQVVBLGFBQVYsQ0FBMEJDLEtBQTFCLEVBQWtDQyxDQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFFS0QsS0FGTDs7QUFBQTtBQUFBLGNBRXVCLGtCQUFPQSxLQUFQLEVBQWVDLENBQWYsQ0FGdkI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiX3Blcm11dGF0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9uZXh0IH0gZnJvbSAnLi9fbmV4dCcgO1xuXG4vKipcbiAqIFlpZWxkcyBhbGwgcGVybXV0YXRpb25zIHN0YXJ0aW5nIGZyb20gYSBnaXZlbiBvbmUgYW5kIGVuZGluZyBhdCB0aGUgbGFzdFxuICogcGVybXV0YXRpb24uXG4gKlxuICogQHBhcmFtIHtBcnJheX0gc2lnbWEgVGhlIHN0YXJ0aW5nIHBlcm11dGF0aW9uLlxuICogQHBhcmFtIHtOdW1iZXJ9IG4gVGhlIHNpemUgb2YgdGhlIHBlcm11dGF0aW9uLlxuICogQHJldHVybnMge0l0ZXJhdG9yfSBJdGVyYXRvciBvdmVyIGFsbCBwZXJtdXRhdGlvbnMgYmV0d2VlbiB0aGUgc3RhcnRpbmcgb25lXG4gKiBhbmQgdGhlIGxhc3QgcGVybXV0YXRpb24gb24gaXRzIGVsZW1lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24qIF9wZXJtdXRhdGlvbnMgKCBzaWdtYSAsIG4gKSB7XG5cblx0ZG8geyB5aWVsZCBzaWdtYSA7IH0gd2hpbGUgKCBfbmV4dCggc2lnbWEgLCBuICkgKSA7XG5cbn1cblxuIl19