
var random = require( "@aureooms/js-random" ) ;

test( "reversed" , function ( ) {

	var m , n , sigma , tau ;

	m = 100 ;

	for ( n = 0 ; n < m ; ++n ) {

		sigma = permutation.identity( n ) ;

		random.shuffle( sigma , 0 , n ) ;

		tau = permutation.reversed( sigma ) ;

		deepEqual( tau.reverse( ) , sigma , n + " : reversed( tau ) = sigma" ) ;

	}

} ) ;
