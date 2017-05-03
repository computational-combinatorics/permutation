"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._invert = _invert;
function _invert(sigma, n, tau) {

	for (var i = 0; i < n; ++i) {

		tau[sigma[i]] = i;
	}
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9faW52ZXJ0LmpzIl0sIm5hbWVzIjpbIl9pbnZlcnQiLCJzaWdtYSIsIm4iLCJ0YXUiLCJpIl0sIm1hcHBpbmdzIjoiOzs7OztRQUNnQkEsTyxHQUFBQSxPO0FBQVQsU0FBU0EsT0FBVCxDQUFtQkMsS0FBbkIsRUFBMkJDLENBQTNCLEVBQStCQyxHQUEvQixFQUFxQzs7QUFFM0MsTUFBTSxJQUFJQyxJQUFJLENBQWQsRUFBa0JBLElBQUlGLENBQXRCLEVBQTBCLEVBQUVFLENBQTVCLEVBQWdDOztBQUUvQkQsTUFBSUYsTUFBTUcsQ0FBTixDQUFKLElBQWdCQSxDQUFoQjtBQUVBO0FBRUQiLCJmaWxlIjoiX2ludmVydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGZ1bmN0aW9uIF9pbnZlcnQgKCBzaWdtYSAsIG4gLCB0YXUgKSB7XG5cblx0Zm9yICggbGV0IGkgPSAwIDsgaSA8IG4gOyArK2kgKSB7XG5cblx0XHR0YXVbc2lnbWFbaV1dID0gaSA7XG5cblx0fVxuXG59XG5cbiJdfQ==