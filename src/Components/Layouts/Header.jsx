import React from "react";

function Header() {
  return (
    <div className="Header">
      <nav className="navbar navbar-expand-lg bg-body-tertiary  ">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-brand" href="#">
              <div className="hoo mt-2 ">
                <img
                  className="img-fluid "
                  src="Assests/headerpic.svg"
                  alt=""
                />
                Hoo<span className="bank mt-3">Bank</span>
              </div>
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 "></ul>
            <form className="d-flex" role="search">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active headertext"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active headertext"
                    aria-current="page"
                    href="#about"
                  >
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active headertext"
                    aria-current="page"
                    href="#whatidoo"
                  >
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active headertext"
                    aria-current="page"
                    href="#skills"
                  >
                    Solution
                  </a>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
