'use strict';

exports.__esModule = true;
exports.filter = undefined;

var _curry = require('./curry');

var filter = exports.filter = (0, _curry.curry)(function (fn, data) {
  return data.filter(fn);
});