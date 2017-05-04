'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apply = apply;

var _identity = require('./identity');

var _apply2 = require('./_apply');

/**
 * Apply a given sequence (in the given order) of transpositions (given as
 * index tuples) to the identity permutation over input <code>n</code> elements.
 *
 * @param n The size of the identity permutation to apply the transpositions
 * to.
 * @param transpositions The given transpositions to apply.
 * @returns {Array} The resulting permutation.
 */
function apply(n, transpositions) {

  var rho = (0, _identity.identity)(n);

  (0, _apply2._apply)(transpositions, rho);

  return rho;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHBseS5qcyJdLCJuYW1lcyI6WyJhcHBseSIsIm4iLCJ0cmFuc3Bvc2l0aW9ucyIsInJobyJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFZZ0JBLEssR0FBQUEsSzs7QUFaaEI7O0FBQ0E7O0FBRUE7Ozs7Ozs7OztBQVNPLFNBQVNBLEtBQVQsQ0FBaUJDLENBQWpCLEVBQXFCQyxjQUFyQixFQUFzQzs7QUFFNUMsTUFBTUMsTUFBTSx3QkFBVUYsQ0FBVixDQUFaOztBQUVBLHNCQUFRQyxjQUFSLEVBQXlCQyxHQUF6Qjs7QUFFQSxTQUFPQSxHQUFQO0FBRUEiLCJmaWxlIjoiYXBwbHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpZGVudGl0eSB9IGZyb20gJy4vaWRlbnRpdHknIDtcbmltcG9ydCB7IF9hcHBseSB9IGZyb20gJy4vX2FwcGx5JyA7XG5cbi8qKlxuICogQXBwbHkgYSBnaXZlbiBzZXF1ZW5jZSAoaW4gdGhlIGdpdmVuIG9yZGVyKSBvZiB0cmFuc3Bvc2l0aW9ucyAoZ2l2ZW4gYXNcbiAqIGluZGV4IHR1cGxlcykgdG8gdGhlIGlkZW50aXR5IHBlcm11dGF0aW9uIG92ZXIgaW5wdXQgPGNvZGU+bjwvY29kZT4gZWxlbWVudHMuXG4gKlxuICogQHBhcmFtIG4gVGhlIHNpemUgb2YgdGhlIGlkZW50aXR5IHBlcm11dGF0aW9uIHRvIGFwcGx5IHRoZSB0cmFuc3Bvc2l0aW9uc1xuICogdG8uXG4gKiBAcGFyYW0gdHJhbnNwb3NpdGlvbnMgVGhlIGdpdmVuIHRyYW5zcG9zaXRpb25zIHRvIGFwcGx5LlxuICogQHJldHVybnMge0FycmF5fSBUaGUgcmVzdWx0aW5nIHBlcm11dGF0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwbHkgKCBuICwgdHJhbnNwb3NpdGlvbnMgKSB7XG5cblx0Y29uc3QgcmhvID0gaWRlbnRpdHkoIG4gKSA7XG5cblx0X2FwcGx5KCB0cmFuc3Bvc2l0aW9ucyAsIHJobyApIDtcblxuXHRyZXR1cm4gcmhvIDtcblxufVxuXG4iXX0=