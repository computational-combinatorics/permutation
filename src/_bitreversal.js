/**
 * Fills an input array with the bitreversal permutation for input
 * <code>n</code> items. The array is filled starting at index <code>0</code>
 * and ending at index <code>n-1</code>. Note that <code>n</code> MUST be a
 * power of <code>2</code>.
 *
 * @param {Array} array The array to fill.
 * @param {number} n The size of the permutation, must be a power of 2.
 */
export function _bitreversal(array, n) {
	let i = 1;

	array[0] = 0;

	while (i < n) {
		for (let j = 0; j < i; ++j) {
			array[i + j] = (array[j] <<= 1) + 1;
		}

		i <<= 1;
	}
}
