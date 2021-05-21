import {_itranspositions} from './_itranspositions.js';
import {used} from './used.js';

/**
 * Computes the sequence of transpositions that if applied to
 * <code>sigma</code> result in <code>invert(sigma)</code>. Uses
 * {@link _itranspositions} as the underlying implementation.
 *
 * @example
 * const invert = sigma => apply( sigma.length , itranspositions( sigma ) ) ;
 *
 * @param {Array} sigma Input permutation.
 * @return {IterableIterator} Iterator over the transpositions.
 */
export const itranspositions = (sigma) =>
	_itranspositions(sigma, used(sigma.length));
