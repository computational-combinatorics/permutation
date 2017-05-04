"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._cycles = _cycles;

var _marked = [_cycles].map(regeneratorRuntime.mark);

/**
 * Computes a {@link https://en.wikipedia.org/wiki/Permutation#Cycle_notation
 * cycle decomposition} of an input permutation. This algorithm is
 * deterministic; the algorithm will procedes in a sequential manner, first
 * yielding the cycle containing the first (in input order) index of the
 * permutation, then yielding the cycle containing the first (in input order)
 * index of the permutation that is not in the first cycle, etc. The output is
 * in the form of an iterator over cycles <code>[a, [b, c, ...]]</code> where
 * <code>a</code> is the first element of the cycle and the list <code>[b, c,
 * ...]</code> contains the second, third, etc. elements of the cycle.  The
 * algorithm uses an helper array to remember which elements have already been
 * encountered.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9fY3ljbGVzLmpzIl0sIm5hbWVzIjpbIl9jeWNsZXMiLCJzaWdtYSIsInVzZWQiLCJzIiwiaW1hZ2UiLCJjeWNsZSIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7O1FBaUJpQkEsTyxHQUFBQSxPOztlQUFBQSxPOztBQWhCakI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQk8sU0FBVUEsT0FBVixDQUFvQkMsS0FBcEIsRUFBNEJDLElBQTVCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUVXRCxLQUZYOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRU1FLFdBRk47O0FBQUEsZUFJQUQsS0FBS0MsQ0FBTCxDQUpBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBOztBQU1MRCxlQUFLQyxDQUFMLElBQVUsSUFBVjs7QUFFSUMsZUFSQyxHQVFPSCxNQUFNRSxDQUFOLENBUlA7QUFVQ0UsZUFWRCxHQVVTLEVBVlQ7OztBQVlMLGlCQUFRRCxVQUFVRCxDQUFsQixFQUFzQjs7QUFFckJELGlCQUFLRSxLQUFMLElBQWMsSUFBZDs7QUFFQUMsa0JBQU1DLElBQU4sQ0FBWUYsS0FBWjs7QUFFQUEsb0JBQVFILE1BQU1HLEtBQU4sQ0FBUjtBQUVBOztBQXBCSTtBQUFBLGlCQXNCQyxDQUFFRCxDQUFGLEVBQU1FLEtBQU4sQ0F0QkQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJfY3ljbGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIENvbXB1dGVzIGEge0BsaW5rIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1Blcm11dGF0aW9uI0N5Y2xlX25vdGF0aW9uXG4gKiBjeWNsZSBkZWNvbXBvc2l0aW9ufSBvZiBhbiBpbnB1dCBwZXJtdXRhdGlvbi4gVGhpcyBhbGdvcml0aG0gaXNcbiAqIGRldGVybWluaXN0aWM7IHRoZSBhbGdvcml0aG0gd2lsbCBwcm9jZWRlcyBpbiBhIHNlcXVlbnRpYWwgbWFubmVyLCBmaXJzdFxuICogeWllbGRpbmcgdGhlIGN5Y2xlIGNvbnRhaW5pbmcgdGhlIGZpcnN0IChpbiBpbnB1dCBvcmRlcikgaW5kZXggb2YgdGhlXG4gKiBwZXJtdXRhdGlvbiwgdGhlbiB5aWVsZGluZyB0aGUgY3ljbGUgY29udGFpbmluZyB0aGUgZmlyc3QgKGluIGlucHV0IG9yZGVyKVxuICogaW5kZXggb2YgdGhlIHBlcm11dGF0aW9uIHRoYXQgaXMgbm90IGluIHRoZSBmaXJzdCBjeWNsZSwgZXRjLiBUaGUgb3V0cHV0IGlzXG4gKiBpbiB0aGUgZm9ybSBvZiBhbiBpdGVyYXRvciBvdmVyIGN5Y2xlcyA8Y29kZT5bYSwgW2IsIGMsIC4uLl1dPC9jb2RlPiB3aGVyZVxuICogPGNvZGU+YTwvY29kZT4gaXMgdGhlIGZpcnN0IGVsZW1lbnQgb2YgdGhlIGN5Y2xlIGFuZCB0aGUgbGlzdCA8Y29kZT5bYiwgYyxcbiAqIC4uLl08L2NvZGU+IGNvbnRhaW5zIHRoZSBzZWNvbmQsIHRoaXJkLCBldGMuIGVsZW1lbnRzIG9mIHRoZSBjeWNsZS4gIFRoZVxuICogYWxnb3JpdGhtIHVzZXMgYW4gaGVscGVyIGFycmF5IHRvIHJlbWVtYmVyIHdoaWNoIGVsZW1lbnRzIGhhdmUgYWxyZWFkeSBiZWVuXG4gKiBlbmNvdW50ZXJlZC5cbiAqIEBwYXJhbSB7QXJyYXl9IHNpZ21hIFRoZSBpbnB1dCBwZXJtdXRhdGlvbi5cbiAqIEBwYXJhbSB7QXJyYXl9IHVzZWQgVGhlIGhlbHBlciBhcnJheS5cbiAqIEByZXR1cm5zIHtJdGVyYXRvcn0gVGhlIGN5Y2xlcyA8Y29kZT5bYSwgW2IsIGMsIC4uLl1dPC9jb2RlPiBmb3Igc2lnbWEuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiogX2N5Y2xlcyAoIHNpZ21hICwgdXNlZCApIHtcblxuXHRmb3IgKCBjb25zdCBzIG9mIHNpZ21hICkge1xuXG5cdFx0aWYgKCB1c2VkW3NdICkgY29udGludWUgO1xuXG5cdFx0dXNlZFtzXSA9IHRydWUgO1xuXG5cdFx0bGV0IGltYWdlID0gc2lnbWFbc10gO1xuXG5cdFx0Y29uc3QgY3ljbGUgPSBbIF0gO1xuXG5cdFx0d2hpbGUgKCBpbWFnZSAhPT0gcyApIHtcblxuXHRcdFx0dXNlZFtpbWFnZV0gPSB0cnVlIDtcblxuXHRcdFx0Y3ljbGUucHVzaCggaW1hZ2UgKSA7XG5cblx0XHRcdGltYWdlID0gc2lnbWFbaW1hZ2VdIDtcblxuXHRcdH1cblxuXHRcdHlpZWxkIFsgcyAsIGN5Y2xlIF0gO1xuXG5cdH1cblxufVxuXG4iXX0=