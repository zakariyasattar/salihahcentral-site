import React from "react";
import Link from "gatsby-link";

import "../assets/css/main.css";

import Header from "../components/Header";
import About from "../components/About";
import Events from "../components/Events";
import Calendar from "../components/calender";
import Footer from "../components/Footer";
import WLearning from "../components/communityprograms.js";


const IndexPage = () => (
  <div>
    <Header />
    <About />
    <WLearning />
    <Events/>
    <Calendar />
    <Footer />

  </div>
);

export default IndexPage;
