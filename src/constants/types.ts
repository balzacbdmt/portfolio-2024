export type Skill =
  | "javascript"
  | "typescript"
  | "react"
  | "vue"
  | "nuxt"
  | "node"
  | "d3";

export type Experience = {
  id: number;
  date: string;
  title: string;
  company: string;
  description: string;
  skills: Skill[];
};
