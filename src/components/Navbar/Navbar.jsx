import React, { useState } from "react";
import { navLinks } from "../data";
import { FaBars } from "react-icons/fa";
import { MdHexagon } from "react-icons/md";

import "./navbar.css";
import { motion } from "framer-motion";
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-center">
        <div className="nav-header">
          <span className="logo">
            <h1 className="l-1">{`</> Chen`}</h1>
            <h2 className="l-2">Landau</h2>
          </span>
          <button className="menu-btn" onClick={() => setShowLinks(!showLinks)}>
            <div className="hexagon-icon">
              <MdHexagon />
              <div className="hexagon-text">{showLinks ? "Close" : "Menu"}</div>
            </div>
          </button>
        </div>
        <div
          className={
            showLinks ? "links-container show-container" : "links-container"
          }
        >
          {navLinks.map((link) => {
            const { id, href, text } = link;
            return (
              <a key={id} href={href} onClick={() => setShowLinks(false)}>
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
};
export default Navbar;
