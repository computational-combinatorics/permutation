import test from 'ava';
import {randint, shuffle} from '@randomized/random';
import {copy, compose, identity, transpose} from '#module';

function macro(t, size) {
	const sigma = identity(size);

	shuffle(sigma, 0, size);

	const a = randint(0, size);

	const b = randint(0, size);

	const tau = transpose(sigma, a, b);

	let rho = identity(size);

	shuffle(rho, 0, size);

	let upsilon = copy(rho);

	rho = compose(rho, sigma);
	upsilon = compose(upsilon, tau);

	t.deepEqual(rho[a], upsilon[b], 'rho[a] is upsilon[b]');
	t.deepEqual(rho[b], upsilon[a], ': rho[b] is upsilon[a]');

	upsilon = transpose(upsilon, a, b);

	t.deepEqual(upsilon, rho, 'upsilon is rho after transpose');
}

macro.title = (_, size) => `transpose (${size})`;

for (let n = 1; n <= 100; ++n) test(macro, n);
