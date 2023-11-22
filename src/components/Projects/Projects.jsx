import React from "react";
import "./projects.css";
import { projects } from "../data";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  return (
    <section id="projects" className="project-section">
      <h1 className="t-1">My Projects</h1>
      <div className="projects-container">
        {projects.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
