
let invert = function ( sigma ) {

	let rho = permutation( sigma.length ) ;

	_invert( sigma , sigma.length , rho ) ;

	return rho ;

} ;

exports.invert = invert ;
