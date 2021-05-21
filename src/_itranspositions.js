/**
 * Computes the sequence of transpositions that if applied to
 * <code>sigma</code> result in <code>invert(sigma)</code>. Needs an helper
 * array to keep track of processed elements. See {@link itranspositions} for
 * higher level API.
 *
 * @param {Array} sigma Input permutation.
 * @param {Array} used Helper array.
 * @return {Iterator} Iterator over the transpositions.
 */
export function* _itranspositions(sigma, used) {
	for (const s of sigma) {
		if (used[s]) continue;

		used[s] = true;

		let image = sigma[s];

		while (image !== s) {
			used[image] = true;

			yield [s, image];

			image = sigma[image];
		}
	}
}
