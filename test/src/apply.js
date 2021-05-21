import test from 'ava' ;
import {
	apply ,
	identity ,
	transpositions
} from '../../src/index.js' ;
import { shuffle } from '@aureooms/js-random' ;

function macro ( t , size ) {

	const sigma = identity( size ) ;

	shuffle( sigma , 0 , size ) ;

	const tau = apply( sigma.length , transpositions( sigma ) ) ;

	t.deepEqual( tau , sigma ) ;

}

macro.title = ( _ , size ) => `apply (${size})` ;

for ( let n = 0 ; n < 100 ; ++n ) test( macro , n ) ;
