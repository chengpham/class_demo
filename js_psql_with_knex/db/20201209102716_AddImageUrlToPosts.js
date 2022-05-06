
exports.up = function(knex) {
  return knex.schema.table('posts', table =>{
      table.string('image_url')
  })
};

exports.down = function(knex) {
  return knex.schema.table('posts', table =>{
      table.dropColumn('image_url')
  })
};
