import { _transpose } from './_transpose' ;

/**
 * Applies a given sequence (in the given order) of transpositions (given as
 * index tuples) to a given permutation. The permutation is modified in place.
 *
 * @param transpositions The given transpositions to apply.
 * @param sigma The permutation to apply the transpositions to.
 */
export function _apply ( transpositions , sigma ) {

	for ( const [ s , t ] of transpositions ) _transpose( s , t , sigma ) ;

}

