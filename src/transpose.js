import { copy } from './copy' ;
import { _transpose } from './_transpose' ;

export function transpose ( sigma , a , b ) {

	const rho = copy( sigma ) ;

	_transpose( a , b , rho ) ;

	return rho ;

}

