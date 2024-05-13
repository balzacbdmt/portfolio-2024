export type Skill =
  | "javascript"
  | "typescript"
  | "react"
  | "vue"
  | "nuxt"
  | "node"
  | "d3"
  | "npm"
  | "r3f";

export type Experience = {
  id: number;
  date: string;
  title: string;
  company: string;
  tasks: string[];
  skills: Skill[];
  url: string;
};

export type Project = {
  id: number;
  date: string;
  title: string;
  description: string;
  skills: Skill[];
  url?: string;
};
