import { _itranspositions } from './_itranspositions' ;
import { used } from './used' ;

/**
 * Computes the sequence of transpositions that if applied to
 * <code>sigma</code> result in <code>invert(sigma)</code>. Uses
 * {@link _itranspositions} as the underlying implementation.
 *
 * @example
 * const invert = sigma => apply( sigma.length , itranspositions( sigma ) ) ;
 *
 * @param {Array} sigma Input permutation.
 * @return {Iterator} Iterator over the transpositions.
 */
export function* itranspositions ( sigma ) {

	yield* _itranspositions( sigma , used( sigma.length ) ) ;

}
