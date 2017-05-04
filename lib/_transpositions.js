"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports._transpositions = _transpositions;

var _marked = [_transpositions].map(regeneratorRuntime.mark);

/**
 * Computes the transposition decomposition of some permutation given its cycle
 * decomposition.
 *
 * @param {Array} cycles The cycle decomposition of some permutation.
 * @returns {Iterator} The transposition decomposition of the permutation
 * defined by the input cycles.
 */
function _transpositions(cycles) {
  var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _ref, _ref2, s, cycle;

  return regeneratorRuntime.wrap(function _transpositions$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 3;
          _iterator = cycles[Symbol.iterator]();

        case 5:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 18;
            break;
          }

          _ref = _step.value;
          _ref2 = _slicedToArray(_ref, 2);
          s = _ref2[0];
          cycle = _ref2[1];

        case 10:
          if (!cycle.length) {
            _context.next = 15;
            break;
          }

          _context.next = 13;
          return [s, cycle.pop()];

        case 13:
          _context.next = 10;
          break;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9fdHJhbnNwb3NpdGlvbnMuanMiXSwibmFtZXMiOlsiX3RyYW5zcG9zaXRpb25zIiwiY3ljbGVzIiwicyIsImN5Y2xlIiwibGVuZ3RoIiwicG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztRQVFpQkEsZSxHQUFBQSxlOztlQUFBQSxlOztBQVJqQjs7Ozs7Ozs7QUFRTyxTQUFVQSxlQUFWLENBQTRCQyxNQUE1QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFFdUJBLE1BRnZCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUVRQyxXQUZSO0FBRVlDLGVBRlo7O0FBQUE7QUFBQSxlQUlHQSxNQUFNQyxNQUpUO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsaUJBSXdCLENBQUVGLENBQUYsRUFBTUMsTUFBTUUsR0FBTixFQUFOLENBSnhCOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Il90cmFuc3Bvc2l0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29tcHV0ZXMgdGhlIHRyYW5zcG9zaXRpb24gZGVjb21wb3NpdGlvbiBvZiBzb21lIHBlcm11dGF0aW9uIGdpdmVuIGl0cyBjeWNsZVxuICogZGVjb21wb3NpdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBjeWNsZXMgVGhlIGN5Y2xlIGRlY29tcG9zaXRpb24gb2Ygc29tZSBwZXJtdXRhdGlvbi5cbiAqIEByZXR1cm5zIHtJdGVyYXRvcn0gVGhlIHRyYW5zcG9zaXRpb24gZGVjb21wb3NpdGlvbiBvZiB0aGUgcGVybXV0YXRpb25cbiAqIGRlZmluZWQgYnkgdGhlIGlucHV0IGN5Y2xlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uKiBfdHJhbnNwb3NpdGlvbnMgKCBjeWNsZXMgKSB7XG5cblx0Zm9yICggY29uc3QgWyBzICwgY3ljbGUgXSBvZiBjeWNsZXMgKSB7XG5cblx0XHR3aGlsZSAoIGN5Y2xlLmxlbmd0aCApIHlpZWxkIFsgcyAsIGN5Y2xlLnBvcCggKSBdIDtcblxuXHR9XG5cbn1cbiJdfQ==