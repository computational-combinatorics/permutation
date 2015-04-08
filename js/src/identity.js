
let identity = function ( n ) {

	let rho = permutation( n ) ;

	_identity( rho , n ) ;

	return rho ;

} ;

exports.identity = identity ;
