import React from "react";
import "./ProjectContainer.css";
import { Element } from "react-scroll";
import Projects from "../Projects/Projects";

const ProjectContainer = () => {
  const projects = [
    {
      img: "https://d33byq9npfy6u9.cloudfront.net/4/u/original/8981167/amazon-1200x537.png",
      title: "Amazon Clone",
      
      link: "https://amazonclonechallenge.netlify.app",
    },
    {
      img: "https://free4kwallpapers.com/uploads/originals/2015/09/23/naruto-shippuden-wallpaper-hd-1080p.jpg",
      title: "Naruto Api",
    
      link: "https://github.com/yokeshraj98/",
    },
    // {
    //   img: "https://i.pinimg.com/originals/ab/9b/e2/ab9be22f544ea4601385e11069f3babb.jpg",
    //   title: "google",
    //   description: "Lorem is",
    //   link: "https://www.google.com/",
    // },
    // {
    //   img: "https://i.pinimg.com/originals/ab/9b/e2/ab9be22f544ea4601385e11069f3babb.jpg",
    //   title: "google",
    //   description: "Lorem is",
    //   link: "https://www.google.com/www.google.com",
    // },
    // {
    //   img: "https://i.pinimg.com/originals/ab/9b/e2/ab9be22f544ea4601385e11069f3babb.jpg",
    //   title: "google",
    //   description: "Lorem is",
    //   link: "https://www.google.com/",
    // },
    // {
    //   img: "https://i.pinimg.com/originals/ab/9b/e2/ab9be22f544ea4601385e11069f3babb.jpg",
    //   title: "google",
    //   description: "Lorem is",
    //   link: "https://www.google.com/",
    // },
    // {
    //   img: "https://i.pinimg.com/originals/ab/9b/e2/ab9be22f544ea4601385e11069f3babb.jpg",
    //   title: "google",
    //   description: "Lorem is",
    //   link: "https://www.google.com/",
    // },
  ];
  return (
    <Element className="projectContainer" name="projects">
      <h1>Projects</h1>
      
      <div className="projectContainer__projects">
        {projects.map((project, index) => {
          return (
            <Projects
              key={index}
              img={project.img}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          );
        })}
      </div>
    </Element>
  );
};

export default ProjectContainer;
