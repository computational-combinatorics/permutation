
export function _reverse ( sigma , i , j ) {

	while ( i <-- j ) {

		const tmp = sigma[i] ;
		sigma[i]  = sigma[j] ;
		sigma[j]  =      tmp ;

		++i ;

	}

}
