// NAVIGATION ROUTES
export const ROUTES = [
  {
    id: "portfolio",
    title: "Portfolio",
    href: "/",
  },
  {
    id: "about",
    title: "About Me",
    href: "/about",
  },
  {
    id: "contact",
    title: "Contact",
    href: "/contact",
  },
];

// skills list
// export const SKILLS = [
//   {
//     id: "html",
//     // imgPath: <img src={html} alt="html icon" />,
//     link: "/icons/html.svg",
//     title: "html icon",
//   },
//   {
//     id: "css",
//     link: "/icons/css.svg",
//     title: "css icon",
//   },
//   {
//     id: "js",
//     link: "/icons/js.svg",
//     title: "js icon",
//   },
//   {
//     id: "bootstrap",
//     link: "/icons/bootstrap.svg",
//     title: "bootstrap icon",
//   },
//   {
//     id: "tailwindcss",
//     link: "/icons/tailwindcss.svg",
//     title: "tailwindcss icon",
//   },
//   {
//     id: "react",
//     link: "/icons/react.svg",
//     title: "react icon",
//   },
//   {
//     id: "git",
//     link: "/icons/git.svg",
//     title: "git icon",
//   },
//   {
//     id: "github",
//     link: "/icons/github.svg",
//     title: "github icon",
//   },
//   {
//     id: "vscode",
//     link: "icons/vscode.svg",
//     title: "vscode icon",
//   },
//   // {
//   //   id: "typescript",
//   //   link: "icons/typescript.svg",
//   //   title: "typescript icon",
//   // },
//   // {
//   //   id: "nodejs",
//   //   link: "icons/nodejs.svg",
//   //   title: "nodejs icon",
//   // },
//   // {
//   //   id: "nextjs",
//   //   link: "icons/nextjs.svg",
//   //   title: "nextjs icon",
//   // },
//   // {
//   //   id: "playwright",
//   //   link: "icons/playwright.svg",
//   //   title: "playwright icon",
//   // },
//   // {
//   //   id: "redux",
//   //   link: "icons/redux.svg",
//   //   title: "redux icon",
//   // },
//   {
//     id: "vitejs",
//     link: "icons/vitejs.svg",
//     title: "vitejs icon",
//   },
//   // {
//   //   id: "vitest",
//   //   link: "icons/vitest.svg",
//   //   title: "vitest icon",
//   // },
// ];

// Projects
export const PROJECTS = [
  {
    id: "0",
    projectImg: "/projectImg/comfy.png",
    title: "Comfy House Furnitures",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quia sit aliquam placeat inventore repellendus aliquid dolore sed ipsam maiores?",
    stacks: "HTML / CSS / JAVASCRIPT / Contentful CMS",
    previewLink: "https://comfyhousefurnitures.vercel.app",
    codeLink: "https://github.com/Udeme01/comfyHouse",
  },
  {
    id: "1",
    projectImg: "/projectImg/wood.png",
    title: "Rooms Homepage",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quia sit aliquam placeat inventore repellendus aliquid dolore sed ipsam maiores?",
    stacks: "HTML, CSS, JAVASCRIPT, RESPONSIVE DESIGN",
    previewLink: "https://rooms-homepage-ecom.netlify.app/#",
    codeLink: "https://github.com/Udeme01/ROOMS-HOMEPAGE",
  },
  {
    id: "2",
    projectImg: "/projectImg/yel.png",
    title: "Snap | Make Remote Work",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quia sit aliquam placeat inventore repellendus aliquid dolore sed ipsam maiores?",
    stacks: "HTML, CSS, JAVASCRIPT, RESPONSIVE DESIGN",
    previewLink: "https://intro-section-app-001.netlify.app/#",
    codeLink:
      "https://github.com/Udeme01/Intro-Section-With-Dropdown-Navigation",
  },
];

// certifications

export const CERTIFICATIONS = [
  {
    id: "cert01",
    href: "https://www.coursera.org/account/accomplishments/verify/T5SYKNDLPNH2",
    certImg: "/certImg/coursera.png",
    title: "Coursera",
    description: "Introduction to Frontend Development",
  },
  {
    id: "cert02",
    href: "https://www.coursera.org/account/accomplishments/verify/TNGMJ8ZKQCWN",
    certImg: "/certImg/coursera.png",
    title: "Coursera",
    description: "HTML and CSS in depth",
  },
  {
    id: "cert03",
    href: "https://www.coursera.org/account/accomplishments/verify/UA4UPWMZEJH4",
    certImg: "/certImg/coursera.png",
    title: "Coursera",
    description: "Programming with JavaScript",
  },
  {
    id: "cert04",
    href: "https://www.coursera.org/account/accomplishments/verify/5Z6PDVNXBA66",
    certImg: "/certImg/coursera.png",
    title: "Coursera",
    description: "Version Control",
  },
  {
    id: "cert05",
    href: "https://www.coursera.org/account/accomplishments/verify/9VBNAYJ5P3AR",
    certImg: "/certImg/coursera.png",
    title: "Coursera",
    description: "React Basics",
  },
  {
    id: "cert06",
    href: "https://www.coursera.org/account/accomplishments/verify/ZSHZHPP4ULAB",
    certImg: "/certImg/coursera.png",
    title: "Coursera",
    description: "Advanced React",
  },
  {
    id: "cert07",
    href: "https://www.freecodecamp.org/certification/Udeme_Emmanuel_Edet/javascript-algorithms-and-data-structures",
    certImg: "/certImg/freecodecamp.png",
    title: "Free Code Camp",
    description: "JavaScript Algorithms and Data Structures",
  },
];

// SOCIALS...

import {
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export const SOCIALS = [
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/emmanuel-udeme/",
    target: "_blank",
    icon: faLinkedin,
    rel: "noopener noreferrer",
  },
  {
    id: "github",
    href: "https://github.com/Udeme01",
    target: "_blank",
    icon: faGithub,
    rel: "noopener noreferrer",
  },
  {
    id: "instagram",
    href: "https://www.instagram.com/the_quietdev",
    target: "_blank",
    icon: faInstagram,
    rel: "noopener noreferrer",
  },
  {
    id: "whatsapp",
    href: "https://wa.me/+2347046780531",
    target: "_blank",
    icon: faWhatsapp,
    rel: "noopener noreferrer",
  },
];
