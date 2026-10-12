import React, { useState, useEffect } from 'react';
import { Settings } from './Settings';

export const Navbar: React.FC = () => {
  const [isDark, setIsDark] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setIsMounted(true);

    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDark = savedTheme ? savedTheme === 'dark' : prefersDark;

    setIsDark(initialDark);
    applyTheme(initialDark);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      if (window.scrollY < 500) {
        setActiveSection('home');
      } else {
        const sections = ['about', 'experience', 'projects', 'contact'];
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top < 200) {
              setActiveSection(section);
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const applyTheme = (dark: boolean) => {
    const html = document.documentElement;
    const body = document.body;

    if (dark) {
      html.classList.add('dark');
      html.classList.remove('light');
      body.classList.add('dark');
      body.classList.remove('light');
    } else {
      html.classList.remove('dark');
      html.classList.add('light');
      body.classList.remove('dark');
      body.classList.add('light');
    }

    localStorage.setItem('theme', dark ? 'dark' : 'light');
    window.dispatchEvent(new CustomEvent('themechange'));
  };

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    applyTheme(newDark);
  };

  if (!isMounted) return null;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'dark:bg-slate-900/80 light:bg-white/80 backdrop-blur-2xl dark:border-b dark:border-slate-700/50 light:border-b light:border-slate-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          data-nav="home"
          className="text-2xl font-bold hover:opacity-80 transition transform hover:scale-110"
        >
          <span className="dark:gradient-text light:text-blue-600">Y</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#"
            data-nav="home"
            className={`relative px-3 py-2 transition-all duration-300 font-medium cursor-pointer ${
              activeSection === 'home'
                ? 'dark:text-blue-400 light:text-blue-600'
                : 'dark:text-slate-300 light:text-slate-700 dark:hover:text-blue-400 light:hover:text-blue-600'
            }`}
          >
            Home
            {activeSection === 'home' && (
              <div className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" />
            )}
          </a>

          <a
            href="#about"
            data-nav="about"
            className={`relative px-3 py-2 transition-all duration-300 font-medium cursor-pointer ${
              activeSection === 'about'
                ? 'dark:text-blue-400 light:text-blue-600'
                : 'dark:text-slate-300 light:text-slate-700 dark:hover:text-blue-400 light:hover:text-blue-600'
            }`}
          >
            About
            {activeSection === 'about' && (
              <div className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" />
            )}
          </a>

          <a
            href="#experience"
            data-nav="experience"
            className={`relative px-3 py-2 transition-all duration-300 font-medium cursor-pointer ${
              activeSection === 'experience'
                ? 'dark:text-blue-400 light:text-blue-600'
                : 'dark:text-slate-300 light:text-slate-700 dark:hover:text-blue-400 light:hover:text-blue-600'
            }`}
          >
            Experience
            {activeSection === 'experience' && (
              <div className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" />
            )}
          </a>

          <a
            href="#projects"
            data-nav="projects"
            className={`relative px-3 py-2 transition-all duration-300 font-medium cursor-pointer ${
              activeSection === 'projects'
                ? 'dark:text-blue-400 light:text-blue-600'
                : 'dark:text-slate-300 light:text-slate-700 dark:hover:text-blue-400 light:hover:text-blue-600'
            }`}
          >
            Projects
            {activeSection === 'projects' && (
              <div className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" />
            )}
          </a>

          <a
            href="#contact"
            data-nav="contact"
            className={`relative px-3 py-2 transition-all duration-300 font-medium cursor-pointer ${
              activeSection === 'contact'
                ? 'dark:text-blue-400 light:text-blue-600'
                : 'dark:text-slate-300 light:text-slate-700 dark:hover:text-blue-400 light:hover:text-blue-600'
            }`}
          >
            Contact
            {activeSection === 'contact' && (
              <div className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" />
            )}
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Settings />
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full dark:hover:bg-slate-800 light:hover:bg-slate-100 transition transform hover:scale-110"
            aria-label="Toggle theme"
            title="Toggle Dark/Light Mode"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
};
