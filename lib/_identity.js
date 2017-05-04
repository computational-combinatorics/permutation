"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._identity = _identity;

/**
 * Fills an input array with the identity permutation on input <code>n</code>
 * elements.
 *
 * @param sigma The input array.
 * @param n The size to use for the permutation.
 */
function _identity(sigma, n) {

  for (var i = 0; i < n; ++i) {
    sigma[i] = i;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9faWRlbnRpdHkuanMiXSwibmFtZXMiOlsiX2lkZW50aXR5Iiwic2lnbWEiLCJuIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFRZ0JBLFMsR0FBQUEsUzs7QUFQaEI7Ozs7Ozs7QUFPTyxTQUFTQSxTQUFULENBQXFCQyxLQUFyQixFQUE2QkMsQ0FBN0IsRUFBaUM7O0FBRXZDLE9BQU0sSUFBSUMsSUFBSSxDQUFkLEVBQWtCQSxJQUFJRCxDQUF0QixFQUEwQixFQUFFQyxDQUE1QjtBQUFnQ0YsVUFBTUUsQ0FBTixJQUFXQSxDQUFYO0FBQWhDO0FBRUEiLCJmaWxlIjoiX2lkZW50aXR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIEZpbGxzIGFuIGlucHV0IGFycmF5IHdpdGggdGhlIGlkZW50aXR5IHBlcm11dGF0aW9uIG9uIGlucHV0IDxjb2RlPm48L2NvZGU+XG4gKiBlbGVtZW50cy5cbiAqXG4gKiBAcGFyYW0gc2lnbWEgVGhlIGlucHV0IGFycmF5LlxuICogQHBhcmFtIG4gVGhlIHNpemUgdG8gdXNlIGZvciB0aGUgcGVybXV0YXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfaWRlbnRpdHkgKCBzaWdtYSAsIG4gKSB7XG5cblx0Zm9yICggbGV0IGkgPSAwIDsgaSA8IG4gOyArK2kgKSBzaWdtYVtpXSA9IGkgO1xuXG59XG5cbiJdfQ==