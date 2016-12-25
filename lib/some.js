'use strict';

exports.__esModule = true;
exports.some = undefined;

var _curry = require('./curry');

var some = exports.some = (0, _curry.curry)(function (fn, data) {
  return data.some(fn);
});