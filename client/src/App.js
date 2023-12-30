import React from "react";
import "../src/css/styles.css";
import "../src/css/styles-FindJob.css";
import "../src/css/about.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import FindJob from "./components/FindJob";
import { SignIn, SignUp } from "./components/signUp";
import { CompanyRegister, CompanyLogin } from "./components/Companies";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/FindJob" element={<FindJob />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/CompanyRegister" element={<CompanyRegister />} />
          <Route path="/CompanyLogin" element={<CompanyLogin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
