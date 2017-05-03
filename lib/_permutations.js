'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._permutations = _permutations;

var _next2 = require('./_next');

var _marked = [_permutations].map(regeneratorRuntime.mark);

function _permutations(sigma, n) {
	return regeneratorRuntime.wrap(function _permutations$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_context.next = 2;
					return sigma;

				case 2:
					if ((0, _next2._next)(sigma, n)) {
						_context.next = 0;
						break;
					}

				case 3:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked[0], this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9fcGVybXV0YXRpb25zLmpzIl0sIm5hbWVzIjpbIl9wZXJtdXRhdGlvbnMiLCJzaWdtYSIsIm4iXSwibWFwcGluZ3MiOiI7Ozs7O1FBRWlCQSxhLEdBQUFBLGE7O0FBRmpCOztlQUVpQkEsYTs7QUFBVixTQUFVQSxhQUFWLENBQTBCQyxLQUExQixFQUFrQ0MsQ0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFFS0QsS0FGTDs7QUFBQTtBQUFBLFNBRXVCLGtCQUFPQSxLQUFQLEVBQWVDLENBQWYsQ0FGdkI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiX3Blcm11dGF0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9uZXh0IH0gZnJvbSAnLi9fbmV4dCcgO1xuXG5leHBvcnQgZnVuY3Rpb24qIF9wZXJtdXRhdGlvbnMgKCBzaWdtYSAsIG4gKSB7XG5cblx0ZG8geyB5aWVsZCBzaWdtYSA7IH0gd2hpbGUgKCBfbmV4dCggc2lnbWEgLCBuICkgKSA7XG5cbn1cblxuIl19