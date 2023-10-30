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
  // Creating a clinet as we are going to perform a transaciton
  const client = await getClient();
  try {
    await client.query("BEGIN");

    const {
      pg_address,
      owner_contact,
      pg_rent,
      gender_requirement,
      college_id,
    } = req.body;

    // Inserting the PG details in the pg table
    const insertPgText =
      "INSERT INTO pg (pg_address, owner_contact, pg_rent, gender_requirement) VALUES($1, $2, $3, $4) RETURNING *";
    const pgResult = await client.query(insertPgText, [
      pg_address,
      owner_contact,
      pg_rent,
      gender_requirement,
    ]);

    await client.query("COMMIT");
    //  Inserting the pg_id and associated college_id in the college_pg table
    await insert_college_pg(client, college_id, pgResult.rows[0].pg_id);

    await client.query("COMMIT");

    res.json(pgResult.rows);
  } catch (e) {
    await client.query("ROLLBACK");
    throw e;
  } finally {
    client.release();
  }
};

const insert_college_pg = async (client, college_id, pg_id) => {
  const insertCollegePgText = "INSERT INTO college_pg VALUES($1, $2)";
  const collegePgResult = await client.query(insertCollegePgText, [
    college_id,
    pg_id,
  ]);
};

module.exports = { get_pg, insert_pg };
