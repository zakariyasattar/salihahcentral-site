import React from "react";

const Events = () => (
<section id="events">
  <link href="https://fonts.googleapis.com/css?family=Rubik" rel="stylesheet"/> 
  <h1>Events</h1>

  <div class="slideshow-container">

<div class="mySlides fade">
  <div class="numbertext">1 / 3</div>
  <img src="monkey.jpg" />
  <div class="text">Caption Text</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">2 / 3</div>
  <img src="img_snow_wide.jpg" />
  <div class="text">Caption Two</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">3 / 3</div>
  <img src="img_mountains_wide.jpg" />
  <div class="text">Caption Three</div>
</div>

</div>
<br/>

<div>
  <span class="dot"></span> 
  <span class="dot"></span> 
  <span class="dot"></span> 
</div>


</section>
);

export default Events;
