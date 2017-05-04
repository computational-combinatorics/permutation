"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._compose = _compose;

var _marked = [_compose].map(regeneratorRuntime.mark);

/**
 * Compose two input permutations. The resulting permutation is output as an
 * iterator of indices instead of an array of indices.
 *
 * @param {Array} sigma The first input permutation.
 * @param {Array} tau The second input permutation.
 * @returns {Iterator} An iterator over the items of the resulting permutation.
 */
function _compose(sigma, tau) {
  var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, t;

  return regeneratorRuntime.wrap(function _compose$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 3;
          _iterator = tau[Symbol.iterator]();

        case 5:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 12;
            break;
          }

          t = _step.value;
          _context.next = 9;
          return sigma[t];

        case 9:
          _iteratorNormalCompletion = true;
          _context.next = 5;
          break;

        case 12:
          _context.next = 18;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](3);
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
        case "end":
          return _context.stop();
      }
    }
  }, _marked[0], this, [[3, 14, 18, 26], [19,, 21, 25]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9fY29tcG9zZS5qcyJdLCJuYW1lcyI6WyJfY29tcG9zZSIsInNpZ21hIiwidGF1IiwidCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFTaUJBLFEsR0FBQUEsUTs7ZUFBQUEsUTs7QUFSakI7Ozs7Ozs7O0FBUU8sU0FBVUEsUUFBVixDQUFxQkMsS0FBckIsRUFBNkJDLEdBQTdCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUVXQSxHQUZYOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRU1DLFdBRk47QUFBQTtBQUFBLGlCQUV1QkYsTUFBTUUsQ0FBTixDQUZ2Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Il9jb21wb3NlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIENvbXBvc2UgdHdvIGlucHV0IHBlcm11dGF0aW9ucy4gVGhlIHJlc3VsdGluZyBwZXJtdXRhdGlvbiBpcyBvdXRwdXQgYXMgYW5cbiAqIGl0ZXJhdG9yIG9mIGluZGljZXMgaW5zdGVhZCBvZiBhbiBhcnJheSBvZiBpbmRpY2VzLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHNpZ21hIFRoZSBmaXJzdCBpbnB1dCBwZXJtdXRhdGlvbi5cbiAqIEBwYXJhbSB7QXJyYXl9IHRhdSBUaGUgc2Vjb25kIGlucHV0IHBlcm11dGF0aW9uLlxuICogQHJldHVybnMge0l0ZXJhdG9yfSBBbiBpdGVyYXRvciBvdmVyIHRoZSBpdGVtcyBvZiB0aGUgcmVzdWx0aW5nIHBlcm11dGF0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24qIF9jb21wb3NlICggc2lnbWEgLCB0YXUgKSB7XG5cblx0Zm9yICggY29uc3QgdCBvZiB0YXUgKSB5aWVsZCBzaWdtYVt0XSA7XG5cbn1cblxuIl19