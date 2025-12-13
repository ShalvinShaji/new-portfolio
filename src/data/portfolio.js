export const portfolioData = {
  personalInfo: {
    name: "Shalvin",
    role: "Data Engineer",
    company: "Tata Consultancy Services",
    tagline: "Building data infrastructure that scales with your ambitions.",
    bio: [
      "I am a results-driven Data Engineer specializing in building robust ETL pipelines, data warehousing, and cloud infrastructure.",
      "My expertise lies in orchestrating complex data workflows using Python, SQL, and AWS. I thrive on solving big data challenges, optimizing query performance, and ensuring data reliability to drive strategic decision-making."
    ],
    socialLinks: {
      linkedin: "#",
      github: "#",
      instagram: "#"
    }
  },
  skills: {
    data_engineering: [
      "Python","PySpark", "SQL", "PostgreSQL", "ETL Pipelines"
    ],
    infrastructure: [
      "AWS Services", "Terraform", "Git"
    ],
    web_development: [
      "React", "Next JS", "Nodejs", "JavaScript"
    ]
  },
  experience: [
  {
    company: "Cognizant Technology Solutions",
    role: "Data Engineer",
    period: "Feb 2026 - Present",
    description:
      "Driving cloud data migration initiatives, designing scalable data lake architectures, and implementing secure, high-performance data pipelines on AWS."
  },
  {
    company: "Tata Consultancy Services",
    role: "Data Engineer",
    period: "Sep 2022 - Feb 2026",
    description:
      "Built and optimized large-scale ETL pipelines, performed Oracle-to-PostgreSQL migrations, automated reconciliation and validation processes, and supported production data platforms handling high-volume workloads."
  }
]
,
  projects: [
    {
      id: 1,
      title: "GMM Hospital",
      description: "A hospital web app to manage all aspects of the client-facing application.",
      techStack: ["React", "Bootstrap"],
      links: {
        project: "https://github.com/ShalvinShaji/gmm",
        demo: "https://gmmhospital.netlify.app/"
      }
    },
    {
      id: 2,
      title: "Athlo",
      description: "e-commerce frontend web app for sports products and accessories.",
      techStack: ["Next.js", "Tailwind CSS"],
      links: {
        project: "https://github.com/ShalvinShaji/athlo",
        demo: "https://athlo.vercel.app/"
      }
    },
    {
      id: 3,
      title: "Personal Portfolio",
      description: "A personal portfolio website built with React and Bootstrap showcasing my projects, skills, and experience.",
      techStack: ["React", "Bootstrap"],
      links: {
        project: "#",
        demo: "#"
      }
    }
  ],
  footerText: "© 2025. Designed and Developed by Me with ❤"
};
