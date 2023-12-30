const express = require("express");
const { signUpUser, loginUser, checkAuth } = require("../controllers/Auth");
const router = express.Router();

router
  .post("/signup", signUpUser)
  .post("/login", loginUser)
  .get("/check", checkAuth);

exports.router = router;
