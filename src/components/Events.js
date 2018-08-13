import React from "react";

import Event02 from "../assets/images/onlineilmprogram.JPEG";
import Event03 from "../assets/images/sundayschool.jpg";
<link href="https://fonts.googleapis.com/css?family=Rubik" rel="stylesheet"/>

const Events = () => (
<section id="events"> 
  <h1>Events</h1>
  <div class="header-bar waypoint" ></div>
  <a href="https://docs.google.com/document/d/1W4b_Qkd0y-0HGBvGGJ-86mUZIreNl6yQUIxPUm_V6xA/edit#heading=h.gjdgxs" target="_blank"><img className="event" src={Event02} alt="" /></a>
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSeU5GgUTsAZskWq_qRN8DzEtK8eKeaK6YB_BEDb5RqT54uqjw/viewform?c=0&w=1" target="_blank"><img className="event" src={Event03} alt="" /></a>


</section>
);

export default Events;