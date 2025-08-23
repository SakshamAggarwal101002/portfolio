// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';
// Experience Section Logo's
import geLogo from './assets/company_logo/ge_logo.webp';
import nsutLogo from './assets/company_logo/nsut_logo.webp';

// Education Section Logo's
import bpsLogo from './assets/education_logo/bps_logo.webp';

// Project Section Logo's
import gmacLogo from './assets/work_logo/gmac_logo.png';
import algotweetLogo from './assets/work_logo/algotweet_logo.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      // { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      // { name: 'Material UI', logo: materialuiLogo },
      // { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      // { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      // { name: 'Firebase', logo: firebaseLogo },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      // { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      // { name: 'Java', logo: javaLogo },
       { name: 'Python', logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      // { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      // { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      // { name: 'Postman', logo: postmanLogo },
      // { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      // { name: 'Netlify', logo: netlifyLogo },
      // { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: geLogo,
    role: "Software Engineer Intern",
    company: "GE Vernova",
    date: "Jan 2025 - June 2025",
    desc: "Built a responsive React.js web app to centralize and display technical PDFs, improving documentation access across engineering teams. Implemented dynamic search, filtering, and categorized views, reducing lookup time by 50%. Deployed with Git and automated workflows to streamline updates.",
    skills: ["React.js", "JavaScript"],
  },
  {
    id: 1,
    img: nsutLogo,
    role: "Research Intern",
    company: "Netaji Subhas University of Technology",
    date: "May 2024 - July 2024",
    desc: "Conducted research in face hallucination, enhancing image super-resolution algorithms. Improved PSNR by 1.7% and SSIM by 0.76% by optimizing reconstruction models. Contributed to advancing high-fidelity image generation methods.",
    skills: ["Matlab", "Image Processing"],
  },
];

export const education = [
  {
    id: 0,
    img: nsutLogo,
    school: "Netaji Subhas University of Technology",
    date: "Dec 2021 - June 2025",
    grade: "8.2 CGPA",
    desc: "A 2025 B.Tech graduate from NSUT with a strong foundation in Data Structures, Algorithms, OOPs, DBMS, Operating Systems, and System Design. Actively engaged in coding contests, research, and software projects.",
    degree: "Bachelor of Technology (B.Tech)",
  },
  {
    id: 1,
    img: bpsLogo,
    school: "Bharti Public School",
    date: "Apr 2020 - May 2021",
    grade: "96.4%",
    desc: "Completed Class 12 (CBSE Board) with Physics, Chemistry, and Mathematics.",
    degree: "CBSE (XII) - PCM",
  },
  {
    id: 2,
    img: bpsLogo,
    school: "Bharti Public School",
    date: "Apr 2018 - May 2019",
    grade: "97.6%",
    desc: "Completed Class 10 (CBSE Board) with distinction.",
    degree: "CBSE (X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Get Me A Coffee",
    description:
      "A crowdfunding platform where fans can support creators through personalized micro-donations and messages. Integrated Razorpay API for secure real-time payments and built a dynamic profile management system for seamless account and payment configurations.",
    image: gmacLogo,
    tags: ["Next.js", "React.js", "MongoDB", "Razorpay API"],
    github: "https://github.com/SakshamAggarwal101002/GET-ME-A-COFFEE", // replace with exact repo if available
    webapp: "https://get-me-a-coffee-three.vercel.app/",
  },
  {
    id: 1,
    title: "AlgoTweet",
    description:
      "A Django-based platform where users can share short notes and ideas on DSA, web development, or tech-related topics. Implemented secure authentication, ensuring only users can update or delete their posts. Helps organize useful concepts for quick access and learning.",
    image: algotweetLogo,
    tags: ["Django", "Python", "SQLite"],
    github: "https://github.com/SakshamAggarwal101002/ALGOTWEET", // replace with exact repo if available
    webapp: "https://web-production-027d6.up.railway.app/",
  },
];
