export function* _transpositions ( cycles ) {

	for ( const [ s , cycle ] of cycles ) {

		while ( cycle.length ) yield [ s , cycle.pop( ) ] ;

	}

}
