import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaGithub,
} from "react-icons/fa";

import {
  SiTypescript,
  SiC,
  SiCplusplus,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiMysql,
  SiBootstrap,
  SiPython,
} from "react-icons/si";

export const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-300" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
  { name: "Python", icon: <SiPython className="text-blue-500" /> },
  { name: "C", icon: <SiC className="text-blue-500" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-300" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-indigo-700" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "Git", icon: <FaGit className="text-red-500" /> },
];
