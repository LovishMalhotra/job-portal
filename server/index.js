const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const bodyParser = require("body-parser");

const authRouters = require("./routes/Auth.js");
const jobRouters = require("./routes/Job.js");
const searchRouters = require("./routes/Search.js");

const app = express();
const port = 8080;

app.use(bodyParser.json());

app.use(
  session({
    secret: "my-secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    },
  })
);

app.use("/auth", authRouters.router);
app.use("/jobs", jobRouters.router);
app.use("/search",searchRouters.router);

//Database connection
main().catch((err) => console.log(`Unable to connect ${err}`));

async function main() {
  await mongoose.connect("mongodb+srv://lovishmalhotra2441:Lovish%402441@cluster0.ipj4yj6.mongodb.net/jobPortal?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Database Connected");
}

app.listen(port, () => {
  console.log(`server running at port ${port}`);
});
