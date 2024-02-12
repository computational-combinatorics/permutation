import test from 'ava';

import {shuffle} from '@randomized/random';

import {copy, identity} from '#module';

function macro(t, size) {
	const sigma = identity(size);

	shuffle(sigma, 0, size);

	const tau = copy(sigma);

	t.deepEqual(tau, sigma);
}

macro.title = (_, size) => `copy (${size})`;

for (let n = 0; n < 100; ++n) test(macro, n);
