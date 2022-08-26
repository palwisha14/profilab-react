import React from "react";
import "./style.css";
import Imag13 from "./img/galleries-1-640x640.jpg";
import Imag8 from "./img/galleries-2-640x640.jpg";
import Imag9 from "./img/galleries-3-640x640.jpg";
import Imag10 from "./img/galleries-4-640x640.jpg";
import Imag11 from "./img/galleries-5-640x640.jpg";
import Imag12 from "./img/galleries-6-640x640.jpg";
import {BsTelephoneFill , BsFillEnvelopeFill , BsFillGeoAltFill }  from "react-icons/bs";




class Footer extends React.Component {
  render() {
    return (
      <>
        <div class="hero-container">
          <div class="row">
            <div class="col-sm-2">
              <img src={Imag13} style={{ height: "40vh", width: "100%" }} />
            </div>
            <div class="col-sm-2 ">
              <img src={Imag8} style={{ height: "40vh", width: "100%" }} />
            </div>
            <div class="col-sm-2 ">
              <img src={Imag9} style={{ height: "40vh", width: "100%" }} />
            </div>
            <div class="col-sm-2 ">
              <img src={Imag10} style={{ height: "40vh", width: "100%" }} />
            </div>
            <div class="col-sm-2">
              <img src={Imag11} style={{ height: "40vh", width: "100%" }} />
            </div>
            <div class="col-sm-2">
              <img src={Imag12} style={{ height: "40vh", width: "100%" }} />
            </div>
          </div>
        </div>

        <div class="footer bg-dark">
           
          <div class="foot_div">
          {/* <h1>Quick Links</h1> */}
            <p>Services</p>
            <p>Single Service</p>
            <p>Contacts</p>
            <p>Testimonials</p>
            <p>Privacy Policy</p>
          </div>

          <div class="foot_div">
            <p>About Us</p>
            <p>Team Member Page</p>
            <p>Login</p>
            <p>Registration</p>
          </div>

          <div class="foot_div">
            <p>Portfolio</p>
            <p>Single Project</p>
            <p>Our History</p>
            <p>Single Job</p>
          </div>

          <div class="foot_div">
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
            <p>LinkedIn</p>
            <p>Pinterest</p>

          </div>

          <div class="foot_div">
            <p><BsFillEnvelopeFill  class="text-light h4 pl-3"/>  2130 Fulton Street San Diego, CA
                94117-1080 USA</p>
            <p><BsTelephoneFill  class="text-light h4 pl-3"/> 1-800-1234-678<br/>
                1-800-8765-098</p>
            <p><BsFillGeoAltFill  class="text-light h4 pl-3"/> info@demolink.org</p>
          </div>
        </div>
        <div class="last bg-dark">
          <p>© 2022 All Rights Reserved</p>
        </div>
      </>
    );
  }
}
export default Footer;
