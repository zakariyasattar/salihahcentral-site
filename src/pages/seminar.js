import React from "react";

import dear_abir from "../assets/images/programs/Dear_Abir.jpg"
import laylatul_qadr from "../assets/images/programs/Laylatul_Qadr.jpg"
import quran_clinic from "../assets/images/programs/Quran_clinic.jpg"
import ramadan_halaqas from "../assets/images/programs/ramadan_halaqas.jpg"

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
            Reclaiming Her Inner Strength

          </h1>

        </div>
        <center><h4 style={{color: 'black'}}>Sunday, April 12th 2020 <br/> 1:30-4:15pm (Dhuhr to Asr)</h4></center>
        <a href="/#communityprograms"><tab1><button class="button">Go Back To The Homepage</button></tab1></a>

    </div>

    <center>

    <div id="flyer_bg" style={{width: "95vw", height: "130vh", marginBottom: "50px"}}>
      <a href="../dear_abir"><img style={{display: "inline-block", width: "45vw", height: "65vh", padding: "1vh"}} src={dear_abir}></img></a>
      <a href="../laylatul_qadr"><img style={{display: "inline-block", width: "45vw", height: "65vh", padding: "1vh"}} src={laylatul_qadr}></img></a>
      <a href="../quran_clinic"><img style={{display: "inline-block", width: "45vw", height: "65vh", padding: "1vh"}} src={quran_clinic}></img></a>
      <a href="../ramadan_halaqas"><img style={{display: "inline-block", width: "45vw", height: "65vh", padding: "1vh"}} src={ramadan_halaqas}></img></a>

    </div>

    </center>

  </div>
);

export default Seminar
