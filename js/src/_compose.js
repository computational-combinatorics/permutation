
let _compose = function* ( sigma , tau ) {

	for ( let t of tau ) yield sigma[t] ;

} ;

exports._compose = _compose ;
