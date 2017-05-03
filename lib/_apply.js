'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports._apply = _apply;

var _transpose2 = require('./_transpose');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9fYXBwbHkuanMiXSwibmFtZXMiOlsiX2FwcGx5IiwidHJhbnNwb3NpdGlvbnMiLCJzaWdtYSIsInMiLCJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztRQUVnQkEsTSxHQUFBQSxNOztBQUZoQjs7QUFFTyxTQUFTQSxNQUFULENBQWtCQyxjQUFsQixFQUFtQ0MsS0FBbkMsRUFBMkM7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBRWpELHVCQUF5QkQsY0FBekIsOEhBQTBDO0FBQUE7O0FBQUE7O0FBQUEsT0FBNUJFLENBQTRCO0FBQUEsT0FBeEJDLENBQXdCOzs7QUFFekMsK0JBQVlELENBQVosRUFBZ0JDLENBQWhCLEVBQW9CRixLQUFwQjtBQUVBO0FBTmdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRakQiLCJmaWxlIjoiX2FwcGx5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX3RyYW5zcG9zZSB9IGZyb20gJy4vX3RyYW5zcG9zZScgO1xuXG5leHBvcnQgZnVuY3Rpb24gX2FwcGx5ICggdHJhbnNwb3NpdGlvbnMgLCBzaWdtYSApIHtcblxuXHRmb3IgKCBjb25zdCBbIHMgLCB0IF0gb2YgdHJhbnNwb3NpdGlvbnMgKSB7XG5cblx0XHRfdHJhbnNwb3NlKCBzICwgdCAsIHNpZ21hICkgO1xuXG5cdH1cblxufVxuXG4iXX0=