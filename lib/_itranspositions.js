"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._itranspositions = _itranspositions;

var _marked = [_itranspositions].map(regeneratorRuntime.mark);

/**
 * Really no idead what this does.
 *
 * @param {Array} sigma Input permutation.
 * @param {Array} used Helper array.
 * @return {Iterator} ?
 */
function _itranspositions(sigma, used) {
	var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, s, image;

	return regeneratorRuntime.wrap(function _itranspositions$(_context) {
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
						_context.next = 21;
						break;
					}

					s = _step.value;

					if (!used[s]) {
						_context.next = 9;
						break;
					}

					return _context.abrupt("continue", 18);

				case 9:

					used[s] = true;

					image = sigma[s];

				case 11:
					if (!(image !== s)) {
						_context.next = 18;
						break;
					}

					used[image] = true;

					_context.next = 15;
					return [s, image];

				case 15:

					image = sigma[image];

					_context.next = 11;
					break;

				case 18:
					_iteratorNormalCompletion = true;
					_context.next = 5;
					break;

				case 21:
					_context.next = 27;
					break;

				case 23:
					_context.prev = 23;
					_context.t0 = _context["catch"](3);
					_didIteratorError = true;
					_iteratorError = _context.t0;

				case 27:
					_context.prev = 27;
					_context.prev = 28;

					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}

				case 30:
					_context.prev = 30;

					if (!_didIteratorError) {
						_context.next = 33;
						break;
					}

					throw _iteratorError;

				case 33:
					return _context.finish(30);

				case 34:
					return _context.finish(27);

				case 35:
				case "end":
					return _context.stop();
			}
		}
	}, _marked[0], this, [[3, 23, 27, 35], [28,, 30, 34]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9faXRyYW5zcG9zaXRpb25zLmpzIl0sIm5hbWVzIjpbIl9pdHJhbnNwb3NpdGlvbnMiLCJzaWdtYSIsInVzZWQiLCJzIiwiaW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7O1FBUWlCQSxnQixHQUFBQSxnQjs7ZUFBQUEsZ0I7O0FBUGpCOzs7Ozs7O0FBT08sU0FBVUEsZ0JBQVYsQ0FBNkJDLEtBQTdCLEVBQXFDQyxJQUFyQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFFV0QsS0FGWDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVNRSxNQUZOOztBQUFBLFVBSUFELEtBQUtDLENBQUwsQ0FKQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTs7QUFNTEQsVUFBS0MsQ0FBTCxJQUFVLElBQVY7O0FBRUlDLFVBUkMsR0FRT0gsTUFBTUUsQ0FBTixDQVJQOztBQUFBO0FBQUEsV0FVR0MsVUFBVUQsQ0FWYjtBQUFBO0FBQUE7QUFBQTs7QUFZSkQsVUFBS0UsS0FBTCxJQUFjLElBQWQ7O0FBWkk7QUFBQSxZQWNFLENBQUVELENBQUYsRUFBTUMsS0FBTixDQWRGOztBQUFBOztBQWdCSkEsYUFBUUgsTUFBTUcsS0FBTixDQUFSOztBQWhCSTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiX2l0cmFuc3Bvc2l0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBSZWFsbHkgbm8gaWRlYWQgd2hhdCB0aGlzIGRvZXMuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gc2lnbWEgSW5wdXQgcGVybXV0YXRpb24uXG4gKiBAcGFyYW0ge0FycmF5fSB1c2VkIEhlbHBlciBhcnJheS5cbiAqIEByZXR1cm4ge0l0ZXJhdG9yfSA/XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiogX2l0cmFuc3Bvc2l0aW9ucyAoIHNpZ21hICwgdXNlZCApIHtcblxuXHRmb3IgKCBjb25zdCBzIG9mIHNpZ21hICkge1xuXG5cdFx0aWYgKCB1c2VkW3NdICkgY29udGludWUgO1xuXG5cdFx0dXNlZFtzXSA9IHRydWUgO1xuXG5cdFx0bGV0IGltYWdlID0gc2lnbWFbc10gO1xuXG5cdFx0d2hpbGUgKCBpbWFnZSAhPT0gcyApIHtcblxuXHRcdFx0dXNlZFtpbWFnZV0gPSB0cnVlIDtcblxuXHRcdFx0eWllbGQgWyBzICwgaW1hZ2UgXSA7XG5cblx0XHRcdGltYWdlID0gc2lnbWFbaW1hZ2VdIDtcblxuXHRcdH1cblxuXHR9XG5cbn1cblxuIl19