'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.cycles = cycles;

var _cycles2 = require('./_cycles');

var _used = require('./used');

var _marked = [cycles].map(regeneratorRuntime.mark);

function cycles(sigma) {
	return regeneratorRuntime.wrap(function cycles$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					return _context.delegateYield((0, _cycles2._cycles)(sigma, (0, _used.used)(sigma.length)), 't0', 1);

				case 1:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked[0], this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jeWNsZXMuanMiXSwibmFtZXMiOlsiY3ljbGVzIiwic2lnbWEiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7O1FBR2lCQSxNLEdBQUFBLE07O0FBSGpCOztBQUNBOztlQUVpQkEsTTs7QUFBVixTQUFVQSxNQUFWLENBQW1CQyxLQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBRUMsc0JBQVNBLEtBQVQsRUFBaUIsZ0JBQU1BLE1BQU1DLE1BQVosQ0FBakIsQ0FGRDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJjeWNsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfY3ljbGVzIH0gZnJvbSAnLi9fY3ljbGVzJyA7XG5pbXBvcnQgeyB1c2VkIH0gZnJvbSAnLi91c2VkJyA7XG5cbmV4cG9ydCBmdW5jdGlvbiogY3ljbGVzICggc2lnbWEgKSB7XG5cblx0eWllbGQqIF9jeWNsZXMoIHNpZ21hICwgdXNlZCggc2lnbWEubGVuZ3RoICkgKSA7XG5cbn1cblxuIl19