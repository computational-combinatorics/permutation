import { permutation } from './permutation' ;
import { _copy } from './_copy' ;

export function copy ( sigma ) {

	const rho = permutation( sigma.length ) ;

	_copy( sigma , sigma.length , rho ) ;

	return rho ;

}
