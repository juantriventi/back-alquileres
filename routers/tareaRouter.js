const express = require('express');
const tareasController = require('../controllers/tareasController')
const router = express.Router();

// Ruta para obtener todas las reservas de alquileres
router.get('/', tareasController.obtenerTareas);

// Ruta para crear una nueva reserva de alquiler
router.post('/', tareasController.crearTarea);

// Ruta para eliminar una reserva de alquiler por ID
router.delete('/:id', tareasController.eliminarTarea);

module.exports = router;
