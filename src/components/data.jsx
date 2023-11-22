import { nanoid } from "nanoid";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import java from "../assets/Skills/icons8-java.svg";
import javaScript from "../assets/Skills/icons8-javascript.svg";
import nodeJs from "../assets/Skills/icons8-nodejs.svg";
import c from "../assets/Skills/icons8-c.svg";
import html from "../assets/Skills/icons8-html.svg";
import css from "../assets/Skills/icons8-css.svg";
import react from "../assets/Skills/icons8-react.png";
import express from "../assets/Skills/icons8-express-js.svg";
import redux from "../assets/Skills/icons8-redux.svg";
import mongo from "../assets/Skills/icons8-mongodb.png";
import sceneBuilder from "../assets/Skills/icons8-scene-builder.svg";
import cpp from "../assets/Skills/icons8-cpp.svg";
import framer from "../assets/Skills/icons8-framer.png";
import github from "../assets/Skills/icons8-github.svg";
import git from "../assets/Skills/icons8-git.svg";
import { BiCodeBlock } from "react-icons/bi";
import { GrServices } from "react-icons/gr";
import cloudFit from "../assets/Projects/cloudFit.png";
import enigmaCracking from "../assets/Projects/enigma_cracking.jpeg";
import threadsClone from "../assets/Projects/threadsClone.png";

export const navLinks = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#projects", text: "projects" },
  { id: nanoid(), href: "#contact", text: "contact" },
];
export const socialLinks = [
  {
    id: nanoid(),
    url: "https://www.linkedin.com/in/chen-landau20/",
    icon: <BsLinkedin />,
  },
  {
    id: nanoid(),
    url: "https://github.com/chenLandau?tab=repositories",
    icon: <BsGithub />,
  },
];
export const skills = [
  { id: nanoid(), logo: java, name: "Java" },
  { id: nanoid(), logo: javaScript, name: "JavaScript" },
  { id: nanoid(), logo: nodeJs, name: "NodeJs" },
  { id: nanoid(), logo: express, name: "ExpressJs" },
  { id: nanoid(), logo: react, name: "ReactJs" },
  { id: nanoid(), logo: redux, name: "Redux" },
  { id: nanoid(), logo: framer, name: "Framer Motion" },
  { id: nanoid(), logo: mongo, name: "MongoDB" },
  { id: nanoid(), logo: css, name: "CSS" },
  { id: nanoid(), logo: html, name: "HTML" },
  { id: nanoid(), logo: c, name: "C#" },
  { id: nanoid(), logo: cpp, name: "C++" },
  { id: nanoid(), logo: github, name: "GitHub" },
  { id: nanoid(), logo: git, name: "Git" },
  { id: nanoid(), logo: sceneBuilder, name: "SceneBuilder" },
];
export const services = [
  {
    id: nanoid(),
    icon: <BiCodeBlock className="service-icon" />,
    title: "Frontend Developer",
  },
  {
    id: nanoid(),
    icon: <GrServices className="service-icon" />,
    title: "Backend Developer",
  },
  // { id: nanoid(), icon: backIcon, title: "Backend Developer" },
];
export const projects = [
  {
    id: nanoid(),
    name: "CloudFit",
    img: cloudFit,
    description:
      "Cloud Provider Selection Web Application. Conducted a comprehensive performance analysis of three major cloud providers by executing stress tests on virtual machines and extracting performance data through their REST APIs.",
    Technologies: ["C#", "ReactJs", "MongoDB", "AWS", "Azure", "GCP"],
    gitURL: "https://github.com/chenLandau/CloudFit",
    liveDemo: "",
    link: "",
  },
  {
    id: nanoid(),
    name: "Cracking The Enigma",
    img: enigmaCracking,
    description:
      "Developed a client server Java based Enigma machine. Emphasizing multithreading expertise including thread pool management, internal blocking queue handling, and threads synchronization. Using third party tools such as GSON and OKHTTP",
    Technologies: ["Java", "JavaFX", "CSS", "Json", "OKHTTP"],
    gitURL: "https://github.com/chenLandau/CrackingTheEnigma",
    liveDemo: "",
    link: "",
  },
  {
    id: nanoid(),
    name: "Threads Clone",
    img: threadsClone,
    description:
      "Threads Clone is a social media platform inspired by Threads (By meta). It provides users with a dynamic and immersive environment to connect with friends, share moments, and express their thoughts.",
    Technologies: [
      "NodeJS",
      "Express",
      "MongoDB",
      "Mongoose",
      "ReactJS",
      "CSS",
      "Cloudinary",
    ],
    gitURL: "https://github.com/chenLandau/Threads-clone",
    liveDemo: "",
    link: "",
  },
];
