import { Experience, Project } from "./types";

export const experiences: Experience[] = [
  {
    id: 1,
    date: "Jan 2024 - May 2024",
    title: "Frontend Engineer",
    company: "Hopserve",
    tasks: [
      "Created a CSPM, a tool to analyze and make sure AWS or Azure infrastructures are secure and check their compliance for frameworks like HIPAA, PCI DSS, etc.",
      "Created an SDK tool to review front-end PR's through pinned comments and screenshots.",
    ],
    skills: ["nuxt", "typescript", "d3"],
    url: "https://hopserve.io/",
  },
  {
    id: 2,
    date: "Mar 2021 - Dec 2023",
    title: "Frontend Engineer",
    company: "Dreem",
    tasks: [
      "Maintained and upgraded an internal tool used to list and display Dreem headband signals (EEG and accelerometer) to sell to researchers and pharma groups.",
      "Created and led an enrollment (as sales tunnel) for Dreem's digital Sleep Clinic (DreemHealth): series of questions about patient sleep, presentation of the clinic, appointment and complementary questions.",
      "Created a back-office to get all patients data from enrollment and also from Sleep Plan, the mobile app for patients in the clinic.",
      "Created a series of satisfaction surveys for patients of the sleep clinic.",
      "Created corporate websites dreem.com 🪦 and dreemhealth.com",
      "Led all front-end projects and ensured a technical referent role for a junior front-end developer.",
    ],
    skills: ["react", "typescript", "d3"],
    url: "https://dreemhealth.com/",
  },
  {
    id: 3,
    date: "Sep 2019 - Feb 2021",
    title: "Fullstack Developer",
    company: "Défipix by Sismik",
    tasks: [
      "Created a flow to rent a photobooth taking into account all technical constraints: Booth type, delivery, options, installation, payment, invoice, etc.",
      "Created a dashboard to follow rentals with basic CRUD operations.",
      "Created payment links.",
    ],
    skills: ["react", "vue", "node", "javascript"],
    url: "https://defipix.fr/",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    date: "May 23",
    title: "React component notification",
    description: "Created a simple notification package to get comfortable with using npm.",
    skills: ["npm", "react", "typescript"],
    url: "https://www.npmjs.com/package/react-component-notification",
  },
  {
    id: 2,
    date: "May 24",
    title: "My Pretty Keyboard",
    description: "A web-app to design and test the display of virtual custom keyboards. The real objective behind is to learn about R3F library and 3D objects.",
    skills: ["react", "typescript", "r3f"],
    url: "https://my-pretty-keyboard.vercel.app/",
  },
];
