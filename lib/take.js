'use strict';

exports.__esModule = true;
exports.take = undefined;

var _curry = require('./curry');

var take = exports.take = (0, _curry.curry)(function (val, data) {
  return data.take(val);
});