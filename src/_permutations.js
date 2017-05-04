import { _next } from './_next' ;

/**
 * Yields all permutations starting from a given one and ending at the last
 * permutation.
 *
 * @param {Array} sigma The starting permutation.
 * @param {Number} n The size of the permutation.
 * @returns {Iterator} Iterator over all permutations between the starting one
 * and the last permutation on its elements.
 */
export function* _permutations ( sigma , n ) {

	do { yield sigma ; } while ( _next( sigma , n ) ) ;

}

