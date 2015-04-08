
let identity = function ( n ) {

	let sigma = permutation( n ) ;

	_identity( sigma , n ) ;

	return sigma ;

} ;

exports.identity = identity ;
