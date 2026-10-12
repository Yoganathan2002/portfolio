import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-20 md:py-32 dark:bg-slate-900 light:bg-white transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center dark:text-slate-100 light:text-slate-900">
          Get in <span className="dark:gradient-text light:text-blue-600">Touch</span>
        </h2>

        <div className="p-12 rounded-xl dark:bg-gradient-to-br dark:from-slate-800/50 dark:to-slate-900/50 light:bg-gradient-to-br light:from-slate-50 light:to-slate-100 dark:border dark:border-slate-700/50 light:border light:border-slate-200 dark:hover:border-blue-500/50 light:hover:border-blue-400/50 transition">
          <p className="dark:text-slate-300 light:text-slate-700 text-center mb-12 text-lg">
            I'm always interested in hearing about new opportunities and collaborations.
            Feel free to reach out!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <a
              href="mailto:vyoganathan007@outlook.com"
              className="group p-6 rounded-lg dark:bg-slate-700/30 light:bg-slate-100 dark:hover:bg-blue-500/10 light:hover:bg-blue-100 dark:border dark:border-slate-600/50 light:border light:border-slate-300 dark:hover:border-blue-500/50 light:hover:border-blue-400/50 transition"
            >
              <div className="text-3xl mb-3">✉️</div>
              <p className="font-semibold dark:text-slate-100 light:text-slate-900 dark:group-hover:text-blue-400 light:group-hover:text-blue-600 transition">Email</p>
              <p className="dark:text-slate-400 light:text-slate-600 text-sm mt-1">vyoganathan007@outlook.com</p>
            </a>

            <a
              href="https://linkedin.com/in/yoganathan-v"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-lg dark:bg-slate-700/30 light:bg-slate-100 dark:hover:bg-blue-500/10 light:hover:bg-blue-100 dark:border dark:border-slate-600/50 light:border light:border-slate-300 dark:hover:border-blue-500/50 light:hover:border-blue-400/50 transition"
            >
              <div className="text-3xl mb-3">💼</div>
              <p className="font-semibold dark:text-slate-100 light:text-slate-900 dark:group-hover:text-blue-400 light:group-hover:text-blue-600 transition">LinkedIn</p>
              <p className="dark:text-slate-400 light:text-slate-600 text-sm mt-1">linkedin.com/in/yoganathan-v</p>
            </a>

            <a
              href="tel:9344480923"
              className="group p-6 rounded-lg dark:bg-slate-700/30 light:bg-slate-100 dark:hover:bg-blue-500/10 light:hover:bg-blue-100 dark:border dark:border-slate-600/50 light:border light:border-slate-300 dark:hover:border-blue-500/50 light:hover:border-blue-400/50 transition"
            >
              <div className="text-3xl mb-3">📱</div>
              <p className="font-semibold dark:text-slate-100 light:text-slate-900 dark:group-hover:text-blue-400 light:group-hover:text-blue-600 transition">Phone</p>
              <p className="dark:text-slate-400 light:text-slate-600 text-sm mt-1">9344480923</p>
            </a>

            <a
              href="https://github.com/Yoganathan2002"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-lg dark:bg-slate-700/30 light:bg-slate-100 dark:hover:bg-blue-500/10 light:hover:bg-blue-100 dark:border dark:border-slate-600/50 light:border light:border-slate-300 dark:hover:border-blue-500/50 light:hover:border-blue-400/50 transition"
            >
              <div className="text-3xl mb-3">🐙</div>
              <p className="font-semibold dark:text-slate-100 light:text-slate-900 dark:group-hover:text-blue-400 light:group-hover:text-blue-600 transition">GitHub</p>
              <p className="dark:text-slate-400 light:text-slate-600 text-sm mt-1">github.com/Yoganathan2002</p>
            </a>
          </div>

          <div className="text-center">
            <p className="dark:text-slate-500 light:text-slate-600 text-sm">
              Based in India • Available for remote opportunities worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
