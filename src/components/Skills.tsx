import React from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}

const skills: Skill[] = [
  { name: 'SQL', level: 95, category: 'Data', icon: '📊' },
  { name: 'Python', level: 90, category: 'Programming', icon: '🐍' },
  { name: 'ETL Pipelines', level: 88, category: 'Data', icon: '🔄' },
  { name: 'Power BI', level: 85, category: 'Visualization', icon: '📈' },
  { name: 'AWS', level: 75, category: 'Cloud', icon: '☁️' },
  { name: 'Java', level: 85, category: 'Programming', icon: '☕' },
];

export const Skills: React.FC = () => {
  return (
    <section id="about" className="relative py-20 md:py-32 dark:bg-slate-900 light:bg-slate-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center dark:text-slate-100 light:text-slate-900">
          Core <span className="dark:gradient-text light:text-blue-600">Expertise</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group p-6 rounded-xl dark:bg-slate-800/50 light:bg-white dark:border dark:border-slate-700/50 light:border light:border-slate-200 dark:hover:border-blue-500/50 light:hover:border-blue-400/50 dark:hover:bg-slate-800/80 light:hover:bg-slate-50 transition duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{skill.icon}</span>
                  <div>
                    <h3 className="font-semibold dark:text-slate-100 light:text-slate-900">{skill.name}</h3>
                    <p className="text-xs dark:text-slate-400 light:text-slate-600">{skill.category}</p>
                  </div>
                </div>
              </div>

              <div className="w-full h-2 dark:bg-slate-700/50 light:bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <p className="text-right text-sm dark:text-slate-400 light:text-slate-600 mt-2">{skill.level}%</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 rounded-xl dark:bg-slate-800/50 light:bg-white dark:border dark:border-slate-700/50 light:border light:border-slate-200 dark:hover:border-green-500/50 light:hover:border-green-400/50 transition">
            <h3 className="text-2xl font-bold mb-4 dark:text-slate-100 light:text-slate-900">Backend & Data Systems</h3>
            <ul className="space-y-2 dark:text-slate-300 light:text-slate-700">
              <li>✓ Data Pipeline Architecture</li>
              <li>✓ ETL Automation & Orchestration</li>
              <li>✓ Database Optimization (MySQL, PostgreSQL)</li>
              <li>✓ REST API Development</li>
            </ul>
          </div>

          <div className="p-8 rounded-xl dark:bg-slate-800/50 light:bg-white dark:border dark:border-slate-700/50 light:border light:border-slate-200 dark:hover:border-green-500/50 light:hover:border-green-400/50 transition">
            <h3 className="text-2xl font-bold mb-4 dark:text-slate-100 light:text-slate-900">Analytics & Visualization</h3>
            <ul className="space-y-2 dark:text-slate-300 light:text-slate-700">
              <li>✓ Power BI Dashboard Design</li>
              <li>✓ Tableau Interactive Reports</li>
              <li>✓ Business Intelligence Solutions</li>
              <li>✓ Data-Driven Decision Making</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
