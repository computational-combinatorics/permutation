"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._bitreversal = _bitreversal;

/**
 * Fills an input array with the bitreversal permutation for input
 * <code>n</code> items. The array is filled starting at index <code>0</code>
 * and ending at index <code>n-1</code>. Note that <code>n</code> MUST be a
 * power of <code>2</code>.
 *
 * @param {Array} array The array to fill.
 * @param {Number} n The size of the permutation, must be a power of 2.
 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9fYml0cmV2ZXJzYWwuanMiXSwibmFtZXMiOlsiX2JpdHJldmVyc2FsIiwiYXJyYXkiLCJuIiwiaSIsImoiXSwibWFwcGluZ3MiOiI7Ozs7O1FBVWdCQSxZLEdBQUFBLFk7O0FBVGhCOzs7Ozs7Ozs7QUFTTyxTQUFTQSxZQUFULENBQXdCQyxLQUF4QixFQUFnQ0MsQ0FBaEMsRUFBb0M7O0FBRTFDLE1BQUlDLElBQUksQ0FBUjs7QUFFQUYsUUFBTSxDQUFOLElBQVcsQ0FBWDs7QUFFQSxTQUFRRSxJQUFJRCxDQUFaLEVBQWdCOztBQUVmLFNBQU0sSUFBSUUsSUFBSSxDQUFkLEVBQWtCQSxJQUFJRCxDQUF0QixFQUEwQixFQUFFQyxDQUE1QixFQUFnQzs7QUFFL0JILFlBQU1FLElBQUVDLENBQVIsSUFBYSxDQUFFSCxNQUFNRyxDQUFOLE1BQWEsQ0FBZixJQUFxQixDQUFsQztBQUVBOztBQUVERCxVQUFNLENBQU47QUFFQTtBQUVEIiwiZmlsZSI6Il9iaXRyZXZlcnNhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBGaWxscyBhbiBpbnB1dCBhcnJheSB3aXRoIHRoZSBiaXRyZXZlcnNhbCBwZXJtdXRhdGlvbiBmb3IgaW5wdXRcbiAqIDxjb2RlPm48L2NvZGU+IGl0ZW1zLiBUaGUgYXJyYXkgaXMgZmlsbGVkIHN0YXJ0aW5nIGF0IGluZGV4IDxjb2RlPjA8L2NvZGU+XG4gKiBhbmQgZW5kaW5nIGF0IGluZGV4IDxjb2RlPm4tMTwvY29kZT4uIE5vdGUgdGhhdCA8Y29kZT5uPC9jb2RlPiBNVVNUIGJlIGFcbiAqIHBvd2VyIG9mIDxjb2RlPjI8L2NvZGU+LlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBmaWxsLlxuICogQHBhcmFtIHtOdW1iZXJ9IG4gVGhlIHNpemUgb2YgdGhlIHBlcm11dGF0aW9uLCBtdXN0IGJlIGEgcG93ZXIgb2YgMi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9iaXRyZXZlcnNhbCAoIGFycmF5ICwgbiApIHtcblxuXHRsZXQgaSA9IDEgO1xuXG5cdGFycmF5WzBdID0gMCA7XG5cblx0d2hpbGUgKCBpIDwgbiApIHtcblxuXHRcdGZvciAoIGxldCBqID0gMCA7IGogPCBpIDsgKytqICkge1xuXG5cdFx0XHRhcnJheVtpK2pdID0gKCBhcnJheVtqXSA8PD0gMSApICsgMSA7XG5cblx0XHR9XG5cblx0XHRpIDw8PSAxIDtcblxuXHR9XG5cbn1cblxuIl19