
exports.up = function(knex) {
    return knex.schema.createTable('distributors',(table) => {
        table.increments();
        table.string('name',100);
        table.string('username',60).notNull().unique().index();
        table.string('password',45).notNull();
        table.string('company_name',100).notNull();
        table.string('email',60).notNull().unique();
        table.string('company_address').notNull();
        table.integer('telephone',11);
        table.string('description');
        table.timestamps(true, true);
    })
};

exports.down = function(knex) {
  
};
