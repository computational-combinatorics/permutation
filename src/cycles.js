import {_cycles} from './_cycles.js';
import {used} from './used.js';

/**
 * Computes a cycle decomposition of the input permutation. For a given input,
 * the algorithm used will always yield the same cycle decomposition.
 * See {@link _cycles} for implementation.
 *
 * @param {Array} sigma The input permutation.
 * @returns {IterableIterator} The cycles <code>[a, [b, c, ...]]</code> for sigma.
 */
export const cycles = (sigma) => _cycles(sigma, used(sigma.length));
