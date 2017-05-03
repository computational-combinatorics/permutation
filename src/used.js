import { _used } from './_used' ;

export function used ( n ) {

	const array = new Array( n ) ;

	_used( n , array ) ;

	return array ;

}
