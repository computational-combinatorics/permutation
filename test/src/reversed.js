import test from 'ava';
import {shuffle} from '@randomized/random';
import {identity, reversed} from '../../src/index.js';

function macro(t, size) {
	const sigma = identity(size);

	shuffle(sigma, 0, size);

	const tau = reversed(sigma);

	t.deepEqual(tau.reverse(), sigma);
}

macro.title = (_, size) => `reversed (${size})`;

for (let n = 0; n < 100; ++n) test(macro, n);
