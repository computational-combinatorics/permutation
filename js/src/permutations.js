
let permutations = function* ( n ) {

	yield* _permutations( identity( n ) , n ) ;

} ;

exports.permutations = permutations ;
