import {_permutations} from './_permutations.js';
import {copy} from './copy.js';
import {identity} from './identity.js';

/**
 * Generate all permutations on <code>n</code> elements.
 *
 * @param {number} n The size of the permutations to generate.
 * @returns {IterableIterator} Iterator that yields all permutations on <code>n</code>
 * elements.
 */
export function* permutations(n) {
	for (const permutation of _permutations(identity(n), n)) {
		yield copy(permutation);
	}
}
