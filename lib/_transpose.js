"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._transpose = _transpose;

/**
 * Transpose elements of input index <code>a</code> and <code>b</code> in the
 * input permutation.
 *
 * @param {Number} a The first input index.
 * @param {Number} b The second input index.
 * @param {Array} sigma The input permutation.
 */
function _transpose(a, b, sigma) {

  var tmp = sigma[a];
  sigma[a] = sigma[b];
  sigma[b] = tmp;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9fdHJhbnNwb3NlLmpzIl0sIm5hbWVzIjpbIl90cmFuc3Bvc2UiLCJhIiwiYiIsInNpZ21hIiwidG1wIl0sIm1hcHBpbmdzIjoiOzs7OztRQVNnQkEsVSxHQUFBQSxVOztBQVJoQjs7Ozs7Ozs7QUFRTyxTQUFTQSxVQUFULENBQXNCQyxDQUF0QixFQUEwQkMsQ0FBMUIsRUFBOEJDLEtBQTlCLEVBQXNDOztBQUU1QyxNQUFNQyxNQUFNRCxNQUFNRixDQUFOLENBQVo7QUFDQUUsUUFBTUYsQ0FBTixJQUFZRSxNQUFNRCxDQUFOLENBQVo7QUFDQUMsUUFBTUQsQ0FBTixJQUFpQkUsR0FBakI7QUFFQSIsImZpbGUiOiJfdHJhbnNwb3NlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIFRyYW5zcG9zZSBlbGVtZW50cyBvZiBpbnB1dCBpbmRleCA8Y29kZT5hPC9jb2RlPiBhbmQgPGNvZGU+YjwvY29kZT4gaW4gdGhlXG4gKiBpbnB1dCBwZXJtdXRhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gYSBUaGUgZmlyc3QgaW5wdXQgaW5kZXguXG4gKiBAcGFyYW0ge051bWJlcn0gYiBUaGUgc2Vjb25kIGlucHV0IGluZGV4LlxuICogQHBhcmFtIHtBcnJheX0gc2lnbWEgVGhlIGlucHV0IHBlcm11dGF0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gX3RyYW5zcG9zZSAoIGEgLCBiICwgc2lnbWEgKSB7XG5cblx0Y29uc3QgdG1wID0gc2lnbWFbYV0gO1xuXHRzaWdtYVthXSAgPSBzaWdtYVtiXSA7XG5cdHNpZ21hW2JdICA9ICAgICAgdG1wIDtcblxufVxuXG4iXX0=