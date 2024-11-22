import React from 'react';
import { Code2, Database, Globe, Cpu, GitBranch, Terminal } from 'lucide-react';

const SkillCard = ({ icon: Icon, title, skills }: { icon: any, title: string, skills: string[] }) => (
  <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-all">
    <Icon className="text-blue-400 mb-4" size={32} />
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="text-gray-300 flex items-center gap-2">
          <span className="text-blue-400">•</span>
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

export default function Skills() {
  const skillsets = [
    {
      icon: Code2,
      title: "Frontend Development",
      skills: ["HTML5 & CSS3", "JavaScript/TypeScript", "React.js", "Tailwind CSS", "Responsive Design"]
    },
    {
      icon: Database,
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "RESTful APIs", "MongoDB", "SQL Databases"]
    },
    {
      icon: Globe,
      title: "Web Technologies",
      skills: ["Web APIs", "HTTP/HTTPS", "Browser DevTools", "Web Security", "Performance Optimization"]
    },
    {
      icon: Terminal,
      title: "Development Tools",
      skills: ["VS Code", "Command Line", "npm/yarn", "Webpack", "Vite"]
    },
    {
      icon: GitBranch,
      title: "Version Control",
      skills: ["Git", "GitHub", "Branching Strategies", "Code Review", "Collaboration"]
    },
    {
      icon: Cpu,
      title: "Other Skills",
      skills: ["Problem Solving", "Clean Code", "Testing", "Documentation", "Agile Methodologies"]
    }
  ];

  return (
    <section className="py-20 bg-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 pt-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsets.map((skillset, index) => (
            <SkillCard key={index} {...skillset} />
          ))}
        </div>
      </div>
    </section>
  );
}