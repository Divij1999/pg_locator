const { get_pg, insert_pg } = require("../controllers/pg_controller");

const router = require("express-promise-router")();

router.get("/:id", get_pg);

router.post("/add-pg", insert_pg);

module.exports = router;
