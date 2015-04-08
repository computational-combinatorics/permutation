
let _apply = function ( transpositions , sigma ) {

	for ( let [ s , t ] of transpositions ) {

		_transpose( s , t , sigma ) ;

	}

} ;

exports._apply = _apply ;
