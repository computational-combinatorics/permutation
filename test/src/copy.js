import test from 'ava';
import {shuffle} from '@aureooms/js-random';
import {copy, identity} from '../../src/index.js';

function macro(t, size) {
	const sigma = identity(size);

	shuffle(sigma, 0, size);

	const tau = copy(sigma);

	t.deepEqual(tau, sigma);
}

macro.title = (_, size) => `copy (${size})`;

for (let n = 0; n < 100; ++n) test(macro, n);
