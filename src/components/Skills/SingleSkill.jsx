import React from "react";
import { skills } from "../data";
import { motion } from "framer-motion";
const SingleSkill = ({ logo, name }) => {
  return (
    <motion.div
      whileHover={{ rotateY: 180, rotateX: 180 }}
      transition={{ duration: 0.3 }}
      className="skill-container"
    >
      <motion.div className="front-img-container">
        <img src={logo} alt="" className="skill-img" />
      </motion.div>
      <motion.div className="back-text-container">
        <p className="text">{name}</p>
      </motion.div>
    </motion.div>
  );
};

export default SingleSkill;
