const mongoose = require('mongoose');

const reservaSchema = new mongoose.Schema({
  bungalow: String,
  persona: String,
  fechaIngreso: Date,
  fechaSalida: Date,
  pago: Number
});

module.exports = mongoose.model('Reserva', reservaSchema);
