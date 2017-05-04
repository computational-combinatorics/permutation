"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._itranspositions = _itranspositions;

var _marked = [_itranspositions].map(regeneratorRuntime.mark);

/**
 * Computes the sequence of transpositions that if applied to
 * <code>sigma</code> result in <code>invert(sigma)</code>. Needs an helper
 * array to keep track of processed elements. See {@link itranspositions} for
 * higher level API.
 *
 * @param {Array} sigma Input permutation.
 * @param {Array} used Helper array.
 * @return {Iterator} Iterator over the transpositions.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9faXRyYW5zcG9zaXRpb25zLmpzIl0sIm5hbWVzIjpbIl9pdHJhbnNwb3NpdGlvbnMiLCJzaWdtYSIsInVzZWQiLCJzIiwiaW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7O1FBVWlCQSxnQixHQUFBQSxnQjs7ZUFBQUEsZ0I7O0FBVmpCOzs7Ozs7Ozs7O0FBVU8sU0FBVUEsZ0JBQVYsQ0FBNkJDLEtBQTdCLEVBQXFDQyxJQUFyQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFFV0QsS0FGWDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVNRSxNQUZOOztBQUFBLFVBSUFELEtBQUtDLENBQUwsQ0FKQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTs7QUFNTEQsVUFBS0MsQ0FBTCxJQUFVLElBQVY7O0FBRUlDLFVBUkMsR0FRT0gsTUFBTUUsQ0FBTixDQVJQOztBQUFBO0FBQUEsV0FVR0MsVUFBVUQsQ0FWYjtBQUFBO0FBQUE7QUFBQTs7QUFZSkQsVUFBS0UsS0FBTCxJQUFjLElBQWQ7O0FBWkk7QUFBQSxZQWNFLENBQUVELENBQUYsRUFBTUMsS0FBTixDQWRGOztBQUFBOztBQWdCSkEsYUFBUUgsTUFBTUcsS0FBTixDQUFSOztBQWhCSTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiX2l0cmFuc3Bvc2l0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29tcHV0ZXMgdGhlIHNlcXVlbmNlIG9mIHRyYW5zcG9zaXRpb25zIHRoYXQgaWYgYXBwbGllZCB0b1xuICogPGNvZGU+c2lnbWE8L2NvZGU+IHJlc3VsdCBpbiA8Y29kZT5pbnZlcnQoc2lnbWEpPC9jb2RlPi4gTmVlZHMgYW4gaGVscGVyXG4gKiBhcnJheSB0byBrZWVwIHRyYWNrIG9mIHByb2Nlc3NlZCBlbGVtZW50cy4gU2VlIHtAbGluayBpdHJhbnNwb3NpdGlvbnN9IGZvclxuICogaGlnaGVyIGxldmVsIEFQSS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBzaWdtYSBJbnB1dCBwZXJtdXRhdGlvbi5cbiAqIEBwYXJhbSB7QXJyYXl9IHVzZWQgSGVscGVyIGFycmF5LlxuICogQHJldHVybiB7SXRlcmF0b3J9IEl0ZXJhdG9yIG92ZXIgdGhlIHRyYW5zcG9zaXRpb25zLlxuICovXG5leHBvcnQgZnVuY3Rpb24qIF9pdHJhbnNwb3NpdGlvbnMgKCBzaWdtYSAsIHVzZWQgKSB7XG5cblx0Zm9yICggY29uc3QgcyBvZiBzaWdtYSApIHtcblxuXHRcdGlmICggdXNlZFtzXSApIGNvbnRpbnVlIDtcblxuXHRcdHVzZWRbc10gPSB0cnVlIDtcblxuXHRcdGxldCBpbWFnZSA9IHNpZ21hW3NdIDtcblxuXHRcdHdoaWxlICggaW1hZ2UgIT09IHMgKSB7XG5cblx0XHRcdHVzZWRbaW1hZ2VdID0gdHJ1ZSA7XG5cblx0XHRcdHlpZWxkIFsgcyAsIGltYWdlIF0gO1xuXG5cdFx0XHRpbWFnZSA9IHNpZ21hW2ltYWdlXSA7XG5cblx0XHR9XG5cblx0fVxuXG59XG4iXX0=