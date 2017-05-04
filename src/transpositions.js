import { _transpositions } from './_transpositions' ;
import { cycles } from './cycles' ;
import { used } from './used' ;

/**
 * Computes the transposition decomposition of the input permutation as an
 * Iterator.
 *
 * @param {Array} sigma The input permutation.
 * @returns {Iterator} The transposition decomposition of <code>sigma</code>.
 */
export function* transpositions ( sigma ) {

	yield* _transpositions( cycles( sigma , used( sigma.length ) ) ) ;

}

