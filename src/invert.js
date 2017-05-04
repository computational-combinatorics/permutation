import { permutation } from './permutation' ;
import { _invert } from './_invert' ;

/**
 * Computes the inverse <code>tau</code> of the input permutation
 * <code>sigma</code>, that is, the permutation such that <code>compose(sigma,
 * tau)</code> returns <code>identity(sigma.length)</code>. Alternatives
 * include using {@link _invertcycles} and {@link itranspositions}.
 *
 * @param {Array} sigma The input permutation.
 * @returns {Array} The inverse of the input permutation.
 */
export function invert ( sigma ) {

	const tau = permutation( sigma.length ) ;

	_invert( sigma , sigma.length , tau ) ;

	return tau ;

}
