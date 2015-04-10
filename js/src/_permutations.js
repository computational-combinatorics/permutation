
let _permutations = function* ( sigma , n ) {

	while ( _next( sigma , n ) ) yield sigma ;

} ;

exports._permutations = _permutations ;
