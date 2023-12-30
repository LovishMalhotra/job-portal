const { User } = require("../models/User");

exports.checkAuth = async (req, res) => {
  // console.log(req.session.user);

  if (req.session.user) {
    try {
      const result = await User.findOne({ email: req.session.user.email });
      req.session.user = result;
      res.status(200).send({ status: true, user: result });
    } catch (error) {
      console.error("Error while querying the database:", error);
      res.status(500).send({ status: false, error: "Internal server error" });
    }
  } else {
    res.status(400).send({ status: false });
  }
};


exports.signUpUser = async (req, res) => {
  try {
    const {fullName,email,password} = req.body;
    if (!email) {
      return res.status(400).send("Invalid user request");
    }
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).send("This email already exists");
    }
    const newUser = new User({
      fullName: fullName,
      email: email,
      password: password,
    });

    const savedUser = await newUser.save();
    req.session.user = savedUser;
    return res.status(200).send({ status: true, user: savedUser });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal server error");
  }
};

exports.loginUser = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res
      .status(400)
      .send({ status: false, message: "Email and Password are required" });
  }
  try {
    const user = await User.findOne({ email: email, password: password });
    if (!user) {
      return res
        .status(400)
        .send({ status: false, message: "User does'nt not exist" });
    }
    req.session.user = user;
    return res.status(200).send({ status: true, user: user });
  } catch (err) {
    return res
      .status(500)
      .send({ status: false, message: "Internal server error" });
  }
};
