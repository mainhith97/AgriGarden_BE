
exports.up = function(knex) {
    return knex.schema.createTable('user',(table) => {
        table.increments('id').notNull().primary();
        table.string('username',60).notNull().unique().index();
        table.string('password',45).notNull();
        table.string('name',100);
        table.string('company_name');
        table.string('email',60).notNull().unique();
        table.string('address');
        table.integer('telephone',11);
        table.string('description');
        table.string('role',45);
        table.timestamps(true, true);
    })
};


exports.down = function(knex) {
  
};
