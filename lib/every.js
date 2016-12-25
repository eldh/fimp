'use strict';

exports.__esModule = true;
exports.every = undefined;

var _curry = require('./curry');

var every = exports.every = (0, _curry.curry)(function (fn, data) {
  return data.every(fn);
});