import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function PreferenceSwitcher() {
  const [theme, setTheme] = useState('light');
  const [view, setView] = useState('compact');

  const themes = [
    { id: 'light', label: 'Light', desc: 'Clean and bright interface' },
    { id: 'dark', label: 'Dark', desc: 'Easy on the eyes for night viewing' },
    { id: 'minimal', label: 'Minimal', desc: 'Distraction-free experience' }
  ];
  const views = [
    { id: 'compact', label: 'Compact', desc: 'Essential information' },
    { id: 'detailed', label: 'Detailed', desc: 'Complete details and context' }
  ];

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'light';
    setTheme(saved);
    applyTheme(saved);
  }, []);

  const applyTheme = (t) => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark', 'minimal');
    root.classList.add(t);
    localStorage.setItem('theme', t);
  };

  const handleThemeChange = (t) => {
    setTheme(t);
    applyTheme(t);
  };

  const getThemeLabel = (id) => themes.find(t => t.id === id)?.label;
  const getViewLabel = (id) => views.find(v => v.id === id)?.label;

  return (
    <section className="py-20 px-8 lg:px-16" style={{ color: 'var(--color-dark)' }}>
      <div className="max-w-5xl">
        <div className="mb-16">
          <h2 className="text-5xl font-bold mb-4">Personalize Your Experience</h2>
          <p className="text-lg opacity-75">Customize the interface to suit your preferences and workflow</p>
        </div>

        {/* Theme Switcher */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6">Theme</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {themes.map((t) => (
              <motion.button
                key={t.id}
                onClick={() => handleThemeChange(t.id)}
                className="p-4 rounded-lg text-left transition-all border-2"
                style={{
                  borderColor: theme === t.id ? 'var(--color-teal)' : 'var(--color-cell-border)',
                  backgroundColor: theme === t.id ? 'rgba(0, 181, 173, 0.1)' : 'transparent',
                }}
                whileHover={{ y: -2 }}
              >
                <div className="font-semibold">{t.label}</div>
                <div className="text-sm opacity-60">{t.desc}</div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* View Switcher */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6">Content Display</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {views.map((v) => (
              <motion.button
                key={v.id}
                onClick={() => setView(v.id)}
                className="p-4 rounded-lg text-left transition-all border-2"
                style={{
                  borderColor: view === v.id ? 'var(--color-orange)' : 'var(--color-cell-border)',
                  backgroundColor: view === v.id ? 'rgba(245, 166, 35, 0.1)' : 'transparent',
                }}
                whileHover={{ y: -2 }}
              >
                <div className="font-semibold">{v.label}</div>
                <div className="text-sm opacity-60">{v.desc}</div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Preview */}
        <motion.div
          key={`${theme}-${view}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="p-8 rounded-xl border-2"
          style={{
            borderColor: 'var(--color-cell-border)',
            backgroundColor: theme === 'dark' ? 'rgba(0, 181, 173, 0.05)' : theme === 'minimal' ? 'rgba(0, 0, 0, 0.02)' : 'rgba(0, 181, 173, 0.08)',
          }}
        >
          <div className="space-y-4">
            <p className="font-semibold text-lg">Preview Settings</p>
            <div className="grid grid-cols-2 gap-6 text-sm">
              <div>
                <p className="opacity-60">Active Theme</p>
                <p className="font-semibold text-base">{getThemeLabel(theme)}</p>
              </div>
              <div>
                <p className="opacity-60">Content View</p>
                <p className="font-semibold text-base">{getViewLabel(view)}</p>
              </div>
            </div>
            <p className="text-sm opacity-70 pt-4">Your preferences are automatically saved and will be restored when you return.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
