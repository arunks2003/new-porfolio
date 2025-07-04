// src/data/skillsData.js
import {
  Cpu,
  Puzzle,
  Database,
  Brain,
  Wrench,
  FileCode,
  SquareStack,
  TerminalSquare,
  Type,
  DatabaseBackup,
  Atom,
  Server,
  Network,
  GitFork,
  ScrollText,
  GitCommit,
  Globe,
  Smartphone,
  Code2,
  FileType2 as Html,
} from "lucide-react";

export const skillsData = {
  technical: [
    {
      category: "Languages",
      icon: FileCode,
      items: [
        { name: "C++", icon: TerminalSquare, proficiency: 5 },
        { name: "Java", icon: Cpu, proficiency: 3 },
        { name: "JavaScript", icon: SquareStack, proficiency: 4 },
        { name: "TypeScript", icon: Type, proficiency: 4 },
        { name: "HTML/CSS", icon: Html, proficiency: 5 },
        { name: "SQL", icon: DatabaseBackup, proficiency: 4 },
      ],
    },
    {
      category: "Frameworks/Libraries",
      icon: Puzzle,
      items: [
        { name: "React", icon: Atom, proficiency: 5 },
        { name: "Node.js", icon: Server, proficiency: 4.5 },
        { name: "Express", icon: Network, proficiency: 4 },
        { name: "Next.js", icon: Globe, proficiency: 4.5 },
        { name: "Redux", icon: GitFork, proficiency: 4 },
        { name: "TailwindCSS", icon: Smartphone, proficiency: 4 },
      ],
    },
    {
      category: "Databases",
      icon: Database,
      items: [
        { name: "MongoDB", icon: Database, proficiency: 4.5 },
        { name: "Firebase", icon: DatabaseBackup, proficiency: 4 },
        { name: "Supabase", icon: DatabaseBackup, proficiency: 4 },
        { name: "Appwrite", icon: DatabaseBackup, proficiency: 4 },
      ],
    },
    {
      category: "IT Constructs",
      icon: Brain,
      items: [
        { name: "Data Structures", icon: SquareStack, proficiency: 5 },
        { name: "Algorithms", icon: GitFork, proficiency: 5 },
        { name: "Operating Systems", icon: Cpu, proficiency: 4.5 },
        { name: "DBMS", icon: Database, proficiency: 4 },
        { name: "OOP", icon: Puzzle, proficiency: 4.5 },
        { name: "Computer Networks", icon: Network, proficiency: 3.5 },
      ],
    },
    {
      category: "Other Tools",
      icon: Wrench,
      items: [
        { name: "Git", icon: GitCommit, proficiency: 4.5 },
        { name: "GitHub", icon: GitFork, proficiency: 4.5 },
        { name: "REST APIs", icon: Network, proficiency: 4 },
        { name: "SEO", icon: Globe, proficiency: 3.5 },
        { name: "Responsive Design", icon: Smartphone, proficiency: 4.5 },
      ],
    },
  ],
  soft: [
    {
      name: "Debugging complex code logic",
      icon: Wrench,
      proficiency: 4.5,
    },
    {
      name: "Cross-functional collaboration",
      icon: GitFork,
      proficiency: 4,
    },
    {
      name: "Technical documentation",
      icon: ScrollText,
      proficiency: 4.5,
    },
    {
      name: "Data-driven decision making",
      icon: Brain,
      proficiency: 4,
    },
  ],
};
