
exports.up = function(knex) {
    return knex.schema.createTable('products',(table) => {
        table.integer('id').notNull().primary();
        table.string('name',100).notNull();
        table.integer('type_id').notNull();
        table.integer('provider_id').notNull();
        table.string('unit',45).notNull();
        table.decimal('price_per_unit',8,2).notNull();
        table.integer('in_stock').notNull();
        table.string('description');
        table.timestamps(true, true);
        table.string('humidity',45);
        table.string('impurity',45);
        table.binary('image');

        table.foreign('type_id').references('id').inTable('products_type');
        table.foreign('provider_id').references('id').inTable('farmers');
    })
};

exports.down = function(knex) {
  
};
