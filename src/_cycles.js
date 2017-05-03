
export function* _cycles ( sigma , used ) {

	for ( const s of sigma ) {

		if ( used[s] ) continue ;

		used[s] = true ;

		let image = sigma[s] ;

		const cycle = [ ] ;

		while ( image !== s ) {

			used[image] = true ;

			cycle.push( image ) ;

			image = sigma[image] ;

		}

		yield [ s , cycle ] ;

	}

}

