const repository = require('../repositories/biblioteca-repository');

exports.get = async (req, res, next) => {
  try {
    let data = await repository.get()
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send({message: "Falha ao listar livros", err: error})
  }
};

exports.post = async(req, res, next) => {
  try {
    let data = await repository.create(req.body)
    res.status(201).send({message:'livro cadastrado'})
  } catch (error) {
    res.status(400).send({
      message:'Falha  ao cadastrar produto'
    }) 
  }
}

exports.put = async (req, res, next) => {
  try {
    let data = await repository.edit(req.params.id, req.body)
    res.status(200).send({
      message: "O Livro foi atualizado com sucesso!"
    })
  } catch (error) {
    res.status(400).send({message: "Não foi possivel atualziar o livro"})    ;
  }
}


exports.delete = async (req, res, next) => {
  try {
    await repository.delete(req.params.id)
    res.status(200).send({message: "Livro removido com sucesso"})
  } catch (error) {
    res.status(400).send({
      message: "O Livro não foi removido ",
      err: err
    })
  }
}
