
let cycles = function* ( sigma ) {

	yield* _cycles( sigma , used( sigma.length ) ) ;

} ;

exports.cycles = cycles ;
