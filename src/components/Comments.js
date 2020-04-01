import React from "react";
import Slider from "react-slick";

const settings = {
  // dots: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  slideToShow: 1,
  slideToScroll: 1,
  swipeToSlide: true
};

const Testimonials = () => (
  <section id="testimonials">
    <div className="text-container">
      <div className="row">
        <div className="two columns header-col" />
        <div className="ten columns">
          <h1>Testimonials</h1>
          <ul>
            <Slider {...settings}>
              <li>
                <blockquote>
                  <p>
                  My dedication to Camp Busy Bees is 
                  because of the excellent structure 
                  and curriculum that you (the director) 
                  and your team have developed and continue
                  to improve and expand every year. MashaAllah
                  </p>
                  <cite>Saima Mozaffar, Teacher, (AIA, Frankfort)</cite>
                </blockquote>
              </li>
              <li>
                <blockquote>
                  <p>
                  I really enjoyed Camp Busy Bees.  Everything we learned was useable in our daily lives.  The 
                  teachers and volunteers worked hard to make sure we benefited as much as possible from the program.  
                  I would definitely recommend this program.  This was an excellent experience which I will never forget.
                  </p>
                  <cite>Taskeen Khan, Student, (MSI, Glendale Heights)</cite>
                </blockquote>
              </li>
              <li>
                <blockquote>
                  <p>
                  This letter is to inform you how productive Camp Busy-Bee was for my daughter Safa Abdur Rehman. 
                  Safa has been attending the camp for many years.  She and I look forward to it each year.
                  Knowledge is provided in a beautiful manner that all ages benefit from.  The teachers are very nice and well experienced.
                  We are once again looking forward to this summer’s camp.  I also feel that the young youth needs to have a good strong muslim 
                  community that will grow with them.  Camp Busy-Bee I feel has that leadership that can guide many girls on the right path.

                  </p>
                  <cite>Sameena  Abdur Rehman, Mother, (MSI, Glendale Heights)</cite>
                </blockquote>
              </li>
              <li>
                <blockquote>
                  <p>
                  I am a huge fan of Camp Busy Bees. My daughter Sara went for 2 years. And this year Insha-Allah I am looking forward to enroll my younger daughter Zaynab too. I was very impressed with the program and the entire staff. They were organized, professional, kind, respectful, nurturing and engaging. Overall it is an excellent program and a wonderful experience for my daughter. It gives her the opportunity to learn a variety of things in an Islamic environment. She thoroughly enjoyed the entire program and one of her favorite was the field trip to a food market and recycle store (going green).
                  It is indeed great having such a stress-free environment in which girls do not have to feel the pressure of performing to someone else’s standards. And may Allah bless you all for all your hard work and for having touched so many lives at Camp Busy Bee. See you again Insha-Allah at Camp Busy Bee 2011.

                  </p>
                  <cite>Dilkash Rajapkar, Mother (MSI, Glendale Heights)</cite>
                </blockquote>
              </li>
            </Slider>
          </ul>
        </div>
        {/* <div className="ten columns flex-container">
          <div className="flexslider">
            <ul className="slides">
              <li>
                <blockquote>
                  <p>
                    Your work is going to fill a large part of your life, and
                    the only way to be truly satisfied is to do what you believe
                    is great work. And the only way to do great work is to love
                    what you do. If you haven't found it yet, keep looking.
                    Don't settle. As with all matters of the heart, you'll know
                    when you find it.
                  </p>
                  <cite>Steve Jobs</cite>
                </blockquote>
              </li>
              <li>
                <blockquote>
                  <p>
                    This is Photoshop's version of Lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                    quis bibendum auctor, nisi elit consequat ipsum, nec
                    sagittis sem nibh id elit. Duis sed odio sit amet nibh
                    vulputate cursus a sit amet mauris.
                  </p>
                  <cite>Mr. Adobe</cite>
                </blockquote>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  </section>
);

export default Testimonials;