
let itranspositions = function* ( sigma ) {

	yield* _itranspositions( sigma , used( sigma.length ) ) ;

} ;

exports.itranspositions = itranspositions ;
