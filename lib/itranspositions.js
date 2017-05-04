'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.itranspositions = itranspositions;

var _itranspositions2 = require('./_itranspositions');

var _used = require('./used');

var _marked = [itranspositions].map(regeneratorRuntime.mark);

/**
 * Really no idead what this does, see also {@link _itranspositions}.
 *
 * @param {Array} sigma Input permutation.
 * @return {Iterator} ?
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pdHJhbnNwb3NpdGlvbnMuanMiXSwibmFtZXMiOlsiaXRyYW5zcG9zaXRpb25zIiwic2lnbWEiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7O1FBU2lCQSxlLEdBQUFBLGU7O0FBVGpCOztBQUNBOztlQVFpQkEsZTs7QUFOakI7Ozs7OztBQU1PLFNBQVVBLGVBQVYsQ0FBNEJDLEtBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3Q0FFQyx3Q0FBa0JBLEtBQWxCLEVBQTBCLGdCQUFNQSxNQUFNQyxNQUFaLENBQTFCLENBRkQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiaXRyYW5zcG9zaXRpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2l0cmFuc3Bvc2l0aW9ucyB9IGZyb20gJy4vX2l0cmFuc3Bvc2l0aW9ucycgO1xuaW1wb3J0IHsgdXNlZCB9IGZyb20gJy4vdXNlZCcgO1xuXG4vKipcbiAqIFJlYWxseSBubyBpZGVhZCB3aGF0IHRoaXMgZG9lcywgc2VlIGFsc28ge0BsaW5rIF9pdHJhbnNwb3NpdGlvbnN9LlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHNpZ21hIElucHV0IHBlcm11dGF0aW9uLlxuICogQHJldHVybiB7SXRlcmF0b3J9ID9cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uKiBpdHJhbnNwb3NpdGlvbnMgKCBzaWdtYSApIHtcblxuXHR5aWVsZCogX2l0cmFuc3Bvc2l0aW9ucyggc2lnbWEgLCB1c2VkKCBzaWdtYS5sZW5ndGggKSApIDtcblxufVxuXG4iXX0=