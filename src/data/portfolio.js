export const portfolioData = {
  personalInfo: {
    name: "Shalvin Shaji",
    role: "Data Engineer",
    company: "Tata Consultancy Services",
    tagline: "Building data infrastructure that scales with your ambitions.",
    bio: [
      "I am a results-driven Data Engineer specializing in building scalable ETL pipelines, modern data warehouses, and cloud-native infrastructure.",
      "I design and optimize complex data workflows using Python, SQL, and AWS, with a strong focus on performance, reliability, and data quality. I enjoy solving large-scale data challenges and transforming raw data into decision-ready insights."
    ],
    quickInfo: {
      location: "India",
      email: "shalvinshaji283@gmail.com"
    },
    socialLinks: {
      linkedin: "#",
      github: "#",
      instagram: "#"
    }
  },

  sectionTitles: {
    about: {
      prefix: "The",
      title: "Profile",
      number: "01"
    },
    experience: {
      prefix: "The",
      title: "Timeline",
      number: "02"
    },
    skills: {
      prefix: "The",
      title: "Stack",
      number: "03"
    },
    projects: {
      prefix: "The",
      title: "Works",
      number: "04"
    }
  },

  skills: {
    data_engineering: [
      "Python",
      "PySpark",
      "SQL",
      "PostgreSQL / Aurora",
      "ETL & ELT Pipelines",
      "Data Modeling",
      "Database Migration"
    ],
    infrastructure: [
      "AWS Services",
      "Terraform",
      "Git"
    ],
    web_development: [
      "React",
      "Next.js",
      "Node.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind CSS"
    ]
  },

  experience: [
    // {
    //   company: "Cognizant Technology Solutions",
    //   role: "Senior Data Engineer",
    //   period: "Feb 2026 - Present",
    //   description:
    //     "Driving cloud data migration initiatives, designing scalable data lake architectures, and implementing secure, high-performance data pipelines on AWS."
    // },
    {
      company: "Tata Consultancy Services",
      role: "Data Engineer",
      period: "Sep 2022 - Feb 2026",
      description:
        "Built and optimized large-scale ETL pipelines, performed Oracle-to-PostgreSQL migrations, automated reconciliation and validation processes, and supported production data platforms handling high-volume workloads."
    }
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
        demo: "https://gmmhospital.netlify.app/"
      }
    },
    {
      id: 2,
      title: "Athlo",
      description:
        "e-commerce frontend web app for sports products and accessories.",
      techStack: ["Next.js", "Tailwind CSS"],
      links: {
        project: "https://github.com/ShalvinShaji/athlo",
        demo: "https://athlo.vercel.app/"
      }
    },
    {
      id: 3,
      title: "Personal Portfolio",
      description:
        "A personal portfolio website built with React and Bootstrap showcasing my projects, skills, and experience.",
      techStack: ["React", "Bootstrap"],
      links: {
        project: "#",
        demo: "#"
      }
    }
  ]
};
