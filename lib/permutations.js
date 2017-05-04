'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.permutations = permutations;

var _identity = require('./identity');

var _permutations2 = require('./_permutations');

var _copy = require('./copy');

var _marked = [permutations].map(regeneratorRuntime.mark);

/**
 * Generate all permutations on <code>n</code> elements.
 *
 * @param {Number} n The size of the permutations to generate.
 * @returns {Iterator} Iterator that yields all permutations on <code>n</code>
 * elements.
 */
function permutations(n) {
  var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, permutation;

  return regeneratorRuntime.wrap(function permutations$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 3;
          _iterator = (0, _permutations2._permutations)((0, _identity.identity)(n), n)[Symbol.iterator]();

        case 5:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 12;
            break;
          }

          permutation = _step.value;
          _context.next = 9;
          return (0, _copy.copy)(permutation);

        case 9:
          _iteratorNormalCompletion = true;
          _context.next = 5;
          break;

        case 12:
          _context.next = 18;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context['catch'](3);
          _didIteratorError = true;
          _iteratorError = _context.t0;

        case 18:
          _context.prev = 18;
          _context.prev = 19;

          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }

        case 21:
          _context.prev = 21;

          if (!_didIteratorError) {
            _context.next = 24;
            break;
          }

          throw _iteratorError;

        case 24:
          return _context.finish(21);

        case 25:
          return _context.finish(18);

        case 26:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this, [[3, 14, 18, 26], [19,, 21, 25]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wZXJtdXRhdGlvbnMuanMiXSwibmFtZXMiOlsicGVybXV0YXRpb25zIiwibiIsInBlcm11dGF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7OztRQVdpQkEsWSxHQUFBQSxZOztBQVhqQjs7QUFDQTs7QUFDQTs7ZUFTaUJBLFk7O0FBUGpCOzs7Ozs7O0FBT08sU0FBVUEsWUFBVixDQUF5QkMsQ0FBekI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRXFCLGtDQUFlLHdCQUFVQSxDQUFWLENBQWYsRUFBK0JBLENBQS9CLENBRnJCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRU1DLHFCQUZOO0FBQUE7QUFBQSxpQkFJQyxnQkFBTUEsV0FBTixDQUpEOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoicGVybXV0YXRpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaWRlbnRpdHkgfSBmcm9tICcuL2lkZW50aXR5JyA7XG5pbXBvcnQgeyBfcGVybXV0YXRpb25zIH0gZnJvbSAnLi9fcGVybXV0YXRpb25zJyA7XG5pbXBvcnQgeyBjb3B5IH0gZnJvbSAnLi9jb3B5JyA7XG5cbi8qKlxuICogR2VuZXJhdGUgYWxsIHBlcm11dGF0aW9ucyBvbiA8Y29kZT5uPC9jb2RlPiBlbGVtZW50cy5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbiBUaGUgc2l6ZSBvZiB0aGUgcGVybXV0YXRpb25zIHRvIGdlbmVyYXRlLlxuICogQHJldHVybnMge0l0ZXJhdG9yfSBJdGVyYXRvciB0aGF0IHlpZWxkcyBhbGwgcGVybXV0YXRpb25zIG9uIDxjb2RlPm48L2NvZGU+XG4gKiBlbGVtZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uKiBwZXJtdXRhdGlvbnMgKCBuICkge1xuXG5cdGZvciAoIGNvbnN0IHBlcm11dGF0aW9uIG9mIF9wZXJtdXRhdGlvbnMoIGlkZW50aXR5KCBuICkgLCBuICkgKSB7XG5cblx0XHR5aWVsZCBjb3B5KCBwZXJtdXRhdGlvbiApIDtcblxuXHR9XG5cbn1cblxuIl19