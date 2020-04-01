const express =require('express');
const cors = require('cors'); 
const { errors } = require('celebrate');
const routes = require('./routes');
const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.use(errors());
//recurso vem dentro da barra, é a rota
/**
 * get: buscar/listar informação dentro do backend
 * post: criar informação no backend
 * put: alterar informação no backend
 * delete: deletar informação
 */

 /**
  * tipos de parametros:
  * 
  * Query: parametros nomeados eviados na rota após o "?", (Filtrar, paginação)
  * Route: parametros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

/**
  * SQL: MySQL, SQLite, Oracle, Ms sql server
  * NoSQL: MongoDB e CouchDB
  */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */
  //para o back-end continuar sendo executado, precisamos do npm start

module.exports = app;