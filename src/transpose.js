import {_transpose} from './_transpose.js';
import {copy} from './copy.js';

/**
 * Creates a copy of the input permutation, applies an input transpose,
 * then returns the result.
 *
 * @param {Array} sigma The input permutation.
 * @param {number} a The first index of the transpose.
 * @param {number} b The second index of the transpose.
 * @returns {Array} The result.
 */
export function transpose(sigma, a, b) {
	const rho = copy(sigma);

	_transpose(a, b, rho);

	return rho;
}
