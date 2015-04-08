
let _itranspositions = function* ( sigma , used ) {

	for ( let s of sigma ) {

		if ( used[s] ) continue ;

		used[s] = true ;

		let image = sigma[s] ;

		while ( image !== s ) {

			used[image] = true ;

			yield [ s , image ] ;

			image = sigma[image] ;

		}

	}

} ;

exports._itranspositions = _itranspositions ;
