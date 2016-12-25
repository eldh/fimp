'use strict';

exports.__esModule = true;
exports.reduce = undefined;

var _curry = require('./curry');

var reduce = exports.reduce = (0, _curry.curry)(function (fn, init, data) {
  return data.reduce(fn, init);
});