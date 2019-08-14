exports.up = function(knex) {
  return knex.schema.createTable("todos", todos => {
    todos.increments();
    todos.string("name", 128).notNullable();
    todos.boolean("is_completed").defaultTo(false);
    todos.datetime("start_time").notNullable();
    todos.datetime("end_time").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("todos");
};
