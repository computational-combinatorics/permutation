import { _cycles } from './_cycles' ;
import { used } from './used' ;

export function* cycles ( sigma ) {

	yield* _cycles( sigma , used( sigma.length ) ) ;

}

