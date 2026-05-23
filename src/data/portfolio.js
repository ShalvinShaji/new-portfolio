export const portfolioData = {
  personalInfo: {
    name: "Shalvin Shaji",
    role: "Data Engineer",
    company: "Tata Consultancy Services",
    tagline: "Building data infrastructure that scales with your ambitions.",
    bio: [
      "I’m a Data Engineer passionate about building scalable ETL pipelines, modern data platforms, and cloud-native data solutions. I enjoy transforming raw, complex data into reliable and actionable insights that support smarter business decisions.",
      "My experience includes working with Python, SQL, AWS, data warehousing, and workflow orchestration, with a strong focus on performance, scalability, and data quality. I specialize in designing efficient data pipelines, optimizing large-scale data processing, and enabling seamless data integration across systems.",
      "I’m constantly exploring modern data engineering practices, distributed systems, and cloud technologies to build robust, future-ready data architectures that drive real impact.",
    ],
    quickInfo: {
      location: "India",
      email: "shalvinshaji283@gmail.com",
    },
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/shalvinshaji/",
      github: "https://github.com/ShalvinShaji",
      instagram: "https://www.instagram.com/shalv.in_",
    },
    footer: {
      tagline: {
        part1: "Data by Logic",
        part2: "Design by Intent",
      },
    },
  },

  sectionTitles: {
    about: {
      prefix: "The",
      title: "Profile",
      number: "01",
    },
    experience: {
      prefix: "The",
      title: "Timeline",
      number: "02",
    },
    skills: {
      prefix: "The",
      title: "Stack",
      number: "03",
    },
    projects: {
      prefix: "The",
      title: "Works",
      number: "04",
    },
  },

  skills: {
    data_engineering: [
      "Python",
      "PySpark",
      "SQL",
      "PostgreSQL / Aurora",
      "ETL & ELT Pipelines",
      "Data Modeling",
      "Database Migration",
    ],
    infrastructure: ["AWS Services", "Terraform", "Git"],
    web_development: [
      "React",
      "Next.js",
      "Node.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },

  experience: [
    {
      company: "Tata Consultancy Services",
      role: "Data Engineer",
      period: "Sep 2022 - Feb 2026",
      description:
        "Built and optimized large-scale ETL pipelines, performed Oracle-to-PostgreSQL migrations, automated reconciliation and validation processes, and supported production data platforms handling high-volume workloads.",
    },
    {
      company: "IBS Software",
      role: "Senior Data Engineer",
      period: "Feb 2026 - Present",
      description: "",
    },
  ],

  projects: [
    {
      id: 1,
      title: "GMM Hospital",
      description:
        "A hospital web app to manage all aspects of the client-facing application.",
      techStack: ["React", "Bootstrap"],
      links: {
        project: "https://github.com/ShalvinShaji/gmm",
        demo: "https://gmmhospital.netlify.app/",
      },
    },
    {
      id: 2,
      title: "Athlo",
      description:
        "e-commerce frontend web app for sports products and accessories.",
      techStack: ["Next.js", "Tailwind CSS"],
      links: {
        project: "https://github.com/ShalvinShaji/athlo",
        demo: "https://athlo.vercel.app/",
      },
    },
    {
      id: 3,
      title: "Personal Portfolio",
      description:
        "A personal portfolio website built with React and Bootstrap showcasing my projects, skills, and experience.",
      techStack: ["React", "Bootstrap"],
      links: {
        project: "#",
        demo: "#",
      },
    },
  ],
};
