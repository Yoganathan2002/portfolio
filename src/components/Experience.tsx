import React from 'react';

interface Experience {
  title: string;
  company: string;
  period: string;
  achievements: string[];
  metrics: string[];
}

const experiences: Experience[] = [
  {
    title: 'Data Analyst',
    company: 'IIT Madras Research Park',
    period: 'Jan 2025 – Feb 2026',
    achievements: [
      'Built ETL pipelines that improved reporting accuracy and audit readiness',
      'Created interactive dashboards for performance monitoring',
      'Optimized queries and system performance',
      'Partnered with cross-functional teams on analytical solutions',
    ],
    metrics: ['25% latency reduction', '50K+ records analyzed', '100% uptime'],
  },
  {
    title: 'Software Engineer Intern',
    company: 'Crown Shield Securities',
    period: 'May 2024 – Jul 2024',
    achievements: [
      'Developed backend REST APIs for data system integration',
      'Improved MySQL query performance through optimization',
      'Produced audit-ready technical documentation',
      'Supported compliance and internal communication',
    ],
    metrics: ['30% query speedup', '3 APIs deployed', '0 compliance issues'],
  },
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-20 md:py-32 dark:bg-slate-900 light:bg-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center dark:text-slate-100 light:text-slate-900">
          Professional <span className="dark:gradient-text light:text-blue-600">Journey</span>
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group relative p-8 rounded-xl dark:bg-gradient-to-br dark:from-slate-800/50 dark:to-slate-900/50 light:bg-gradient-to-br light:from-slate-50 light:to-slate-100 dark:border dark:border-slate-700/50 light:border light:border-slate-200 dark:hover:border-blue-500/50 light:hover:border-blue-400/50 transition duration-300"
            >
              <div className="absolute inset-0 rounded-xl dark:bg-gradient-to-br dark:from-blue-500/0 dark:to-green-500/0 light:from-blue-500/5 light:to-green-500/5 group-hover:dark:from-blue-500/5 group-hover:dark:to-green-500/5 group-hover:light:from-blue-500/10 group-hover:light:to-green-500/10 transition pointer-events-none" />

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold dark:text-slate-100 light:text-slate-900">{exp.title}</h3>
                    <p className="text-blue-400 dark:text-blue-400 light:text-blue-600 font-semibold mt-1">{exp.company}</p>
                  </div>
                  <p className="dark:text-slate-400 light:text-slate-600 text-sm md:text-right mt-2 md:mt-0">{exp.period}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 dark:text-slate-300 light:text-slate-700">
                      <span className="text-green-400 dark:text-green-400 light:text-green-600 mt-1">→</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  {exp.metrics.map((metric, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full dark:bg-blue-500/10 light:bg-blue-100 dark:border dark:border-blue-500/20 light:border light:border-blue-300 dark:text-blue-300 light:text-blue-700 text-sm font-medium"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-xl dark:bg-slate-800/30 light:bg-slate-100/50 dark:border dark:border-slate-700/50 light:border light:border-slate-200">
          <h3 className="text-xl font-bold mb-6 dark:text-slate-100 light:text-slate-900">Education & Credentials</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-blue-400 dark:text-blue-400 light:text-blue-600 font-semibold">M.Sc. Information Technology</p>
              <p className="dark:text-slate-400 light:text-slate-600">University of Madras • 2025</p>
              <p className="text-green-400 dark:text-green-400 light:text-green-600 font-semibold mt-2">CGPA: 8.0</p>
            </div>
            <div>
              <p className="text-blue-400 dark:text-blue-400 light:text-blue-600 font-semibold">B.Sc. Computer Science</p>
              <p className="dark:text-slate-400 light:text-slate-600">Rajeswari Vedachalam Govt. Arts College • 2023</p>
              <p className="text-green-400 dark:text-green-400 light:text-green-600 font-semibold mt-2">CGPA: 8.9</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
