'use strict';

exports.__esModule = true;
exports.skip = undefined;

var _curry = require('./curry');

var skip = exports.skip = (0, _curry.curry)(function (val, data) {
  return data.skip(val);
});