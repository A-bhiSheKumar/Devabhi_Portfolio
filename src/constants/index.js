//This is my content and skills Avi_portfolio

import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
   

    udemy,
    self,
    backwork,
    allset,
 
    site,
    nike,
    collegiateVoice,
    guide,
    nextjs
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
    {
      id:"project",
      title: "Project"
    }
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Exploring FrameWorks",
      icon: creator,
    },
  ];
  
  const technologies = [
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: nextjs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Web Devlopment Bootcamp",
      company_name: "Udemy",
      icon: udemy,
      iconBg: "#383E56",
      date: "April 2023 - July 2023",
      points: [
        "Learned front-end skills including HTML, CSS, and JavaScript.",
        "Gained knowledge of REST APIs and how to interact with them.",
        "Explored backend technologies, including Node.js, MongoDB, and Express.js.",
        "Developed proficiency in React for building dynamic web applications.",
      ],
    },
    {
      title: "Front-End Developer (Personal Projects)",
      company_name: "Self-Employed",
      icon: self,
      iconBg: "#E6DEDD",
      date: "July 2023 - Aug 2023",
      points: [
        "Self-taught front-end development skills acquired through web development bootcamps.",
        "Completed multiple personal front-end projects to apply and reinforce knowledge.",
        "Developed a strong understanding of CSS for creating visually appealing web applications.",
      ],
    },
    {
      title: "Backend Developer",
      company_name: "Self_Employed",
      icon: backwork,
      iconBg: "#383E56",
      date: "Aug 2023 - Sept 2023",
      points: [
        "Focused on backend development using Node.js and Express.js to build robust server-side applications.",
        "Acquired expertise in data management with MongoDB and a basic understanding of SQL databases.",
        "Implemented secure authentication mechanisms, including OAuth with Google, Facebook, and other social media platforms.",
        "Mastered the art of server-side programming, optimizing performance and ensuring scalability.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Prepared for Industry Engagement",
      icon: allset,
      iconBg: "#E6DEDD",
      date: "Oct 2023 - Present",
      points: [
        "Proficient in React.js and React Hooks, with a portfolio of real-world projects showcasing frontend and backend skills.",
        "Mastered API integration, demonstrating strong backend development expertise through project work.",
        "Utilized advanced technologies like Tailwind CSS and Three.js (React Fiber 3D) for engaging 3D models and portfolio enhancement.",
        "Prioritized project organization and scalability to ensure maintainability.",
        "Ready to contribute at the industry level with a comprehensive full-stack skill set.",

      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I'm thrilled for your journey and proud of your progress. Your dedication is paying off, and you're on the path to becoming a top developer. Keep up the great work!",
      name: "Angela Yu",
      designation: "CTO",
      company: "App_Brewery",
      image: "https://pbs.twimg.com/profile_images/1523987597751726081/XuQeo7gC_400x400.jpg",
      twitter: "https://twitter.com/yu_angela"
    },
    {
      testimonial:
        "Abhishek possesses remarkable potential for website development, and his skills are truly incredible.",
      name: " Friend",
      designation: "CEO",
      company: "x",
      image: "https://media.gettyimages.com/id/1421479579/photo/vox-medias-2022-code-conference-day-1.jpg?s=1024x1024&w=gi&k=20&c=K6Hbh0oH6qJk7XycW16QXVGqjDdjah6oFkUWTQokrH4=",
    },
    {
      testimonial:
        "As a recruiter at Company XY, I want to express my genuine appreciation for your outstanding work. It's truly impressive, and I look forward to reaching out to you soon.",
      name: "Recruiter",
      designation: "HR",
      company: "XY",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Site Snap",
      description:
        "With our Website Summarizer, you can transform lengthy web content into concise summaries, saving you valuable time.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "APIs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: site,
      source_code_link: "https://github.com/A-bhiSheKumar/siteSnap",
      live_demo_link:"https://dreamy-lollipop-a251b2.netlify.app/"
    },
    {
      name: "Nike Shop",
      description:
        "Explore the latest Nike shoe styles at our online store. With Tailwind CSS and React, shop seamlessly for comfort and fashion. Step into style today!",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        // {
        //   name: "restapi",
        //   color: "green-text-gradient",
        // },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: nike,
      source_code_link: "https://github.com/A-bhiSheKumar/shop",
      live_demo_link: "https://venerable-naiad-909f6f.netlify.app/"
    },
    {
      name: "collegiateVoice",
      description:
        "Discover the unvarnished truth about colleges. Graduates and seniors share candid insights, photos, and feedback, helping you make informed choices. Your authentic guide to the real college experience.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "Express.js",
          color: "pink-text-gradient",
        },
        {
          name: "MongoDb",
          color: "green-text-gradient",
        },
        {
          name: "Redux",
          color: "blue-text-gradient",
        },
        {
          name: "Material Ui",
          color: "pink-text-gradient",
        },
      ],
      image: collegiateVoice,
      source_code_link: "https://github.com/A-bhiSheKumar/collegiateVoice",
      live_demo_link:"https://github.com/A-bhiSheKumar/collegiateVoice"
    },
    {
      name: "GuidenceWave",
      description:
        "GuidanceWave is an open-source platform connecting individuals with seasoned professionals in various fields, enabling you to discover, create, and share expert-led insights for your personal and professional growth.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "Express.js",
          color: "pink-text-gradient",
        },
        {
          name: "MongoDb",
          color: "green-text-gradient",
        },
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSs",
          color: "pink-text-gradient",
        },
      ],
      image: guide,
      source_code_link: "https://github.com/A-bhiSheKumar/guidenceWave",
      live_demo_link: "https://guidence-wave.vercel.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };