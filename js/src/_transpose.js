
let _transpose = function ( a , b , sigma ) {

	let tmp  = sigma[a] ;
	sigma[a] = sigma[b] ;
	sigma[b] = tmp ;

} ;

exports._transpose = _transpose ;
