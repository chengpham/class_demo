
exports.up = function(knex) {
  return knex.schema.createTable('posts', table => {
      table.bigIncrements('id') // CREATE A COLUMN CALL ID WITH TYPE SERIAL
      table.string('title') // CREATE COLUMN TITLE WITH TYPE VARCHAR
      table.text('content') // CREATE COLUMN CONTENT TYPE TEXT
      table.timestamp('createAt').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('posts')
};
