
var random = require( "aureooms-js-random" ) ;

test( "_invertcycles" , function ( ) {

	var m , n , rho , sigma , tau , cycles ;

	m = 100 ;

	for ( n = 0 ; n < m ; ++n ) {

		sigma = permutation.identity( n ) ;

		random.shuffle( sigma , 0 , n ) ;

		tau = permutation.identity( n ) ;

		cycles = permutation.cycles( sigma ) ;

		permutation._invertcycles( cycles , tau ) ;

		rho = permutation.compose( sigma , tau ) ;

		deepEqual( rho , permutation.identity( n ) , n + " : sigma * tau = id" ) ;

	}

} ) ;
