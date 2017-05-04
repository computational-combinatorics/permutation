'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports._invertcycles = _invertcycles;

var _transpose2 = require('./_transpose');

/**
 * No idea what this does. Probably inverts the cycles of a given permutation.
 *
 * @param {Iterable} cycles The cycles to invert.
 * @param {Array} tau The given permutation.
 */
function _invertcycles(cycles, tau) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {

    for (var _iterator = cycles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _ref = _step.value;

      var _ref2 = _slicedToArray(_ref, 2);

      var s = _ref2[0];
      var cycle = _ref2[1];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {

        for (var _iterator2 = cycle[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var t = _step2.value;


          (0, _transpose2._transpose)(s, t, tau);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9faW52ZXJ0Y3ljbGVzLmpzIl0sIm5hbWVzIjpbIl9pbnZlcnRjeWNsZXMiLCJjeWNsZXMiLCJ0YXUiLCJzIiwiY3ljbGUiLCJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztRQVFnQkEsYSxHQUFBQSxhOztBQVJoQjs7QUFFQTs7Ozs7O0FBTU8sU0FBU0EsYUFBVCxDQUF5QkMsTUFBekIsRUFBa0NDLEdBQWxDLEVBQXdDO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUU5Qyx5QkFBNkJELE1BQTdCLDhIQUFzQztBQUFBOztBQUFBOztBQUFBLFVBQXhCRSxDQUF3QjtBQUFBLFVBQXBCQyxLQUFvQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFFckMsOEJBQWlCQSxLQUFqQixtSUFBeUI7QUFBQSxjQUFiQyxDQUFhOzs7QUFFeEIsc0NBQVlGLENBQVosRUFBZ0JFLENBQWhCLEVBQW9CSCxHQUFwQjtBQUVBO0FBTm9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRckM7QUFWNkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVk5QyIsImZpbGUiOiJfaW52ZXJ0Y3ljbGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX3RyYW5zcG9zZSB9IGZyb20gJy4vX3RyYW5zcG9zZScgO1xuXG4vKipcbiAqIE5vIGlkZWEgd2hhdCB0aGlzIGRvZXMuIFByb2JhYmx5IGludmVydHMgdGhlIGN5Y2xlcyBvZiBhIGdpdmVuIHBlcm11dGF0aW9uLlxuICpcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGN5Y2xlcyBUaGUgY3ljbGVzIHRvIGludmVydC5cbiAqIEBwYXJhbSB7QXJyYXl9IHRhdSBUaGUgZ2l2ZW4gcGVybXV0YXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfaW52ZXJ0Y3ljbGVzICggY3ljbGVzICwgdGF1ICkge1xuXG5cdGZvciAoIGNvbnN0IFsgcyAsIGN5Y2xlIF0gb2YgY3ljbGVzICkge1xuXG5cdFx0Zm9yICggY29uc3QgdCBvZiBjeWNsZSApIHtcblxuXHRcdFx0X3RyYW5zcG9zZSggcyAsIHQgLCB0YXUgKSA7XG5cblx0XHR9XG5cblx0fVxuXG59XG5cbiJdfQ==