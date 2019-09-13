const { Model } = require('objection');
const Knex = require('knex');

const knex = Knex({
    client: 'mysql',
    connection: {
    host: 'localhost',
    database: 'agricultural',
    user:     'root',
    password: '12345678'
  },
  pool: {
    min: 2,
    max: 10
  }
});

Model.knex(knex);

module.exports = Model;