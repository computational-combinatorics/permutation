import {_transpositions} from './_transpositions.js';
import {cycles} from './cycles.js';
import {used} from './used.js';

/**
 * Computes the transposition decomposition of the input permutation as an
 * Iterator.
 *
 * @param {Array} sigma The input permutation.
 * @returns {Iterator} The transposition decomposition of <code>sigma</code>.
 */
export function* transpositions(sigma) {
	yield* _transpositions(cycles(sigma, used(sigma.length)));
}
