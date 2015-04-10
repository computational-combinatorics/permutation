
let _invert = function ( sigma , n , tau ) {

	for ( let i = 0 ; i < n ; ++i ) {

		tau[sigma[i]] = i ;

	}

} ;

exports._invert = _invert ;
