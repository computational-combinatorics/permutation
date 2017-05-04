import { _reverse } from './_reverse' ;

/**
 * Reverses input permutation in place.
 *
 * @param {Array} sigma The input permutation to reverse.
 */
export function reverse ( sigma ) {

	_reverse( sigma , 0 , sigma.length ) ;

}

