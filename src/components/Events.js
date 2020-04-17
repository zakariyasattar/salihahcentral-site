import React from "react";

import Event01 from "../assets/images/goal_setting.jpg";
import Event02 from "../assets/images/programs/ashrtalks.jpg";
// <link href="https://fonts.googleapis.com/css?family=Rubik" rel="stylesheet"/>

const Events = () => (
<section id="events">
  <h1>Events</h1>

  <center><span style={{color: 'black'}}>Click on event flyer to register</span></center>
  <div class="header-bar waypoint" ></div>
  <a href="https://bit.ly/Salihahcentral" target="_blank"><img className="event" src={Event01} alt="" /></a>
  <a href="https://bit.ly/Salihahcentral" target="_blank"><img className="event" src={Event02} alt="" /></a>


</section>
); export default Events;
