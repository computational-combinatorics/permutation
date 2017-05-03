"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._bitreversal = _bitreversal;
function _bitreversal(array, n) {

	var i = 1;

	array[0] = 0;

	while (i < n) {

		for (var j = 0; j < i; ++j) {

			array[i + j] = (array[j] <<= 1) + 1;
		}

		i <<= 1;
	}
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9fYml0cmV2ZXJzYWwuanMiXSwibmFtZXMiOlsiX2JpdHJldmVyc2FsIiwiYXJyYXkiLCJuIiwiaSIsImoiXSwibWFwcGluZ3MiOiI7Ozs7O1FBQ2dCQSxZLEdBQUFBLFk7QUFBVCxTQUFTQSxZQUFULENBQXdCQyxLQUF4QixFQUFnQ0MsQ0FBaEMsRUFBb0M7O0FBRTFDLEtBQUlDLElBQUksQ0FBUjs7QUFFQUYsT0FBTSxDQUFOLElBQVcsQ0FBWDs7QUFFQSxRQUFRRSxJQUFJRCxDQUFaLEVBQWdCOztBQUVmLE9BQU0sSUFBSUUsSUFBSSxDQUFkLEVBQWtCQSxJQUFJRCxDQUF0QixFQUEwQixFQUFFQyxDQUE1QixFQUFnQzs7QUFFL0JILFNBQU1FLElBQUVDLENBQVIsSUFBYSxDQUFFSCxNQUFNRyxDQUFOLE1BQWEsQ0FBZixJQUFxQixDQUFsQztBQUVBOztBQUVERCxRQUFNLENBQU47QUFFQTtBQUVEIiwiZmlsZSI6Il9iaXRyZXZlcnNhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGZ1bmN0aW9uIF9iaXRyZXZlcnNhbCAoIGFycmF5ICwgbiApIHtcblxuXHRsZXQgaSA9IDEgO1xuXG5cdGFycmF5WzBdID0gMCA7XG5cblx0d2hpbGUgKCBpIDwgbiApIHtcblxuXHRcdGZvciAoIGxldCBqID0gMCA7IGogPCBpIDsgKytqICkge1xuXG5cdFx0XHRhcnJheVtpK2pdID0gKCBhcnJheVtqXSA8PD0gMSApICsgMSA7XG5cblx0XHR9XG5cblx0XHRpIDw8PSAxIDtcblxuXHR9XG5cbn1cblxuIl19