
var random = require( "aureooms-js-random" ) ;

test( "invert" , function ( ) {

	var m , n , rho , sigma , tau ;

	m = 100 ;

	for ( n = 0 ; n < m ; ++n ) {

		sigma = permutation.identity( n ) ;

		random.shuffle( sigma , 0 , n ) ;

		tau = permutation.invert( sigma ) ;

		rho = permutation.compose( sigma , tau ) ;

		deepEqual( rho , permutation.identity( n ) , n + " : sigma * tau = id" ) ;

	}

} ) ;
