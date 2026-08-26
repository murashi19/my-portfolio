// ============================================================
// Single source of truth — content adapted from Muhamad Rafli
// Shidiq's CV for a concise portfolio presentation.
// ============================================================

export const personal = {
  name: "Muhamad Rafli Shidiq",
  firstName: "Rafli",
  titles: [
    "Full Stack Developer",
    "React Developer",
    "Golang Developer",
    "Backend Developer",
  ],
  location: "Jakarta, Indonesia",
  email: "muhamadraflishidiq@gmail.com",
  phone: "+62 821-3471-6388",
  github: "https://github.com/murashi19",
  linkedin: "https://www.linkedin.com/in/muhamad-rafli-shidiq19",
  whatsapp: "https://wa.me/6282134716388",
  resumeFile: "/resume-rafli-shidiq.pdf",
  avatar: "/fotoku.webp",
  summary:
    "Full Stack Developer experienced in building end-to-end web applications with React, Go, Express.js, Laravel, PHP, PostgreSQL, and MySQL. I have delivered an e-commerce platform and a training-institution management system, while building a strong infrastructure foundation through professional IT support experience at PT PLN (Persero).",
  objective:
    "I'm looking for a Full Stack, Backend, or React/Golang engineering role where I can turn well-scoped problems into reliable, maintainable software — and keep learning modern deployment and systems practices along the way.",
};

export const quickFacts = [
  { label: "Based in", value: "Jakarta, Indonesia" },
  { label: "Focus", value: "Full Stack · Go · React" },
  { label: "Strength", value: "API to deployment" },
  { label: "Open to", value: "Full-time roles" },
];

export const stats = [
  { label: "Web Applications Shipped", value: 3, suffix: "" },
  { label: "Core Technologies", value: 12, suffix: "+" },
  { label: "Production-focused Projects", value: 3, suffix: "" },
  { label: "Years Building for the Web", value: 2, suffix: "+" },
];

export const experience = [
  {
    company: "Koda Academy",
    role: "Full Stack Developer",
    location: "Depok, Indonesia",
    duration: "May 2026 — Aug 2026",
    description:
      "Building a full-stack e-commerce web application as the bootcamp capstone project, using a modern, scalable architecture from API to deployment.",
    points: [
      "Developed the BeliMudah e-commerce application using React.js, Go, Express.js, and PostgreSQL with a scalable application architecture.",
      "Built responsive, interactive interfaces with React.js, Vite, and Tailwind CSS, optimized for both desktop and mobile.",
      "Designed and implemented RESTful APIs in Go covering authentication, product management, shopping cart, order processing, and user management.",
      "Containerized the application with Docker, configured Nginx as the web server, and set up automated build & deployment pipelines with GitHub Actions (CI/CD) on Linux.",
      "Applied clean code and modular architecture principles with Git-based collaborative workflows.",
    ],
    tech: ["React.js", "Go", "Express.js", "PostgreSQL", "Tailwind CSS", "Docker", "Nginx", "GitHub Actions"],
  },
  {
    company: "LPK Ishikawa Nihongo Gakkou",
    role: "Freelance Full Stack Web Developer",
    location: "Remote",
    duration: "Jul 2025 — Sep 2025",
    description:
      "Designed and built the institution's official website and student administration system end to end as an independent developer.",
    points: [
      "Designed and developed the official LPK Ishikawa Nihongo website using Laravel, with a responsive, user-friendly UI/UX.",
      "Built a comprehensive Student Admission Management System covering online registration, document submission, payment processing, and announcements.",
      "Integrated frontend, backend, database, and RESTful workflows to keep the public site and admin system in sync.",
      "Owned the full development lifecycle independently — system design, implementation, testing, deployment, and maintenance.",
      "Optimized performance, security, and SEO, and provided ongoing technical support and feature enhancements.",
    ],
    tech: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap"],
  },
  {
    company: "PT PLN (Persero) — Unit Induk Transmisi Jawa Bagian Tengah",
    role: "IT Support & Web Developer Intern",
    location: "Bandung, Indonesia",
    duration: "Sep 2024 — Jan 2025",
    description:
      "Internship on the STI (Information Systems & Technology) team, combining IT infrastructure support with an internal asset-tracking web application.",
    points: [
      "Provided IT infrastructure support — troubleshooting network connectivity, configuring routers, and maintaining office networking equipment.",
      "Supported the PLN Basketball Event's live-streaming setup: projectors, cameras, Wi-Fi, and Zoom Meeting integration.",
      "Installed and configured Ubuntu Linux on development servers and assisted with server-room maintenance across multiple PLN units under UIT JBT.",
      "Developed an IT Asset History Monitoring web application for the STI Division as the internship's final project, contributing to digital asset management.",
      "Collaborated with the IT team to maintain network reliability and support daily IT operations.",
    ],
    tech: ["Linux", "Networking", "Web Development"],
  },
];

export const projects = [
  {
    title: "BeliMudah E-Commerce",
    subtitle: "Full-stack team project · 2026",
    description:
      "A full-stack e-commerce platform with authentication, product catalog, cart, and order processing, built on a Go REST API and a React/Vite frontend, containerized and deployed with an automated CI/CD pipeline.",
    features: [
      "Authentication & role-based access",
      "Product & inventory management",
      "Shopping cart and checkout flow",
      "Dockerized deployment with GitHub Actions CI/CD",
    ],
    tech: ["React.js", "Go", "Express.js", "PostgreSQL", "Docker", "Tailwind CSS", "Nginx"],
    image: null,
    github: null,
    demo: null,
    featured: true,
  },
  {
    title: "LPK Ishikawa Administration Platform",
    subtitle: "Freelance project · 2025",
    description:
      "Official website and Student Admission Management System for a training institution, covering online registration, document uploads, payment processing, and admin-side announcement management.",
    features: [
      "Online registration & document submission",
      "Payment processing workflow",
      "Admin dashboard for announcements",
      "SEO and performance optimization",
    ],
    tech: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap"],
    image: null,
    github: null,
    demo: null,
    featured: true,
  },
  {
    title: "IT Asset History Monitoring System",
    subtitle: "PT PLN internship project · 2024–2025",
    description:
      "An internal web application for the STI Division to track and monitor the history of IT assets across multiple PLN transmission units, published as a journal at Politeknik LP3I Bandung.",
    features: [
      "Asset history tracking",
      "Internal reporting for the STI Division",
      "Built during a professional IT internship",
    ],
    tech: ["Web Development", "MySQL"],
    image: null,
    github: "https://github.com/murashi19/Aplikasi_STI",
    demo: null,
    featured: false,
  },
];

export const skills = {
  Frontend: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Responsive Web Design"],
  Backend: ["Go (Golang)", "Laravel", "PHP", "Express.js", "RESTful API", "JWT Authentication"],
  Database: ["PostgreSQL", "MySQL", "SQL"],
  "DevOps & Deployment": ["Docker", "Docker Compose", "GitHub Actions (CI/CD)", "Linux", "Nginx", "SSH"],
  Tools: ["Git & GitHub", "Postman", "REST Client", "VS Code", "Figma", "Canva", "Android Studio"],
};

export const techStack = [
  "React", "Go", "Express.js", "Laravel", "PHP", "JavaScript", "PostgreSQL", "MySQL",
  "Docker", "Nginx", "Linux", "Git", "GitHub Actions", "Tailwind CSS",
  "Bootstrap", "Vite", "Figma",
];

export const education = [
  {
    school: "Politeknik LP3I Bandung",
    location: "Bandung, Indonesia",
    degree: "Informatics Management",
    duration: "2022 — 2025",
    details: [
      "Journal publication: Design of an IT Asset Monitoring Application for the STI Division of PT. PLN (Persero) Central Java Transmission Unit.",
    ],
  },
  {
    school: "Koda Academy",
    location: "Kota Depok, Indonesia",
    degree: "Full Stack Developer Bootcamp",
    duration: "May 2026 — Aug 2026",
    details: [
      "Hands-on training across React.js, Tailwind CSS, Docker, Linux, SSH, GitHub Actions (CI/CD), Go, web servers, and DevOps practices.",
      "Collaborated on real-world team projects requiring intensive teamwork and problem-solving.",
    ],
  },
];

export const certificates = [
  {
    title: "Computer Operator Engineering",
    issuer: "BNSP",
    image: null,
  },
  {
    title: "Software & Application Design (UX Designer)",
    issuer: "Skill Academy by Ruangguru",
    image: null,
  },
  {
    title: "Junior Web Developer",
    issuer: "BNSP",
    image: null,
  },
];

export const languages = [
  { name: "Indonesian", level: "Native" },
  { name: "English", level: "Basic" },
];

export const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];
