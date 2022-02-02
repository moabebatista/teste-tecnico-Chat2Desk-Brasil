const knex = require("knex")({
    client: "pg",
    connection: {
      host: "localhost",
      user: "postgres",
      password:"postgres",
      database: "cadastro_de_usuarios",
      port: 5432,
      ssl: {
        rejectUnauthorized: false,
      },
    },
  });
  
  module.exports = knex;