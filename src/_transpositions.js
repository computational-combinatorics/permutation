/**
 * Computes the transposition decomposition of some permutation given its cycle
 * decomposition.
 *
 * @param {Array} cycles The cycle decomposition of some permutation.
 * @returns {Iterator} The transposition decomposition of the permutation
 * defined by the input cycles.
 */
export function* _transpositions(cycles) {
	for (const [s, cycle] of cycles) {
		while (cycle.length > 0) yield [s, cycle.pop()];
	}
}
