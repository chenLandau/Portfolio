import React from "react";
import "./about.css";
import { motion } from "framer-motion";
import { services } from "../data";
import ServiceCard from "./ServiceCard";
const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text-container">
          <motion.div className="title-container">
            <motion.h2 className="t-2">
              <span className="dash">——</span>About Me
            </motion.h2>
            <motion.h1 className="t-1">Who Am I</motion.h1>
          </motion.div>
          <p className="about-text">
            Hi There, I'm Chen
            <br /> A dedicated software developer with passion for technology,
            problem solving , and creating functional and efficient code.
            <br /> I bring strong communication skills to the table, Known for
            maintaining a high level of motivation and ownership in every role.
            I learn and apply languages and technologies quickly.
          </p>
        </div>
        <div className="services-container">
          {services.map((service) => {
            return <ServiceCard key={service.id} {...service} />;
          })}
        </div>
      </div>
      <button className="explore-btn btn">explore my projects</button>
    </section>
  );
};

export default About;
