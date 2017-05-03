import test from 'ava' ;
import * as permutation from '../../src' ;

import * as random from "@aureooms/js-random" ;

test( "transposition" , t => {

	var m , n , rho , sigma , tau , a , b ;

	m = 101 ;

	for ( n = 1 ; n < m ; ++n ) {

		sigma = permutation.identity( n ) ;

		a = random.randint( 0 , n ) ;

		b = random.randint( 0 , n ) ;

		tau = permutation.transposition( n , a , b ) ;

		rho = permutation.compose( tau , tau ) ;

		t.deepEqual( rho , sigma , n + " : tau * tau is identity" ) ;

	}

} ) ;
