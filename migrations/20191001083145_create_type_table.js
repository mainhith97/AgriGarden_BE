
exports.up = function(knex) {
    return knex.schema.createTable('type',(table) => {
        table.increments('id').notNull().primary();
        table.string('type').notNull();
        table.timestamps(true, true);
    })
};

exports.down = function(knex) {
  
};
