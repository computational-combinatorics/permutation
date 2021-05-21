import {_transpose} from './_transpose.js';

/**
 * Applies a given sequence (in the given order) of transpositions (given as
 * index tuples) to a given permutation. The permutation is modified ___in-place___.
 *
 * @param {Iterable} transpositions The given transpositions to apply.
 * @param {Array} sigma The permutation to apply the transpositions to
 * (modified in-place).
 */
export function _apply(transpositions, sigma) {
	for (const [s, t] of transpositions) _transpose(s, t, sigma);
}
