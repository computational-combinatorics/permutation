
var random = require( "aureooms-js-random" ) ;

test( "copy" , function ( ) {

	var m , n , sigma , tau ;

	m = 100 ;

	for ( n = 0 ; n < m ; ++n ) {

		sigma = permutation.identity( n ) ;

		random.shuffle( sigma , 0 , n ) ;

		tau = permutation.copy( sigma ) ;

		deepEqual( tau , sigma , n + " : tau = sigma" ) ;

	}

} ) ;
