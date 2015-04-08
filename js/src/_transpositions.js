let _transpositions = function* ( cycles ) {

	for ( let [ s , cycle ] of cycles ) {

		while ( cycle.length ) yield [ s , cycle.pop( ) ] ;

	}

} ;

exports._transpositions = _transpositions ;
