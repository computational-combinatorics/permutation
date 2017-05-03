'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._next = _next;

var _transpose2 = require('./_transpose');

var _reverse2 = require('./_reverse');

function _next(sigma, n) {

	var i = n - 1;

	while (i > 0) {

		--i;

		if (sigma[i] > sigma[i + 1]) continue;

		var j = n - 1;

		while (sigma[j] < sigma[i]) {
			--j;
		}(0, _transpose2._transpose)(i, j, sigma);

		(0, _reverse2._reverse)(sigma, i + 1, n);

		return true;
	}

	return false;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9fbmV4dC5qcyJdLCJuYW1lcyI6WyJfbmV4dCIsInNpZ21hIiwibiIsImkiLCJqIl0sIm1hcHBpbmdzIjoiOzs7OztRQUdnQkEsSyxHQUFBQSxLOztBQUhoQjs7QUFDQTs7QUFFTyxTQUFTQSxLQUFULENBQWlCQyxLQUFqQixFQUF5QkMsQ0FBekIsRUFBNkI7O0FBRW5DLEtBQUlDLElBQUlELElBQUksQ0FBWjs7QUFFQSxRQUFRQyxJQUFJLENBQVosRUFBZ0I7O0FBRWYsSUFBRUEsQ0FBRjs7QUFFQSxNQUFLRixNQUFNRSxDQUFOLElBQVdGLE1BQU1FLElBQUUsQ0FBUixDQUFoQixFQUE2Qjs7QUFFN0IsTUFBSUMsSUFBSUYsSUFBSSxDQUFaOztBQUVBLFNBQVFELE1BQU1HLENBQU4sSUFBV0gsTUFBTUUsQ0FBTixDQUFuQjtBQUE4QixLQUFFQyxDQUFGO0FBQTlCLEdBRUEsNEJBQVlELENBQVosRUFBZ0JDLENBQWhCLEVBQW9CSCxLQUFwQjs7QUFFQSwwQkFBVUEsS0FBVixFQUFrQkUsSUFBSSxDQUF0QixFQUEwQkQsQ0FBMUI7O0FBRUEsU0FBTyxJQUFQO0FBRUE7O0FBRUQsUUFBTyxLQUFQO0FBRUEiLCJmaWxlIjoiX25leHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfdHJhbnNwb3NlIH0gZnJvbSAnLi9fdHJhbnNwb3NlJyA7XG5pbXBvcnQgeyBfcmV2ZXJzZSB9IGZyb20gJy4vX3JldmVyc2UnIDtcblxuZXhwb3J0IGZ1bmN0aW9uIF9uZXh0ICggc2lnbWEgLCBuICkge1xuXG5cdGxldCBpID0gbiAtIDEgO1xuXG5cdHdoaWxlICggaSA+IDAgKSB7XG5cblx0XHQtLWkgO1xuXG5cdFx0aWYgKCBzaWdtYVtpXSA+IHNpZ21hW2krMV0gKSBjb250aW51ZSA7XG5cblx0XHRsZXQgaiA9IG4gLSAxIDtcblxuXHRcdHdoaWxlICggc2lnbWFbal0gPCBzaWdtYVtpXSApIC0taiA7XG5cblx0XHRfdHJhbnNwb3NlKCBpICwgaiAsIHNpZ21hICkgO1xuXG5cdFx0X3JldmVyc2UoIHNpZ21hICwgaSArIDEgLCBuICkgO1xuXG5cdFx0cmV0dXJuIHRydWUgO1xuXG5cdH1cblxuXHRyZXR1cm4gZmFsc2UgO1xuXG59XG5cbiJdfQ==