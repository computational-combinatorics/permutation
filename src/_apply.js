import { _transpose } from './_transpose' ;

export function _apply ( transpositions , sigma ) {

	for ( const [ s , t ] of transpositions ) {

		_transpose( s , t , sigma ) ;

	}

}
