const router = require("express-promise-router")();

const {
  insert_college,
  get_all_colleges,
  get_college_pg,
} = require("../controllers/college_controller");

router.post("/", insert_college);

router.get("/", get_all_colleges);

router.get("/:id", get_college_pg);

module.exports = router;
