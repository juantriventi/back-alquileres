const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
 username:String,
 email:String,
 password: String,
 role: String
});

module.exports = mongoose.model('Usuario', usuarioSchema);