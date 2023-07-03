const express = require('express');
const reservaController = require('../controllers/reservasController');

const router = express.Router();

// Ruta para obtener todas las reservas de alquileres
router.get('/', reservaController.obtenerReservas);

// Ruta para crear una nueva reserva de alquiler
router.post('/', reservaController.crearReserva);

// Ruta para eliminar una reserva de alquiler por ID
router.delete('/:id', reservaController.eliminarReserva);

module.exports = router;
