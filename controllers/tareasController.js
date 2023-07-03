const Tarea = require('../models/tareas')
// Controlador para obtener todas las reservas de alquileres
exports.obtenerTareas = (req, res) => {
  Tarea.find()
    .then((tareas) => {
      res.send(tareas);
    })
    .catch((error) => {
      console.error('Error al obtener las reservas de alquiler:', error);
      res.status(500).send('Error al obtener las reservas de alquiler');
    });
};

// Controlador para crear una nueva reserva de alquiler
exports.crearTarea = (req, res) => {
  const { persona, bungalow , fecha, descripcion } = req.body;
  

  const nuevaTarea = new Tarea({
    bungalow,
    persona,
    fecha,
    descripcion
  });

  nuevaTarea.save()
    .then(() => {
      res.send('Tarea creada exitosamente');
    })
    .catch((error) => {
      console.error('Error al crear la tarea:', error);
      res.status(500).send('Error al crear la tarea');
    });
};

// Controlador para eliminar una tarea por ID
exports.eliminarTarea = (req, res) => {
  const tareaId = req.params.id;

  Tarea.findByIdAndRemove(tareaId)
    .then(() => {
      res.send(`Se elimino la tarea de ${bungalow} correctamente`);
    })
    .catch((error) => {
      console.error(`Error al eliminar la tarea con ID ${tareaId}:`, error);
      res.status(500).send('Error al eliminar la tarea');
    });
};