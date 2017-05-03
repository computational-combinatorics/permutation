import { permutation } from './permutation' ;
import { _compose } from './_compose' ;

export function compose ( sigma , tau ) {

	const rho = permutation( sigma.length ) ;

	let i = 0 ;

	for ( const r of _compose( sigma , tau ) ) {

		rho[i] = r ;
		++i ;

	}

	return rho ;

}

