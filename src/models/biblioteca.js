const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  titulo:{
    type: String,
    required: true
  },
  editora:{
    type: String,
    require: true
  },
  foto: {
    type: String,
    require: true
  },
  autores:[{
    type:String,
    required: true,
  }]
})

module.exports = mongoose.model('Biblioteca', schema);
