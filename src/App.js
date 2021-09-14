import React from "react";
import Header from "./components/Header/Header";
import SkillContainer from "./components/SkillContainer/SkillContainer";
import Topcontainer from "./components/Topcontainer/Topcontainer";
import ProjectContainer from "./components/ProjectContainer/ProjectContainer";
import Contact from "./components/Contact/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Topcontainer />
      <SkillContainer />
      <ProjectContainer />
      <Contact />
    </div>
  );
}

export default App;
