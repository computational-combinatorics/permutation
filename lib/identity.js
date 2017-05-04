'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.identity = identity;

var _permutation = require('./permutation');

var _identity2 = require('./_identity');

/**
 * Returns the identity permutation of a given size.
 *
 * @param {Number} n The size of the permutation to return.
 * @returns {Array} The identity permutation on <code>n</code> elements.
 */
function identity(n) {

  var rho = (0, _permutation.permutation)(n);

  (0, _identity2._identity)(rho, n);

  return rho;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pZGVudGl0eS5qcyJdLCJuYW1lcyI6WyJpZGVudGl0eSIsIm4iLCJyaG8iXSwibWFwcGluZ3MiOiI7Ozs7O1FBU2dCQSxRLEdBQUFBLFE7O0FBVGhCOztBQUNBOztBQUVBOzs7Ozs7QUFNTyxTQUFTQSxRQUFULENBQW9CQyxDQUFwQixFQUF3Qjs7QUFFOUIsTUFBTUMsTUFBTSw4QkFBYUQsQ0FBYixDQUFaOztBQUVBLDRCQUFXQyxHQUFYLEVBQWlCRCxDQUFqQjs7QUFFQSxTQUFPQyxHQUFQO0FBRUEiLCJmaWxlIjoiaWRlbnRpdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwZXJtdXRhdGlvbiB9IGZyb20gJy4vcGVybXV0YXRpb24nIDtcbmltcG9ydCB7IF9pZGVudGl0eSB9IGZyb20gJy4vX2lkZW50aXR5JyA7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgaWRlbnRpdHkgcGVybXV0YXRpb24gb2YgYSBnaXZlbiBzaXplLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBuIFRoZSBzaXplIG9mIHRoZSBwZXJtdXRhdGlvbiB0byByZXR1cm4uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFRoZSBpZGVudGl0eSBwZXJtdXRhdGlvbiBvbiA8Y29kZT5uPC9jb2RlPiBlbGVtZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5ICggbiApIHtcblxuXHRjb25zdCByaG8gPSBwZXJtdXRhdGlvbiggbiApIDtcblxuXHRfaWRlbnRpdHkoIHJobyAsIG4gKSA7XG5cblx0cmV0dXJuIHJobyA7XG5cbn1cblxuIl19