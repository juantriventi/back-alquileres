const Reserva = require('../models/reserva');

// Controlador para obtener todas las reservas de alquileres
exports.obtenerReservas = (req, res) => {
  Reserva.find()
    .then((reservas) => {
      res.send(reservas);
    })
    .catch((error) => {
      console.error('Error al obtener las reservas de alquiler:', error);
      res.status(500).send('Error al obtener las reservas de alquiler');
    });
};

// Controlador para crear una nueva reserva de alquiler
exports.crearReserva = (req, res) => {
  const { bungalow, persona, fechaIngreso, fechaSalida , pago } = req.body;
  

  const nuevaReserva = new Reserva({
    bungalow,
    persona,
    fechaIngreso,
    fechaSalida,
    pago
  });

  nuevaReserva.save()
    .then(() => {
      res.send('Reserva de alquiler creada exitosamente');
    })
    .catch((error) => {
      console.error('Error al crear la reserva de alquiler:', error);
      res.status(500).send('Error al crear la reserva de alquiler');
    });
};

// Controlador para eliminar una reserva de alquiler por ID
exports.eliminarReserva = (req, res) => {
  const reservaId = req.params.id;

  Reserva.findByIdAndRemove(reservaId)
    .then(() => {
      res.send(`Se elimino la reserva de ${persona} correctamente`);
    })
    .catch((error) => {
      console.error(`Error al eliminar la reserva de alquiler con ID ${reservaId}:`, error);
      res.status(500).send('Error al eliminar la reserva de alquiler');
    });
};
