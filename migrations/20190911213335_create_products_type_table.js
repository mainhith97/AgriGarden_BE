
exports.up = function(knex) {
    return knex.schema.createTable('products_type',(table) => {
        table.increments();
        table.string('type',100).notNull();
        table.timestamps(true, true);
    })
};

exports.down = function(knex) {
  
};
