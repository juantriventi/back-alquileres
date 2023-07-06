const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const reservaRouter = require('./routers/reservaRouters');
const tareaRouter = require('./routers/tareaRouter')
const usuarioRouter = require ('./routers/usuarioRouter');

const app = express();
const port = 3000;

app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}));

app.use(bodyParser.json());

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/bungalows', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Conectado a MongoDB');
  })
  .catch((error) => {
    console.error('Error al conectar a MongoDB:', error);
  });

// Ruta base para las reservas de alquiler
app.use('/reservas', reservaRouter);
app.use('/tareas', tareaRouter);
app.use('/usuarios', usuarioRouter);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`La aplicación está funcionando en http://localhost:${port}`);
});
