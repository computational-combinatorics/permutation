"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._cycles = _cycles;

var _marked = [_cycles].map(regeneratorRuntime.mark);

/**
 * Computes a cycle decomposition of an input permutation. This algorithm is
 * deterministic; the algorithm will procedes in a sequential manner, first
 * yielding the cycle containing the first (in input order) index of the
 * permutation, then yielding the cycle containing the first (in input order)
 * index of the permutation that is not in the first cycle, etc. The output is
 * in the form of an iterator over cycles <code>[a, [b, c, ...]]</code> where
 * <code>a</code> is the first element of the cycle and the list <code>[b, c,
 * ...]</code> contains the second, third, etc. elements of the cycle.  The
 * algorithm uses an helper array to remember which elements have already been
 * encountered.
 *
 * @see https://en.wikipedia.org/wiki/Permutation#Cycle_notation
 *
 * @param {Array} sigma The input permutation.
 * @param {Array} used The helper array.
 * @returns {Iterator} The cycles <code>[a, [b, c, ...]]</code> for sigma.
 */
function _cycles(sigma, used) {
  var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, s, image, cycle;

  return regeneratorRuntime.wrap(function _cycles$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 3;
          _iterator = sigma[Symbol.iterator]();

        case 5:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 18;
            break;
          }

          s = _step.value;

          if (!used[s]) {
            _context.next = 9;
            break;
          }

          return _context.abrupt("continue", 15);

        case 9:

          used[s] = true;

          image = sigma[s];
          cycle = [];


          while (image !== s) {

            used[image] = true;

            cycle.push(image);

            image = sigma[image];
          }

          _context.next = 15;
          return [s, cycle];

        case 15:
          _iteratorNormalCompletion = true;
          _context.next = 5;
          break;

        case 18:
          _context.next = 24;
          break;

        case 20:
          _context.prev = 20;
          _context.t0 = _context["catch"](3);
          _didIteratorError = true;
          _iteratorError = _context.t0;

        case 24:
          _context.prev = 24;
          _context.prev = 25;

          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }

        case 27:
          _context.prev = 27;

          if (!_didIteratorError) {
            _context.next = 30;
            break;
          }

          throw _iteratorError;

        case 30:
          return _context.finish(27);

        case 31:
          return _context.finish(24);

        case 32:
        case "end":
          return _context.stop();
      }
    }
  }, _marked[0], this, [[3, 20, 24, 32], [25,, 27, 31]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9fY3ljbGVzLmpzIl0sIm5hbWVzIjpbIl9jeWNsZXMiLCJzaWdtYSIsInVzZWQiLCJzIiwiaW1hZ2UiLCJjeWNsZSIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7O1FBbUJpQkEsTyxHQUFBQSxPOztlQUFBQSxPOztBQWxCakI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCTyxTQUFVQSxPQUFWLENBQW9CQyxLQUFwQixFQUE0QkMsSUFBNUI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRVdELEtBRlg7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFTUUsV0FGTjs7QUFBQSxlQUlBRCxLQUFLQyxDQUFMLENBSkE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7O0FBTUxELGVBQUtDLENBQUwsSUFBVSxJQUFWOztBQUVJQyxlQVJDLEdBUU9ILE1BQU1FLENBQU4sQ0FSUDtBQVVDRSxlQVZELEdBVVMsRUFWVDs7O0FBWUwsaUJBQVFELFVBQVVELENBQWxCLEVBQXNCOztBQUVyQkQsaUJBQUtFLEtBQUwsSUFBYyxJQUFkOztBQUVBQyxrQkFBTUMsSUFBTixDQUFZRixLQUFaOztBQUVBQSxvQkFBUUgsTUFBTUcsS0FBTixDQUFSO0FBRUE7O0FBcEJJO0FBQUEsaUJBc0JDLENBQUVELENBQUYsRUFBTUUsS0FBTixDQXRCRDs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Il9jeWNsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogQ29tcHV0ZXMgYSBjeWNsZSBkZWNvbXBvc2l0aW9uIG9mIGFuIGlucHV0IHBlcm11dGF0aW9uLiBUaGlzIGFsZ29yaXRobSBpc1xuICogZGV0ZXJtaW5pc3RpYzsgdGhlIGFsZ29yaXRobSB3aWxsIHByb2NlZGVzIGluIGEgc2VxdWVudGlhbCBtYW5uZXIsIGZpcnN0XG4gKiB5aWVsZGluZyB0aGUgY3ljbGUgY29udGFpbmluZyB0aGUgZmlyc3QgKGluIGlucHV0IG9yZGVyKSBpbmRleCBvZiB0aGVcbiAqIHBlcm11dGF0aW9uLCB0aGVuIHlpZWxkaW5nIHRoZSBjeWNsZSBjb250YWluaW5nIHRoZSBmaXJzdCAoaW4gaW5wdXQgb3JkZXIpXG4gKiBpbmRleCBvZiB0aGUgcGVybXV0YXRpb24gdGhhdCBpcyBub3QgaW4gdGhlIGZpcnN0IGN5Y2xlLCBldGMuIFRoZSBvdXRwdXQgaXNcbiAqIGluIHRoZSBmb3JtIG9mIGFuIGl0ZXJhdG9yIG92ZXIgY3ljbGVzIDxjb2RlPlthLCBbYiwgYywgLi4uXV08L2NvZGU+IHdoZXJlXG4gKiA8Y29kZT5hPC9jb2RlPiBpcyB0aGUgZmlyc3QgZWxlbWVudCBvZiB0aGUgY3ljbGUgYW5kIHRoZSBsaXN0IDxjb2RlPltiLCBjLFxuICogLi4uXTwvY29kZT4gY29udGFpbnMgdGhlIHNlY29uZCwgdGhpcmQsIGV0Yy4gZWxlbWVudHMgb2YgdGhlIGN5Y2xlLiAgVGhlXG4gKiBhbGdvcml0aG0gdXNlcyBhbiBoZWxwZXIgYXJyYXkgdG8gcmVtZW1iZXIgd2hpY2ggZWxlbWVudHMgaGF2ZSBhbHJlYWR5IGJlZW5cbiAqIGVuY291bnRlcmVkLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvUGVybXV0YXRpb24jQ3ljbGVfbm90YXRpb25cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBzaWdtYSBUaGUgaW5wdXQgcGVybXV0YXRpb24uXG4gKiBAcGFyYW0ge0FycmF5fSB1c2VkIFRoZSBoZWxwZXIgYXJyYXkuXG4gKiBAcmV0dXJucyB7SXRlcmF0b3J9IFRoZSBjeWNsZXMgPGNvZGU+W2EsIFtiLCBjLCAuLi5dXTwvY29kZT4gZm9yIHNpZ21hLlxuICovXG5leHBvcnQgZnVuY3Rpb24qIF9jeWNsZXMgKCBzaWdtYSAsIHVzZWQgKSB7XG5cblx0Zm9yICggY29uc3QgcyBvZiBzaWdtYSApIHtcblxuXHRcdGlmICggdXNlZFtzXSApIGNvbnRpbnVlIDtcblxuXHRcdHVzZWRbc10gPSB0cnVlIDtcblxuXHRcdGxldCBpbWFnZSA9IHNpZ21hW3NdIDtcblxuXHRcdGNvbnN0IGN5Y2xlID0gWyBdIDtcblxuXHRcdHdoaWxlICggaW1hZ2UgIT09IHMgKSB7XG5cblx0XHRcdHVzZWRbaW1hZ2VdID0gdHJ1ZSA7XG5cblx0XHRcdGN5Y2xlLnB1c2goIGltYWdlICkgO1xuXG5cdFx0XHRpbWFnZSA9IHNpZ21hW2ltYWdlXSA7XG5cblx0XHR9XG5cblx0XHR5aWVsZCBbIHMgLCBjeWNsZSBdIDtcblxuXHR9XG5cbn1cblxuIl19