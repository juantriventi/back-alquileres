const express = require('express');
const usuariosController = require('../controllers/usuariosController')
const router = express.Router();

// Ruta para obtener todas los usuarios
router.get('/', usuariosController.obtenerUsuarios);

// Ruta para crear un usuario
router.post('/', usuariosController.crearUsuario);

// Ruta para eliminar un usuario por ID
router.delete('/:id', usuariosController.eliminarUsuario);

module.exports = router;