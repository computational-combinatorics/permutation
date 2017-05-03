import { _transpose } from './_transpose' ;

export function _reverse ( sigma , i , j ) {

	while ( i <-- j ) _transpose( i++ , j , sigma ) ;

}
