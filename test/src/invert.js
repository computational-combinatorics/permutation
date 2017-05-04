import test from 'ava' ;
import {
	_invertcycles ,
	apply ,
	compose ,
	cycles ,
	identity ,
	invert ,
	itranspositions
} from '../../src' ;

import { shuffle } from "@aureooms/js-random" ;

function macro ( t , do_invert ) {

	const m = 100 ;

	for ( let n = 0 ; n < m ; ++n ) {

		const sigma = identity( n ) ;

		shuffle( sigma , 0 , n ) ;

		const tau = do_invert( sigma ) ;

		const rho = compose( sigma , tau ) ;

		t.deepEqual( rho , identity( n ) , n + " : sigma ∘ tau = id" ) ;

	}

}

macro.title = name => `invert > ${name}` ;

const implementations = [

	{ name : "invert" , invert : invert } ,
	{ name : "_invertcycles" , invert : sigma => {

		const tau = identity( sigma.length ) ;

		const cycles_sigma = cycles( sigma ) ;

		_invertcycles( cycles_sigma , tau ) ;

		return tau ;

	} } ,

	{ name : "apply( itranspositions )" , invert : sigma => {

		return apply( sigma.length , itranspositions( sigma ) ) ;

	} }

] ;

for ( const { name , invert : do_invert } of implementations ) {

	test( name , macro , do_invert ) ;

}
