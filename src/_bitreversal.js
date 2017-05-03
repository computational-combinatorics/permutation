
export function _bitreversal ( array , n ) {

	let i = 1 ;

	array[0] = 0 ;

	while ( i < n ) {

		for ( let j = 0 ; j < i ; ++j ) {

			array[i+j] = ( array[j] <<= 1 ) + 1 ;

		}

		i <<= 1 ;

	}

}

