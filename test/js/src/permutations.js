

var compare = require( "aureooms-js-compare" ) ;

test( "permutations" , function ( ) {

	var m , n , sigma , tau , permutations , c ;

	m = 6 ;

	for ( n = 0 ; n <= m ; ++n ) {

		c = compare.fixedlexicographical( compare.increasing , n ) ;

		permutations = permutation.permutations( n ) ;

		sigma = permutations.next( ).value ;

		deepEqual( sigma , permutation.identity( n ) , n + " first permutation is id" ) ;

		while ( ! ( it = permutations.next( ) ).done ) {

			tau = it.value ;

			ok( c( tau , sigma ) > 0 , [ n , sigma , tau ] ) ;

			sigma = tau ;

		}

	}

} ) ;
