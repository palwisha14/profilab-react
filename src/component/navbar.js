import React from "react";
import Img from "./img/logo-default-190x40.png";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light p-4">
          <div class="container-fluid">
            <img src={Img} style={{ paddingLeft: "2rem" }} />
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse d-flex justify-content-end"
              id="navbarNav"
            >
              <ul
                class="navbar-nav   d-flex justify-content-evenly "
                style={{ width: "90%" }}
              >
                <li class="nav-item">
                  <a class="nav-link active" href="#" style={{color:"#1ab785"}}>
                    HOME
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link  text-dark" href="#">
                    SERVICES
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-dark" href="#">
                    ABOUT US
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-dark" href="#">
                    OUR TEAM
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-dark" href="#">
                    TESTIMONIALS
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-dark" href="#">
                    PRICING{" "}
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-dark" href="#">
                    BLOG
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-dark" href="#">
                    CONTACT US
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
export default Navbar;
