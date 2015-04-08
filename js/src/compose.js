
let compose = function ( sigma , tau ) {

	let rho = permutation( sigma.length ) ;

	let i = 0 ;

	for ( let r of _compose( sigma , tau ) ) {

		rho[i] = r ;
		++i ;

	}

	return rho ;

} ;

exports.compose = compose ;
