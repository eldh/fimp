'use strict';

exports.__esModule = true;
exports.get = undefined;

var _curry = require('./curry');

var get = exports.get = (0, _curry.curry)(function (path, data) {
  return data.getIn(path);
});