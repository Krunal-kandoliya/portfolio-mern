import React from "react";
import "../About/About.css";
import Jump from "react-reveal/Jump";
import profile from "../../../profile.jpeg";

const About = () => {
  return (
    <>
    <Jump>
      <div className="about" id="about" >
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img ">
            <img src={profile} alt="profile-pic" />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content ">
            <h1>About ME</h1>
            <p>
              The <strong>MERN</strong> stack has become extremely popular and used extensively
              in recent years, as many modern-day applications are now devised
              in JavaScript. Generally, MERN stack developers are responsible
              for front-end web architecture and crafting interactive consumer
              data from many systems.
              <p>
                A MERN Stack Developer is responsible for designing, developing,
                and maintaining web applications using the MERN technology
                stack. Their role includes both frontend and backend
                development, ensuring seamless performance and optimal user
                experience.
              </p>
            </p>
          </div>
        </div>
      </div>
      </Jump>
    </>
  );
};

export default About;
