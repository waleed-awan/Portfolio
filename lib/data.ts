import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Autopscale from "../public/autopscale.png";
import Japanese from "../public/japanese.png";
import Onix from "../public/onix.png";
import wishtender from "../public/wishtender.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Auto upscale",
    description:
      "Auto Upscale - Your destination for seamless website enhancement and expansion.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: Autopscale,
    lnk: "https://autoupscale.com/",
  },
  {
    title: "Liberty Japan",
    description:
      "Discover the essence of Japanese culture and lifestyle with Liberty Japan's engaging website.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: Japanese,
    lnk: "https://www.liberty-japan.co.jp/specialcontent/",
  },
  {
    title: "Onix",
    description:
      "Introducing Onix: Your gateway to a seamless online experience, where innovation meets simplicity.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: Onix,
    lnk: "https://onix.design/",
  },
  {
    title: "WishTender",
    description:
      "WishTender is your gateway to heartfelt connections, where wishes meet reality in a tapestry of shared dreams and meaningful moments.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wishtender,
    lnk: "https://www.wishtender.com/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
