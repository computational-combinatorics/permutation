
let apply = function ( n , transpositions ) {

	let rho = identity( n ) ;

	_apply( transpositions , rho ) ;

	return rho ;

} ;

exports.apply = apply ;
