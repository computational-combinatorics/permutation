
export function _invert ( sigma , n , tau ) {

	for ( let i = 0 ; i < n ; ++i ) {

		tau[sigma[i]] = i ;

	}

}
