import { identity } from './identity' ;
import { _transposition } from './_transposition' ;

export function transposition ( n , a , b ) {

	const rho = identity( n ) ;

	_transposition( a , b , rho ) ;

	return rho ;

}

