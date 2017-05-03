import test from 'ava' ;
import * as permutation from '../../src' ;

test( "bitreversal" , t => {

	t.deepEqual( permutation.bitreversal(  1 ) , [ 0 ] ) ;
	t.deepEqual( permutation.bitreversal(  2 ) , [ 0 , 1 ] ) ;
	t.deepEqual( permutation.bitreversal(  4 ) , [ 0 , 2 , 1 , 3 ] ) ;
	t.deepEqual( permutation.bitreversal(  8 ) , [ 0 , 4 , 2 , 6 , 1 , 5 , 3 , 7 ] ) ;
	t.deepEqual( permutation.bitreversal( 16 ) , [ 0 , 8 , 4 , 12 , 2 , 10 , 6 , 14 , 1 , 9 , 5 , 13 , 3 , 11 , 7 , 15 ] ) ;

} ) ;
