/**
 * Computes a cycle decomposition of an input permutation. This algorithm is
 * deterministic; the algorithm will procedes in a sequential manner, first
 * yielding the cycle containing the first (in input order) index of the
 * permutation, then yielding the cycle containing the first (in input order)
 * index of the permutation that is not in the first cycle, etc. The output is
 * in the form of an iterator over cycles <code>[a, [b, c, ...]]</code> where
 * <code>a</code> is the first element of the cycle and the list <code>[b, c,
 * ...]</code> contains the second, third, etc. elements of the cycle.  The
 * algorithm uses an helper array to remember which elements have already been
 * encountered.
 *
 * @see https://en.wikipedia.org/wiki/Permutation#Cycle_notation
 *
 * @param {Array} sigma The input permutation.
 * @param {Array} used The helper array.
 * @returns {IterableIterator} The cycles <code>[a, [b, c, ...]]</code> for sigma.
 */
export function* _cycles(sigma, used) {
	for (const s of sigma) {
		if (used[s]) continue;

		used[s] = true;

		let image = sigma[s];

		const cycle = [];

		while (image !== s) {
			used[image] = true;

			cycle.push(image);

			image = sigma[image];
		}

		yield [s, cycle];
	}
}
