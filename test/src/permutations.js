import test from 'ava' ;
import * as permutation from '../../src' ;

import * as compare from "@aureooms/js-compare" ;

test( "permutations" , t => {

	var m , n , sigma , tau , permutations , c ;

	m = 6 ;

	for ( n = 0 ; n <= m ; ++n ) {

		c = compare.fixedlexicographical( compare.increasing , n ) ;

		permutations = permutation.permutations( n ) ;

		sigma = permutations.next( ).value ;

		t.deepEqual( sigma , permutation.identity( n ) , n + " first permutation is id" ) ;

		let it ;

		while ( ! ( it = permutations.next( ) ).done ) {

			tau = it.value ;

			t.true( c( tau , sigma ) > 0 , [ n , sigma , tau ] ) ;

			sigma = tau ;

		}

	}

} ) ;
