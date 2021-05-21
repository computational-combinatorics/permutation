/**
 * Copy an input permutation to an output array.
 *
 * @param {Array} sigma The input permutation.
 * @param {number} n The size of the input permutation to copy.
 * @param {Array} tau The output array.
 */
export function _copy(sigma, n, tau) {
	for (let i = 0; i < n; ++i) tau[i] = sigma[i];
}
