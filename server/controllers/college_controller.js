const { pool, getClient } = require("../db");

const insert_college = async (req, res) => {
  const client = await getClient();
  try {
    const { name, address } = req.body;
    await client.query("BEGIN");
    const queryText = `INSERT INTO college (college_name, college_address) VALUES($1, $2) RETURNING *`;
    const result = await client.query(queryText, [name, address]);
    res.json(result.rows);
    await client.query("COMMIT");
  } catch (error) {
    await client.query("ROLLBACK");
    throw e;
  } finally {
    client.release();
  }
};

module.exports = { insert_college };
