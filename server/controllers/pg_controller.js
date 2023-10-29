const { pool, getClient } = require("../db");

// Get the details of a particular PG

const get_pg = async (req, res) => {
  try {
    const { id } = req.params;
    const queryText = "SELECT * FROM pg WHERE pg_id = $1";
    const result = await pool.query(queryText, [id]);
    res.json(result.rows);
  } catch (e) {
    throw e;
  }
};

const insert_pg = async (req, res) => {
  const client = await getClient();
  try {
    await client.query("BEGIN");

    const { pg_address, owner_contact, pg_rent, gender_requirement } = req.body;
    const queryText =
      "INSERT INTO pg (pg_address, owner_contact, pg_rent, gender_requirement) VALUES($1, $2, $3, $4) RETURNING *";
    const result = await client.query(queryText, [
      pg_address,
      owner_contact,
      pg_rent,
      gender_requirement,
    ]);

    await client.query("COMMIT");
    res.json(result);
  } catch (e) {
    await client.query("ROLLBACK");
    throw e;
  } finally {
    client.release();
  }
};

module.exports = { get_pg, insert_pg };
