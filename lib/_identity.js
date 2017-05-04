"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._identity = _identity;

/**
 * Fills an input array with the identity permutation on input <code>n</code>
 * elements.
 *
 * @param {Array} sigma The input array.
 * @param {Number} n The size to use for the permutation.
 */
function _identity(sigma, n) {

  for (var i = 0; i < n; ++i) {
    sigma[i] = i;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9faWRlbnRpdHkuanMiXSwibmFtZXMiOlsiX2lkZW50aXR5Iiwic2lnbWEiLCJuIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFRZ0JBLFMsR0FBQUEsUzs7QUFQaEI7Ozs7Ozs7QUFPTyxTQUFTQSxTQUFULENBQXFCQyxLQUFyQixFQUE2QkMsQ0FBN0IsRUFBaUM7O0FBRXZDLE9BQU0sSUFBSUMsSUFBSSxDQUFkLEVBQWtCQSxJQUFJRCxDQUF0QixFQUEwQixFQUFFQyxDQUE1QjtBQUFnQ0YsVUFBTUUsQ0FBTixJQUFXQSxDQUFYO0FBQWhDO0FBRUEiLCJmaWxlIjoiX2lkZW50aXR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIEZpbGxzIGFuIGlucHV0IGFycmF5IHdpdGggdGhlIGlkZW50aXR5IHBlcm11dGF0aW9uIG9uIGlucHV0IDxjb2RlPm48L2NvZGU+XG4gKiBlbGVtZW50cy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBzaWdtYSBUaGUgaW5wdXQgYXJyYXkuXG4gKiBAcGFyYW0ge051bWJlcn0gbiBUaGUgc2l6ZSB0byB1c2UgZm9yIHRoZSBwZXJtdXRhdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9pZGVudGl0eSAoIHNpZ21hICwgbiApIHtcblxuXHRmb3IgKCBsZXQgaSA9IDAgOyBpIDwgbiA7ICsraSApIHNpZ21hW2ldID0gaSA7XG5cbn1cblxuIl19