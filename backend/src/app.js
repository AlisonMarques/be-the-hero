const express = require("express");
const cors = require("cors");
const { errors } = require("celebrate");
const routes = require("./routes");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3333);
/*
 * Rota / Recursos  '/' significa a rota principal
 */

/**
 * Métodos HTPP:
 *
 * GET: Serve para buscar/listar uma informaçao do back-end
 * POST: Utilizar sempre que quiser criar uma informaçao no back-end
 * PUT: Alterar uma informaçao no back-end
 * DELETE: Deletar uma informaçao no back-end
 */

/**
 *  Tipos de parametros:
 *
 * Query: Parametros nomeados enviados na rota após o sinal "?" serve para (filtrar, paginaçao) exe: (http://localhost:3333/users?name=Alison)
 * como fazer o query: const params = request.query;
 * Route Params: Parametros utilizados para identificar recursos. exemplo: ('/users/:id')
 * como fazer o route params: const params = request.params
 * Request Body: É o corpo da requisiçao, utilizado para criar ou alterar recursos.
 * como fazer o request body: const params = request.body;
 */

/**
 * Bancos de Dados:
 * SQL: MySQl, SQLite, PostgreSQL, Oracle, Microsoft SQl Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Configurando Banco de Dados para comunicaçao
 * Driver: Se instalar o driver do BD, teremos que usar essa linguagem para fz buscas: SELECT * FROM users
 * Query Builder: Com essa opçao aqui, poderemos escrever utilizando javascript: table('users').select('*').where()
 * e tambem é universal, vai servir pra qualquer banco SQL
 * Para fazermos isso, vamos instalar o Knex.js
 */
