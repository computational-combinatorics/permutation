import { _transpose } from './_transpose' ;
import { _reverse } from './_reverse' ;

export function _next ( sigma , n ) {

	let i = n - 1 ;

	while ( i > 0 ) {

		--i ;

		if ( sigma[i] > sigma[i+1] ) continue ;

		let j = n - 1 ;

		while ( sigma[j] < sigma[i] ) --j ;

		_transpose( i , j , sigma ) ;

		_reverse( sigma , i + 1 , n ) ;

		return true ;

	}

	return false ;

}
