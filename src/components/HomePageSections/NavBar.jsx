import React from "react";

const NavBar = () => {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-md" id="navbar">
        <div className="container-lg">
          <a className=" text-decoration-none h2 fw-bold" href="#">
            Appertment<span className="color-toggle text-uppercase">Z</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav align-items-center ms-auto mb-2 mb-lg-0">
              <li className="nav-item d-md-none">
                <a className="nav-link text-black" aria-current="page" href="#">
                  Login
                </a>
              </li>
              <li className="nav-item d-md-none">
                <a className="nav-link text-black" aria-current="page" href="#">
                  Sign up
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Manage Rentals
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link btn-theme p-3 rounded-5 add-proparty-btn"
                  href="#"
                >
                  Add a proparty
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
