
let copy = function ( sigma ) {

	let rho = permutation( sigma.length ) ;

	_copy( sigma , sigma.length , rho ) ;

	return rho ;

} ;

exports.copy = copy ;
