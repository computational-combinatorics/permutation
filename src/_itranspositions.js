
export function* _itranspositions ( sigma , used ) {

	for ( const s of sigma ) {

		if ( used[s] ) continue ;

		used[s] = true ;

		let image = sigma[s] ;

		while ( image !== s ) {

			used[image] = true ;

			yield [ s , image ] ;

			image = sigma[image] ;

		}

	}

}
