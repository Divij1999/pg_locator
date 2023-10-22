const router = require("express-promise-router")();

const { insert_college } = require("../controllers/college_controller");

router.post("/", insert_college);
router.get("/", async (req, res) => {
  res.end("it works");
});

module.exports = router;
