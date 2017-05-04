'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.itranspositions = itranspositions;

var _itranspositions2 = require('./_itranspositions');

var _used = require('./used');

var _marked = [itranspositions].map(regeneratorRuntime.mark);

/**
 * Computes the sequence of transpositions that if applied to
 * <code>sigma</code> result in <code>invert(sigma)</code>. Uses
 * {@link _itranspositions} as the underlying implementation.
 *
 * @example
 * const invert = sigma => apply( sigma.length , itranspositions( sigma ) ) ;
 *
 * @param {Array} sigma Input permutation.
 * @return {Iterator} Iterator over the transpositions.
 */
function itranspositions(sigma) {
  return regeneratorRuntime.wrap(function itranspositions$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.delegateYield((0, _itranspositions2._itranspositions)(sigma, (0, _used.used)(sigma.length)), 't0', 1);

        case 1:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pdHJhbnNwb3NpdGlvbnMuanMiXSwibmFtZXMiOlsiaXRyYW5zcG9zaXRpb25zIiwic2lnbWEiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7O1FBY2lCQSxlLEdBQUFBLGU7O0FBZGpCOztBQUNBOztlQWFpQkEsZTs7QUFYakI7Ozs7Ozs7Ozs7O0FBV08sU0FBVUEsZUFBVixDQUE0QkMsS0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdDQUVDLHdDQUFrQkEsS0FBbEIsRUFBMEIsZ0JBQU1BLE1BQU1DLE1BQVosQ0FBMUIsQ0FGRDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJpdHJhbnNwb3NpdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfaXRyYW5zcG9zaXRpb25zIH0gZnJvbSAnLi9faXRyYW5zcG9zaXRpb25zJyA7XG5pbXBvcnQgeyB1c2VkIH0gZnJvbSAnLi91c2VkJyA7XG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIHNlcXVlbmNlIG9mIHRyYW5zcG9zaXRpb25zIHRoYXQgaWYgYXBwbGllZCB0b1xuICogPGNvZGU+c2lnbWE8L2NvZGU+IHJlc3VsdCBpbiA8Y29kZT5pbnZlcnQoc2lnbWEpPC9jb2RlPi4gVXNlc1xuICoge0BsaW5rIF9pdHJhbnNwb3NpdGlvbnN9IGFzIHRoZSB1bmRlcmx5aW5nIGltcGxlbWVudGF0aW9uLlxuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBpbnZlcnQgPSBzaWdtYSA9PiBhcHBseSggc2lnbWEubGVuZ3RoICwgaXRyYW5zcG9zaXRpb25zKCBzaWdtYSApICkgO1xuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHNpZ21hIElucHV0IHBlcm11dGF0aW9uLlxuICogQHJldHVybiB7SXRlcmF0b3J9IEl0ZXJhdG9yIG92ZXIgdGhlIHRyYW5zcG9zaXRpb25zLlxuICovXG5leHBvcnQgZnVuY3Rpb24qIGl0cmFuc3Bvc2l0aW9ucyAoIHNpZ21hICkge1xuXG5cdHlpZWxkKiBfaXRyYW5zcG9zaXRpb25zKCBzaWdtYSAsIHVzZWQoIHNpZ21hLmxlbmd0aCApICkgO1xuXG59XG4iXX0=