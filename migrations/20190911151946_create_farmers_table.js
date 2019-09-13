
exports.up = function(knex) {
    return knex.schema.createTable('farmers',(table) => {
        table.increments();
        table.string('name',100).notNull();
        table.string('username',60).notNull().unique().index();
        table.string('password',45).notNull();
        table.string('email',60).unique();
        table.string('address').notNull();
        table.integer('telephone',11);
        table.string('description');
        table.timestamps(true, true);
    })
  
};

exports.down = function(knex) {
  
};
