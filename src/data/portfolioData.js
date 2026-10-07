// ============================================================
// Single source of truth for the site content.
// Copy is written in first person and kept plain on purpose.
// ============================================================

export const personal = {
  name: "Muhamad Rafli Shidiq",
  firstName: "Rafli",
  role: "Full Stack Developer",
  location: "Jakarta, Indonesia",
  email: "muhamadraflishidiq@gmail.com",
  phone: "+62 821-3471-6388",
  github: "https://github.com/murashi19",
  linkedin: "https://www.linkedin.com/in/muhamad-rafli-shidiq19",
  whatsapp: "https://wa.me/6282134716388",
  resumeFile: "/CV_Muhamad_Rafli_Shidiq.pdf",
  avatar: "/fotoku.webp",
  intro:
    "I build web applications end to end — the React interface, the API behind it, the database, and the server it runs on.",
  summary:
    "I'm a full stack developer based in Jakarta with a strong backend focus. Most of my work is JavaScript and PHP on the front end, Node.js, Go, and Laravel on the back end, with PostgreSQL or MySQL underneath. I've shipped an e-commerce platform with a team, built a student administration system on my own, and worked as a backend engineer on a Point of Sale system.",
  objective:
    "Right now I'm looking for a full stack or backend role on a team that cares about how software is built, not just that it ships. I want to keep working close to the infrastructure side — deployment, containers, CI — because that's where I learn the most.",
};

export const quickFacts = [
  { label: "Based in", value: "Jakarta, Indonesia" },
  { label: "Working with", value: "React, Node.js, Go" },
  { label: "Also does", value: "Docker, Linux, CI/CD" },
  { label: "Looking for", value: "Full-time role" },
];

export const experience = [
  {
    company: "NashTa Group",
    role: "Backend Engineer",
    location: "Depok, Indonesia",
    duration: "Sep 2026",
    description:
      "A five-person team building a Point of Sale system for cashiers. I owned the backend.",
    points: [
      "Set up the backend foundation — dependencies, database configuration, Sequelize CLI, environment variables, and supporting services.",
      "Designed the relational schema for roles, users, customers, categories, brands, products, inventory, transactions, payments, and inventory movements, with UUID identifiers throughout.",
      "Implemented authentication with JWT and Argon2, role-based access control, active-user validation, and a consistent API response format.",
      "Worked through Git and GitHub with feature branches, pull requests, and code review, keeping the backend architecture consistent across the team.",
    ],
    tech: ["Node.js", "Express", "Sequelize", "PostgreSQL", "JWT", "Redis", "Docker Compose", "Swagger"],
  },
  {
    company: "Koda Academy",
    role: "Full Stack Developer",
    location: "Depok, Indonesia",
    duration: "May 2026 — Aug 2026",
    description:
      "An intensive full stack bootcamp. I built two applications end to end and handled the deployment side of both.",
    points: [
      "Built the BeliMudah e-commerce app with React, Express, and PostgreSQL, then moved the product and order endpoints onto Go.",
      "Built TaskFlow, a project management app with a Next.js front end and a typed Hono API, to get comfortable with TypeScript end to end.",
      "Put both apps in Docker, served them through Nginx, and set up the GitHub Actions pipelines that build and deploy them to a Linux server.",
      "Worked on shared Git repos with the rest of the team, reviewing each other's code before merging.",
    ],
    tech: ["React", "Next.js", "TypeScript", "Go", "Express", "PostgreSQL", "Docker", "Nginx", "GitHub Actions"],
  },
  {
    company: "LPK Ishikawa Nihongo Gakkou",
    role: "Freelance Full Stack Web Developer",
    location: "Remote",
    duration: "Jul 2025 — Sep 2025",
    description:
      "A language school needed a public website and a way to handle student administration. I was the main developer on it, working with a project manager and one frontend teammate.",
    points: [
      "Built the school's public site and student administration system in Laravel, covering responsive interfaces, online registration, applicant management, document submission, payment records, and announcements.",
      "Wrote the backend business logic, database structure, authentication, validation, and CRUD workflows that the daily admin operations run on.",
      "Turned the school's administrative requirements into working features, and kept the delivered work aligned with what they actually asked for.",
      "Handled testing, debugging, deployment, and maintenance, and stuck around for fixes and small feature requests after handover.",
    ],
    tech: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap"],
  },
  {
    company: "PT PLN (Persero) — UIT Jawa Bagian Tengah",
    role: "IT Support & Web Developer Intern",
    location: "Bandung, Indonesia",
    duration: "Sep 2024 — Jan 2025",
    description:
      "Six months with the internal IT team, split between keeping office infrastructure running and building a small internal tool.",
    points: [
      "Handled day-to-day IT support — network troubleshooting, router configuration, and keeping office equipment working.",
      "Set up the streaming rig for the PLN basketball event: projectors, cameras, Wi-Fi, and the Zoom room.",
      "Installed Ubuntu on the development servers and helped with server-room maintenance across the unit's offices.",
      "Built an asset-history tracking app for the division as my final project, and wrote it up as a journal paper.",
    ],
    tech: ["Linux", "Networking", "Web Development"],
  },
];

export const projects = [
  {
    title: "Point of Sale",
    subtitle: "Team project · 2026",
    description:
      "The backend for a cashier point-of-sale system, built with a five-person team. Node.js and Express over PostgreSQL, with Sequelize handling the schema and migrations.",
    features: [
      "Relational schema for inventory, transactions, and payments",
      "JWT auth with Argon2 hashing and role-based access",
      "Migrations and seeders with UUID identifiers",
      "Rate limiting, Swagger docs, and Vitest tests",
    ],
    tech: ["Node.js", "Express", "Sequelize", "PostgreSQL", "Redis", "Docker Compose", "Swagger", "Vitest"],
    image: null,
    github: null,
    demo: null,
    featured: true,
  },
  {
    title: "BeliMudah",
    subtitle: "Team project · 2026",
    description:
      "An e-commerce platform built by a small team during the bootcamp. React on the front, Go and Express on the back, PostgreSQL underneath.",
    features: [
      "Accounts with customer and admin roles",
      "Cart, wishlist, checkout, and order tracking",
      "Product, customer, and order management",
      "Go APIs covering authentication, cart, and orders",
    ],
    tech: ["React", "Go", "Express", "PostgreSQL", "Sequelize", "Redis", "Cloudinary", "Docker"],
    image: "/projects/belimudah-cover.webp",
    github: "https://github.com/murashi19/belimudah-app",
    demo: null,
    featured: true,
  },
  {
    title: "TaskFlow",
    subtitle: "Personal project · 2026",
    description:
      "A project management app I built to get comfortable with TypeScript end to end. Next.js on the front, a typed Hono API on the back, both in one repo.",
    features: [
      "Role-based access for managers, internal team, clients, and admin",
      "JWT authentication with refresh tokens",
      "Task assignment, dependencies, attachments, and audit logs",
      "React Query for server state, Zustand for auth state",
    ],
    tech: ["Next.js", "TypeScript", "Hono", "Bun", "Prisma", "PostgreSQL", "Docker"],
    image: "/projects/taskflow-cover.webp",
    github: "https://github.com/murashi19/TaskFlowProject",
    demo: "https://taskflow-green-kappa.vercel.app/",
    featured: false,
  },
  {
    title: "Ishikawa Administration System",
    subtitle: "Freelance · 2025",
    description:
      "The website and student administration system for a Japanese language school. Prospective students register and upload documents online; the admin side reviews applications and posts announcements.",
    features: [
      "Online registration and document submission",
      "Applicant management and payment records",
      "Admin dashboard for announcements",
      "Search and performance work on the public site",
    ],
    tech: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap"],
    image: null,
    github: null,
    demo: null,
    featured: false,
  },
  {
    title: "IT Asset History",
    subtitle: "PT PLN internship · 2024",
    description:
      "An internal tool for the IT division to keep track of where equipment has been and who had it. It started as my internship project and ended up as a published journal paper.",
    features: [
      "Asset history and handover tracking",
      "Reporting for the IT division",
      "Built on the job, in use after I left",
    ],
    tech: ["Web Development", "MySQL"],
    image: null,
    github: "https://github.com/murashi19/Aplikasi_STI",
    demo: null,
    featured: false,
  },
];

export const skills = [
  {
    group: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap", "React Query", "Zustand"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express", "Go", "Laravel", "PHP", "Hono", "Bun", "REST APIs", "JWT auth", "RBAC"],
  },
  {
    group: "Database",
    items: ["PostgreSQL", "MySQL", "Prisma", "Sequelize", "SQL"],
  },
  {
    group: "Infrastructure",
    items: ["Docker", "Docker Compose", "GitHub Actions", "Nginx", "Linux", "SSH"],
  },
  {
    group: "Tools",
    items: ["Git", "Postman", "VS Code", "Figma"],
  },
];

export const education = [
  {
    school: "Politeknik LP3I Bandung",
    location: "Bandung, Indonesia",
    degree: "Informatics Management (D-III)",
    duration: "2022 — 2025",
    note: "Final paper: an IT asset monitoring application for the STI division of PT PLN (Persero), later published as a journal article.",
  },
  {
    school: "Koda Academy",
    location: "Depok, Indonesia",
    degree: "Full Stack Developer Bootcamp",
    duration: "May 2026 — Aug 2026",
    note: "Intensive training across React, Tailwind, Go, Docker, Linux, SSH, and CI/CD, mostly through team projects.",
  },
];

export const certificates = [
  { title: "Junior Web Developer", issuer: "BNSP", year: "2025" },
  { title: "Computer Operator Engineering", issuer: "BNSP", year: "2024" },
  { title: "Software & Application Design", issuer: "Skill Academy", year: "2024" },
];

export const languages = [
  { name: "Indonesian", level: "Native" },
  { name: "English", level: "Working" },
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
