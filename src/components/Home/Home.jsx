import "./home.css";
import React from "react";
import { motion } from "framer-motion";
import { socialLinks } from "../data";
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1 },
  },
};
const textVariants2 = {
  initial: {
    x: 1000,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1 },
  },
};
const circleOneVariants = {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: [0, 1.2, 1], opacity: 1, transition: { duration: 1 } },
};
const circleTwoVariants = {
  initial: { scale: 0, opacity: 0 },
  animate: {
    scale: [0, 1.7, 1],
    opacity: 1,
    transition: { duration: 1.5 },
  },
};
const circleImgVariants = {
  initial: { scale: 0 },
  animate: { scale: 1, transition: { duration: 1 } },
};
const sliderVariants = {
  initial: {
    x: "50%",
  },
  animate: {
    x: "-100%",
    transition: { repeat: Infinity, repeatType: "loop", duration: 20 },
  },
};
const Home = () => {
  return (
    <section id="home" className="home-section">
      <motion.div
        className="text-container"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        <motion.h2 variants={textVariants} className="title-1">
          CHEN LANDAU
        </motion.h2>
        <motion.h1 variants={textVariants2} className="title-2">
          Software Developer
        </motion.h1>
        <motion.div variants={textVariants} className="btn-container">
          <button className="btn cv-btn">Download CV</button>
          <button className="btn contact-btn">Hire Me</button>
        </motion.div>
        <motion.div variants={textVariants2} className="social-links-container">
          {socialLinks.map((link) => {
            const { id, url, icon } = link;
            return (
              <a key={id} href={url} className="link">
                {icon}
              </a>
            );
          })}
        </motion.div>
      </motion.div>
      <motion.div
        className="circle-border-1"
        initial="initial"
        animate="animate"
        variants={circleOneVariants}
      >
        <motion.div variants={circleTwoVariants} className="circle-border-2">
          <motion.img
            variants={circleImgVariants}
            src="homePic.jpeg"
            alt=""
            className="circle-img"
          />
        </motion.div>
      </motion.div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Software Developer
      </motion.div>
    </section>
  );
};

export default Home;
