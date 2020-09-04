"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequalize = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sequalize = new _sequelize["default"]('postgres', 'postgres', '54321', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    require: 30000,
    idle: 10000
  },
  logging: false //Para mostrar mensajes por consola.-

});
exports.sequalize = sequalize;