
let next = function ( sigma ) {

	let rho = copy( sigma ) ;

	if ( ! _next( rho , rho.length ) ) reverse( rho ) ;

	return rho ;

} ;

exports.next = next ;
