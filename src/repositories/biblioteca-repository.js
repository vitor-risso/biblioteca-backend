const mongoose = require('mongoose');
const Biblioteca = mongoose.model('Biblioteca');

exports.get = async() => {
  const res = await Biblioteca
    .find({});

  return res
};

exports.create = async(data) => {
  let book = new Biblioteca(data);

  return book.save();
}

exports.edit = async (id, data) => {
  await Biblioteca
    .findByIdAndUpdate(id, {
      $set:{
        titulo: data.titulo,
        editora: data.editora,
        foto: data.foto,
        autores: data.autores
      }
    })
}

exports.delete = async (id) => {
  await Biblioteca
    .findByIdAndDelete(id)
}
