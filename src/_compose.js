/**
 * Compose two input permutations. The resulting permutation is output as an
 * iterator of indices instead of an array of indices.
 *
 * @param {Array} sigma The first input permutation.
 * @param {Array} tau The second input permutation.
 * @returns {IterableIterator} An iterator over the items of the resulting permutation.
 */
export function* _compose(sigma, tau) {
	for (const t of tau) yield sigma[t];
}
