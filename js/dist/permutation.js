"use strict";

function _slicedToArray(arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }

(function () {

	"use strict";

	var definition = function definition(exports, undefined) {

		/* js/src/_apply.js */

		var _apply = function _apply(transpositions, sigma) {
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {

				for (var _iterator = transpositions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var _step$value = _slicedToArray(_step.value, 2);

					var s = _step$value[0];
					var t = _step$value[1];

					_transpose(s, t, sigma);
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator["return"]) {
						_iterator["return"]();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}
		};

		exports._apply = _apply;

		/* js/src/_bitreversal.js */

		var _bitreversal = function _bitreversal(array, n) {

			var i = 1;

			array[0] = 0;

			while (i < n) {

				for (var j = 0; j < i; ++j) {

					array[i + j] = (array[j] <<= 1) + 1;
				}

				i <<= 1;
			}
		};

		exports._bitreversal = _bitreversal;

		/* js/src/_compose.js */

		var _compose = regeneratorRuntime.mark(function _compose(sigma, tau) {
			var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, t;

			return regeneratorRuntime.wrap(function _compose$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						_iteratorNormalCompletion2 = true;
						_didIteratorError2 = false;
						_iteratorError2 = undefined;
						context$3$0.prev = 3;
						_iterator2 = tau[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
							context$3$0.next = 12;
							break;
						}

						t = _step2.value;
						context$3$0.next = 9;
						return sigma[t];

					case 9:
						_iteratorNormalCompletion2 = true;
						context$3$0.next = 5;
						break;

					case 12:
						context$3$0.next = 18;
						break;

					case 14:
						context$3$0.prev = 14;
						context$3$0.t0 = context$3$0["catch"](3);
						_didIteratorError2 = true;
						_iteratorError2 = context$3$0.t0;

					case 18:
						context$3$0.prev = 18;
						context$3$0.prev = 19;

						if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
							_iterator2["return"]();
						}

					case 21:
						context$3$0.prev = 21;

						if (!_didIteratorError2) {
							context$3$0.next = 24;
							break;
						}

						throw _iteratorError2;

					case 24:
						return context$3$0.finish(21);

					case 25:
						return context$3$0.finish(18);

					case 26:
					case "end":
						return context$3$0.stop();
				}
			}, _compose, this, [[3, 14, 18, 26], [19,, 21, 25]]);
		});

		exports._compose = _compose;

		/* js/src/_copy.js */

		var _copy = function _copy(sigma, n, tau) {

			for (var i = 0; i < n; ++i) {

				tau[i] = sigma[i];
			}
		};

		exports._copy = _copy;

		/* js/src/_cycles.js */

		var _cycles = regeneratorRuntime.mark(function _cycles(sigma, used) {
			var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, s, image, cycle;

			return regeneratorRuntime.wrap(function _cycles$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						_iteratorNormalCompletion3 = true;
						_didIteratorError3 = false;
						_iteratorError3 = undefined;
						context$3$0.prev = 3;
						_iterator3 = sigma[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
							context$3$0.next = 18;
							break;
						}

						s = _step3.value;

						if (!used[s]) {
							context$3$0.next = 9;
							break;
						}

						return context$3$0.abrupt("continue", 15);

					case 9:

						used[s] = true;

						image = sigma[s];
						cycle = [];

						while (image !== s) {

							used[image] = true;

							cycle.push(image);

							image = sigma[image];
						}

						context$3$0.next = 15;
						return [s, cycle];

					case 15:
						_iteratorNormalCompletion3 = true;
						context$3$0.next = 5;
						break;

					case 18:
						context$3$0.next = 24;
						break;

					case 20:
						context$3$0.prev = 20;
						context$3$0.t0 = context$3$0["catch"](3);
						_didIteratorError3 = true;
						_iteratorError3 = context$3$0.t0;

					case 24:
						context$3$0.prev = 24;
						context$3$0.prev = 25;

						if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
							_iterator3["return"]();
						}

					case 27:
						context$3$0.prev = 27;

						if (!_didIteratorError3) {
							context$3$0.next = 30;
							break;
						}

						throw _iteratorError3;

					case 30:
						return context$3$0.finish(27);

					case 31:
						return context$3$0.finish(24);

					case 32:
					case "end":
						return context$3$0.stop();
				}
			}, _cycles, this, [[3, 20, 24, 32], [25,, 27, 31]]);
		});

		exports._cycles = _cycles;

		/* js/src/_identity.js */

		var _identity = function _identity(sigma, n) {

			for (var i = 0; i < n; ++i) {

				sigma[i] = i;
			}
		};

		exports._identity = _identity;

		/* js/src/_invert.js */

		var _invert = function _invert(sigma, n, tau) {

			for (var i = 0; i < n; ++i) {

				tau[sigma[i]] = i;
			}
		};

		exports._invert = _invert;

		/* js/src/_invertcycles.js */

		var _invertcycles = function _invertcycles(cycles, tau) {
			var _iteratorNormalCompletion4 = true;
			var _didIteratorError4 = false;
			var _iteratorError4 = undefined;

			try {

				for (var _iterator4 = cycles[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
					var _step4$value = _slicedToArray(_step4.value, 2);

					var s = _step4$value[0];
					var cycle = _step4$value[1];
					var _iteratorNormalCompletion5 = true;
					var _didIteratorError5 = false;
					var _iteratorError5 = undefined;

					try {

						for (var _iterator5 = cycle[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
							var t = _step5.value;

							_transpose(s, t, tau);
						}
					} catch (err) {
						_didIteratorError5 = true;
						_iteratorError5 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion5 && _iterator5["return"]) {
								_iterator5["return"]();
							}
						} finally {
							if (_didIteratorError5) {
								throw _iteratorError5;
							}
						}
					}
				}
			} catch (err) {
				_didIteratorError4 = true;
				_iteratorError4 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
						_iterator4["return"]();
					}
				} finally {
					if (_didIteratorError4) {
						throw _iteratorError4;
					}
				}
			}
		};

		exports._invertcycles = _invertcycles;

		/* js/src/_itranspositions.js */

		var _itranspositions = regeneratorRuntime.mark(function _itranspositions(sigma, used) {
			var _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, s, image;

			return regeneratorRuntime.wrap(function _itranspositions$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						_iteratorNormalCompletion6 = true;
						_didIteratorError6 = false;
						_iteratorError6 = undefined;
						context$3$0.prev = 3;
						_iterator6 = sigma[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done) {
							context$3$0.next = 21;
							break;
						}

						s = _step6.value;

						if (!used[s]) {
							context$3$0.next = 9;
							break;
						}

						return context$3$0.abrupt("continue", 18);

					case 9:

						used[s] = true;

						image = sigma[s];

					case 11:
						if (!(image !== s)) {
							context$3$0.next = 18;
							break;
						}

						used[image] = true;

						context$3$0.next = 15;
						return [s, image];

					case 15:

						image = sigma[image];

						context$3$0.next = 11;
						break;

					case 18:
						_iteratorNormalCompletion6 = true;
						context$3$0.next = 5;
						break;

					case 21:
						context$3$0.next = 27;
						break;

					case 23:
						context$3$0.prev = 23;
						context$3$0.t0 = context$3$0["catch"](3);
						_didIteratorError6 = true;
						_iteratorError6 = context$3$0.t0;

					case 27:
						context$3$0.prev = 27;
						context$3$0.prev = 28;

						if (!_iteratorNormalCompletion6 && _iterator6["return"]) {
							_iterator6["return"]();
						}

					case 30:
						context$3$0.prev = 30;

						if (!_didIteratorError6) {
							context$3$0.next = 33;
							break;
						}

						throw _iteratorError6;

					case 33:
						return context$3$0.finish(30);

					case 34:
						return context$3$0.finish(27);

					case 35:
					case "end":
						return context$3$0.stop();
				}
			}, _itranspositions, this, [[3, 23, 27, 35], [28,, 30, 34]]);
		});

		exports._itranspositions = _itranspositions;

		/* js/src/_next.js */

		var _next = function _next(sigma, n) {

			var i = n - 1;

			while (i > 0) {

				--i;

				if (sigma[i] > sigma[i + 1]) continue;

				var j = n - 1;

				while (sigma[j] < sigma[i]) --j;

				_transpose(i, j, sigma);

				_reverse(sigma, i + 1, n);

				return true;
			}

			return false;
		};

		exports._next = _next;

		/* js/src/_permutations.js */

		var _permutations = regeneratorRuntime.mark(function _permutations(sigma, n) {
			return regeneratorRuntime.wrap(function _permutations$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						context$3$0.next = 2;
						return sigma;

					case 2:
						if (_next(sigma, n)) {
							context$3$0.next = 0;
							break;
						}

					case 3:
					case "end":
						return context$3$0.stop();
				}
			}, _permutations, this);
		});

		exports._permutations = _permutations;

		/* js/src/_reverse.js */

		var _reverse = function _reverse(sigma, i, j) {

			while (i < --j) {

				var tmp = sigma[i];
				sigma[i] = sigma[j];
				sigma[j] = tmp;

				++i;
			}
		};

		exports._reverse = _reverse;

		/* js/src/_transpose.js */

		var _transpose = function _transpose(a, b, sigma) {

			var tmp = sigma[a];
			sigma[a] = sigma[b];
			sigma[b] = tmp;
		};

		exports._transpose = _transpose;

		/* js/src/_transposition.js */

		var _transposition = function _transposition(a, b, sigma) {

			sigma[a] = b;
			sigma[b] = a;
		};

		exports._transposition = _transposition;

		/* js/src/_transpositions.js */
		var _transpositions = regeneratorRuntime.mark(function _transpositions(cycles) {
			var _iteratorNormalCompletion7, _didIteratorError7, _iteratorError7, _iterator7, _step7, _step7$value, s, cycle;

			return regeneratorRuntime.wrap(function _transpositions$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						_iteratorNormalCompletion7 = true;
						_didIteratorError7 = false;
						_iteratorError7 = undefined;
						context$3$0.prev = 3;
						_iterator7 = cycles[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done) {
							context$3$0.next = 17;
							break;
						}

						_step7$value = _slicedToArray(_step7.value, 2);
						s = _step7$value[0];
						cycle = _step7$value[1];

					case 9:
						if (!cycle.length) {
							context$3$0.next = 14;
							break;
						}

						context$3$0.next = 12;
						return [s, cycle.pop()];

					case 12:
						context$3$0.next = 9;
						break;

					case 14:
						_iteratorNormalCompletion7 = true;
						context$3$0.next = 5;
						break;

					case 17:
						context$3$0.next = 23;
						break;

					case 19:
						context$3$0.prev = 19;
						context$3$0.t0 = context$3$0["catch"](3);
						_didIteratorError7 = true;
						_iteratorError7 = context$3$0.t0;

					case 23:
						context$3$0.prev = 23;
						context$3$0.prev = 24;

						if (!_iteratorNormalCompletion7 && _iterator7["return"]) {
							_iterator7["return"]();
						}

					case 26:
						context$3$0.prev = 26;

						if (!_didIteratorError7) {
							context$3$0.next = 29;
							break;
						}

						throw _iteratorError7;

					case 29:
						return context$3$0.finish(26);

					case 30:
						return context$3$0.finish(23);

					case 31:
					case "end":
						return context$3$0.stop();
				}
			}, _transpositions, this, [[3, 19, 23, 31], [24,, 26, 30]]);
		});

		exports._transpositions = _transpositions;

		/* js/src/_used.js */

		var _used = function _used(n, array) {

			for (var i = 0; i < n; ++i) {
				array[i] = false;
			}
		};

		exports._used = _used;

		/* js/src/apply.js */

		var apply = function apply(n, transpositions) {

			var rho = identity(n);

			_apply(transpositions, rho);

			return rho;
		};

		exports.apply = apply;

		/* js/src/bitreversal.js */

		var bitreversal = function bitreversal(n) {

			var sigma = permutation(n);

			_bitreversal(sigma, n);

			return sigma;
		};

		exports.bitreversal = bitreversal;

		/* js/src/compose.js */

		var compose = function compose(sigma, tau) {

			var rho = permutation(sigma.length);

			var i = 0;

			var _iteratorNormalCompletion8 = true;
			var _didIteratorError8 = false;
			var _iteratorError8 = undefined;

			try {
				for (var _iterator8 = _compose(sigma, tau)[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
					var r = _step8.value;

					rho[i] = r;
					++i;
				}
			} catch (err) {
				_didIteratorError8 = true;
				_iteratorError8 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion8 && _iterator8["return"]) {
						_iterator8["return"]();
					}
				} finally {
					if (_didIteratorError8) {
						throw _iteratorError8;
					}
				}
			}

			return rho;
		};

		exports.compose = compose;

		/* js/src/copy.js */

		var copy = function copy(sigma) {

			var rho = permutation(sigma.length);

			_copy(sigma, sigma.length, rho);

			return rho;
		};

		exports.copy = copy;

		/* js/src/cycles.js */

		var cycles = regeneratorRuntime.mark(function cycles(sigma) {
			return regeneratorRuntime.wrap(function cycles$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						return context$3$0.delegateYield(_cycles(sigma, used(sigma.length)), "t0", 1);

					case 1:
					case "end":
						return context$3$0.stop();
				}
			}, cycles, this);
		});

		exports.cycles = cycles;

		/* js/src/identity.js */

		var identity = function identity(n) {

			var rho = permutation(n);

			_identity(rho, n);

			return rho;
		};

		exports.identity = identity;

		/* js/src/invert.js */

		var invert = function invert(sigma) {

			var rho = permutation(sigma.length);

			_invert(sigma, sigma.length, rho);

			return rho;
		};

		exports.invert = invert;

		/* js/src/itranspositions.js */

		var itranspositions = regeneratorRuntime.mark(function itranspositions(sigma) {
			return regeneratorRuntime.wrap(function itranspositions$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						return context$3$0.delegateYield(_itranspositions(sigma, used(sigma.length)), "t0", 1);

					case 1:
					case "end":
						return context$3$0.stop();
				}
			}, itranspositions, this);
		});

		exports.itranspositions = itranspositions;

		/* js/src/next.js */

		var next = function next(sigma) {

			var rho = copy(sigma);

			if (!_next(rho, rho.length)) reverse(rho);

			return rho;
		};

		exports.next = next;

		/* js/src/permutation.js */

		var permutation = function permutation(n) {

			return new Array(n);
		};

		exports.permutation = permutation;

		/* js/src/permutations.js */

		var permutations = regeneratorRuntime.mark(function permutations(n) {
			var _iteratorNormalCompletion9, _didIteratorError9, _iteratorError9, _iterator9, _step9, _permutation;

			return regeneratorRuntime.wrap(function permutations$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						_iteratorNormalCompletion9 = true;
						_didIteratorError9 = false;
						_iteratorError9 = undefined;
						context$3$0.prev = 3;
						_iterator9 = _permutations(identity(n), n)[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done) {
							context$3$0.next = 12;
							break;
						}

						_permutation = _step9.value;
						context$3$0.next = 9;
						return copy(_permutation);

					case 9:
						_iteratorNormalCompletion9 = true;
						context$3$0.next = 5;
						break;

					case 12:
						context$3$0.next = 18;
						break;

					case 14:
						context$3$0.prev = 14;
						context$3$0.t0 = context$3$0["catch"](3);
						_didIteratorError9 = true;
						_iteratorError9 = context$3$0.t0;

					case 18:
						context$3$0.prev = 18;
						context$3$0.prev = 19;

						if (!_iteratorNormalCompletion9 && _iterator9["return"]) {
							_iterator9["return"]();
						}

					case 21:
						context$3$0.prev = 21;

						if (!_didIteratorError9) {
							context$3$0.next = 24;
							break;
						}

						throw _iteratorError9;

					case 24:
						return context$3$0.finish(21);

					case 25:
						return context$3$0.finish(18);

					case 26:
					case "end":
						return context$3$0.stop();
				}
			}, permutations, this, [[3, 14, 18, 26], [19,, 21, 25]]);
		});

		exports.permutations = permutations;

		/* js/src/reverse.js */

		var reverse = function reverse(sigma) {

			_reverse(sigma, 0, sigma.length);
		};

		exports.reverse = reverse;

		/* js/src/reversed.js */

		var reversed = function reversed(sigma) {

			var rho = copy(sigma);

			reverse(rho);

			return rho;
		};

		exports.reversed = reversed;

		/* js/src/transpose.js */

		var transpose = function transpose(sigma, a, b) {

			var rho = copy(sigma);

			_transpose(a, b, rho);

			return rho;
		};

		exports.transpose = transpose;

		/* js/src/transposition.js */

		var transposition = function transposition(n, a, b) {

			var rho = identity(n);

			_transposition(a, b, rho);

			return rho;
		};

		exports.transposition = transposition;

		/* js/src/transpositions.js */

		var transpositions = regeneratorRuntime.mark(function transpositions(sigma) {
			return regeneratorRuntime.wrap(function transpositions$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						return context$3$0.delegateYield(_transpositions(cycles(sigma, used(sigma.length))), "t0", 1);

					case 1:
					case "end":
						return context$3$0.stop();
				}
			}, transpositions, this);
		});

		exports.transpositions = transpositions;

		/* js/src/used.js */

		var used = function used(n) {

			var array = new Array(n);

			_used(n, array);

			return array;
		};

		exports.used = used;

		return exports;
	};
	if (typeof exports === "object") {
		definition(exports);
	} else if (typeof define === "function" && define.amd) {
		define("aureooms-js-permutation", [], function () {
			return definition({});
		});
	} else if (typeof window === "object" && typeof window.document === "object") {
		definition(window["permutation"] = {});
	} else console.error("unable to detect type of module to define for aureooms-js-permutation");
})();