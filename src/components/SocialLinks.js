import React from "react";
import {
  FaFacebook,
  FaGooglePlus,
  FaTwitter
} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="https://www.facebook.com/salihah.central.1" target="_blank">
        <FaFacebook />
      </a>
    </li>
    <li>
      <a href="https://twitter.com/salihahcentral" target="_blank">
        <FaTwitter />
      </a>
    </li>
    <li>
      <a href="https://plus.google.com/108172840226557207372" target="_blank">
        <FaGooglePlus />
      </a>
    </li>

  </ul>
);

export default SocialLinks;
