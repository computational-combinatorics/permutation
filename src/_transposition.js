/**
 * Helper method for {@link transposition}.
 * Transposes <code>a</code> with <code>b</code> in <code>sigma</code> provided
 * <code>sigma[a] === a</code> and <code>sigma[b] === b</code>.
 *
 * @param {number} a First index.
 * @param {number} b Second index.
 * @param {Array} sigma Input permutation.
 */
export function _transposition(a, b, sigma) {
	sigma[a] = b;
	sigma[b] = a;
}
