
let bitreversal = function ( n ) {

	let sigma = permutation( n ) ;

	_bitreversal( sigma , n ) ;

	return sigma ;

} ;

exports.bitreversal = bitreversal ;
