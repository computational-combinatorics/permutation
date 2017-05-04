"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._used = _used;

/**
 * For a given size <code>n</code>, fills an input array with
 * <code>false</code>. Starting at index <code>0</code>, ending at index
 * <code>n-1</code>. This array is used as a helper in other function. For
 * example, for computing the cycle decomposition of an input permutation (see
 * {@link _cycles}, {@link cycles}).
 *
 * @param n The given size.
 * @param array The input array.
 */
function _used(n, array) {

  for (var i = 0; i < n; ++i) {
    array[i] = false;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9fdXNlZC5qcyJdLCJuYW1lcyI6WyJfdXNlZCIsIm4iLCJhcnJheSIsImkiXSwibWFwcGluZ3MiOiI7Ozs7O1FBV2dCQSxLLEdBQUFBLEs7O0FBVmhCOzs7Ozs7Ozs7O0FBVU8sU0FBU0EsS0FBVCxDQUFpQkMsQ0FBakIsRUFBcUJDLEtBQXJCLEVBQTZCOztBQUVuQyxPQUFNLElBQUlDLElBQUksQ0FBZCxFQUFrQkEsSUFBSUYsQ0FBdEIsRUFBMEIsRUFBRUUsQ0FBNUI7QUFBZ0NELFVBQU1DLENBQU4sSUFBVyxLQUFYO0FBQWhDO0FBRUEiLCJmaWxlIjoiX3VzZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogRm9yIGEgZ2l2ZW4gc2l6ZSA8Y29kZT5uPC9jb2RlPiwgZmlsbHMgYW4gaW5wdXQgYXJyYXkgd2l0aFxuICogPGNvZGU+ZmFsc2U8L2NvZGU+LiBTdGFydGluZyBhdCBpbmRleCA8Y29kZT4wPC9jb2RlPiwgZW5kaW5nIGF0IGluZGV4XG4gKiA8Y29kZT5uLTE8L2NvZGU+LiBUaGlzIGFycmF5IGlzIHVzZWQgYXMgYSBoZWxwZXIgaW4gb3RoZXIgZnVuY3Rpb24uIEZvclxuICogZXhhbXBsZSwgZm9yIGNvbXB1dGluZyB0aGUgY3ljbGUgZGVjb21wb3NpdGlvbiBvZiBhbiBpbnB1dCBwZXJtdXRhdGlvbiAoc2VlXG4gKiB7QGxpbmsgX2N5Y2xlc30sIHtAbGluayBjeWNsZXN9KS5cbiAqXG4gKiBAcGFyYW0gbiBUaGUgZ2l2ZW4gc2l6ZS5cbiAqIEBwYXJhbSBhcnJheSBUaGUgaW5wdXQgYXJyYXkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfdXNlZCAoIG4gLCBhcnJheSApIHtcblxuXHRmb3IgKCBsZXQgaSA9IDAgOyBpIDwgbiA7ICsraSApIGFycmF5W2ldID0gZmFsc2UgO1xuXG59XG5cbiJdfQ==