'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cycles = cycles;

var _cycles2 = require('./_cycles');

var _used = require('./used');

var _marked = [cycles].map(regeneratorRuntime.mark);

/**
 * Computes the cycle decomposition of the input permutation.
 * See {@link _cycles} for implementation.
 *
 * @param {Array} sigma The input permutation.
 * @returns {Iterator} The cycles <code>[a, [b, c, ...]]</code> for sigma.
 */
function cycles(sigma) {
  return regeneratorRuntime.wrap(function cycles$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.delegateYield((0, _cycles2._cycles)(sigma, (0, _used.used)(sigma.length)), 't0', 1);

        case 1:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jeWNsZXMuanMiXSwibmFtZXMiOlsiY3ljbGVzIiwic2lnbWEiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7O1FBV2lCQSxNLEdBQUFBLE07O0FBWGpCOztBQUNBOztlQVVpQkEsTTs7QUFQakI7Ozs7Ozs7QUFPTyxTQUFVQSxNQUFWLENBQW1CQyxLQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0NBRUMsc0JBQVNBLEtBQVQsRUFBaUIsZ0JBQU1BLE1BQU1DLE1BQVosQ0FBakIsQ0FGRDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJjeWNsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfY3ljbGVzIH0gZnJvbSAnLi9fY3ljbGVzJyA7XG5pbXBvcnQgeyB1c2VkIH0gZnJvbSAnLi91c2VkJyA7XG5cblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgY3ljbGUgZGVjb21wb3NpdGlvbiBvZiB0aGUgaW5wdXQgcGVybXV0YXRpb24uXG4gKiBTZWUge0BsaW5rIF9jeWNsZXN9IGZvciBpbXBsZW1lbnRhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBzaWdtYSBUaGUgaW5wdXQgcGVybXV0YXRpb24uXG4gKiBAcmV0dXJucyB7SXRlcmF0b3J9IFRoZSBjeWNsZXMgPGNvZGU+W2EsIFtiLCBjLCAuLi5dXTwvY29kZT4gZm9yIHNpZ21hLlxuICovXG5leHBvcnQgZnVuY3Rpb24qIGN5Y2xlcyAoIHNpZ21hICkge1xuXG5cdHlpZWxkKiBfY3ljbGVzKCBzaWdtYSAsIHVzZWQoIHNpZ21hLmxlbmd0aCApICkgO1xuXG59XG5cbiJdfQ==