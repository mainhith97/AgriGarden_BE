
exports.up = function(knex) {
    return knex.schema.createTable('products',(table) => {
        table.increments('id').notNull().primary();
        table.string('name',100).notNull();
        table.integer('provider_id', 10).notNull().unsigned();
        table.string('unit',45).notNull();
        table.decimal('price_per_unit',8,2).notNull();
        table.integer('in_stock').notNull();
        table.string('type',100);
        table.string('description');
        table.string('humidity',45);
        table.string('impurity',45);
        table.binary('image');
        table.timestamps(true, true);

        table.foreign('provider_id').references('id').inTable('user');
    })
};

exports.down = function(knex) {
  
};
