import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    python,
    cpp,
    flutter,
    java,
    pandas,
    sql,
    git,
    figma,
    brain,
    sail,
    rdp,
    zibdy,
    ucsd,
    bc,
    schance,
    soar,
    cs148,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Engineer",
      icon: mobile,
    },
    {
      title: "NLP Researcher",
      icon: backend,
    },
    {
      title: "Full-Stack Developer",
      icon: web,
    },
    {
      title: "Product Manager",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Flutter",
      icon: flutter,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Pandas",
      icon: pandas,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
    // },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Figma",
      icon: figma,
    }
  ];
  
  const experiences = [
    {
      title: "NLP Student Researcher",
      company_name: "Stanford AI Laboratory",
      icon: sail,
      iconBg: "#E6DEDD",
      date: "May 2024 - Present",
      points: [
        "Co-Advised by Azalia Mirhoseini and Christopher Ré. Working on RAG."
      ],
    },
    {
      title: "Product Management Intern",
      company_name: "Brain Corp",
      icon: brain,
      iconBg: "#E6DEDD",
      date: "June 2024 - Sept 2024",
      points: [
        "AI Solutions for Autonomous Robot functionality and path generation."
      ],
    },
    {
      title: "Software Engineer",
      company_name: "RapDevPro",
      icon: rdp,
      iconBg: "#FFFFFF",
      date: "Dec 2022 - Oct 2023",
      points: [
        "Developed the entire admin panel of social media & gaming application. Responsible for some features on the mobile application as well."
      ],
    },
    {
      title: "Software Engineer",
      company_name: "ZibdyHealth",
      icon: zibdy,
      iconBg: "#E6DEDD",
      date: "June 2023 - Sept 2023",
      points: [
        "Developed next generation iOS and web application."
      ],
    },
    {
      title: "Computational Biology Research Assistant",
      company_name: "UC San Diego, Karsten Zengler Lab",
      icon: ucsd,
      iconBg: "#E6DEDD",
      date: "June 2022 - Sept 2023",
      points: [
        "Working on simulation models at the microbial level."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Filler",
      name: "John Doe",
      designation: "CEO",
      company: "GOOGLE",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
  ];
  
  const projects = [
    {
      name: "SOAR: Save On A Ride",
      description:
        "Functional mobile application to simplify processes for college students. This application helps them save money and minimize their carbon footprint.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "fullstack",
          color: "pink-text-gradient",
        },
      ],
      image: soar,
      source_code_link: "https://github.com/mrTSB/soarai",
    },
    {
      name: "Royal Battle",
      description:
        "Java game that is a combination of hit games Battle Cats and Clash Royale. Enables users to play against each other or against AI.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "java gui",
          color: "green-text-gradient",
        },
        {
          name: "oop",
          color: "pink-text-gradient",
        },
      ],
      image: bc,
      source_code_link: "https://github.com/mrTSB/royal-battle",
    },
    {
      name: "2nd Chance",
      description:
        "Developed a chat-bot that mimics someone based on text and/or audio data uploaded. Gives the user the capability to speak to them or text them.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "convex",
          color: "green-text-gradient",
        },
        {
          name: "openai",
          color: "pink-text-gradient",
        },
      ],
      image: schance,
      source_code_link: "https://devpost.com/software/2nd-chance-ryczl2",
    },
    {
      name: "CS 148: Blender",
      description:
        "Leveraged what I learned about computer graphics to create 3D models in blender. I then placed them in a scene and use my knowledge to have proper lighting and have cohesion between objects. This merited me an A+ in the class.",
      tags: [
        {
          name: "blender",
          color: "blue-text-gradient",
        },
        {
          name: "graphics",
          color: "green-text-gradient",
        },
        {
          name: "3dmodeling",
          color: "pink-text-gradient",
        },
      ],
      image: cs148,
      source_code_link: "https://github.com/mrTSB/cs-148-final-project",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };