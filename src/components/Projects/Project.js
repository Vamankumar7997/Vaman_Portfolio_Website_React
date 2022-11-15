import React from "react";
import ProjectList from "./ProjectList";
import "./Project.css";

const Project = () => {
  const data = [
    {
      name: "Photo Sharing App",
      des: "Built a photo-sharing application where users can create, like, and share their posts.Built the backend using NodeJS to serve the APIs. Connected the frontend to the backend using fetch API to get and post the data ",
      projectlink: " https://github.com/Vamankumar7997/instaclone-project",
      techused: [
        {
          techname: "Node Js",
        },
        {
          techname: "Expres Js",
        },
        {
          techname: "React Js",
        },
        {
          techname: "MongoDB",
        },
        {
          techname: "HTML",
        },
        {
          techname: "CSS",
        },
      ],
    },

    {
      name: "Sign Up Page",
      des: "Built the sign-up page application using JavaScript functions and Worked on the database schema design for mongoose ",
      projectlink: "https://github.com/Vamankumar7997/Signup-page-using-MERN",
      techused: [
        {
          techname: "React Js",
        },
        {
          techname: "Expres Js",
        },
        {
          techname: "Node Js",
        },
        {
          techname: "MongoDB",
        },
      ],
    },

    {
      name: "Weather Application using React",
      des: "Worked on React and JavaScript to create Weather application. Worked on life cycle hooks and fetch API to get the data to render on the front end. ",
      projectlink: " https://github.com/Vamankumar7997/React-weather-application",
      techused: [
        {
          techname: "React Js",
        },
        {
          techname: "JavaScript",
        },
        {
          techname: "HTML",
        },
        {
          techname: "CSS",
        },
      ],
    },

    {
      name: "Creating data pages using React",
      des: "Creating multiple objects to render on the document using React and JSX. ",
      projectlink: "https://github.com/Vamankumar7997/React_Assignments/pull/4",
      techused: [
        {
          techname: "React Js",
        },
        {
          techname: "API's",
        },
        {
          techname: "Javascript",
        },
        {
          techname: "CSS",
        },
      ],
    },
    
    {
      name: "Todo App",
      des: "Use JavaScript to add todos and delete them on click. It fetches Todo items from an actual API using the GET HTTP method. ",
      projectlink: "https://github.com/Vamankumar7997/Javascript-Assignments/pull/9",
      techused: [
        {
          techname: "Javascript",
        },
        {
          techname: "HTML",
        },
        {
          techname: "CSS",
        },
        {
          techname: "API's",
        },
      ],
    },

  ];

  return (
    <div className="container" id="project">
      <div className="section-title">
        <h5>Projects</h5>
        <span className="line"></span>
      </div>

      <div className="row">
        {data.map((item, index) => (
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={index}>

            <ProjectList  {...item} />
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
