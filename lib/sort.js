'use strict';

exports.__esModule = true;
exports.sort = undefined;

var _curry = require('./curry');

var sort = exports.sort = (0, _curry.curry)(function (fn, data) {
  return data.sort(fn);
});