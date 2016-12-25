'use strict';

exports.__esModule = true;
exports.find = undefined;

var _curry = require('./curry');

var find = exports.find = (0, _curry.curry)(function (fn, data) {
  return data.find(fn);
});