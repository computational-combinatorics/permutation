
let transpose = function ( sigma , a , b ) {

	let rho = copy( sigma ) ;

	_transpose( a , b , rho ) ;

	return rho ;

} ;

exports.transpose = transpose ;
