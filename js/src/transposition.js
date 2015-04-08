
let transposition = function ( n , a , b ) {

	let rho = identity( n ) ;

	_transposition( a , b , rho ) ;

	return rho ;

} ;

exports.transposition = transposition ;
