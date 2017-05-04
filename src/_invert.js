/**
 * Fills an input array with the inverse <code>tau</code> of the input
 * permutation <code>sigma</code>, that is, the permutation such that
 * <code>compose(sigma, tau)</code> returns
 * <code>identity(sigma.length)</code>. See {@link invert} for the higher level
 * API.
 *
 * @param {Array} sigma The input permutation.
 * @param {Number} n The size of the input permutation.
 * @param {Array} tau The array where to put the inverse of the input permutation.
 */
export function _invert ( sigma , n , tau ) {

	for ( let i = 0 ; i < n ; ++i ) tau[sigma[i]] = i ;

}
