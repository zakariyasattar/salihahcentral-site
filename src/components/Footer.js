import React from "react";
import SocialLinks from "./SocialLinks";
import { FaChevronCircleUp } from "react-icons/lib/fa";

const Footer = () => (
  <footer id="footer">
    <div className="row">
      <div className="twelve columns">
        <SocialLinks />

        <ul className="copyright">
        <font color="white">
          <li> 2016 Salihah Central. All Rights Reserved. </li>
          </font>
          <li>
          <font color="white">
          <span>
            Design by <span><a href="https://www.styleshout.com" target="_blank">Styleshout</a></span>

            </span>
            </font>

          </li>
          <li>
          <font color="white">
            Developed in React ⚛️ by{" "}
            <span><a href="https://mail.google.com/mail/?view=cm&fs=1&to=zakariyasattar03@gmail.com" target="_blank">Zakariya Sattar</a></span>
            </font>

          </li>
        </ul>
      </div>

      <div id="go-top">
        <a className="smoothscroll" title="Back to Top" href="#home">
          <FaChevronCircleUp />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
