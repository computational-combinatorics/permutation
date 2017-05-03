"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._cycles = _cycles;

var _marked = [_cycles].map(regeneratorRuntime.mark);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9fY3ljbGVzLmpzIl0sIm5hbWVzIjpbIl9jeWNsZXMiLCJzaWdtYSIsInVzZWQiLCJzIiwiaW1hZ2UiLCJjeWNsZSIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7O1FBQ2lCQSxPLEdBQUFBLE87O2VBQUFBLE87O0FBQVYsU0FBVUEsT0FBVixDQUFvQkMsS0FBcEIsRUFBNEJDLElBQTVCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUVXRCxLQUZYOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRU1FLE1BRk47O0FBQUEsVUFJQUQsS0FBS0MsQ0FBTCxDQUpBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBOztBQU1MRCxVQUFLQyxDQUFMLElBQVUsSUFBVjs7QUFFSUMsVUFSQyxHQVFPSCxNQUFNRSxDQUFOLENBUlA7QUFVQ0UsVUFWRCxHQVVTLEVBVlQ7OztBQVlMLFlBQVFELFVBQVVELENBQWxCLEVBQXNCOztBQUVyQkQsV0FBS0UsS0FBTCxJQUFjLElBQWQ7O0FBRUFDLFlBQU1DLElBQU4sQ0FBWUYsS0FBWjs7QUFFQUEsY0FBUUgsTUFBTUcsS0FBTixDQUFSO0FBRUE7O0FBcEJJO0FBQUEsWUFzQkMsQ0FBRUQsQ0FBRixFQUFNRSxLQUFOLENBdEJEOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiX2N5Y2xlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGZ1bmN0aW9uKiBfY3ljbGVzICggc2lnbWEgLCB1c2VkICkge1xuXG5cdGZvciAoIGNvbnN0IHMgb2Ygc2lnbWEgKSB7XG5cblx0XHRpZiAoIHVzZWRbc10gKSBjb250aW51ZSA7XG5cblx0XHR1c2VkW3NdID0gdHJ1ZSA7XG5cblx0XHRsZXQgaW1hZ2UgPSBzaWdtYVtzXSA7XG5cblx0XHRjb25zdCBjeWNsZSA9IFsgXSA7XG5cblx0XHR3aGlsZSAoIGltYWdlICE9PSBzICkge1xuXG5cdFx0XHR1c2VkW2ltYWdlXSA9IHRydWUgO1xuXG5cdFx0XHRjeWNsZS5wdXNoKCBpbWFnZSApIDtcblxuXHRcdFx0aW1hZ2UgPSBzaWdtYVtpbWFnZV0gO1xuXG5cdFx0fVxuXG5cdFx0eWllbGQgWyBzICwgY3ljbGUgXSA7XG5cblx0fVxuXG59XG5cbiJdfQ==