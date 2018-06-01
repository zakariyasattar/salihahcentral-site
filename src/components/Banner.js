import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
    <link href='https://fonts.googleapis.com/css?family=Sofia' rel='stylesheet'/>
    <link href="https://fonts.googleapis.com/css?family=Kalam" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet"/>


      <h1 className="responsive-headline"><font color="white">Salihah Central</font></h1>
      <h3>
      <font color= "lightskyblue">
      Salihah Central is a womens learning community, where women connect, learn and thrive.
      Special events and gatherings gives us an outlet for spiritual bonding and lifelong friendships.
        Find out a little bit more
        <a className="smoothscroll" href="#about">
          {" "}
          about us
        </a>
        </font>
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
