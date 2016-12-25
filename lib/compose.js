'use strict';

exports.__esModule = true;
exports.compose = undefined;

var _immutable = require('immutable');

var isImmutable = function isImmutable(data) {
  return _immutable.Iterable.isIterable(data);
};
var compose = exports.compose = function compose() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var fns = Array.prototype.slice.call(args, 0, args.length - 1);
  var data = args[args.length - 1];
  return isImmutable(data) ? fns.reduce((d, fn) =>
    return fn(d)
  }, data) : function () {
    for (var _len2 = arguments.length, more = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      more[_key2] = arguments[_key2];
    }

    return compose.apply(undefined, args.concat(more));
  };
};
