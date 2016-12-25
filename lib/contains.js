'use strict';

exports.__esModule = true;
exports.contains = undefined;

var _curry = require('./curry');

var contains = exports.contains = (0, _curry.curry)(function (val, data) {
  return data.contains(val);
});