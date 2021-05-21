import { identity } from './identity.js' ;
import { _transposition } from './_transposition.js' ;

/**
 * Outputs the permutation on input <code>n</code> numbers that only transposes
 * two input elements <code>a</code> and <code>b</code>.
 *
 * @param {Number} n The size of the permutation to output.
 * @param {Number} a The first index to swap.
 * @param {Number} b The second index to swap.
 * @returns {undefined}
 */
export function transposition ( n , a , b ) {

	const rho = identity( n ) ;

	_transposition( a , b , rho ) ;

	return rho ;

}

