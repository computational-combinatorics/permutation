import test from 'ava' ;
import * as permutation from '../../src' ;

import * as random from "@aureooms/js-random" ;

test( "apply" , t => {

	var m , n , sigma , tau ;

	m = 100 ;

	for ( n = 0 ; n < m ; ++n ) {

		sigma = permutation.identity( n ) ;

		random.shuffle( sigma , 0 , n ) ;

		tau = permutation.apply( sigma.length , permutation.transpositions( sigma ) ) ;

		t.deepEqual( tau , sigma , n + " : sigma = tau" ) ;

	}

} ) ;
