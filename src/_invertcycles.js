import { _transpose } from './_transpose' ;

/**
 * Inverts given cycles in a given permutation ___in-place___. Can be used as
 * an alternative way of inverting an entire permutation by inverting all of
 * its cycles in the identity permutation.
 *
 * @example
 * const invert = sigma => {
 *   const tau = identity( sigma.length ) ;
 *   const cycles_sigma = cycles( sigma ) ;
 *   _invertcycles( cycles_sigma , tau ) ;
 *   return tau ;
 * } ;
 *
 * @param {Iterable} cycles The cycles to invert.
 * @param {Array} tau The given permutation (modified in-place).
 */
export function _invertcycles ( cycles , tau ) {

	for ( const [ s , cycle ] of cycles ) {

		for ( const t of cycle ) _transpose( s , t , tau ) ;

	}

}

