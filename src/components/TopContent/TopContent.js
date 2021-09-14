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
          href="https://doc-0s-3s-docs.googleusercontent.com/docs/securesc/7f30l5866mkqacm2msppsn2qqeq63tlk/pedb1k9em2sr5ok6kqgkjvmu55vn5mk7/1631601825000/08124396825101469741/08124396825101469741/1WSWp4s_-gi2eTUNv7DYYWuPZflUz63pu?e=download&authuser=0&nonce=mbgv54id6hrci&user=08124396825101469741&hash=madcfn9jtngkvdj4dvltcn0a9vlocnvu"
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
