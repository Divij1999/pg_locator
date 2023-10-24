const { get_pg } = require("../controllers/pg_controller");

const router = require("express-promise-router")();

router.get("/pg/:id", get_pg);

module.exports = router;
