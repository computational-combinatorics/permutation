
var random = require( "@aureooms/js-random" ) ;

test( "transpose" , function ( ) {

	var m , n , rho , sigma , tau , upsilon , a , b ;

	m = 101 ;

	for ( n = 1 ; n < m ; ++n ) {

		sigma = permutation.identity( n ) ;

		random.shuffle( sigma , 0 , n ) ;

		a = random.randint( 0 , n ) ;

		b = random.randint( 0 , n ) ;

		tau = permutation.transpose( sigma , a , b ) ;

		rho = permutation.identity( n ) ;

		random.shuffle( rho , 0 , n ) ;

		upsilon = permutation.copy( rho ) ;

		rho = permutation.compose( rho , sigma ) ;
		upsilon = permutation.compose( upsilon , tau ) ;

		deepEqual( rho[a] , upsilon[b] , n + " : rho[a] is upsilon[b]" ) ;
		deepEqual( rho[b] , upsilon[a] , n + " : rho[b] is upsilon[a]" ) ;

		upsilon = permutation.transpose( upsilon , a , b ) ;

		deepEqual( upsilon , rho , n + " : upsilon is tau after transpose" ) ;

	}

} ) ;
