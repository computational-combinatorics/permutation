```js
import {
	identity ,
	reversed ,
	next
} from '@aureooms/js-permutation' ;

let sigma = identity( 3 ) ;

sigma ; // [ 0 , 1 , 2 ]

reversed( sigma ) ; // [ 2 , 1 , 0 ]

next( sigma ) ; // [ 0 , 2 , 1 ]


import { permutations } from '@aureooms/js-permutation' ;

for ( let tau of permutations( 3 ) ) {

	... // yields [ 0 , 1 , 2 ]
	    //        [ 0 , 2 , 1 ]
	    //        [ 1 , 0 , 2 ]
	    //        [ 1 , 2 , 0 ]
	    //        [ 2 , 0 , 1 ]
	    //        [ 2 , 1 , 0 ]

}


import { invert } from '@aureooms/js-permutation' ;

invert( [ 0 , 1 , 2 ] ) ; // [ 0 , 1 , 2 ]
invert( [ 0 , 2 , 1 ] ) ; // [ 0 , 2 , 1 ]
invert( [ 1 , 0 , 2 ] ) ; // [ 1 , 0 , 2 ]
invert( [ 1 , 2 , 0 ] ) ; // [ 2 , 0 , 1 ]
invert( [ 2 , 0 , 1 ] ) ; // [ 1 , 2 , 0 ]
invert( [ 2 , 1 , 0 ] ) ; // [ 2 , 1 , 0 ]


import { compose } from '@aureooms/js-permutation' ;

compose( "abc" , [ 2 , 0 , 1 ] ) ; // [ "c" , "a" , "b" ]


import { bitreversal } from '@aureooms/js-permutation' ;

bitreversal( 8 ) ; // [ 0 , 4 , 2 , 6 , 1 , 5 , 3 , 7 ]
```
