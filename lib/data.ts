import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Polytechnic Diploma in Computer Science",
    location: "Delhi, India",
    description:
      "I after Completing my diploma. I developed social networking Web-App using .Net in my majo r project",
    icon: React.createElement(LuGraduationCap),
    date: "2015",
  },
  {
    title: "ASP.NET Developer",
    location: "Petrygon Technologies, Delhi",
    description:
      "I worked as a web developer developer for 3 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2015 - 2018",
  },
  {
    title: "Full-Stack Developer (IT professional)",
    location: "ICAR-Indian Agricultural Statistics Research Institute, Delhi",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Virtual Employee, Noida",
    description:
      "I'm now a full-stack developer working australian product based company(StockInStore). My stack includes React, .NET Core, Windows Services, TypeScript, Bootstrap, and SQL.",
    icon: React.createElement(FaReact),
    date: "2021 - 2022",
  },
  {
    title: "Senior Full-Stack Developer",
    location: "Coforge Ltd, Noida",
    description:
      "I'm now a Senior Software developer working with indian based MNC. My stack includes React, Next.js, .NET Core, TypeScript, Tailwind, PrismaDB, Azure, Redis, SQL, CosmosDB and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
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
