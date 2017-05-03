import { copy } from './copy' ;
import { _next } from './_next' ;
import { reverse } from './reverse' ;

export function next ( sigma ) {

	const rho = copy( sigma ) ;

	if ( ! _next( rho , rho.length ) ) reverse( rho ) ;

	return rho ;

}
