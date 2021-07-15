import test from 'ava';
import {randint} from '@randomized/random';
import {identity, compose, transposition} from '../../src/index.js';

function macro(t, size) {
	const id = identity(size);

	const a = randint(0, size);

	const b = randint(0, size);

	const tau = transposition(size, a, b);

	const rho = compose(tau, tau);

	t.deepEqual(rho, id, 'tau ∘ tau = identity');

	// TODO add more tests
}

macro.title = (_, size) => `transposition (${size})`;

for (let n = 1; n <= 100; ++n) test(macro, n);
