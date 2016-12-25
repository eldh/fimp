'use strict';

exports.__esModule = true;
exports.set = undefined;

var _curry = require('./curry');

var set = exports.set = (0, _curry.curry)(function (path, val, data) {
  return data.setIn(path, val);
});