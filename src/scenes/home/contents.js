const navItems = ["About", "Experience", "Projects", "Skills", "Contact"];

const heroProof = [
  { value: "4+", label: "Years building production applications" },
  { value: "8+", label: "Projects delivered" },
  { value: "React", label: "Frontend engineering with TypeScript" },
];

const experience = [
  {
    company: "Engineering Co., Ltd.",
    period: "May 2023 – Dec 2025",
    highlights: [
      "Led frontend development for enterprise SaaS applications using React, Redux Toolkit, and Material UI.",
      "Developed complex business workflows including dynamic form builders, role-based access control (RBAC), data tables, and file management.",
      "Built map-based geographic targeting with Google Maps and GeoJSON for an advertising distribution platform with role-based administration.",
    ],
  },
  {
    company: "App.com.mm",
    period: "Oct 2022 – May 2023",
    highlights: [
      "Developed React applications including ERP dashboards and a Progressive Web App (PWA).",
      "Built responsive, reusable interfaces and integrated backend APIs for production business applications.",
    ],
  },
];

const selectedWork = [
  {
    number: "01",
    slug: "client-store-management",
    category: "Organization & Store Management",
    title: "Client & Store Management Platform",
    description:
      "Built a multi-tenant client and store management platform with template-driven forms, hierarchical roles, and configurable data visibility.",
    technologies: [
      "React",
      "Redux Toolkit",
      "RTK Query",
      "Material UI",
      "TanStack Table",
      "React Hook Form",
    ],
  },
  {
    number: "02",
    category: "Ordering & Distribution",
    title: "Advertising Ordering & Distribution Platform",
    description:
      "Built an advertising ordering and distribution platform for posting, newspaper, and printing services, with geographic targeting through Google Maps and GeoJSON.",
    technologies: [
      "React",
      "Redux Toolkit",
      "RTK Query",
      "Material UI",
      "TanStack Table",
      "React Hook Form",
      "Chart.js",
      "Google Maps API",
      "GeoJSON",
    ],
  },
];

const skillGroups = [
  {
    category: "Frontend",
    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    category: "State & Data",
    skills: [
      "Redux Toolkit",
      "RTK Query",
      "TanStack Query",
      "TanStack Table",
      "REST APIs",
    ],
  },
  {
    category: "UI & Forms",
    skills: ["Material UI", "React Hook Form"],
  },
  {
    category: "Tools & Testing",
    skills: ["Git", "GitHub", "GitLab", "Cypress"],
  },
];

const workApproach = [
  {
    number: "01",
    title: "Understand",
    description:
      "Break complex business requirements into clear user flows and interfaces.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "Develop reusable React components and maintainable frontend patterns.",
  },
  {
    number: "03",
    title: "Refine",
    description:
      "Improve usability, consistency, and performance through careful iteration.",
  },
];

const socials = [
  {
    label: "GitHub",
    icon: "GH",
    href: "https://github.com/zawhlyanhtet",
  },
  {
    label: "LinkedIn",
    icon: "in",
    href: "https://www.linkedin.com/in/zaw-hlyan-htet-7894aa400/",
  },
  {
    label: "Email",
    icon: "@",
    href: "mailto:zawhlyanhtet@gmail.com",
  },
];

export {
  navItems,
  heroProof,
  experience,
  selectedWork,
  skillGroups,
  workApproach,
  socials,
};
