/**
 * Computes the transposition decomposition of some permutation given its cycle
 * decomposition.
 *
 * @param {Iterable} cycles The cycle decomposition of some permutation.
 * @returns {IterableIterator} The transposition decomposition of the permutation
 * defined by the input cycles.
 */
export function* _transpositions(cycles) {
	for (const [s, cycle] of cycles) {
		while (cycle.length > 0) yield [s, cycle.pop()];
	}
}
