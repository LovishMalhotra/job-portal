const { Job } = require("../models/job.js");



exports.searchJob = async (req, res) => {
  try {
    const { industry, location } = req.query;
    if (!industry && !location) {
      return res.status(400).send("Industry or location is required");
    }

    if (!location) {
      const jobs = await Job.find({ industry });
      res.status(201).send({ status: true, jobs });
    } else if (!industry) {
      const jobs = await Job.find({ location });
      res.status(201).send({ status: true, jobs });
    } else {
      const jobs = await Job.find({ industry, location });
      res.status(201).send({ status: true, jobs });
    }
  } catch (err) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};
