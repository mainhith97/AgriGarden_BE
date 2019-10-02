
exports.up = function(knex) {
    return knex.schema.alterTable('products',(table) => {
        table.foreign('type').references('id').inTable('type');
    })
};

exports.down = function(knex) {
  
};
