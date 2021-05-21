import test from 'ava' ;
import {
	_invertcycles ,
	apply ,
	compose ,
	cycles ,
	identity ,
	invert ,
	itranspositions
} from '../../src/index.js' ;

import { shuffle } from '@aureooms/js-random' ;

function macro ( t , do_invert , size ) {

	const sigma = identity( size ) ;

	shuffle( sigma , 0 , size ) ;

	const tau = do_invert( sigma ) ;

	const rho = compose( sigma , tau ) ;

	t.deepEqual( rho , identity( size ) ) ;

}

macro.title = ( name , _ , size ) => `invert [${name}] (${size})` ;

const implementations = [

	{ name : 'invert' , invert : invert } ,
	{ name : '_invertcycles' , invert : sigma => {

		const tau = identity( sigma.length ) ;

		const cycles_sigma = cycles( sigma ) ;

		_invertcycles( cycles_sigma , tau ) ;

		return tau ;

	} } ,

	{ name : 'apply( itranspositions )' , invert : sigma => {

		return apply( sigma.length , itranspositions( sigma ) ) ;

	} }

] ;

for ( const { name , invert : do_invert } of implementations ) {

	for ( let n = 0 ; n < 100 ; ++n ) test( name , macro , do_invert , n ) ;

}
