
let _cycles = function* ( sigma , used ) {

	for ( let s of sigma ) {

		if ( used[s] ) continue ;

		used[s] = true ;

		let image = sigma[s] ;

		let cycle = [ ] ;

		while ( image !== s ) {

			used[image] = true ;

			cycle.push( image ) ;

			image = sigma[image] ;

		}

		yield [ s , cycle ] ;

	}

} ;

exports._cycles = _cycles ;
