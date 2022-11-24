const path = require("path");
require("dotenv").config();
// const { DATABASE_URL } = process.env;

const {
  NODE_ENV = "development",
  DEVELOPMENT_DATABASE_URL,
  PRODUCTION_DATABASE_URL,
} = process.env;

const URL = 
  NODE_ENV === "production"
  ? PRODUCTION_DATABASE_URL
  : DEVELOPMENT_DATABASE_URL;

module.exports = {
  development: {
    client: "postgresql",
    connection: URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

  production: {
    client: "postgresql",
    connection: URL,
    migrations: {
      directory: __dirname + "/src/db/migrations",
    },
    seeds: {
      directory: __dirname + "/src/db/seeds"
    }
  }
};
