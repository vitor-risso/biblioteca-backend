const express =  require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//conexao com o db 
mongoose.connect('mongodb://localhost:27017/biblioteca')
	.then(result => console.log('banco de dados conecatado'))
	.catch(err => console.log('Falha ao conectar com o banco'));

// Carregando models
const Biblioteca = require('./models/biblioteca');

// Carregando as rotas
const index_routes = require('./routes/index-routes');
const biblioteca_route = require('./routes/biblioteca-routes')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', index_routes);
app.use('/biblioteca', biblioteca_route);


module.exports = app;

