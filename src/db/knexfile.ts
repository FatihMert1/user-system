// Update with your config settings.

export default {
  development: {
    client: "pg",
    connection: {
      host: "user_system_db",
      database: "user-system",
      user: "postgres",
      password: "password",
      port: 5432
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
