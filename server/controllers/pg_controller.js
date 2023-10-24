const { pool, getClinet } = require("../db");

// Get the details of a particular PG

const get_pg = async (req, res) => {
  try {
    const { id } = req.params;
    const queryText = "SELECT * FROM pg WHERE pg_id = $1";
    const result = await pool.query(queryText, [id]);
    res.json(result);
  } catch (e) {
    throw e;
  }
};

module.exports = { get_pg };
