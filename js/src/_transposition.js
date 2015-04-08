
let _transposition = function ( a , b , sigma ) {

	sigma[a] = b ;
	sigma[b] = a ;

} ;

exports._transposition = _transposition ;
