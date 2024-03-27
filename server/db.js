const Pool = require("pg").Pool;

// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DATABASE,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
// });

const connectionString = "postgres://pgdatabase_hk4f_user:dRchO3s50263UNQnXv6AKFv4qU2Wikj6@dpg-co1u7l8l6cac73d2q76g-a.singapore-postgres.render.com/pgdatabase_hk4f?sslmode=no-verify";
const pool = new Pool({
  connectionString,
});

/* It is a good measure to run queries during a transaction through a client rather than 
using pool.query as this allows us to BEGIN, COMMIT, ROLLBACK the query through a single connection.
A Pool just grabs the first available client to run the query and releases it. With a SELECT it is not 
a problem but when we are changing the data in a DB aka a transaction this can cause problems */
const getClient = async () => {
  const client = await pool.connect();
  return client;
};

module.exports = { pool, getClient };
