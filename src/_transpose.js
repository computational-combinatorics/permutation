/**
 * Transpose elements of input index <code>a</code> and <code>b</code> in the
 * input permutation.
 *
 * @param {number} a The first input index.
 * @param {number} b The second input index.
 * @param {Array} sigma The input permutation.
 */
export function _transpose(a, b, sigma) {
	const tmp = sigma[a];
	sigma[a] = sigma[b];
	sigma[b] = tmp;
}
