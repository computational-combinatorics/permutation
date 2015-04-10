
let permutations = function* ( n ) {

	for ( let permutation of _permutations( identity( n ) , n ) ) {

		yield copy( permutation ) ;

	}

} ;

exports.permutations = permutations ;
