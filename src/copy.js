import {permutation} from './permutation.js';
import {_copy} from './_copy.js';

/**
 * Make a copy of the input permutation.
 *
 * @param {Array} sigma The input permutation.
 * @returns {Array} The copy.
 */
export function copy(sigma) {
	const rho = permutation(sigma.length);

	_copy(sigma, sigma.length, rho);

	return rho;
}
