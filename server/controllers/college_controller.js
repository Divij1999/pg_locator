const { pool, getClient } = require("../db");

// Create a new college

const insert_college = async (req, res) => {
  const client = await getClient();
  try {
    const { name, address } = req.body;
    await client.query("BEGIN");
    const queryText =
      "INSERT INTO college (college_name, college_address) VALUES($1, $2) RETURNING *";
    const result = await client.query(queryText, [name, address]);
    res.json(result.rows);
    await client.query("COMMIT");
  } catch (e) {
    await client.query("ROLLBACK");
    throw e;
  } finally {
    client.release();
  }
};

// Get details of all the colleges currently stored

const get_all_colleges = async (req, res) => {
  try {
    const queryText = "SELECT * FROM college";
    const result = await pool.query(queryText);
    res.json(result.rows);
  } catch (e) {
    throw e;
  }
};

// Get details of all the PGs associated with a particular college

const get_college_pg = async (req, res) => {
  try {
    const { id } = req.params;
    const queryText =
      "SELECT * FROM pg INNER JOIN (SELECT pg_id FROM college_pg WHERE college_id = $1) AS pgs ON pg.pg_id = pgs.pg_id;";
    const result = await pool.query(queryText, [id]);
    res.json(result.rows);
  } catch (e) {
    throw e;
  }
};

module.exports = { insert_college, get_all_colleges, get_college_pg };
