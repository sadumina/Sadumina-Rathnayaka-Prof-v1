import type { ExperienceItem, ProjectItem, SkillGroup } from "@/types/portfolio";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Tech Stack" },
  { href: "#contact", label: "Contact" },
];

export const stats = [
  { value: "8+", label: "Months in industry" },
  { value: "10+", label: "Products shipped" },
  { value: "5", label: "Core disciplines" },
  { value: "1", label: "Studio founded" },
];

export const experiences: ExperienceItem[] = [
  {
    company: "Hayleys PLC / Haycarb PLC",
    role: "Software Engineering Intern",
    period: "Enterprise Systems Internship",
    description:
      "Contributed to internal digital products across backend services, dashboards, deployment workflows, and database-backed business systems.",
    highlights: [
      "Built and maintained FastAPI backend services for enterprise workflows.",
      "Developed Node.js APIs and integrated them with internal data sources.",
      "Created React and Next.js dashboards for operational visibility.",
      "Supported enterprise internal systems with database integration.",
      "Worked with Docker and GitHub Actions for repeatable delivery pipelines.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Backend",
    skills: ["FastAPI", "Node.js", "Express.js", "Java", "Spring Boot"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
  },
  {
    title: "DevOps",
    skills: ["Docker", "GitHub Actions", "AWS"],
  },
  {
    title: "Systems & APIs",
    skills: ["REST APIs", "API Design", "AWS", "GitHub Actions"],
  },
  {
    title: "AI / ML",
    skills: ["Python", "TensorFlow", "PyTorch", "OpenCV", "CNN", "AI APIs"],
  },
];

export const projects: ProjectItem[] = [
  {
    slug: "edusense",
    title: "EduSense",
    category: "AI Education Platform",
    description:
      "A learning intelligence platform focused on smarter academic workflows, analytics, and personalized digital learning experiences.",
    stack: ["Next.js", "FastAPI", "AI APIs", "PostgreSQL"],
    problem:
      "Students and educators often work across scattered notes, manual progress tracking, and limited insight into learning gaps.",
    solution:
      "EduSense centralizes learning workflows with AI-assisted recommendations, structured dashboards, and backend services built for reliable academic data handling.",
    impact: ["Improved visibility into student progress", "Reduced manual academic tracking", "Created a foundation for AI-supported learning decisions"],
    features: ["AI-powered learning insights", "Student progress dashboards", "Role-based academic workflows", "API-first backend architecture"],
    screenshots: [
      { title: "Learning Dashboard", description: "A command center for performance metrics, activity, and recommendations." },
      { title: "AI Insight View", description: "A focused view for personalized learning suggestions and student signals." },
    ],
    githubUrl: "https://github.com/ITPM-Project-EduSense/EduSense.git",
    demoUrl: "#",
  },
  {
    slug: "carbonxinsight",
    title: "CarbonXInsight",
    category: "Commodity Market Intelligence · Haycarb PLC",
    description:
      "Market-analytics web dashboard for coconut shell charcoal prices (US$/MT) across Sri Lanka, India, and Indonesia. Ingests 35+ monthly WPU reports and Excel sheets with automated pdfplumber table extraction and interactive Highstock analytics.",
    stack: ["Python", "FastAPI", "React 19", "Highcharts", "MongoDB", "pdfplumber"],
    problem:
      "Commodity pricing data was scattered across 35+ unstructured monthly PDF reports from CDA, CDB, and UCAP, requiring manual calculation and error-prone tracking.",
    solution:
      "Engineered an automated ingestion pipeline using FastAPI, pdfplumber, and MongoDB to extract, clean, and visualize time-series prices on an interactive Highstock dashboard with real-time country comparisons.",
    impact: [
      "Automated extraction from 35+ monthly market PDF reports and Excel matrices",
      "Delivered real-time benchmark pricing (US$/MT) across Sri Lanka, India, and Indonesia",
      "Provided Min / Avg / Max country analytics with client-side PDF/CSV export capabilities",
    ],
    features: [
      "Automated multi-PDF & Excel tabular extraction engine",
      "Highstock interactive multi-series price trajectory chart",
      "Dynamic country comparison drawer & KPI matrix",
      "Client-side jsPDF and Excel report generation",
    ],
    screenshots: [
      { title: "Market Analytics Dashboard", description: "Interactive time-series pricing chart with country KPI cards." },
      { title: "Monthly Data Ingestion", description: "PDF and Excel drag-and-drop parsing interface." },
    ],
    githubUrl: "https://github.com/HayCarb-ORG/CarbonXinsight-.git",
    demoUrl: "#",
  },
  {
    slug: "diabetic-retinopathy-screening",
    title: "Diabetic Retinopathy Screening",
    category: "Deep Learning · Medical Imaging",
    description:
      "A comparative deep-learning study of four convolutional neural network architectures for classifying diabetic retinopathy severity from retinal fundus images.",
    stack: ["Python", "TensorFlow", "PyTorch", "CNN"],
    problem:
      "Manual grading of retinal images is time-intensive and depends on access to eye-care specialists. This project investigates automated classification across five diabetic retinopathy severity stages.",
    solution:
      "The team compares a custom CNN with DenseNet121, EfficientNetB0, and ResNet50 using retinal-image preprocessing, class weighting, held-out evaluation, and Grad-CAM visualizations.",
    impact: [
      "Compares four model architectures under a shared experimental workflow",
      "Accounts for the ordinal severity scale with Quadratic Weighted Kappa",
      "Includes Grad-CAM visualizations to inspect image regions influencing predictions",
    ],
    features: [
      "Five-class diabetic retinopathy severity classification",
      "APTOS 2019 fundus-image dataset",
      "Preprocessing, class weighting, and stratified data splits",
      "Comparative metrics and Grad-CAM explainability",
    ],
    screenshots: [
      { title: "Model Comparison", description: "Four CNN architectures evaluated for retinal-image severity classification." },
      { title: "Grad-CAM Explainability", description: "Visualizations used to inspect image regions that influence model predictions." },
    ],
    githubUrl:
      "https://github.com/sadumina/Deep-Learning-Assignment-Group-ID-SE4050-G05/tree/Finalize-Models",
    demoUrl: "#",
  },
  {
    slug: "clever-campus",
    title: "Clever Campus",
    category: "Campus Management",
    description:
      "A modern campus management system that streamlines student, staff, schedule, and administrative operations.",
    stack: ["Java", "Spring Boot", "MySQL", "React"],
    problem:
      "Campus operations require reliable coordination across student records, staff workflows, schedules, and administration.",
    solution:
      "Clever Campus provides a structured management system with clear modules, database-backed workflows, and a responsive interface for day-to-day operations.",
    impact: ["Centralized core campus workflows", "Reduced repetitive administrative tasks", "Improved access to operational information"],
    features: ["Student and staff modules", "Schedule management", "Admin dashboards", "Spring Boot service layer"],
    screenshots: [
      { title: "Admin Workspace", description: "A clean control panel for managing campus entities and workflows." },
      { title: "Records Module", description: "Structured forms and tables for operational campus data." },
    ],
    githubUrl: "https://github.com/sadumina",
    demoUrl: "#",
  },
  {
    slug: "vehicle-detection-monitoring",
    title: "Vehicle Detection & Monitoring System",
    category: "Computer Vision",
    description:
      "A monitoring workflow for detecting vehicles, tracking activity, and supporting real-time visual decision making.",
    stack: ["Python", "OpenCV", "FastAPI", "Dashboard"],
    problem:
      "Manual vehicle monitoring is time-consuming and does not scale well for real-time observation or historical analysis.",
    solution:
      "The system combines computer vision detection with API services and dashboard views to support live monitoring and review workflows.",
    impact: ["Automated visual monitoring tasks", "Improved real-time awareness", "Created reusable detection and dashboard components"],
    features: ["Vehicle detection pipeline", "Monitoring dashboard", "FastAPI service endpoints", "Event-oriented review flow"],
    screenshots: [
      { title: "Detection Feed", description: "A visual monitoring surface for detected vehicles and activity states." },
      { title: "Monitoring Summary", description: "Operational metrics and event summaries for quick review." },
    ],
    githubUrl: "https://github.com/sadumina",
    demoUrl: "#",
  },
  {
    slug: "dreamworks-studio-management",
    title: "DreamWorks Studio Management System",
    category: "Business Operations",
    description:
      "A studio operations system for managing projects, clients, schedules, and internal production workflows.",
    stack: ["Next.js", "Express.js", "MongoDB", "Tailwind"],
    problem:
      "Creative studios need a clear way to coordinate clients, project timelines, assignments, and production operations.",
    solution:
      "DreamWorks Studio Management System organizes studio workflows into a modern web app with project tracking, client management, and operational dashboards.",
    impact: ["Improved visibility across studio work", "Simplified client and project coordination", "Created a scalable management foundation"],
    features: ["Project management", "Client records", "Schedule tracking", "Operational dashboards"],
    screenshots: [
      { title: "Studio Dashboard", description: "A polished overview of projects, clients, and current production status." },
      { title: "Project Workspace", description: "A focused workspace for tracking project details and progress." },
    ],
    githubUrl: "https://github.com/sadumina",
    demoUrl: "#",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
