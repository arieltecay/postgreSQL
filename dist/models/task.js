"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _databse = require("../database/databse");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Task = _databse.sequalize.define('task', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  name: {
    type: _sequelize["default"].TEXT
  },
  projectid: {
    type: _sequelize["default"].INTEGER
  },
  done: {
    type: _sequelize["default"].BOOLEAN
  }
}, {
  timestamps: false
});

var _default = Task;
exports["default"] = _default;