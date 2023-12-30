const mongoose = require("mongoose");
const { Job } = require("../models/job.js");



exports.postJob = async (req, res) => {
  const job = new Job(req.body);
  try {
    const result = await job.save();
    req.session.company = result;
    res.status(201).send({ status: true, job: result });
  } catch (err) {
    console.log(err);
    return res.status(400).send("Internal server error");
  }
};

exports.companyLogin = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res
      .status(400)
      .send({ status: false, message: "Email and Password are required" });
  }
  try {
    const company = await Job.findOne({ email: email, password: password });
    if (!company) {
      return res
        .status(400)
        .send({ status: false, message: "Company does'nt not exist" });
    }
    req.session.company = company;
    return res.status(200).send({ status: true, Company: company });
  } catch (err) {
    return res
      .status(500)
      .send({ status: false, message: "Internal server error" });
  }
};

exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).send(jobs);
  } catch (err) {
    res.status(400).send(err);
  }
};



exports.fetchJobByLocation = async (req, res) => {
  try {
    const location = req.params.location;
    const job = await Job.find({location});
    res.status(201).send({ status: true, jobs: job });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "Internal Server Error" });
  }
};


exports.deleteJobById = async (req, res) => {
  try {
    const jobId = req.params.id;

    // Check if the job ID is valid
    if (!mongoose.Types.ObjectId.isValid(jobId)) {
      return res.status(400).json({ error: "Invalid job ID" });
    }
    const deletedJob = await Job.findOneAndDelete(jobId);

    if (!deletedJob) {
      return res.status(404).json({ error: "Job not found" });
    }

    res
      .status(200)
      .json({ status: true, message: "Job deleted successfully", deletedJob });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
