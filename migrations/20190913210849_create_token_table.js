
exports.up = function(knex) {
    return knex.schema.createTable('tokens', (table) => {
        table.increments();
        table.integer('userID');
        table.string('token');
        table.integer('status');
        table.timestamp(true, true);
    })
};

exports.down = function(knex) {
  
};
