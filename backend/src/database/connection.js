const knex = require('knex');
const configuration = require('../../knexfile');

const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;
//estrutura if, se for 'test', variavel setada no package.json, a config usada é test, se nao, develop

const connection = knex (config);

module.exports = connection;