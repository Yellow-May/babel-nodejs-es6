"use strict";

require("core-js/stable");

require("regenerator-runtime/runtime");

var _express = _interopRequireDefault(require("express"));

var _process = require("process");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();

const start = async () => {
  try {
    app.listen(7543, () => console.log('Server listening'));
  } catch (error) {
    console.log(error);
    (0, _process.exit)(1);
  }
};

start();