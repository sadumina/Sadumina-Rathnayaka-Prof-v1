export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type ProjectItem = {
  slug: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  problem: string;
  solution: string;
  impact: string[];
  features: string[];
  screenshots: {
    title: string;
    description: string;
  }[];
  githubUrl: string;
  demoUrl: string;
};
