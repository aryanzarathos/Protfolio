import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";
import express from "./assets/images/img/express.png";
import aws from "./assets/images/img/aws.png";
import js from "./assets/images/img/js.png";
import mongo from "./assets/images/img/mongo.png";
import nginx from "./assets/images/img/nginx.png";
import sd from "./assets/images/img/sd.png";
import typescript from "./assets/images/img/typescript.svg";

import project1 from "./assets/images/Projects/img1.png";
import project2 from "./assets/images/Projects/img2.png";
import project3 from "./assets/images/Projects/img3.png";
import person2 from "./assets/images/img/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Mern Stack Developer",
    firstName: "Bhupinder",
    LastName: "Kumar",
    btnText: "Hire Me",
    image: person2,
    hero_content: [
      {
        count: "2+",
        text: "Years of Experinse as Mern Stack Developer",
      },
      {
        count: "5+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      
      {
        name: "Javascript",
        para: "2.5 yr of hands-on experience on javascript.",
        logo: js,
      },
      {
        name: "TypeScript",
        para: "2.5 yr of hands-on experience on TypeScript with builing complex Microservices.",
        logo: typescript,
      },
      {
        name: "React js",
        para: "2.5 yr of hands-on experience on React Js with building complex SaaS/PaaS based products",
        logo: reactjs,
      },
      {
        name: "Node js",
        para: "2.5 yr of hands-on experience on Node js with builing Multi-Level Microservices.",
        logo: nodejs,
      },
      {
        name: "Express js",
        para: "2.5 yr of hands-on experience on Express js",
        logo: express,
      },
      {
        name: "MongoDB",
        para: "2.5 yr of hands-on experience on MongoDB with building aggregation and views",
        logo: mongo,
      },
      {
        name: "System Design",
        para: "2 yr of building Mutli-Tenant archetecture system for CMS & LMS/ERP System",
        logo: sd,
      },
      {
        name: "AWS",
        para: "Hand on practice on Ec2, S3 and many more Aws Services ",
        logo: aws,
      },
      {
        name: "Nginx Web Server",
        para: "Deployment on Web Server",
        logo: nginx,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "Building Complex Frontend and multi-level Backend Microservices.",
        logo: services_logo1,
      },
      {
        title: "System Design",
        para: "In publishing Mutli-Tenant archetecture system for SaaS/PaaS with Future Scope.",
        logo: services_logo2,
      },
      {
        title: "Dev-Ops",
        para: "Deployment on Web Server with AWS Services and Automating them using Jenkins",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: "",
    project_content: [
      {
        title: "Ecommerce Website",
        image: project1,
      },
      {
        title: "LMS & ERP System",
        image: project2,
      },
      {
        title: "CMS Website",
        image: project3,
      },
      {
        title: "Student Automation System",
        image: project3,
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: "",
    image2: "",
    para: "Seeking to leverage board development, experience and hands-on technical expertise in a challenge roleas a MERN Stack Developer",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "bhupinder.7113@gmail.com",
        icon: GrMail,
        link: "mailto:bhupinder.7113@gmail.com",
      },
      {
        text: "+91 9871947376",
        icon: MdCall,
        link: "https://wa.me/919871947376",
      }
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
