import { _transpose } from './_transpose' ;

/**
 * No idea what this does. Probably inverts the cycles of a given permutation.
 *
 * @param {Iterable} cycles The cycles to invert.
 * @param {Array} tau The given permutation.
 */
export function _invertcycles ( cycles , tau ) {

	for ( const [ s , cycle ] of cycles ) {

		for ( const t of cycle ) {

			_transpose( s , t , tau ) ;

		}

	}

}

