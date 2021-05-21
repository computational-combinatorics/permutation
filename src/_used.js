/**
 * For a given size <code>n</code>, fills an input array with
 * <code>false</code>. Starting at index <code>0</code>, ending at index
 * <code>n-1</code>. This array is used as a helper in other function. For
 * example, for computing the cycle decomposition of an input permutation (see
 * {@link _cycles}, {@link cycles}).
 *
 * @param {Number} n The given size.
 * @param {Array} array The input array.
 */
export function _used(n, array) {
	for (let i = 0; i < n; ++i) array[i] = false;
}
