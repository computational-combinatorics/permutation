'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.permutations = permutations;

var _identity = require('./identity');

var _permutations2 = require('./_permutations');

var _copy = require('./copy');

var _marked = [permutations].map(regeneratorRuntime.mark);

function permutations(n) {
	var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, permutation;

	return regeneratorRuntime.wrap(function permutations$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_iteratorNormalCompletion = true;
					_didIteratorError = false;
					_iteratorError = undefined;
					_context.prev = 3;
					_iterator = (0, _permutations2._permutations)((0, _identity.identity)(n), n)[Symbol.iterator]();

				case 5:
					if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
						_context.next = 12;
						break;
					}

					permutation = _step.value;
					_context.next = 9;
					return (0, _copy.copy)(permutation);

				case 9:
					_iteratorNormalCompletion = true;
					_context.next = 5;
					break;

				case 12:
					_context.next = 18;
					break;

				case 14:
					_context.prev = 14;
					_context.t0 = _context['catch'](3);
					_didIteratorError = true;
					_iteratorError = _context.t0;

				case 18:
					_context.prev = 18;
					_context.prev = 19;

					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}

				case 21:
					_context.prev = 21;

					if (!_didIteratorError) {
						_context.next = 24;
						break;
					}

					throw _iteratorError;

				case 24:
					return _context.finish(21);

				case 25:
					return _context.finish(18);

				case 26:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked[0], this, [[3, 14, 18, 26], [19,, 21, 25]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wZXJtdXRhdGlvbnMuanMiXSwibmFtZXMiOlsicGVybXV0YXRpb25zIiwibiIsInBlcm11dGF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7OztRQUlpQkEsWSxHQUFBQSxZOztBQUpqQjs7QUFDQTs7QUFDQTs7ZUFFaUJBLFk7O0FBQVYsU0FBVUEsWUFBVixDQUF5QkMsQ0FBekI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRXFCLGtDQUFlLHdCQUFVQSxDQUFWLENBQWYsRUFBK0JBLENBQS9CLENBRnJCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRU1DLGdCQUZOO0FBQUE7QUFBQSxZQUlDLGdCQUFNQSxXQUFOLENBSkQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJwZXJtdXRhdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpZGVudGl0eSB9IGZyb20gJy4vaWRlbnRpdHknIDtcbmltcG9ydCB7IF9wZXJtdXRhdGlvbnMgfSBmcm9tICcuL19wZXJtdXRhdGlvbnMnIDtcbmltcG9ydCB7IGNvcHkgfSBmcm9tICcuL2NvcHknIDtcblxuZXhwb3J0IGZ1bmN0aW9uKiBwZXJtdXRhdGlvbnMgKCBuICkge1xuXG5cdGZvciAoIGNvbnN0IHBlcm11dGF0aW9uIG9mIF9wZXJtdXRhdGlvbnMoIGlkZW50aXR5KCBuICkgLCBuICkgKSB7XG5cblx0XHR5aWVsZCBjb3B5KCBwZXJtdXRhdGlvbiApIDtcblxuXHR9XG5cbn1cblxuIl19