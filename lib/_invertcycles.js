'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports._invertcycles = _invertcycles;

var _transpose2 = require('./_transpose');

/**
 * Inverts given cycles in a given permutation ___in-place___. Can be used as
 * an alternative way of inverting an entire permutation by inverting all of
 * its cycles in the identity permutation.
 *
 * @example
 * const invert = sigma => {
 *   const tau = identity( sigma.length ) ;
 *   const cycles_sigma = cycles( sigma ) ;
 *   _invertcycles( cycles_sigma , tau ) ;
 *   return tau ;
 * } ;
 *
 * @param {Iterable} cycles The cycles to invert.
 * @param {Array} tau The given permutation (modified in-place).
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9faW52ZXJ0Y3ljbGVzLmpzIl0sIm5hbWVzIjpbIl9pbnZlcnRjeWNsZXMiLCJjeWNsZXMiLCJ0YXUiLCJzIiwiY3ljbGUiLCJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztRQWtCZ0JBLGEsR0FBQUEsYTs7QUFsQmhCOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JPLFNBQVNBLGFBQVQsQ0FBeUJDLE1BQXpCLEVBQWtDQyxHQUFsQyxFQUF3QztBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFFOUMseUJBQTZCRCxNQUE3Qiw4SEFBc0M7QUFBQTs7QUFBQTs7QUFBQSxVQUF4QkUsQ0FBd0I7QUFBQSxVQUFwQkMsS0FBb0I7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBRXJDLDhCQUFpQkEsS0FBakI7QUFBQSxjQUFZQyxDQUFaO0FBQXlCLHNDQUFZRixDQUFaLEVBQWdCRSxDQUFoQixFQUFvQkgsR0FBcEI7QUFBekI7QUFGcUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlyQztBQU42QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUTlDIiwiZmlsZSI6Il9pbnZlcnRjeWNsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfdHJhbnNwb3NlIH0gZnJvbSAnLi9fdHJhbnNwb3NlJyA7XG5cbi8qKlxuICogSW52ZXJ0cyBnaXZlbiBjeWNsZXMgaW4gYSBnaXZlbiBwZXJtdXRhdGlvbiBfX19pbi1wbGFjZV9fXy4gQ2FuIGJlIHVzZWQgYXNcbiAqIGFuIGFsdGVybmF0aXZlIHdheSBvZiBpbnZlcnRpbmcgYW4gZW50aXJlIHBlcm11dGF0aW9uIGJ5IGludmVydGluZyBhbGwgb2ZcbiAqIGl0cyBjeWNsZXMgaW4gdGhlIGlkZW50aXR5IHBlcm11dGF0aW9uLlxuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBpbnZlcnQgPSBzaWdtYSA9PiB7XG4gKiAgIGNvbnN0IHRhdSA9IGlkZW50aXR5KCBzaWdtYS5sZW5ndGggKSA7XG4gKiAgIGNvbnN0IGN5Y2xlc19zaWdtYSA9IGN5Y2xlcyggc2lnbWEgKSA7XG4gKiAgIF9pbnZlcnRjeWNsZXMoIGN5Y2xlc19zaWdtYSAsIHRhdSApIDtcbiAqICAgcmV0dXJuIHRhdSA7XG4gKiB9IDtcbiAqXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBjeWNsZXMgVGhlIGN5Y2xlcyB0byBpbnZlcnQuXG4gKiBAcGFyYW0ge0FycmF5fSB0YXUgVGhlIGdpdmVuIHBlcm11dGF0aW9uIChtb2RpZmllZCBpbi1wbGFjZSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfaW52ZXJ0Y3ljbGVzICggY3ljbGVzICwgdGF1ICkge1xuXG5cdGZvciAoIGNvbnN0IFsgcyAsIGN5Y2xlIF0gb2YgY3ljbGVzICkge1xuXG5cdFx0Zm9yICggY29uc3QgdCBvZiBjeWNsZSApIF90cmFuc3Bvc2UoIHMgLCB0ICwgdGF1ICkgO1xuXG5cdH1cblxufVxuXG4iXX0=