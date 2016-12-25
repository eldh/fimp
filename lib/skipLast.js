'use strict';

exports.__esModule = true;
exports.skipLast = undefined;

var _curry = require('./curry');

var skipLast = exports.skipLast = (0, _curry.curry)(function (val, data) {
  return data.skipLast(val);
});