
let _reverse = function ( sigma , i , j ) {

	while ( i <-- j ) {

		let tmp  = sigma[i] ;
		sigma[i] = sigma[j] ;
		sigma[j] =      tmp ;

		++i ;

	}

} ;

exports._reverse = _reverse ;
