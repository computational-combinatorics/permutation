import {_next} from './_next.js';
import {copy} from './copy.js';
import {reverse} from './reverse.js';

/**
 * Computes the permutation that follows the input permutation. If the input
 * permutation is the last for its elements, return the first for its elements.
 * The input permutation is not altered.
 *
 * @param {Array} sigma The input permutation.
 * @returns {Array} The next permutation.
 */
export function next(sigma) {
	const rho = copy(sigma);

	if (!_next(rho, rho.length)) reverse(rho);

	return rho;
}
