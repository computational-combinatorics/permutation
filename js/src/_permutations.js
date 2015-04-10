
let _permutations = function* ( sigma , n ) {

	do { yield sigma ; } while ( _next( sigma , n ) ) ;

} ;

exports._permutations = _permutations ;
