
export function _transpose ( a , b , sigma ) {

	const tmp = sigma[a] ;
	sigma[a]  = sigma[b] ;
	sigma[b]  =      tmp ;

}

