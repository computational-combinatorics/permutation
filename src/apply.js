import { identity } from './identity' ;
import { _apply } from './_apply' ;

/**
 * Apply a given sequence (in the given order) of transpositions (given as
 * index tuples) to the identity permutation over input <code>n</code> elements.
 *
 * @param {Number} n The size of the identity permutation to apply the transpositions
 * to.
 * @param {Iterable} transpositions The given transpositions to apply.
 * @returns {Array} The resulting permutation.
 */
export function apply ( n , transpositions ) {

	const rho = identity( n ) ;

	_apply( transpositions , rho ) ;

	return rho ;

}

