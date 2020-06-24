//Conexao das ongs com o banco de dados para cadastrar

const knex = require("knex");
const configuration = require("../../knexfile");

const config =
    process.env.NODE_ENV === "test"
        ? configuration.test
        : configuration.development;

//criando a conexao
const connection = knex(config);

module.exports = connection;
