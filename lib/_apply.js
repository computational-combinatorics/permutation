'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports._apply = _apply;

var _transpose2 = require('./_transpose');

/**
 * Applies a given sequence (in the given order) of transpositions (given as
 * index tuples) to a given permutation. The permutation is modified in place.
 *
 * @param {Iterable} transpositions The given transpositions to apply.
 * @param {Array} sigma The permutation to apply the transpositions to.
 */
function _apply(transpositions, sigma) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {

    for (var _iterator = transpositions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _ref = _step.value;

      var _ref2 = _slicedToArray(_ref, 2);

      var s = _ref2[0];
      var t = _ref2[1];
      (0, _transpose2._transpose)(s, t, sigma);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9fYXBwbHkuanMiXSwibmFtZXMiOlsiX2FwcGx5IiwidHJhbnNwb3NpdGlvbnMiLCJzaWdtYSIsInMiLCJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztRQVNnQkEsTSxHQUFBQSxNOztBQVRoQjs7QUFFQTs7Ozs7OztBQU9PLFNBQVNBLE1BQVQsQ0FBa0JDLGNBQWxCLEVBQW1DQyxLQUFuQyxFQUEyQztBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFFakQseUJBQXlCRCxjQUF6QjtBQUFBOztBQUFBOztBQUFBLFVBQWNFLENBQWQ7QUFBQSxVQUFrQkMsQ0FBbEI7QUFBMEMsa0NBQVlELENBQVosRUFBZ0JDLENBQWhCLEVBQW9CRixLQUFwQjtBQUExQztBQUZpRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSWpEIiwiZmlsZSI6Il9hcHBseS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF90cmFuc3Bvc2UgfSBmcm9tICcuL190cmFuc3Bvc2UnIDtcblxuLyoqXG4gKiBBcHBsaWVzIGEgZ2l2ZW4gc2VxdWVuY2UgKGluIHRoZSBnaXZlbiBvcmRlcikgb2YgdHJhbnNwb3NpdGlvbnMgKGdpdmVuIGFzXG4gKiBpbmRleCB0dXBsZXMpIHRvIGEgZ2l2ZW4gcGVybXV0YXRpb24uIFRoZSBwZXJtdXRhdGlvbiBpcyBtb2RpZmllZCBpbiBwbGFjZS5cbiAqXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSB0cmFuc3Bvc2l0aW9ucyBUaGUgZ2l2ZW4gdHJhbnNwb3NpdGlvbnMgdG8gYXBwbHkuXG4gKiBAcGFyYW0ge0FycmF5fSBzaWdtYSBUaGUgcGVybXV0YXRpb24gdG8gYXBwbHkgdGhlIHRyYW5zcG9zaXRpb25zIHRvLlxuICovXG5leHBvcnQgZnVuY3Rpb24gX2FwcGx5ICggdHJhbnNwb3NpdGlvbnMgLCBzaWdtYSApIHtcblxuXHRmb3IgKCBjb25zdCBbIHMgLCB0IF0gb2YgdHJhbnNwb3NpdGlvbnMgKSBfdHJhbnNwb3NlKCBzICwgdCAsIHNpZ21hICkgO1xuXG59XG5cbiJdfQ==