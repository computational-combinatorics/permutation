[js-permutation](http://aureooms.github.io/js-permutation)
==

Permutations code bricks for JavaScript.

[![NPM license](http://img.shields.io/npm/l/aureooms-js-permutation.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-permutation/master/LICENSE)
[![NPM version](http://img.shields.io/npm/v/aureooms-js-permutation.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-permutation)
[![Bower version](http://img.shields.io/bower/v/aureooms-js-permutation.svg?style=flat)](http://bower.io/search/?q=aureooms-js-permutation)
[![Build Status](http://img.shields.io/travis/aureooms/js-permutation.svg?style=flat)](https://travis-ci.org/aureooms/js-permutation)
[![Coverage Status](http://img.shields.io/coveralls/aureooms/js-permutation.svg?style=flat)](https://coveralls.io/r/aureooms/js-permutation)
[![Dependencies Status](http://img.shields.io/david/aureooms/js-permutation.svg?style=flat)](https://david-dm.org/aureooms/js-permutation#info=dependencies)
[![devDependencies Status](http://img.shields.io/david/dev/aureooms/js-permutation.svg?style=flat)](https://david-dm.org/aureooms/js-permutation#info=devDependencies)
[![Code Climate](http://img.shields.io/codeclimate/github/aureooms/js-permutation.svg?style=flat)](https://codeclimate.com/github/aureooms/js-permutation)
[![NPM downloads per month](http://img.shields.io/npm/dm/aureooms-js-permutation.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-permutation)
[![GitHub issues](http://img.shields.io/github/issues/aureooms/js-permutation.svg?style=flat)](https://github.com/aureooms/js-permutation/issues)

Can be managed through [bower](https://github.com/bower/bower),
[component](https://github.com/componentjs/component), or
[npm](https://github.com/npm/npm).

```js
let permutation = require( "aureooms-js-permutation" ) ;
```

Example usage:

```js
let sigma = permutation.identity( 3 ) ;

sigma ; // [ 0 , 1 , 2 ]

permutation.reversed( sigma ) ; // [ 2 , 1 , 0 ]

permutation.next( sigma ) ; // [ 0 , 2 , 1 ]

for ( let tau of permutation.permutations( 3 ) ) {

	... // yields [ 0 , 1 , 2 ]
	    //        [ 0 , 2 , 1 ]
	    //        [ 1 , 0 , 2 ]
	    //        [ 1 , 2 , 0 ]
	    //        [ 2 , 0 , 1 ]
	    //        [ 2 , 1 , 0 ]

}

permutation.invert( [ 0 , 1 , 2 ] ) ; // [ 0 , 1 , 2 ]
permutation.invert( [ 0 , 2 , 1 ] ) ; // [ 0 , 2 , 1 ]
permutation.invert( [ 1 , 0 , 2 ] ) ; // [ 1 , 0 , 2 ]
permutation.invert( [ 1 , 2 , 0 ] ) ; // [ 2 , 0 , 1 ]
permutation.invert( [ 2 , 0 , 1 ] ) ; // [ 1 , 2 , 0 ]
permutation.invert( [ 2 , 1 , 0 ] ) ; // [ 2 , 1 , 0 ]

permutation.compose( "abc" , [ 2 , 0 , 1 ] ) ; // [ "c" , "a" , "b" ]

permutation.bitreversal( 8 ) ; // [ 0 , 4 , 2 , 6 , 1 , 5 , 3 , 7 ]
```
