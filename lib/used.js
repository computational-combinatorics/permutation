'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.used = used;

var _used2 = require('./_used');

/**
 * Generates an helper array of given size (used in {@link _cycle}, {@link cycle}).
 *
 * @param {Number} n The given size.
 * @returns {Array} The helper array of prescribed size.
 */
function used(n) {

  var array = new Array(n);

  (0, _used2._used)(n, array);

  return array;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91c2VkLmpzIl0sIm5hbWVzIjpbInVzZWQiLCJuIiwiYXJyYXkiLCJBcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFRZ0JBLEksR0FBQUEsSTs7QUFSaEI7O0FBRUE7Ozs7OztBQU1PLFNBQVNBLElBQVQsQ0FBZ0JDLENBQWhCLEVBQW9COztBQUUxQixNQUFNQyxRQUFRLElBQUlDLEtBQUosQ0FBV0YsQ0FBWCxDQUFkOztBQUVBLG9CQUFPQSxDQUFQLEVBQVdDLEtBQVg7O0FBRUEsU0FBT0EsS0FBUDtBQUVBIiwiZmlsZSI6InVzZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfdXNlZCB9IGZyb20gJy4vX3VzZWQnIDtcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYW4gaGVscGVyIGFycmF5IG9mIGdpdmVuIHNpemUgKHVzZWQgaW4ge0BsaW5rIF9jeWNsZX0sIHtAbGluayBjeWNsZX0pLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBuIFRoZSBnaXZlbiBzaXplLlxuICogQHJldHVybnMge0FycmF5fSBUaGUgaGVscGVyIGFycmF5IG9mIHByZXNjcmliZWQgc2l6ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZWQgKCBuICkge1xuXG5cdGNvbnN0IGFycmF5ID0gbmV3IEFycmF5KCBuICkgO1xuXG5cdF91c2VkKCBuICwgYXJyYXkgKSA7XG5cblx0cmV0dXJuIGFycmF5IDtcblxufVxuXG4iXX0=