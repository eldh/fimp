'use strict';

exports.__esModule = true;
exports.map = undefined;

var _curry = require('./curry');

var map = exports.map = (0, _curry.curry)(function (fn, data) {
  return data.map(fn);
});