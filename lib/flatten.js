'use strict';

exports.__esModule = true;
exports.flatten = undefined;

var _curry = require('./curry');

var flatten = exports.flatten = (0, _curry.curry)(function (opt, data) {
  return data.flatten(opt);
});