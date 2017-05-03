import { permutation } from './permutation' ;
import { _invert } from './_invert' ;

export function invert ( sigma ) {

	const rho = permutation( sigma.length ) ;

	_invert( sigma , sigma.length , rho ) ;

	return rho ;

}

