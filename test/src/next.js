import test from 'ava';
import {increasing} from '@total-order/primitive';
import {fixedlexicographical} from '@total-order/lex';
import {isSorted} from '@comparison-sorting/is-sorted';
import {list} from '@iterable-iterator/list';
import {_chain as chain} from '@iterable-iterator/chain';
import {takewhile} from '@iterable-iterator/slice';
import {singletonUnderUnaryOperator as closure} from '@set-theory/closure';
import {partial} from '@functional-abstraction/functools';
import {factorial} from '@combinatorics/factorial';
import {identity, next} from '../../src/index.js';

function macro(t, size) {
	const compare = fixedlexicographical(increasing, size);

	const id = identity(size);

	const pis = list(
		chain([[id], takewhile(partial(compare, [id]), closure(next, next(id)))]),
	);

	t.is(pis.length, factorial(size), 'n! permutations');

	t.deepEqual(pis[0], identity(size), 'first is id');

	t.deepEqual(next(pis[pis.length - 1]), identity(size), 'next(last) is id');

	t.true(isSorted(compare, pis, 0, pis.length), 'permutations are in order');
}

macro.title = (_, size) => `next (${size})`;

for (let n = 0; n <= 6; ++n) test(macro, n);
