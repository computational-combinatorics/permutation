'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._reverse = _reverse;

var _transpose2 = require('./_transpose');

/**
 * Reverses input permutation ___in-place___ from input index <code>i</code>
 * (include) to input index <code>j</code> (excluded).
 *
 * @param {Array} sigma The input permutation to reverse (modified in-place).
 * @param {Number} i The left bound (included).
 * @param {Number} j The right bound (excluded).
 */
function _reverse(sigma, i, j) {

  while (i < --j) {
    (0, _transpose2._transpose)(i++, j, sigma);
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9fcmV2ZXJzZS5qcyJdLCJuYW1lcyI6WyJfcmV2ZXJzZSIsInNpZ21hIiwiaSIsImoiXSwibWFwcGluZ3MiOiI7Ozs7O1FBVWdCQSxRLEdBQUFBLFE7O0FBVmhCOztBQUVBOzs7Ozs7OztBQVFPLFNBQVNBLFFBQVQsQ0FBb0JDLEtBQXBCLEVBQTRCQyxDQUE1QixFQUFnQ0MsQ0FBaEMsRUFBb0M7O0FBRTFDLFNBQVFELElBQUcsRUFBR0MsQ0FBZDtBQUFrQixnQ0FBWUQsR0FBWixFQUFrQkMsQ0FBbEIsRUFBc0JGLEtBQXRCO0FBQWxCO0FBRUEiLCJmaWxlIjoiX3JldmVyc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfdHJhbnNwb3NlIH0gZnJvbSAnLi9fdHJhbnNwb3NlJyA7XG5cbi8qKlxuICogUmV2ZXJzZXMgaW5wdXQgcGVybXV0YXRpb24gX19faW4tcGxhY2VfX18gZnJvbSBpbnB1dCBpbmRleCA8Y29kZT5pPC9jb2RlPlxuICogKGluY2x1ZGUpIHRvIGlucHV0IGluZGV4IDxjb2RlPmo8L2NvZGU+IChleGNsdWRlZCkuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gc2lnbWEgVGhlIGlucHV0IHBlcm11dGF0aW9uIHRvIHJldmVyc2UgKG1vZGlmaWVkIGluLXBsYWNlKS5cbiAqIEBwYXJhbSB7TnVtYmVyfSBpIFRoZSBsZWZ0IGJvdW5kIChpbmNsdWRlZCkuXG4gKiBAcGFyYW0ge051bWJlcn0gaiBUaGUgcmlnaHQgYm91bmQgKGV4Y2x1ZGVkKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9yZXZlcnNlICggc2lnbWEgLCBpICwgaiApIHtcblxuXHR3aGlsZSAoIGkgPC0tIGogKSBfdHJhbnNwb3NlKCBpKysgLCBqICwgc2lnbWEgKSA7XG5cbn1cbiJdfQ==