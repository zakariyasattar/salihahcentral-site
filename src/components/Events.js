import React from "react";

import Event01 from "../assets/images/workshop.png";
// <link href="https://fonts.googleapis.com/css?family=Rubik" rel="stylesheet"/>

const Events = () => (
<section id="events">
  <h1>Events</h1>

  <center><span style={{color: 'black'}}>Click on event flyer to register</span></center>
  <div class="header-bar waypoint" ></div>
  <a href="https://bit.ly/preramadanevent" target="_blank"><img className="event" src={Event01} alt="" /></a>


</section>
); export default Events;
