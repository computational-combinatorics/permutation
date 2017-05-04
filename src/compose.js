import { permutation } from './permutation' ;
import { _compose } from './_compose' ;

/**
 * Compose two input permutations. The resulting permutation is output as an
 * array of indices.
 *
 * @param {Array} sigma The first input permutation.
 * @param {Array} tau The second input permutation.
 * @returns {Array} The resulting permutation as an array.
 */
export function compose ( sigma , tau ) {

	// TODO replace with Array.from( _compose...

	const rho = permutation( sigma.length ) ;

	let i = 0 ;

	for ( const r of _compose( sigma , tau ) ) {

		rho[i] = r ;
		++i ;

	}

	return rho ;

}

