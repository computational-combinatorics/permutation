import test from 'ava' ;
import * as permutation from '../../src' ;


import * as compare from "@aureooms/js-compare" ;

test( "next" , t => {

	var m , n , sigma , tau , permutations , c , f , count , id ;

	m = 6 ;

	f = function ( n ) { return n ? n * f( n - 1 ) : 1 ; } ;

	for ( n = 0 ; n <= m ; ++n ) {

		c = compare.fixedlexicographical( compare.increasing , n ) ;

		count = f( n ) ;

		sigma = id = permutation.identity( n ) ;

		--count ;

		while ( true ) {

			tau = permutation.next( sigma ) ;

			if ( c( tau , id ) === 0 ) break ;

			--count ;

			t.true( c( tau , sigma ) > 0 , [ n , sigma , tau ] ) ;

			sigma = tau ;

		} ;

		t.deepEqual( count , 0 , "n! permutations" ) ;

	}

} ) ;
