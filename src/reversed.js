import { copy } from './copy' ;
import { reverse } from './reverse' ;

/**
 * Outputs a new permutation that is the reverse of the input permutation.
 *
 * @param {Array} sigma The input permutation.
 * @returns {Array} The reverse of the input permutation.
 */
export function reversed ( sigma ) {

	const rho = copy( sigma ) ;

	reverse( rho ) ;

	return rho ;

}

