import test from 'ava';
import {shuffle} from '@randomized/random';
import {apply, identity, transpositions} from '#module';

function macro(t, size) {
	const sigma = identity(size);

	shuffle(sigma, 0, size);

	const tau = apply(sigma.length, transpositions(sigma));

	t.deepEqual(tau, sigma);
}

macro.title = (_, size) => `apply (${size})`;

for (let n = 0; n < 100; ++n) test(macro, n);
