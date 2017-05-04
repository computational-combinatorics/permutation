import { identity } from './identity' ;
import { _permutations } from './_permutations' ;
import { copy } from './copy' ;

/**
 * Generate all permutations on <code>n</code> elements.
 *
 * @param {Number} n The size of the permutations to generate.
 * @returns {Iterator} Iterator that yields all permutations on <code>n</code>
 * elements.
 */
export function* permutations ( n ) {

	for ( const permutation of _permutations( identity( n ) , n ) ) {

		yield copy( permutation ) ;

	}

}

