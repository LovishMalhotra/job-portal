import React from "react";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header>
        <nav className="navbar navbg-body-tertiary">
          <div className="container">
            <a className="navbar-brand mb-0 h1" href="/">
              <img
                src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/template/jobhub-logo.svg "
                alt="JobHunt"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/9663/9663120.png"
                alt="JobHunt"
                width="50px"
                height="50px"
              />
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabIndex={-1}
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  <img
                    src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/template/jobhub-logo.svg "
                    alt="JobHunt"
                  />
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0 mx-3 justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a className="nav-link mx-3 active" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item mx-3">
                    <a className="nav-link" href="/FindJob">
                      Find a Job
                    </a>
                  </li>
                  <li className="nav-item mx-3">
                    <a className="nav-link" href="/CompanyRegister">
                      Recruiters
                    </a>
                  </li>
                  <li className="nav-item mx-3">
                    <a className="nav-link" href="/About">
                      About Us
                    </a>
                  </li>
                </ul>
                <a href="./SignUp">
                <button  className="btn mx-2 my-3  btn-primary">
                  Sign Up
                </button>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <Outlet />
      </header>
    </>
  );
};

export default Navbar;
