import { permutation } from './permutation' ;
import { _identity } from './_identity' ;

export function identity ( n ) {

	const rho = permutation( n ) ;

	_identity( rho , n ) ;

	return rho ;

}

