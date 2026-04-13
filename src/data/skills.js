import {
  faCode,
  faPalette,
  faServer,
  faTools,
} from "@fortawesome/free-solid-svg-icons";

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: faCode,
    skills: [
      { name: "HTML5 & CSS3", level: 95 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "React.js", level: 90 },
      // { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Next.js", level: 80 },
      { name: "Redux", level: 75 },
      // { name: "Vue.js", level: 70 },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: faServer,
    skills: [
      // { name: "Node.js", level: 85 },
      // { name: "Express.js", level: 85 },
      // { name: "MongoDB", level: 80 },
      // { name: "PostgreSQL", level: 75 },
      // { name: "REST APIs", level: 90 },
      // { name: "GraphQL", level: 70 },
      { name: "Firebase", level: 80 },
      { name: "Supabase", level: 80 },
    ],
  },
  // {
  //   id: "design",
  //   title: "Design & UI/UX",
  //   icon: faPalette,
  //   skills: [
  //     { name: "Figma", level: 85 },
  //     { name: "Adobe XD", level: 75 },
  //     { name: "UI Design", level: 80 },
  //     { name: "Responsive Design", level: 95 },
  //     { name: "Prototyping", level: 80 },
  //     { name: "Wireframing", level: 85 },
  //   ],
  // },
  {
    id: "tools",
    title: "Tools & Workflow",
    icon: faTools,
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "NPM/Yarn", level: 85 },
      // { name: "Webpack", level: 75 },
      // { name: "Docker", level: 70 },
      // { name: "CI/CD", level: 70 },
      // { name: "Agile/Scrum", level: 80 },
    ],
  },
];
