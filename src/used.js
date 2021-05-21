import { _used } from './_used.js' ;

/**
 * Generates an helper array of given size (used in {@link _cycle}, {@link cycle}).
 *
 * @param {Number} n The given size.
 * @returns {Array} The helper array of prescribed size.
 */
export function used ( n ) {

	const array = new Array( n ) ;

	_used( n , array ) ;

	return array ;

}

