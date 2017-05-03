import { _next } from './_next' ;

export function* _permutations ( sigma , n ) {

	do { yield sigma ; } while ( _next( sigma , n ) ) ;

}
