import React from "react";
import Link from "gatsby-link";

import "../assets/css/main.css";

import Header from "../components/Header";
import About from "../components/About";
import Children from "../components/Children";
import Calender from "../components/calender";
import Footer from "../components/Footer";
import WLearning from "../components/communityprograms.js";


const IndexPage = () => (
  <div>
    <Header />
    <About />
    <WLearning />
    <Calender />
    <Footer />

  </div>
);

export default IndexPage;
