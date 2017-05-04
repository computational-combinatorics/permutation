'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports._apply = _apply;

var _transpose2 = require('./_transpose');

/**
 * Applies a given sequence (in the given order) of transpositions (given as
 * index tuples) to a given permutation. The permutation is modified ___in-place___.
 *
 * @param {Iterable} transpositions The given transpositions to apply.
 * @param {Array} sigma The permutation to apply the transpositions to
 * (modified in-place).
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9fYXBwbHkuanMiXSwibmFtZXMiOlsiX2FwcGx5IiwidHJhbnNwb3NpdGlvbnMiLCJzaWdtYSIsInMiLCJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztRQVVnQkEsTSxHQUFBQSxNOztBQVZoQjs7QUFFQTs7Ozs7Ozs7QUFRTyxTQUFTQSxNQUFULENBQWtCQyxjQUFsQixFQUFtQ0MsS0FBbkMsRUFBMkM7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBRWpELHlCQUF5QkQsY0FBekI7QUFBQTs7QUFBQTs7QUFBQSxVQUFjRSxDQUFkO0FBQUEsVUFBa0JDLENBQWxCO0FBQTBDLGtDQUFZRCxDQUFaLEVBQWdCQyxDQUFoQixFQUFvQkYsS0FBcEI7QUFBMUM7QUFGaUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlqRCIsImZpbGUiOiJfYXBwbHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfdHJhbnNwb3NlIH0gZnJvbSAnLi9fdHJhbnNwb3NlJyA7XG5cbi8qKlxuICogQXBwbGllcyBhIGdpdmVuIHNlcXVlbmNlIChpbiB0aGUgZ2l2ZW4gb3JkZXIpIG9mIHRyYW5zcG9zaXRpb25zIChnaXZlbiBhc1xuICogaW5kZXggdHVwbGVzKSB0byBhIGdpdmVuIHBlcm11dGF0aW9uLiBUaGUgcGVybXV0YXRpb24gaXMgbW9kaWZpZWQgX19faW4tcGxhY2VfX18uXG4gKlxuICogQHBhcmFtIHtJdGVyYWJsZX0gdHJhbnNwb3NpdGlvbnMgVGhlIGdpdmVuIHRyYW5zcG9zaXRpb25zIHRvIGFwcGx5LlxuICogQHBhcmFtIHtBcnJheX0gc2lnbWEgVGhlIHBlcm11dGF0aW9uIHRvIGFwcGx5IHRoZSB0cmFuc3Bvc2l0aW9ucyB0b1xuICogKG1vZGlmaWVkIGluLXBsYWNlKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9hcHBseSAoIHRyYW5zcG9zaXRpb25zICwgc2lnbWEgKSB7XG5cblx0Zm9yICggY29uc3QgWyBzICwgdCBdIG9mIHRyYW5zcG9zaXRpb25zICkgX3RyYW5zcG9zZSggcyAsIHQgLCBzaWdtYSApIDtcblxufVxuXG4iXX0=