import { _itranspositions } from './_itranspositions' ;
import { used } from './used' ;

export function* itranspositions ( sigma ) {

	yield* _itranspositions( sigma , used( sigma.length ) ) ;

}

