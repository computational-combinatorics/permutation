
export function* _compose ( sigma , tau ) {

	for ( const t of tau ) yield sigma[t] ;

}
