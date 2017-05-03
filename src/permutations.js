import { identity } from './identity' ;
import { _permutations } from './_permutations' ;
import { copy } from './copy' ;

export function* permutations ( n ) {

	for ( const permutation of _permutations( identity( n ) , n ) ) {

		yield copy( permutation ) ;

	}

}
