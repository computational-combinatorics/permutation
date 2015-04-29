[js-permutation](http://aureooms.github.io/js-permutation)
==

Permutations code bricks for JavaScript.

```js
next( reversed( identity( 3 ) ) ) ; // [ 0 , 1 , 2 ]
```

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
[![Inline docs](http://inch-ci.org/github/aureooms/js-permutation.svg?branch=master&style=shields)](http://inch-ci.org/github/aureooms/js-permutation)

Can be managed through [jspm](https://github.com/jspm/jspm-cli),
[duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower),
[ender](https://github.com/ender-js/Ender),
[jam](https://github.com/caolan/jam),
[spm](https://github.com/spmjs/spm),
and [npm](https://github.com/npm/npm).

## Caveat

Requires `regeneratorRuntime` to be defined, see
[babel docs](http://babeljs.io/docs/usage/polyfill/).

## Install

### jspm
```terminal
jspm install github:aureooms/js-permutation
# or
jspm install npm:aureooms-js-permutation
```
### duo
No install step needed for duo!

### component
```terminal
component install aureooms/js-permutation
```

### bower
```terminal
bower install aureooms-js-permutation
```

### ender
```terminal
ender add aureooms-js-permutation
```

### jam
```terminal
jam install aureooms-js-permutation
```

### spm
```terminal
spm install aureooms-js-permutation --save
```

### npm
```terminal
npm install aureooms-js-permutation --save
```

## Require
### jspm
```js
let permutation = require( "github:aureooms/js-permutation" ) ;
// or
import permutation from 'aureooms-js-permutation' ;
```
### duo
```js
let permutation = require( "aureooms/js-permutation" ) ;
```

### component, ender, spm, npm
```js
let permutation = require( "aureooms-js-permutation" ) ;
```

### bower
The script tag exposes the global variable `permutation`.
```html
<script src="bower_components/aureooms-js-permutation/js/dist/permutation.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "aureooms-js-permutation" ] , function ( permutation ) { ... } ) ;
```

## Use

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
