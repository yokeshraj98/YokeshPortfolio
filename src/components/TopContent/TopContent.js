import React from "react";
import { Link } from "react-scroll";
import "./TopContent.css";

const TopContent = () => {
  return (
    <div className="topContent">
      <div className="topContent__container">
        <h1>Mr.Yokeshwar Raj</h1>
        <p>A Professional Full Stack Developer</p>
        <a
          href="https://doc-0c-3s-docs.googleusercontent.com/docs/securesc/7f30l5866mkqacm2msppsn2qqeq63tlk/8tn1nr9m30742q82c1hr362i7bkmmaeb/1631616450000/08124396825101469741/08124396825101469741/1gYBEShJDonfpYbdWzO05PBIWFR1TyOYu?e=download&authuser=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="topContent__download">DOWNLOAD CV</button>
        </a>
        <Link to="projects" smooth={true} duration={500}>
          <button className="topContent__work">My work</button>
        </Link>
      </div>
    </div>
  );
};

export default TopContent;
