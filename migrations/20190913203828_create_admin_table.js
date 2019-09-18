
exports.up = function(knex) {
    return knex.schema.createTable('admin',(table) => {
        table.integer('id').notNull().primary();
        table.string('username',45).notNull().unique();
        table.string('password',45).notNull();
        table.string('role',45).notNull();
    })
};

exports.down = function(knex) {
  
};
