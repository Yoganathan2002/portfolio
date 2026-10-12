import React, { useState } from 'react';

interface Project {
  title: string;
  description: string;
  action: string;
  result: string;
  technologies: string[];
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: 'Sales Data Dashboard',
    description: 'Power BI dashboard analyzing 50K+ records',
    action: 'Built comprehensive business intelligence solution',
    result: 'Improved forecasting accuracy by 20%',
    technologies: ['Power BI', 'SQL', 'DAX'],
    github: 'https://github.com/Yoganathan2002',
  },
  {
    title: 'Employee Management System',
    description: 'Full-stack CRUD application with reporting',
    action: 'Designed MySQL database with interactive interface',
    result: 'Streamlined HR operations with real-time reporting',
    technologies: ['MySQL', 'HTML/CSS', 'JavaScript'],
    github: 'https://github.com/Yoganathan2002',
  },
  {
    title: 'ETL Pipeline Optimization',
    description: 'Automated data pipeline for audit readiness',
    action: 'Built scalable ETL system with monitoring',
    result: 'Reduced query latency by 25%, improved accuracy',
    technologies: ['Python', 'SQL', 'Airflow'],
    github: 'https://github.com/Yoganathan2002',
  },
  {
    title: 'Local AI Chatbot Backend',
    description: 'Event-driven backend handling 10K+ concurrent users',
    action: 'Architected Java Spring Boot + Kafka system',
    result: 'Deployed scalable microservice with zero downtime',
    technologies: ['Java', 'Spring Boot', 'Kafka'],
    github: 'https://github.com/Yoganathan2002',
  },
];

export const Projects: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-20 md:py-32 dark:bg-slate-900 light:bg-slate-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center dark:text-slate-100 light:text-slate-900">
          Featured <span className="dark:gradient-text light:text-blue-600">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="group relative p-8 rounded-xl dark:bg-slate-800/50 light:bg-white dark:border dark:border-slate-700/50 light:border light:border-slate-200 dark:hover:border-blue-500/50 light:hover:border-blue-400/50 transition duration-300 transform hover:-translate-y-1 dark:hover:shadow-lg dark:hover:shadow-blue-500/20 light:hover:shadow-lg light:hover:shadow-blue-400/10 overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 rounded-xl dark:bg-gradient-to-br dark:from-blue-500/0 dark:to-green-500/0 light:from-blue-500/5 light:to-green-500/5 group-hover:dark:from-blue-500/10 group-hover:dark:to-green-500/10 group-hover:light:from-blue-500/15 group-hover:light:to-green-500/15 transition pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold dark:text-slate-100 light:text-slate-900 flex-1">{project.title}</h3>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-4 p-2 rounded-lg dark:bg-slate-700/50 light:bg-slate-100 dark:hover:bg-blue-500/20 light:hover:bg-blue-100 transition"
                      aria-label="GitHub"
                    >
                      <svg
                        className="w-5 h-5 dark:text-slate-300 light:text-slate-700 dark:group-hover:text-blue-400 light:group-hover:text-blue-600 transition"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 . 405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                  )}
                </div>

                <p className="dark:text-slate-400 light:text-slate-600 mb-4">{project.description}</p>

                <div className="mb-6">
                  <p className="text-sm dark:text-slate-500 light:text-slate-600 mb-2">
                    <span className="text-blue-400 dark:text-blue-400 light:text-blue-600">Action:</span> {project.action}
                  </p>
                  <p className="text-sm dark:text-green-400 light:text-green-600">
                    <span className="dark:text-green-500 light:text-green-700">Result:</span> {project.result}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full dark:bg-blue-500/10 light:bg-blue-100 dark:border dark:border-blue-500/20 light:border light:border-blue-300 dark:text-blue-300 light:text-blue-700 text-xs font-medium dark:hover:bg-blue-500/20 light:hover:bg-blue-200 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute top-0 right-0 w-20 h-20 dark:bg-gradient-to-br dark:from-blue-500/20 dark:to-green-500/20 light:from-blue-500/10 light:to-green-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
