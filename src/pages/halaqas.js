import React from 'react'
import Link from 'gatsby-link'

import seerah_class from "../assets/images/programs/Seerah_class.jpg";
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
    <a href="/#communityprograms"><tab1><button>Go Back To The Homepage</button></tab1></a>
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

<img style={{display: "inline-block", width: "45vw", height: "50vh", padding: "35px"}}src={seerah_class}></img>

<div style={{float: "right", display: "inline-block", width: "50vw", paddingTop: "35px"}}>
  <span style={{color: "white", fontSize: "15px", position: "relative"}}>Seerah Class</span>
  <br/>
  Salihah Central strives to teach the seerah to women in order to remove any doubt concerning his authenticity, instill and strengthen the love of Prophet Muhammad (S) in the hearts of Muslims, to gain insight into pragmatic Islam, to strengthen the love of the companions in one's heart, and to unlock the wealth of knowledge there is regarding this topic.
  Allah has commanded us to know the Prophet Muhammad and what better way to do this than to study seerah under qualified teachers. Studying seerah is an obligation that has put upon us as stated in the Holy Quran and Hadith:,
  Indeed in the Messenger of Allah (Muhammad SAW) you have a good example to follow for him who hopes in (the Meeting with) Allah and the Last Day and remembers Allah much. Qur’an [33:21]
  Anas ibn Malik reported: The Messenger of Allah, peace and blessings be upon him, said, “None of you have faith until I am more beloved to him than his children, his father, and all of the people.”
  <tab1>(Source: Ṣaḥīḥ al-Bukhārī 15, Ṣaḥīḥ Muslim 44)</tab1>
  <tab1></tab1>Information on this class is available through the sacredlearning.org or by emailing salihah.central@gmail.com.
</div>

<img style={{display: "inline-block", width: "45vw", height: "50vh", padding: "35px"}}src={convert_circle}></img>

<div style={{float: "right", display: "inline-block", width: "50vw", paddingTop: "35px"}}>
  <span style={{color: "white", fontSize: "15px", position: "relative"}}>Convert Circle</span>
  <br/>
  Convert Circle is a place where participants new to Islam can find a safe and comfortable space to ask questions, learn basics, get support, and act as a connector to others that
share the same experiences.  It's not easy taking on a new way of life; it's exciting, but with so much unknown, it's hard to know where to begin.  With Convert Circle, we can
eliminate a lot of the uncertainty and replace it with practical answers that are easy and make sense. Answers that address the unique challenges converts face in integrating
Islam into their daily life are addressed.  We understand that it takes a community to support those who chose Islam and we want to be that community. Furthermore, detailed
sessions on various aspects of faith provide knowledge to the growing Muslim find strength and passion in their lives while living Islam.  
</div>


</div>
)

export default halaqas
