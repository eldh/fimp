'use strict';

exports.__esModule = true;
exports.concat = undefined;

var _curry = require('./curry');

var concat = exports.concat = (0, _curry.curry)(function (a, b) {
  return b.concat(a);
});