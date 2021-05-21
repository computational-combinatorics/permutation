import {_transpose} from './_transpose.js';
import {_reverse} from './_reverse.js';

/**
 * Updates the input permutation to the next one ___in-place___. Returns true
 * unless the input permutation is the last for its elements. In that case, the
 * input permutation remains untouched.
 *
 * @param {Array} sigma The input permutation (modified in-place).
 * @param {number} n The size of the input permutation.
 * @returns {Boolean} Whether the input permutation is
 * __NOT__ the last for its elements.
 */
export function _next(sigma, n) {
	let i = n - 1;

	while (i > 0) {
		--i;

		if (sigma[i] > sigma[i + 1]) continue;

		let j = n - 1;

		while (sigma[j] < sigma[i]) --j;

		_transpose(i, j, sigma);

		_reverse(sigma, i + 1, n);

		return true;
	}

	return false;
}
