import { permutation } from './permutation' ;
import { _invert } from './_invert' ;

/**
 * Computes the inverse <code>rho</code> of the input permutation
 * <code>sigma</code>, that is, the permutation such that <code>compose(rho,
 * sigma)</code> returns <code>identity(sigma.length)</code>.
 *
 * @param {Array} sigma The input permutation.
 * @returns {Array} The inverse of the input permutation.
 */
export function invert ( sigma ) {

	const rho = permutation( sigma.length ) ;

	_invert( sigma , sigma.length , rho ) ;

	return rho ;

}

