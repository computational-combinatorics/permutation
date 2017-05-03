'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._reverse = _reverse;

var _transpose2 = require('./_transpose');

function _reverse(sigma, i, j) {

	while (i < --j) {
		(0, _transpose2._transpose)(i++, j, sigma);
	}
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9fcmV2ZXJzZS5qcyJdLCJuYW1lcyI6WyJfcmV2ZXJzZSIsInNpZ21hIiwiaSIsImoiXSwibWFwcGluZ3MiOiI7Ozs7O1FBRWdCQSxRLEdBQUFBLFE7O0FBRmhCOztBQUVPLFNBQVNBLFFBQVQsQ0FBb0JDLEtBQXBCLEVBQTRCQyxDQUE1QixFQUFnQ0MsQ0FBaEMsRUFBb0M7O0FBRTFDLFFBQVFELElBQUcsRUFBR0MsQ0FBZDtBQUFrQiw4QkFBWUQsR0FBWixFQUFrQkMsQ0FBbEIsRUFBc0JGLEtBQXRCO0FBQWxCO0FBRUEiLCJmaWxlIjoiX3JldmVyc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfdHJhbnNwb3NlIH0gZnJvbSAnLi9fdHJhbnNwb3NlJyA7XG5cbmV4cG9ydCBmdW5jdGlvbiBfcmV2ZXJzZSAoIHNpZ21hICwgaSAsIGogKSB7XG5cblx0d2hpbGUgKCBpIDwtLSBqICkgX3RyYW5zcG9zZSggaSsrICwgaiAsIHNpZ21hICkgO1xuXG59XG4iXX0=