import React from "react";
import "./WorkExperience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { MdGroupWork } from "react-icons/md";

const WorkExperience = () => {
  const data = [
    {
      companyname: "AppIncubator Technologies",
      position: "Front End Developer",
      des:
        "Here my main focus was to create the landing page for one of the web application which is similar to Healthify me application and to create in a responsive way for all the big and small screens.",
      year: "Sep: 2022- Apr: 2023",

      techskills: [
        {
          techname: "HTML",
        },
        {
          techname: "CSS",
        },
        {
          techname: "React.Js",
        },
        {
          techname: "Bootstrap",
        },
      ],
    },

    {
      companyname: "Solar Secure Solutions",
      position: "Full Stack Developer",
      des:
        "Here I worked as a full stack developer as a intern in various web technologies in real world projects.",
      year: "Jul: 2022- Aug: 2022",

      techskills: [
        {
          techname: "Node JS",
        },
        {
          techname: "HTML",
        },
        {
          techname: "CSS",
        },
        {
          techname: "JavaScript",
        },
      ],
    },

    {
      companyname: "TCS",
      position: "Software Engineer",
      des:
        "Here I worked on multiple projects as a team member in relevant technologies like HTML, CSS mostly. And the projects are mainly based on the UI part. ",
      year: "Jan: 2021- June: 2022",
      techskills: [
        {
          techname: "HTML",
        },
        {
          techname: "CSS",
        },
        {
          techname: "JavaScript",
        },
        {
          techname: "Bootstrap",
        },
      ],
    },
  ];

  const colors = ["#800000", "#FF8042", "#001CCE"];

  return (
    <div className="container workexperience-section" id="workexperience">
      <div className="section-title">
        <h5>Work Experience</h5>
        <span className="line"></span>
      </div>

      <div className="timeline-section">
        <VerticalTimeline lineColor="#FF1042">
          {data.map((item, index) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: colors[index], color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #FFBB24" }}
              date={item.year}
              dateClassName="date-class"
              iconStyle={{ background: colors[index], color: "#fff" }}
              icon={<MdGroupWork />}
            >
              <h3 className="vertical-timeline-element-title">
                {item.companyname}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {item.position}
              </h4>

              <div className="row">
                {item.techskills.map((tec, index) => (
                  <div
                    className="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                    key={index}
                  >
                    <div className="tech-skills">
                      <p>{tec.techname}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p>{item.des}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default WorkExperience;
