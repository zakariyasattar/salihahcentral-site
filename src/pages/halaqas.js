import React from 'react'
import Link from 'gatsby-link'

import bg_image from "../assets/images/bg_image.png"
import seerah_class from "../assets/images/programs/Seerah_class.jpg"
import convert_circle from "../assets/images/programs/Convert_Circle.jpg"

const halaqas = () => (
<div className="halaqas">
<link rel="stylesheet" type="text/css" href="main.css"/>
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
        Community Classes

      </h1>

    </div>
    <a href="/#communityprograms"><tab1><button class="button">Go Back To The Homepage</button></tab1></a>
</div>

<br/>

  <h3 style={{
    color: 'white'
  }}>
  <tab1></tab1>What Is It?</h3>
  <p>Salihah Central offers community classes for women in the Chicagoland area.
    For over a decade, various classes have been taught in order to empowered women by providing Islamic knowledge,
    opportunities for self reflection and growth, and practical steps to face day to day challenges.
    Whether you are looking for something on the weekend, weeknight, or seeking long term coursework,
    Salihah central offers 3 tiers to provide for women of all schedules.
  </p>

<br/>

<br/>

<center>

<div id="flyer_bg" style={{width: "95vw", height: "50vh"}}>
  <a href="../seerah_class"><img style={{display: "inline-block", width: "45vw", height: "50vh", padding: "1vh"}}src={seerah_class}></img></a>
  <a href="../convert_circle"><img style={{display: "inline-block", width: "45vw", height: "50vh", padding: "1vh"}}src={convert_circle}></img></a>
</div>

</center>

</div>
)

export default halaqas
