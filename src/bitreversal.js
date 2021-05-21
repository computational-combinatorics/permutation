import { permutation } from './permutation.js' ;
import { _bitreversal } from './_bitreversal.js' ;

/**
 * Returns a newly allocated array containing the bitreversal permutation for
 * input <code>n</code> items. Note that <code>n</code> MUST be a power of
 * <code>2</code>.
 *
 * @param {Number} n The size of the permutation, must be a power of
 * <code>2</code>.
 * @returns {Array} The bitreversal permutation of size <code>n</code>.
 */
export function bitreversal ( n ) {

	const sigma = permutation( n ) ;

	_bitreversal( sigma , n ) ;

	return sigma ;

}

