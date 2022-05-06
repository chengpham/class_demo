// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'knexpress_labs',
      username: 'souett',
      password: 'password',
    },
    migrations: {
      tableName: 'migrations',
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  },

};

