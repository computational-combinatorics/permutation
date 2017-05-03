import { _transpose } from './_transpose' ;

export function _invertcycles ( cycles , tau ) {

	for ( const [ s , cycle ] of cycles ) {

		for ( const t of cycle ) {

			_transpose( s , t , tau ) ;

		}

	}

}
