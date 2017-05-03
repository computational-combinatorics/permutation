'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.transpositions = transpositions;

var _transpositions2 = require('./_transpositions');

var _cycles = require('./cycles');

var _used = require('./used');

var _marked = [transpositions].map(regeneratorRuntime.mark);

function transpositions(sigma) {
	return regeneratorRuntime.wrap(function transpositions$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					return _context.delegateYield((0, _transpositions2._transpositions)((0, _cycles.cycles)(sigma, (0, _used.used)(sigma.length))), 't0', 1);

				case 1:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked[0], this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90cmFuc3Bvc2l0aW9ucy5qcyJdLCJuYW1lcyI6WyJ0cmFuc3Bvc2l0aW9ucyIsInNpZ21hIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7OztRQUlpQkEsYyxHQUFBQSxjOztBQUpqQjs7QUFDQTs7QUFDQTs7ZUFFaUJBLGM7O0FBQVYsU0FBVUEsY0FBVixDQUEyQkMsS0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUVDLHNDQUFpQixvQkFBUUEsS0FBUixFQUFnQixnQkFBTUEsTUFBTUMsTUFBWixDQUFoQixDQUFqQixDQUZEOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InRyYW5zcG9zaXRpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX3RyYW5zcG9zaXRpb25zIH0gZnJvbSAnLi9fdHJhbnNwb3NpdGlvbnMnIDtcbmltcG9ydCB7IGN5Y2xlcyB9IGZyb20gJy4vY3ljbGVzJyA7XG5pbXBvcnQgeyB1c2VkIH0gZnJvbSAnLi91c2VkJyA7XG5cbmV4cG9ydCBmdW5jdGlvbiogdHJhbnNwb3NpdGlvbnMgKCBzaWdtYSApIHtcblxuXHR5aWVsZCogX3RyYW5zcG9zaXRpb25zKCBjeWNsZXMoIHNpZ21hICwgdXNlZCggc2lnbWEubGVuZ3RoICkgKSApIDtcblxufVxuXG4iXX0=