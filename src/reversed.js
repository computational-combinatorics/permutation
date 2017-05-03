import { copy } from './copy' ;
import { reverse } from './reverse' ;

export function reversed ( sigma ) {

	const rho = copy( sigma ) ;

	reverse( rho ) ;

	return rho ;

}

