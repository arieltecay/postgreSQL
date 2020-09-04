"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _databse = require("../database/databse");

var _task = _interopRequireDefault(require("./task"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Conexión para modelar los datos
//Cadena de conexión
//La variable "Project" contiene todo el esquema del proyecto.-
var Project = _databse.sequalize.define('project', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  name: {
    type: _sequelize["default"].TEXT
  },
  priority: {
    type: _sequelize["default"].INTEGER
  },
  description: {
    type: _sequelize["default"].TEXT
  },
  deliverydate: {
    type: _sequelize["default"].DATE
  }
}, {
  timestamps: false //Para no tener problemas con las fechas

});

Project.hasMany(_task["default"], {
  foreignKey: 'projectid',
  sourceKey: 'id'
}); //El proyecto tiene muchas tareas

_task["default"].belongsTo(Project, {
  foreignKey: 'projectid',
  sourceKey: 'id'
}); //Muchas tareas pertenecen a un proyecto

/*En estas dos lineas se realizo la relacion en tre las dos tables*/


var _default = Project;
exports["default"] = _default;