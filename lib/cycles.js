'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cycles = cycles;

var _cycles2 = require('./_cycles');

var _used = require('./used');

var _marked = [cycles].map(regeneratorRuntime.mark);

/**
 * Computes a cycle decomposition of the input permutation. For a given input,
 * the algorithm used will always yield the same cycle decomposition.
 * See {@link _cycles} for implementation.
 *
 * @param {Array} sigma The input permutation.
 * @returns {Iterator} The cycles <code>[a, [b, c, ...]]</code> for sigma.
 */
function cycles(sigma) {
  return regeneratorRuntime.wrap(function cycles$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.delegateYield((0, _cycles2._cycles)(sigma, (0, _used.used)(sigma.length)), 't0', 1);

        case 1:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jeWNsZXMuanMiXSwibmFtZXMiOlsiY3ljbGVzIiwic2lnbWEiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7O1FBWWlCQSxNLEdBQUFBLE07O0FBWmpCOztBQUNBOztlQVdpQkEsTTs7QUFSakI7Ozs7Ozs7O0FBUU8sU0FBVUEsTUFBVixDQUFtQkMsS0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdDQUVDLHNCQUFTQSxLQUFULEVBQWlCLGdCQUFNQSxNQUFNQyxNQUFaLENBQWpCLENBRkQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiY3ljbGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2N5Y2xlcyB9IGZyb20gJy4vX2N5Y2xlcycgO1xuaW1wb3J0IHsgdXNlZCB9IGZyb20gJy4vdXNlZCcgO1xuXG5cbi8qKlxuICogQ29tcHV0ZXMgYSBjeWNsZSBkZWNvbXBvc2l0aW9uIG9mIHRoZSBpbnB1dCBwZXJtdXRhdGlvbi4gRm9yIGEgZ2l2ZW4gaW5wdXQsXG4gKiB0aGUgYWxnb3JpdGhtIHVzZWQgd2lsbCBhbHdheXMgeWllbGQgdGhlIHNhbWUgY3ljbGUgZGVjb21wb3NpdGlvbi5cbiAqIFNlZSB7QGxpbmsgX2N5Y2xlc30gZm9yIGltcGxlbWVudGF0aW9uLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHNpZ21hIFRoZSBpbnB1dCBwZXJtdXRhdGlvbi5cbiAqIEByZXR1cm5zIHtJdGVyYXRvcn0gVGhlIGN5Y2xlcyA8Y29kZT5bYSwgW2IsIGMsIC4uLl1dPC9jb2RlPiBmb3Igc2lnbWEuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiogY3ljbGVzICggc2lnbWEgKSB7XG5cblx0eWllbGQqIF9jeWNsZXMoIHNpZ21hICwgdXNlZCggc2lnbWEubGVuZ3RoICkgKSA7XG5cbn1cblxuIl19