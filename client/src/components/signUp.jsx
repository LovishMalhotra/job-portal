import "../App.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useState } from "react";
import axios from "axios";
import FindJob from "../components/FindJob";

const SignIn = () => {
  const [signinComplete, setsigninComplete] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setLoginData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const requiredFields = ["email", "password", "rememberMe"];

    for (const field of requiredFields) {
      if (!loginData[field]) {
        alert(
          `Please fill in ${field.replace(/([A-Z])/g, " $1").toLowerCase()}`
        );
        return;
      }
    }

    try {
      const data = await axios.post("/auth/login", loginData);

      if (data.status === 200) {
        alert("Loged in successfully");
        setsigninComplete(true);
        console.log("Loged in");
      } else {
        alert("Put valid data");
        console.log("Login failed:", data.statusText);
      }
    } catch (err) {
      console.log("An error occured", err);
      alert("Put Valid Data");
    }
  };

  if (signinComplete) {
    return <FindJob />;
  }

  return (
    <>
      <Navbar></Navbar>
      <section className="pt-100">
        <div className="container">
          <div className="row login-register-cover">
            <div className="col-lg-4 col-md-6 col-sm-12 mx-auto text-center">
              <div className="text-center">
                <p className="font-sm">Welcome back!</p>
                <h2 className="mt-10"> Member Login</h2>
                <p className="login-text-p">
                  Access to all features. No credit card required.
                </p>
              </div>
              <form className="mt-50 login-register justify-content-center">
                <div className="mb-3 form-group">
                  <label className=" form-label text-start">
                    Email Address*
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    placeholder="name123@gmail.com"
                    name="email"
                    value={loginData.email}
                    onChange={handleChange}
                    required
                  ></input>
                </div>
                <div className="mb-3 form-group">
                  <label className=" form-label text-start">Password*</label>
                  <input
                    className="form-control"
                    type="password"
                    placeholder="***********"
                    name="password"
                    value={loginData.password}
                    onChange={handleChange}
                    required
                  ></input>
                </div>
                <div className="login-footer d-flex ">
                  <Form.Check
                    className="px-5"
                    type="checkbox"
                    id={`default-checkbox`}
                    label={`Remember me`}
                    name="rememberMe"
                    checked={loginData.rememberMe}
                    onChange={handleChange}
                  />
                  <a className="px-4">Forgot Password</a>
                </div>
                <Button
                  className="form-button"
                  variant="primary"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Login
                </Button>

                <span className="my-3  login-text-p">
                  Don't have an Account?
                  <a href="./SignUp">SignUp</a>
                </span>
              </form>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </section>
    </>
  );
};

const SignUp = () => {
  const [signupComplete, setsignupComplete] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
    passwordMatch: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      password: value,
      passwordMatch: value === prevData.confirmPassword,
    }));
  };

  const handleConfirmPasswordChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      confirmPassword: value,
      passwordMatch: value === prevData.password,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const requiredFields = [
      "fullName",
      "email",
      "password",
      "confirmPassword",
      "termsAccepted",
      "passwordMatch",
    ];

    for (const field of requiredFields) {
      if (!formData[field]) {
        alert(
          `Please fill in ${field.replace(/([A-Z])/g, " $1").toLowerCase()}`
        );
        return;
      }
    }

    if (!formData.passwordMatch) {
      alert("Password don't match");
      return;
    }

    try {
      const response = await axios.post("/auth/signup", formData);

      if (response.status === 200) {
        alert("Successfully SignedUp");
        setsignupComplete(true);
        console.log("Sign Up complete");
      } else {
        console.error("Registration failed:", response.statusText);
      }
    } catch (e) {
      console.log("An error occured:", e);
    }
  };

  if (signupComplete) {
    return <SignIn />;
  }

  return (
    <>
      <Navbar></Navbar>
      <section className="pt-100">
        <div className="container">
          <div className="row login-register-cover">
            <div className="col-lg-4 col-md-6 col-sm-12 mx-auto text-center">
              <div className="text-center">
                <p className="font-sm">Register </p>
                <h2 className="mt-10">Start for free today</h2>
                <p className="login-text-p">
                  Access to all features. No credit card required.
                </p>
              </div>
              <form className="mt-50 login-register justify-content-center">
                <div className="mb-3 form-group">
                  <label className=" form-label text-start">Full Name</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Lovish Malhotra"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="mb-3 form-group">
                  <label className=" form-label text-start">
                    Email Address*
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    placeholder="name123@gmail.com"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="mb-3 form-group">
                  <label className=" form-label text-start">Password*</label>
                  <input
                    className="form-control"
                    type="password"
                    placeholder="***********"
                    name="password"
                    value={formData.password}
                    onChange={handlePasswordChange}
                  ></input>
                </div>
                <div className="mb-3 form-group">
                  <label className=" form-label text-start">
                    Confirm-Password*
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    placeholder="***********"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  ></input>
                </div>
                <div className="login-footer d-flex ">
                  <Form.Check
                    className="px-4 font-small"
                    type="checkbox"
                    id={`default-checkbox`}
                    label={`Accept our Terms and Condition`}
                    name="termsAccepted"
                    value={formData.termsAccepted}
                    onChange={handleChange}
                  />
                  <a className="font-small px-2">Forgot Password</a>
                </div>
                <Button
                  className="form-button"
                  variant="primary"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Register
                </Button>

                <span className="my-3 login-text-p">
                  Already have an Account?
                  <a href="./SignIn">SignIn</a>
                </span>
              </form>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </section>
    </>
  );
};

export { SignIn, SignUp };
