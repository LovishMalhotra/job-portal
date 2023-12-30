const express = require("express");
const { searchJob } = require("../controllers/Search");
const router = express.Router();

router.get("", searchJob);

exports.router = router;
