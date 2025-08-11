import React from "react";
import Banner from "./Banner";
import About from "../About/About";
import Skills from "../Skills/Skills";
import ProjectsSection from "../ProjectsSection/ProjectsSection";
import ContactSection from "../ContactSection/ContactSection";

const Home = () => {
  return (
    <div id="home">
      <Banner />
      <section id="about">
        <About/>
      </section>
      <section id="skills">
        <Skills/>
      </section>
      <section id="projects">
        <ProjectsSection/>
      </section>
      <section id="contact">
        <ContactSection/>
      </section>
    </div>
  );
};

export default Home;
