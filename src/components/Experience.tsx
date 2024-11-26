import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, company, period, description }) => (
  <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-all">
    <div className="flex items-start gap-4">
      <Briefcase className="text-blue-400 flex-shrink-0" size={24} />
      <div>
        <h3 className="text-xl font-semibold text-blue-400">{title}</h3>
        <div className="flex items-center gap-2 text-gray-400 mt-1">
          <span>{company}</span>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{period}</span>
          </div>
        </div>
        <ul className="mt-4 space-y-2">
          {description.map((item, index) => (
            <li key={index} className="text-gray-300 flex items-start gap-2">
              <span className="text-blue-400 mt-1.5">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default function Experience() {
  const experiences = [
    {
      title: "IT Help Desk Technician",
      company: "Internet Market Bridge Alliance(imbra)",
      period: "Sep 2024 - Nov 2024",
      description: [
            "Assisted in the development of front-end features using React & Vue",
            "Participated in code reviews and team meetings",
            "Learned and implemented modern development workflows",
            "Contributed to the company's internal tools development"
      ]
    },
    {
      title: "Junior Remote Junior Software Developer",
      company: "Kamstartech",
      period: "Aug 2023 - Nov 2023",
      description: [
        "Developing and maintaining web applications using Laravel and Vue.js",
        "Collaborating with senior developers on large-scale projects",
        "Implementing responsive designs and ensuring cross-browser compatibility",
        "Writing clean, maintainable code following best practices",
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
