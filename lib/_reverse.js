'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._reverse = _reverse;

var _transpose2 = require('./_transpose');

/**
 * Reverses input permutation in place from input index <code>i</code>
 * (include) to input index <code>j</code> (excluded).
 *
 * @param {Array} sigma The input permutation to reverse.
 * @param {Number} i The left bound (included).
 * @param {Number} j The right bound (excluded).
 */
function _reverse(sigma, i, j) {

  while (i < --j) {
    (0, _transpose2._transpose)(i++, j, sigma);
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9fcmV2ZXJzZS5qcyJdLCJuYW1lcyI6WyJfcmV2ZXJzZSIsInNpZ21hIiwiaSIsImoiXSwibWFwcGluZ3MiOiI7Ozs7O1FBVWdCQSxRLEdBQUFBLFE7O0FBVmhCOztBQUVBOzs7Ozs7OztBQVFPLFNBQVNBLFFBQVQsQ0FBb0JDLEtBQXBCLEVBQTRCQyxDQUE1QixFQUFnQ0MsQ0FBaEMsRUFBb0M7O0FBRTFDLFNBQVFELElBQUcsRUFBR0MsQ0FBZDtBQUFrQixnQ0FBWUQsR0FBWixFQUFrQkMsQ0FBbEIsRUFBc0JGLEtBQXRCO0FBQWxCO0FBRUEiLCJmaWxlIjoiX3JldmVyc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfdHJhbnNwb3NlIH0gZnJvbSAnLi9fdHJhbnNwb3NlJyA7XG5cbi8qKlxuICogUmV2ZXJzZXMgaW5wdXQgcGVybXV0YXRpb24gaW4gcGxhY2UgZnJvbSBpbnB1dCBpbmRleCA8Y29kZT5pPC9jb2RlPlxuICogKGluY2x1ZGUpIHRvIGlucHV0IGluZGV4IDxjb2RlPmo8L2NvZGU+IChleGNsdWRlZCkuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gc2lnbWEgVGhlIGlucHV0IHBlcm11dGF0aW9uIHRvIHJldmVyc2UuXG4gKiBAcGFyYW0ge051bWJlcn0gaSBUaGUgbGVmdCBib3VuZCAoaW5jbHVkZWQpLlxuICogQHBhcmFtIHtOdW1iZXJ9IGogVGhlIHJpZ2h0IGJvdW5kIChleGNsdWRlZCkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfcmV2ZXJzZSAoIHNpZ21hICwgaSAsIGogKSB7XG5cblx0d2hpbGUgKCBpIDwtLSBqICkgX3RyYW5zcG9zZSggaSsrICwgaiAsIHNpZ21hICkgO1xuXG59XG4iXX0=