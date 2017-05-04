'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transpositions = transpositions;

var _transpositions2 = require('./_transpositions');

var _cycles = require('./cycles');

var _used = require('./used');

var _marked = [transpositions].map(regeneratorRuntime.mark);

/**
 * Computes the transposition decomposition of the input permutation as an
 * Iterator.
 *
 * @param {Array} sigma The input permutation.
 * @returns {Iterator} The transposition decomposition of <code>sigma</code>.
 */
function transpositions(sigma) {
  return regeneratorRuntime.wrap(function transpositions$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.delegateYield((0, _transpositions2._transpositions)((0, _cycles.cycles)(sigma, (0, _used.used)(sigma.length))), 't0', 1);

        case 1:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90cmFuc3Bvc2l0aW9ucy5qcyJdLCJuYW1lcyI6WyJ0cmFuc3Bvc2l0aW9ucyIsInNpZ21hIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7OztRQVdpQkEsYyxHQUFBQSxjOztBQVhqQjs7QUFDQTs7QUFDQTs7ZUFTaUJBLGM7O0FBUGpCOzs7Ozs7O0FBT08sU0FBVUEsY0FBVixDQUEyQkMsS0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdDQUVDLHNDQUFpQixvQkFBUUEsS0FBUixFQUFnQixnQkFBTUEsTUFBTUMsTUFBWixDQUFoQixDQUFqQixDQUZEOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InRyYW5zcG9zaXRpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX3RyYW5zcG9zaXRpb25zIH0gZnJvbSAnLi9fdHJhbnNwb3NpdGlvbnMnIDtcbmltcG9ydCB7IGN5Y2xlcyB9IGZyb20gJy4vY3ljbGVzJyA7XG5pbXBvcnQgeyB1c2VkIH0gZnJvbSAnLi91c2VkJyA7XG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIHRyYW5zcG9zaXRpb24gZGVjb21wb3NpdGlvbiBvZiB0aGUgaW5wdXQgcGVybXV0YXRpb24gYXMgYW5cbiAqIEl0ZXJhdG9yLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHNpZ21hIFRoZSBpbnB1dCBwZXJtdXRhdGlvbi5cbiAqIEByZXR1cm5zIHtJdGVyYXRvcn0gVGhlIHRyYW5zcG9zaXRpb24gZGVjb21wb3NpdGlvbiBvZiA8Y29kZT5zaWdtYTwvY29kZT4uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiogdHJhbnNwb3NpdGlvbnMgKCBzaWdtYSApIHtcblxuXHR5aWVsZCogX3RyYW5zcG9zaXRpb25zKCBjeWNsZXMoIHNpZ21hICwgdXNlZCggc2lnbWEubGVuZ3RoICkgKSApIDtcblxufVxuXG4iXX0=