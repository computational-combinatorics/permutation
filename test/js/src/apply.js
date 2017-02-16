
var random = require( "@aureooms/js-random" ) ;

test( "apply" , function ( ) {

	var m , n , sigma , tau ;

	m = 100 ;

	for ( n = 0 ; n < m ; ++n ) {

		sigma = permutation.identity( n ) ;

		random.shuffle( sigma , 0 , n ) ;

		tau = permutation.apply( sigma.length , permutation.transpositions( sigma ) ) ;

		deepEqual( tau , sigma , n + " : sigma = tau" ) ;

	}

} ) ;
