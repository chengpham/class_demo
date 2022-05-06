

exports.up = function(knex) {
    return knex.schema.createTable('bill', table => {
      table.increments('id');
      table.integer('bill_total')
      table.integer('tax_percent')
      table.integer('tip_percent')
      table.integer('group_size');
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('bill');
  };