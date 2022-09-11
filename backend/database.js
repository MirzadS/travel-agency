const { Pool } = require("pg");

const pool = new Pool({
  user: "lnmlmteb",
  database: "lnmlmteb",
  host: "surus.db.elephantsql.com",
  password: "iTlZ94EJQfNBf83Zl_7nj0dKjFU6q1oo",
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000,
});

module.exports = pool;
