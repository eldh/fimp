'use strict';

exports.__esModule = true;
exports.takeLast = undefined;

var _curry = require('./curry');

var takeLast = exports.takeLast = (0, _curry.curry)(function (val, data) {
  return data.takeLast(val);
});