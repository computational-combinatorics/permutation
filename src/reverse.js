import { _reverse } from './_reverse' ;

/**
 * Reverses input permutation ___in-place___.
 *
 * @param {Array} sigma The input permutation to reverse (modified in-place).
 */
export function reverse ( sigma ) {

	_reverse( sigma , 0 , sigma.length ) ;

}

