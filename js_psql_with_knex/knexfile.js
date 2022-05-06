// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'knex_demo',
      username: process.env.ADMIN_USER,
      password: process.env.ADMIN_PASSWORD
    },
    migrations: {
      tableName: 'migrations',
      directory: 'db' 
    },
    seeds: {
      directory: 'seeds'
    }
  }
};
