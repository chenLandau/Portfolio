import React, { useState } from "react";
import { FaLink, FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";
const cardVariant = {
  whileHover: {
    scale: 1.1, // Adjust the rotation angle as needed
    transition: { duration: 0.2 },
  },
};
const childVariant = {
  initial: {
    rotate: 12, // Initial rotation
  },
  whileHover: {
    rotate: 0, // Adjust the rotation angle as needed
    transition: { duration: 0.2 },
  },
};
const ProjectCard = ({
  name,
  img,
  description,
  Technologies,
  gitURL,
  liveDemo,
  link,
}) => {
  const [isShowInfo, setIsShowInfo] = useState(false);
  return (
    <motion.section
      variants={cardVariant}
      whileHover="whileHover"
      className="project-container"
      onHoverStart={() => setIsShowInfo(true)}
      onHoverEnd={() => setIsShowInfo(false)}
      onClick={() => setIsShowInfo(true)}
    >
      <img src={img} className="project-img" />
      <motion.div
        className="project-info-container"
        initial={{ opacity: 0, y: 50 }}
        animate={isShowInfo ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      >
        <header className="project-header">
          <h2 className="t-2">{name}</h2>
          <div className="linksContainer">
            <motion.a
              whileHover={{ scale: 1.3 }}
              href={gitURL}
              className="a-link"
            >
              <FaGithub />
            </motion.a>
            <motion.a whileHover={{ scale: 1.3 }} className="a-link">
              <FaLink />
            </motion.a>
          </div>
        </header>
        <p>{description}</p>
        <div className="technology-container">
          {Technologies.map((skill) => {
            return <div className="single-tech">{skill}</div>;
          })}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ProjectCard;
