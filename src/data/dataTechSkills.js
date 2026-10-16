import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiCodeigniter,
  SiCsharp,
  SiPostgresql,
  SiMicrosoftsqlserver,
  SiGithub,
  SiOpenai,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

export const skillCategories = [
  "Frontend",
  "Backend & Desktop",
  "Databases",
  "Tools & AI",
];

export const myTechSkills = [
  { id: 1, icon: SiHtml5, color: "#E34F26", title: "HTML", category: "Frontend", status: "Intermediate" },
  { id: 2, icon: SiCss3, color: "#1572B6", title: "CSS", category: "Frontend", status: "Intermediate" },
  { id: 3, icon: SiJavascript, color: "#F7DF1E", title: "JavaScript", category: "Frontend", status: "Intermediate" },
  { id: 4, icon: SiReact, color: "#61DAFB", title: "React", category: "Frontend", status: "Intermediate" },
  { id: 5, icon: SiTailwindcss, color: "#06B6D4", title: "Tailwind CSS", category: "Frontend", status: "Intermediate" },
  { id: 6, icon: SiBootstrap, color: "#7952B3", title: "Bootstrap", category: "Frontend", status: "Intermediate" },

  { id: 7, icon: SiNodedotjs, color: "#5FA04E", title: "Node.js", category: "Backend & Desktop", status: "Beginner" },
  { id: 8, icon: SiExpress, color: "#FFFFFF", title: "Express.js", category: "Backend & Desktop", status: "Intermediate" },
  { id: 9, icon: SiPhp, color: "#8892BF", title: "PHP", category: "Backend & Desktop", status: "Beginner" },
  { id: 10, icon: SiCodeigniter, color: "#EF4223", title: "CodeIgniter", category: "Backend & Desktop", status: "Beginner" },
  { id: 11, icon: SiCsharp, color: "#9B4F96", title: "C#", category: "Backend & Desktop", status: "Intermediate" },
  { id: 12, icon: FaJava, color: "#F89820", title: "Java", category: "Backend & Desktop", status: "Beginner" },

  { id: 13, icon: SiPostgresql, color: "#4169E1", title: "PostgreSQL", category: "Databases", status: "Intermediate" },
  { id: 14, icon: SiMicrosoftsqlserver, color: "#CC2927", title: "SQL Server (SSMS)", category: "Databases", status: "Intermediate" },

  { id: 15, icon: SiGithub, color: "#FFFFFF", title: "Git & GitHub", category: "Tools & AI", status: "Intermediate" },
  { id: 16, icon: HiSparkles, color: "#D97757", title: "Claude AI", category: "Tools & AI", status: "Intermediate" },
  { id: 17, icon: SiOpenai, color: "#FFFFFF", title: "ChatGPT", category: "Tools & AI", status: "Intermediate" },
];
