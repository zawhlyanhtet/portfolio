const navItems = ["Profile", "Experience", "Projects", "Skills", "Contact"];

const heroProof = [
  { value: "3+", label: "Years building production applications" },
  { value: "8+", label: "Projects delivered" },
  { value: "React", label: "Frontend engineering with TypeScript" },
];

const experience = [
  {
    company: "Engineerforce Co., Ltd.",
    title: "Frontend Engineer",
    period: "May 2023 – Dec 2025",
    summary:
      "Owned frontend development across production SaaS and business applications, building data-intensive workflows, configurable interfaces, and reusable UI systems for enterprise products.",
    focus: [
      "Multi-tenant platforms",
      "RBAC",
      "Data-intensive interfaces",
      "Form builders",
      "Geospatial workflows",
    ],
  },
  {
    company: "App.com.mm",
    title: "Frontend Developer",
    period: "Oct 2022 – May 2023",
    summary:
      "Built production web applications and landing pages using React, including an ERP platform and a Progressive Web App (PWA), with a focus on reusable interfaces and API-driven workflows.",
    focus: [
      "ERP dashboards",
      "Progressive Web Apps",
      "Landing pages",
      "API integration",
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
    category: "Development",
    skills: ["Git", "GitHub", "GitLab", "Cypress"],
  },
];

const GITHUB_URL = "https://github.com/zawhlyanhtet";
const LINKEDIN_URL = "https://www.linkedin.com/in/zaw-hlyan-htet-7894aa400";
const EMAIL_URL = "mailto:zawhlyanhtet@gmail.com";

const socials = [
  {
    label: "GitHub",
    icon: "GH",
    href: GITHUB_URL,
  },
  {
    label: "LinkedIn",
    icon: "in",
    href: LINKEDIN_URL,
  },
  {
    label: "Email",
    icon: "@",
    href: EMAIL_URL,
  },
];

export {
  navItems,
  heroProof,
  experience,
  selectedWork,
  skillGroups,
  socials,
  GITHUB_URL,
  LINKEDIN_URL,
  EMAIL_URL,
};
