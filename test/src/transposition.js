import test from 'ava' ;
import { identity , compose , transposition } from '../../src' ;
import { randint } from '@aureooms/js-random' ;

function macro ( t , size ) {

	const id = identity( size ) ;

	const a = randint( 0 , size ) ;

	const b = randint( 0 , size ) ;

	const tau = transposition( size , a , b ) ;

	const rho = compose( tau , tau ) ;

	t.deepEqual( rho , id , 'tau ∘ tau = identity' ) ;

	// TODO add more tests

}

macro.title = ( _ , size ) => `transposition (${size})` ;

for ( let n = 1 ; n <= 100 ; ++n ) test( macro , n ) ;
