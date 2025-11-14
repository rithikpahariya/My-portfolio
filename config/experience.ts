import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "assured",
    position: "Fullstack Developer",
    company: "Assured Health Technologies",
    location: "Gurugram, India",
    startDate: new Date("2024-11-01"),
    endDate: "Present",
    description: [
      "Built AI-powered UI features with Next.js, React, TypeScript, and Tailwind to automate provider data validation and credentialing.",
      "Developed React-based PDF annotation and document processing tools for faster internal reviews.",
      "Optimized frontend performance to improve Core Web Vitals and Lighthouse SEO scores.",
    ],
    achievements: [
      "Cut onboarding time by 50% and reduced manual verification errors by 60%.",
      "Processed 60+ documents daily via React-based PDF workflows, accelerating reviews by 40%.",
      "Improved LCP by 35%, CLS by 25%, and FID by 20%, resulting in higher SEO rankings.",
    ],
    skills: ["Next.js", "React", "Typescript", "Tailwind CSS", "AWS"],
    companyUrl: "https://www.withassured.com/",
    logo: "/experience/assured-health-logo.jpeg",
  },
  {
    id: "rakuten",
    position: "Frontend Engineer",
    company: "Rakuten Symphony",
    location: "Indore, Madhya Pradesh, India",
    startDate: new Date("2022-08-01"),
    endDate: new Date("2024-11-01"),
    description: [
      "Engineered core app infrastructure including authentication, routing, and WebSocket support.",
      "Developed a React/Tailwind CSS component library with container queries for consistency.",
      "Optimized Webpack pipeline, reducing bundle size and improving deployment efficiency.",
    ],
    achievements: [
      "Migrated 15+ components to TypeScript, reducing runtime errors by 40%.",
      "Fixed 150+ mobile UI bugs, improving responsiveness and accessibility.",
      "Reduced bundle size by 45% and deployment time by 20% with build optimizations.",
    ],
    skills: ["React", "Next.js", "Typescript", "Tailwind CSS", "Redux"],
    companyUrl: "https://symphony.rakuten.com",
    logo: "/experience/rakuten-symphony-logo.jpeg",
  },
  {
    id: "tcs",
    position: "Frontend Engineer",
    company: "Tata Consultancy Services",
    location: "Indore, Madhya Pradesh, India",
    startDate: new Date("2021-04-01"),
    endDate: new Date("2022-08-01"),
    description: [
      "Developed JavaScript SDKs with encryption for cross-app analytics.",
      "Built cross-platform dashboards using Chart.js to visualize key metrics in real time.",
      "Refactored legacy React codebases using Domain-Driven Design principles.",
    ],
    achievements: [
      "Enhanced accessibility by 50% and supported 5k+ users across SMB apps.",
      "Reduced decision-making delays by 35% through real-time data visualization.",
      "Improved code readability and reduced bug rates by 18% post-refactor.",
    ],
    skills: ["React", "JavaScript", "Chart.js", "HTML 5", "CSS 3"],
    companyUrl: "https://www.tcs.com",
    logo: "/experience/tcs-logo.jpeg",
  },
];
