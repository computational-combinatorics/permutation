
let _invertcycles = function ( cycles , tau ) {

	for ( let [ s , cycle ] of cycles ) {

		for ( let t of cycle ) {

			_transpose( s , t , tau ) ;

		}

	}

} ;

exports._invertcycles = _invertcycles ;
