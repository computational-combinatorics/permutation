/**
 * Fills an input array with the identity permutation on input <code>n</code>
 * elements.
 *
 * @param {Array} sigma The input array.
 * @param {Number} n The size to use for the permutation.
 */
export function _identity(sigma, n) {
	for (let i = 0; i < n; ++i) sigma[i] = i;
}
