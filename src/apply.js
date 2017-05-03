import { identity } from './identity' ;
import { _apply } from './_apply' ;

export function apply ( n , transpositions ) {

	const rho = identity( n ) ;

	_apply( transpositions , rho ) ;

	return rho ;

}
