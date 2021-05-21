import {_transpositions} from './_transpositions.js';
import {cycles} from './cycles.js';

/**
 * Computes the transposition decomposition of the input permutation as an
 * Iterator.
 *
 * @param {Array} sigma The input permutation.
 * @returns {IterableIterator} The transposition decomposition of <code>sigma</code>.
 */
export const transpositions = (sigma) => _transpositions(cycles(sigma));
