import React from "react";

import final_flyer from "../assets/images/programs/ramadan.jpg"

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
            Ramadan Initiative

          </h1>

        </div>
        <a href="/#communityprograms"><tab1><button class="button">Go Back To The Homepage</button></tab1></a>
        <tab1></tab1>
        <a href="https://bit.ly/Salihahcentral" target="_blank"><button>Register Now!</button></a>

        <center><p style={{textDecoration:"underline", color: "black"}}>Click on flyer for registration</p></center>

    </div>

    <center>

    <div id="flyer_bg" style={{width: "95vw", height: "350vh", marginBottom: "50px"}}>
      <a href="https://bit.ly/Salihahcentral" target="_blank"><img style={{display: "inline-block", width: "65vw", padding: "1vh"}} src={final_flyer}></img></a>
    </div>

    </center>

  </div>
);

export default Seminar
