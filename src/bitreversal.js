import { permutation } from './permutation' ;
import { _bitreversal } from './_bitreversal' ;

export function bitreversal ( n ) {

	const sigma = permutation( n ) ;

	_bitreversal( sigma , n ) ;

	return sigma ;

}
