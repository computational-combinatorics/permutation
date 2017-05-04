import { _itranspositions } from './_itranspositions' ;
import { used } from './used' ;

/**
 * Really no idead what this does, see also {@link _itranspositions}.
 *
 * @param {Array} sigma Input permutation.
 * @return {Iterator} ?
 */
export function* itranspositions ( sigma ) {

	yield* _itranspositions( sigma , used( sigma.length ) ) ;

}

