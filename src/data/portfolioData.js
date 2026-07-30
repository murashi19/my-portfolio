// ============================================================
// Single source of truth — content rewritten from Muhamad Rafli
// Shidiq's CV. Replace placeholder fields (marked TODO) with
// real assets/links when available.
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
  location: "Bandung, West Java, Indonesia",
  email: "ainadanshidiq@gmail.com",
  phone: "+62 821-3471-6388",
  github: "https://github.com/", // TODO: replace with real GitHub URL
  linkedin: "https://linkedin.com/", // TODO: replace with real LinkedIn URL
  instagram: "#", // TODO: add real handle
  whatsapp: "https://wa.me/6282134716388",
  resumeFile: "/public/CV_Muhamad_Rafli_Shidiq_.pdf", // TODO: drop the real CV PDF into /public
  avatar: "/public/fotoku.png", // TODO: add a profile photo to /public and reference it here
  summary:
    "Full Stack Developer with hands-on experience building end-to-end web applications using Laravel, React.js, PHP, Go, JavaScript, MySQL, and PostgreSQL. I've shipped a training-institution management system and sharpened my IT fundamentals through an internship at PT PLN (Persero). My focus areas are REST API design, frontend–backend integration, responsive interfaces, and database architecture — and I'm currently deepening my DevOps skillset at Koda Academy's Full Stack Developer Bootcamp, working daily with Docker, GitHub Actions CI/CD, Linux, Nginx, and SSH.",
  objective:
    "I'm looking for a Full Stack, Backend, or React/Golang engineering role where I can turn well-scoped problems into reliable, maintainable software — and keep learning modern deployment and systems practices along the way.",
};

export const quickFacts = [
  { label: "Based in", value: "Bandung, West Java" },
  { label: "Focus", value: "Full Stack · Go · React" },
  { label: "Currently", value: "Koda Academy Bootcamp" },
  { label: "Open to", value: "Full-time roles" },
];

export const stats = [
  { label: "Web Applications Shipped", value: 3, suffix: "" },
  { label: "Core Technologies", value: 12, suffix: "+" },
  { label: "Bootcamp Average Score", value: 88, suffix: "" },
  { label: "Months of Hands-on IT Experience", value: 10, suffix: "+" },
];

export const experience = [
  {
    company: "Koda Academy",
    role: "Full Stack Developer",
    location: "Depok, Indonesia",
    duration: "May 2026 — Sep 2026",
    description:
      "Building a full-stack e-commerce web application as the bootcamp capstone project, using a modern, scalable architecture from API to deployment.",
    points: [
      "Developed a full-stack e-commerce web application using React.js, Go (Golang), and PostgreSQL with a scalable application architecture.",
      "Built responsive, interactive interfaces with React.js, Vite, and Tailwind CSS, optimized for both desktop and mobile.",
      "Designed and implemented RESTful APIs in Go covering authentication, product management, shopping cart, order processing, and user management.",
      "Containerized the application with Docker, configured Nginx as the web server, and set up automated build & deployment pipelines with GitHub Actions (CI/CD) on Linux.",
      "Applied clean code and modular architecture principles with Git-based collaborative workflows.",
    ],
    tech: ["React.js", "Go", "PostgreSQL", "Vite", "Tailwind CSS", "Docker", "Nginx", "GitHub Actions", "Linux"],
  },
  {
    company: "LPK Amarta Bangun Indonesia",
    role: "Freelance Full Stack Web Developer",
    location: "Remote — Bandung, Indonesia",
    duration: "Jul 2025 — Sep 2025",
    description:
      "Designed and built the official website and admissions system for a training institution (LPK) in Bekasi, end to end, as an independent developer.",
    points: [
      "Designed and developed the official LPK Amarta Bekasi website using Laravel, with a responsive, user-friendly UI/UX.",
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
    title: "E-Commerce Web Application",
    subtitle: "Koda Academy Bootcamp Capstone",
    description:
      "A full-stack e-commerce platform with authentication, product catalog, cart, and order processing, built on a Go REST API and a React/Vite frontend, containerized and deployed with an automated CI/CD pipeline.",
    features: [
      "Authentication & role-based access",
      "Product & inventory management",
      "Shopping cart and checkout flow",
      "Dockerized deployment with GitHub Actions CI/CD",
    ],
    tech: ["React.js", "Go", "PostgreSQL", "Docker", "Tailwind CSS", "Nginx"],
    image: null, // TODO: add project screenshot to /public/projects
    github: "#", // TODO
    demo: "#", // TODO
    featured: true,
  },
  {
    title: "LPK Amarta Bekasi — Admissions Platform",
    subtitle: "Freelance Project",
    description:
      "Official website and Student Admission Management System for a training institution, covering online registration, document uploads, payment processing, and admin-side announcement management.",
    features: [
      "Online registration & document submission",
      "Payment processing workflow",
      "Admin dashboard for announcements",
      "SEO and performance optimization",
    ],
    tech: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap"],
    image: null, // TODO
    github: "#", // TODO
    demo: "#", // TODO
    featured: true,
  },
  {
    title: "IT Asset History Monitoring System",
    subtitle: "PT PLN (Persero) — Internship Final Project",
    description:
      "An internal web application for the STI Division to track and monitor the history of IT assets across multiple PLN transmission units, published as a journal at Politeknik LP3I Bandung.",
    features: [
      "Asset history tracking",
      "Internal reporting for the STI Division",
      "Built during a professional IT internship",
    ],
    tech: ["Web Development", "MySQL"],
    image: null, // TODO
    github: "https://github.com/murashi19/Aplikasi_STI.git", // TODO
    demo: "#", // TODO
    featured: false,
  },
];

export const skills = {
  Frontend: [
    { name: "React.js", level: 85 },
    { name: "Tailwind CSS", level: 88 },
    { name: "JavaScript", level: 85 },
    { name: "HTML / CSS", level: 90 },
    { name: "Bootstrap", level: 80 },
  ],
  Backend: [
    { name: "Go (Golang)", level: 78 },
    { name: "Laravel", level: 85 },
    { name: "PHP", level: 82 },
    { name: "REST API Design", level: 85 },
  ],
  Database: [
    { name: "PostgreSQL", level: 78 },
    { name: "MySQL", level: 85 },
  ],
  DevOps: [
    { name: "Docker", level: 75 },
    { name: "GitHub Actions (CI/CD)", level: 72 },
    { name: "Linux", level: 78 },
    { name: "Nginx", level: 70 },
    { name: "SSH", level: 75 },
  ],
  Tools: [
    { name: "Git & GitHub", level: 88 },
    { name: "Figma", level: 75 },
    { name: "VS Code", level: 92 },
    { name: "Canva", level: 80 },
    { name: "Adobe Illustrator / Photoshop", level: 65 },
  ],
};

export const techStack = [
  "React", "Go", "Laravel", "PHP", "JavaScript", "PostgreSQL", "MySQL",
  "Docker", "Nginx", "Linux", "Git", "GitHub Actions", "Tailwind CSS",
  "Bootstrap", "Vite", "Figma",
];

export const education = [
  {
    school: "Politeknik LP3I Bandung",
    location: "Kota Tasikmalaya, Indonesia",
    degree: "Informatics Management",
    duration: "2022 — 2025",
    details: [
      "GPA 3.59 / 4.00",
      "Journal publication: Design of an IT Asset Monitoring Application for the STI Division of PT. PLN (Persero) Central Java Transmission Unit.",
    ],
  },
  {
    school: "Koda Academy",
    location: "Kota Depok, Indonesia",
    degree: "Full Stack Developer Bootcamp",
    duration: "May 2026 — Sep 2026",
    details: [
      "88.06 average score",
      "Hands-on training across React.js, Tailwind CSS, Docker, Linux, SSH, GitHub Actions (CI/CD), Go, web servers, and DevOps practices.",
      "Collaborated on real-world team projects requiring intensive teamwork and problem-solving.",
    ],
  },
];

export const certificates = [
  {
    title: "Computer Operator Engineering",
    issuer: "BNSP",
    image: null, // TODO
  },
  {
    title: "Software & Application Design (UX Designer)",
    issuer: "Skill Academy by Ruangguru",
    image: null, // TODO
  },
  {
    title: "Junior Web Developer",
    issuer: "BNSP",
    image: null, // TODO
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
