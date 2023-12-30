const express = require("express");
const {
  getJobs,
  postJob,
  fetchJobByIndustry,
  fetchJobByExperience,
  fetchJobByJobType,
  fetchJobBySalary,
  deleteJobById,
  companyLogin,
  fetchJobByLocation,
} = require("../controllers/Job");
const router = express.Router();

router
  .get("/allJobs", getJobs)
  .post("/postJob", postJob)
  .post("/companyLogin", companyLogin)
  .get("/location/:location", fetchJobByLocation)
  .delete("/:id", deleteJobById);

exports.router = router;
