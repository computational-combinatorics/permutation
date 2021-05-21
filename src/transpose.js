import {copy} from './copy.js';
import {_transpose} from './_transpose.js';

/**
 * Creates a copy of the input permutation, applies an input transpose,
 * then returns the result.
 *
 * @param {Array} sigma The input permutation.
 * @param {Number} a The first index of the transpose.
 * @param {Number} b The second index of the transpose.
 * @returns {Array} The result.
 */
export function transpose(sigma, a, b) {
	const rho = copy(sigma);

	_transpose(a, b, rho);

	return rho;
}
