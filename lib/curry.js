"use strict";

exports.__esModule = true;
exports.curry = curry;
function curry(fn) {
  var _this = this;

  var curryFn = function curryFn(fnArgs) {
    if (fnArgs.length >= fn.length) {
      return fn.apply(_this, fnArgs);
    }
    return function () {
      for (var _len2 = arguments.length, cArgs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        cArgs[_key2] = arguments[_key2];
      }

      return curryFn([].concat(fnArgs, cArgs));
    };
  };

  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return curryFn(args);
}