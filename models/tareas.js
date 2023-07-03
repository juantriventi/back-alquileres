const mongoose = require('mongoose');

const tareaSchema = new mongoose.Schema({
  bungalow: String,
  persona: String,
  fecha: Date,
  descripcion: String
});

module.exports = mongoose.model('Tarea', tareaSchema);