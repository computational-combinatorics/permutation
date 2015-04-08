
let transpositions = function* ( sigma ) {

	yield* _transpositions( cycles( sigma , used( sigma.length ) ) ) ;

} ;

exports.transpositions = transpositions ;
