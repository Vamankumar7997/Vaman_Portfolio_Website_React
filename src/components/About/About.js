import React from "react";
import "./About.css";
import ProfilePic from "../../Image/a.jpg";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

const About = () => {
  return (
    <div className="container about-section" id="about">
      <div className="row">
        <Fade bottom>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="about-image">
              <img src={ProfilePic} alt="Profile Pic" />
            </div>
          </div>
        </Fade>

        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-details">
            <Flip left>
              <div className="about-title">
                <h5>About Me</h5>
                <span className="line"></span>
              </div>
            </Flip>

            <Fade right>
              <p>
                A self-driven individual who is good at problem-solving and programming, with an emphasis on
                writing clean and maintainable code. Experienced with data structures/algorithms and designing
                optimal solutions, aspiring to make a career in software engineering with a focus on full-stack
                development.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;