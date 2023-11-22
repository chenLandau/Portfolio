import React from "react";
import "./skills.css";
import SingleSkill from "./SingleSkill";
import { skills } from "../data";
const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="t-1">Technology Stack</h2>
      <div className="skills-container">
        {skills.map((skill) => {
          console.log(skill);
          return <SingleSkill key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};

export default Skills;
