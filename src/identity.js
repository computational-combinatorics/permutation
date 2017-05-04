import { permutation } from './permutation' ;
import { _identity } from './_identity' ;

/**
 * Returns the identity permutation of a given size.
 *
 * @param {Number} n The size of the permutation to return.
 * @returns {Array} The identity permutation on <code>n</code> elements.
 */
export function identity ( n ) {

	const rho = permutation( n ) ;

	_identity( rho , n ) ;

	return rho ;

}

