import React from 'react';
import { Github, ExternalLink, Folder } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  image
}) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300">
    <div className="relative h-48 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent"></div>
    </div>
    <div className="p-6">
      <div className="flex items-start justify-between mb-4">
        <Folder className="text-blue-400" size={24} />
        <div className="flex gap-3">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors">
            <Github size={20} />
          </a>
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors">
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-blue-400">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span key={index} className="text-sm bg-gray-700 text-gray-300 px-3 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      description: "A comprehensive dashboard for managing online store operations with real-time analytics and inventory management.",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
      githubUrl: "https://github.com/kangwajr",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      githubUrl: "https://github.com/kangwajr",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2055&q=80"
    },
    {
      title: "Weather Forecast App",
      description: "A modern weather application with detailed forecasts, interactive maps, and location-based services.",
      technologies: ["React", "OpenWeather API", "Leaflet"],
      githubUrl: "https://github.com/kangwajr",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80"
    },
    {
      title: "Personal Blog Platform",
      description: "A full-featured blogging platform with markdown support, comments, and user authentication.",
      technologies: ["Next.js", "PostgreSQL", "Prisma", "Auth.js"],
      githubUrl: "https://github.com/kangwajr",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
    },
    {
      title: "Fitness Tracking App",
      description: "A mobile-responsive fitness tracking application with workout plans and progress monitoring.",
      technologies: ["React Native", "Redux", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/kangwajr",
      image: "https://images.unsplash.com/photo-1461773518188-b3e86f98242f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
    },
    {
      title: "Real-time Chat Application",
      description: "A real-time messaging application with group chats, file sharing, and end-to-end encryption.",
      technologies: ["React", "Socket.io", "Express", "MongoDB"],
      githubUrl: "https://github.com/kangwajr",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1557853197-aefb550b6fdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">All Projects</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          A comprehensive collection of my projects showcasing my skills in web development, 
          mobile applications, and software engineering.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}