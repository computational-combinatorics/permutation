import test from 'ava' ;
import { identity , next } from '../../src' ;
import { fixedlexicographical , increasing } from '@aureooms/js-compare' ;
import { issorted } from '@aureooms/js-sort' ;
import { list , chain , closure , takewhile } from '@aureooms/js-itertools' ;
import { partial } from '@aureooms/js-functools' ;
import { factorial } from '@aureooms/js-factorial' ;


function macro ( t , size ) {

	const compare = fixedlexicographical( increasing , size ) ;

	const id = identity( size ) ;

	const pis = list( chain( [
		[ id ] ,
		takewhile(
			partial( compare , [ id ] ) ,
			closure( next , next( id ) )
		)
	] ) ) ;

	t.is( pis.length , factorial(size) , 'n! permutations' ) ;

	t.deepEqual( pis[0] , identity( size ) , 'first is id' ) ;

	t.deepEqual( next( pis[pis.length-1] ) , identity( size ) , 'next(last) is id' ) ;

	t.is( issorted( compare , pis , 0 , pis.length ) , pis.length , 'permutations are in order' ) ;


}

macro.title = ( _ , size ) => `next (${size})` ;

for ( let n = 0 ; n <= 6 ; ++n ) test( macro , n ) ;
