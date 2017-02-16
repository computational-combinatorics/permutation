
var random = require( "@aureooms/js-random" ) ;

var t = function ( name , invert ) {

	test( "invert > " + name , function ( ) {

		var m , n , rho , sigma , tau ;

		m = 100 ;

		for ( n = 0 ; n < m ; ++n ) {

			sigma = permutation.identity( n ) ;

			random.shuffle( sigma , 0 , n ) ;

			tau = invert( sigma ) ;

			rho = permutation.compose( sigma , tau ) ;

			deepEqual( rho , permutation.identity( n ) , n + " : sigma * tau = id" ) ;

		}

	} ) ;

} ;

var algorithms = [

	{ name : "invert" , invert : permutation.invert } ,
	{ name : "_invertcycles" , invert : function ( sigma ) {

		var tau = permutation.identity( sigma.length ) ;

		var cycles = permutation.cycles( sigma ) ;

		permutation._invertcycles( cycles , tau ) ;

		return tau ;

	} } ,

	{ name : "apply( itranspositions )" , invert : function ( sigma ) {

		return permutation.apply( sigma.length , permutation.itranspositions( sigma ) ) ;

	} }

] ;

algorithms.forEach( function ( algorithm ) {

	t( algorithm.name , algorithm.invert ) ;

} ) ;
