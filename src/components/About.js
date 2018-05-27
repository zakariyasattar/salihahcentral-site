import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";
import Link from 'gatsby-link'
import Router from 'react-router';


import profilePic from "../assets/images/unnamed.png";
<link href='https://fonts.googleapis.com/css?family=Sofia' rel="stylesheet"/>

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
      <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h1>About us</h1>
        <h5>
        <font color="gray">

        Salihah Central is an Islamic learning community for women, exclusively taught by women. We
        also offer enrichment classes for children including summer, weekend, and after-school programs.
        Furthermore, through entertaining special events and gatherings we foster and value
        meaningful friendships within our community. Please take the time to meet our team, get involved, and contact us by clicking the buttons below!
        </font>
        </h5>
        <br />

            <a href="/staff"><button>Meet our team</button></a><tab1></tab1>
            <a href="contact-us.html"><button>Contact Us</button></a><tab1></tab1>
            <a href="https://docs.google.com/forms/d/17RV4XLozmAY0bTDoyVrQnBABnLhq2TjKYpOvJkpV-JU/edit" target="_blank"><button>Join Our Online Forum!</button></a><tab1></tab1>
      </div>
    </div>
  </section>
);

export default About;
