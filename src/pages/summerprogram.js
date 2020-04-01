import React from "react";
import Slider from "react-slick";
import Testimonials from "../components/Comments";

const Summer = () => (
  <div>
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
          Camp Busy Bees Summer Propgram (Summer 2019)

        </h1>

      </div>
      <a href="/#communityprograms"><tab1><button>Go Back To The Homepage</button></tab1></a>
  </div>
  <p>Salihah Central is excited to announce that registration for the Weekend Bees Sunday School<br/> is now open for the 2018-2019 academic year!</p>
  <br/>
  <p>
  Featuring a well-rounded Islamic Studies curriculum and progressive teaching methods, this program is designed for Muslim youth entering Pre-K through 8th grades. Field trips, projects, and healthy engagement with peers bring the curriculum to life and leave students with a strong Muslim identity. Our curriculum includes Quranic memorization, Arabic, Islamic history, Hadith, and Sunnah.
  </p>
  <br/>
  <p>Weekend Bees classes are held on Sundays from 10:00am to 1:00pm at IQRA International Educational Foundation located at 7450 Skokie Blvd, Skokie, IL 60077. Classes begin in September and generally follow the regular school calendar.
The fee for the full academic year is $400 per child. All student fees are used to pay for the space, materials and supplies needed to run the Weekend Bees program. Salihah Central subsidizes the costs of the program as needed and does not make any profit from student fees. </p>
<br/>
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSeI6rG5Yd8ESHxNgrVHQp20oZMlLA8zKNkDj0Ro2pgVryL3Iw/viewform?c=0&w=1"><tab1></tab1><button>Register Now!</button></a><tab6></tab6>
  <span>If you have any further questions, please email <a href="mailto:salihah.central@gmail.com">us</a>.</span>
<br/>
<br/>
  <h3><tab1></tab1>What Some People Say About Our Program:</h3>

  <Testimonials/>
  
 </div>
);

export default Summer
