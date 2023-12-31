import React from "react";

function Navbar() {
  return (
    <>
      <header class="bg-dark fixed-top">
        <nav class="container-xxl navbar navbar-expand-lg py-3 bg-dark navbar-dark">
          <div class="container-fluid">

            <a class="navbar-brand fw-bold fs-3" href="#">
              Gurudayal Birla
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item mx-2">
                  <a class="nav-link" href="#skills">
                    SKILLS
                  </a>
                </li>
                <li class="nav-item mx-2">
                  <a class="nav-link" href="#portfolio">
                    PORTFOLIO
                  </a>
                </li>
                <li class="nav-item mx-2">
                  <a class="nav-link" href="#about">
                    ABOUT
                  </a>
                </li>
                <li class="nav-item mx-2">
                  <a class="nav-link" href="#cv">
                    CURRICULUM VITAE
                  </a>
                </li>
                <li class="nav-item mx-2">
                  <a class="nav-link" href="#contact">
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>
            <img
              src="./images/guruImage.jpg"
              alt="Gurudayal Birla"
              class="profile-image me-2 rounded-circle"
              style={{ width: "40px", position: "absolute", right: "-65px" }}
            />
          </div>
        </nav>
      </header>


    </>

  )
}

export default Navbar;