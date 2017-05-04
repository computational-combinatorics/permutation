import { _cycles } from './_cycles' ;
import { used } from './used' ;


/**
 * Computes the cycle decomposition of the input permutation.
 * See {@link _cycles} for implementation.
 *
 * @param {Array} sigma The input permutation.
 * @returns {Iterator} The cycles <code>[a, [b, c, ...]]</code> for sigma.
 */
export function* cycles ( sigma ) {

	yield* _cycles( sigma , used( sigma.length ) ) ;

}

