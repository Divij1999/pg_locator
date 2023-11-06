const Pool = require("pg").Pool;

// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DATABASE,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
// });

const pool = new Pool({
  "postgres://pglocator_user:xsAVhXfApw7OufbJPTscNWFTPDWkQQyi@dpg-cl48b7biu76s73b6hgig-a/pglocator",
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
