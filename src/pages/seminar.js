import React from "react";

import dear_abir from "../assets/images/programs/Dear_Abir.jpg"
import laylatul_qadr from "../assets/images/programs/Laylatul_Qadr.jpg"
import quran_clinic from "../assets/images/programs/Quran_clinic.jpg"
import ramadan_halaqas from "../assets/images/programs/ashrtalks.jpg"
import tafseer from "../assets/images/programs/tafseer.png"

const Seminar = () => (
  <div>
    <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet"/>
    <div
        style={{
          background: 'powderblue',
          marginBottom: '1.45rem',
        }}
      >
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '1.45rem 1.0875rem',
          }}
        >
          <h1 style={{
            margin: 0,
            color: "gray"
          }}>
            Ramadan Programs

          </h1>

        </div>
        <a href="/#communityprograms"><tab1><button class="button">Go Back To The Homepage</button></tab1></a>
        <tab1></tab1>
        <a href="https://bit.ly/Salihahcentral" target="_blank"><button>Register Now!</button></a>

        <center><p style={{textDecoration:"underline", color: "black"}}>Click on flyer for more information and registration</p></center>

    </div>

    <center>

    <div id="flyer_bg" style={{width: "95vw", height: "207vh", marginBottom: "50px"}}>
      <a href="../dear_abir"><img style={{display: "inline-block", width: "45vw", height: "65vh", padding: "1vh"}} src={dear_abir}></img></a>
      <a href="../quran_clinic"><img style={{display: "inline-block", width: "45vw", height: "65vh", padding: "1vh"}} src={quran_clinic}></img></a>
      <a href="../ramadan_halaqas"><img style={{display: "inline-block", width: "45vw", height: "65vh", padding: "1vh"}} src={ramadan_halaqas}></img></a>
      <a href="../tafseer"><img style={{display: "inline-block", width: "45vw", height: "65vh", padding: "1vh"}} src={tafseer}></img></a>
      <a href="../laylatul_qadr"><img style={{display: "inline-block", width: "30vw", height: "75vh", padding: "1vh"}} src={laylatul_qadr}></img></a>

    </div>

    </center>

  </div>
);

export default Seminar
