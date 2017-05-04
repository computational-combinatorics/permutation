'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transposition = transposition;

var _identity = require('./identity');

var _transposition2 = require('./_transposition');

/**
 * Outputs the permutation on input <code>n</code> numbers that only transposes
 * two input elements <code>a</code> and <code>b</code>.
 *
 * @param {Number} n The size of the permutation to output.
 * @param {Number} a The first index to swap.
 * @param {Number} b The second index to swap.
 * @returns {undefined}
 */
function transposition(n, a, b) {

  var rho = (0, _identity.identity)(n);

  (0, _transposition2._transposition)(a, b, rho);

  return rho;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90cmFuc3Bvc2l0aW9uLmpzIl0sIm5hbWVzIjpbInRyYW5zcG9zaXRpb24iLCJuIiwiYSIsImIiLCJyaG8iXSwibWFwcGluZ3MiOiI7Ozs7O1FBWWdCQSxhLEdBQUFBLGE7O0FBWmhCOztBQUNBOztBQUVBOzs7Ozs7Ozs7QUFTTyxTQUFTQSxhQUFULENBQXlCQyxDQUF6QixFQUE2QkMsQ0FBN0IsRUFBaUNDLENBQWpDLEVBQXFDOztBQUUzQyxNQUFNQyxNQUFNLHdCQUFVSCxDQUFWLENBQVo7O0FBRUEsc0NBQWdCQyxDQUFoQixFQUFvQkMsQ0FBcEIsRUFBd0JDLEdBQXhCOztBQUVBLFNBQU9BLEdBQVA7QUFFQSIsImZpbGUiOiJ0cmFuc3Bvc2l0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaWRlbnRpdHkgfSBmcm9tICcuL2lkZW50aXR5JyA7XG5pbXBvcnQgeyBfdHJhbnNwb3NpdGlvbiB9IGZyb20gJy4vX3RyYW5zcG9zaXRpb24nIDtcblxuLyoqXG4gKiBPdXRwdXRzIHRoZSBwZXJtdXRhdGlvbiBvbiBpbnB1dCA8Y29kZT5uPC9jb2RlPiBudW1iZXJzIHRoYXQgb25seSB0cmFuc3Bvc2VzXG4gKiB0d28gaW5wdXQgZWxlbWVudHMgPGNvZGU+YTwvY29kZT4gYW5kIDxjb2RlPmI8L2NvZGU+LlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBuIFRoZSBzaXplIG9mIHRoZSBwZXJtdXRhdGlvbiB0byBvdXRwdXQuXG4gKiBAcGFyYW0ge051bWJlcn0gYSBUaGUgZmlyc3QgaW5kZXggdG8gc3dhcC5cbiAqIEBwYXJhbSB7TnVtYmVyfSBiIFRoZSBzZWNvbmQgaW5kZXggdG8gc3dhcC5cbiAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc3Bvc2l0aW9uICggbiAsIGEgLCBiICkge1xuXG5cdGNvbnN0IHJobyA9IGlkZW50aXR5KCBuICkgO1xuXG5cdF90cmFuc3Bvc2l0aW9uKCBhICwgYiAsIHJobyApIDtcblxuXHRyZXR1cm4gcmhvIDtcblxufVxuXG4iXX0=