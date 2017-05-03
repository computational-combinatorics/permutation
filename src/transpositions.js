import { _transpositions } from './_transpositions' ;
import { cycles } from './cycles' ;
import { used } from './used' ;

export function* transpositions ( sigma ) {

	yield* _transpositions( cycles( sigma , used( sigma.length ) ) ) ;

}
