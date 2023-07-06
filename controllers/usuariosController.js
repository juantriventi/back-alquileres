const Usuario = require('../models/usuario')
// Controlador para obtener todos los usuarios
exports.obtenerUsuarios = (req, res) => {
  Usuario.find()
    .then((usuario) => {
      res.send(usuario);
    })
    .catch((error) => {
      console.error('Error al obtener las reservas de alquiler:', error);
      res.status(500).send('Error al obtener las reservas de alquiler');
    });
};

// Controlador para crear una nueva reserva de alquiler
exports.crearUsuario = (req, res) => {
  const { username, email, password, role } = req.body;
  

  const nuevoUsuario = new Usuario({
    username,
    email,
    password,
    role
  });

  nuevoUsuario.save()
    .then(() => {
      res.send('Usuario creado exitosamente');
    })
    .catch((error) => {
      console.error('Error al crear el usuario:', error);
      res.status(500).send('Error al crear el usuario');
    });
};

// Controlador para eliminar una tarea por ID
exports.eliminarUsuario = (req, res) => {
  const usuarioId = req.params.id;

  Usuario.findByIdAndRemove(usuarioId)
    .then(() => {
      res.send(`Se elimino el usuario ${username} correctamente`);
    })
    .catch((error) => {
      console.error(`Error al eliminar el usuario con ID ${usuarioId}:`, error);
      res.status(500).send('Error al eliminar el usuario');
    });
};