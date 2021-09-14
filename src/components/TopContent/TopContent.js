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
          href="https://doc-0c-3s-docs.googleusercontent.com/docs/securesc/7f30l5866mkqacm2msppsn2qqeq63tlk/3s4evdq5cfvm7guonk5r5fd727vl6hd0/1631612625000/08124396825101469741/08124396825101469741/1umT1wjDQssoE2HLI0WFoq6YmE6iokFN8?e=download&authuser=0&nonce=akc8mn956v4ck&user=08124396825101469741&hash=ao3avqsgndr19be8rdqstr49bh870edr"
          target="_blank"
         
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
