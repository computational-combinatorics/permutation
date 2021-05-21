import {permutation} from './permutation.js';
import {_identity} from './_identity.js';

/**
 * Returns the identity permutation of a given size.
 *
 * @param {number} n The size of the permutation to return.
 * @returns {Array} The identity permutation on <code>n</code> elements.
 */
export function identity(n) {
	const rho = permutation(n);

	_identity(rho, n);

	return rho;
}
