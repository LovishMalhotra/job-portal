const mongoose = require("mongoose");
const { Schema } = mongoose;

const jobSchema = new Schema({
  companyName: { type: String, required: true },
  location: { type: String, required: true },
  jobTitle: { type: String, required: true },
  description: { type: String },
  salary: { type: Number, required: true },
  email: { type: String, required: true },
  experience: { type: String, required: true },
  jobSkills: [{ type: String }],
  logoUrl: {
    type: String,
    default:
      "https://jobbox-nextjs-v3.vercel.app/assets/imgs/brands/brand-1.png",
  },
  jobType: { type: String, required: true },
  industry: { type: String, required: true },
  password: { type: String, required: true },
});

exports.Job = mongoose.model("Job", jobSchema);
