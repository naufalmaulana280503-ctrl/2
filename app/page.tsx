"use client";

import { useState, useEffect } from "react";
import { portfolioData } from "./data/portfolioData";

export default function Home() {
  const [lang, setLang] = useState("en");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

 const t = (portfolioData as any)[lang];

  return (
    <div className="min-h-screen font-sans bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/90 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold tracking-tight text-lg text-slate-900 dark:text-white">
            NM.
          </span>

          <nav className="flex items-center gap-6">
            <div className="flex items-center gap-3 border-r pr-4 border-slate-300 dark:border-slate-700">
              <button
                onClick={() => setLang(lang === "en" ? "id" : "en")}
                className="text-xs font-semibold px-2 py-1 rounded bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:opacity-80 transition"
              >
                {lang === "en" ? "🇮🇩 ID" : "🇬🇧 EN"}
              </button>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-1 rounded-full text-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition"
              >
                {darkMode ? "☀️" : "🌙"}
              </button>
            </div>
            <a
              href="#projects"
              className="text-sm font-medium opacity-80 hover:opacity-100 transition text-slate-800 dark:text-slate-200"
            >
              {t.nav.projects}
            </a>
            <a
              href="#experience"
              className="text-sm font-medium opacity-80 hover:opacity-100 transition text-slate-800 dark:text-slate-200"
            >
              {t.nav.experience}
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16 space-y-24">
        {/* HERO */}
        <section className="py-8 space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-slate-900 dark:text-white">
              {t.hero.title}
            </h1>
            <p className="text-xl font-medium text-emerald-600 dark:text-emerald-400">
              {t.hero.subtitle}
            </p>
          </div>
          <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300 max-w-2xl">
            {t.hero.description}
          </p>
          <div>
            {/* LINK LINKEDIN ASLI LU UDAH AMAN DI SINI BRO */}
            <a
              href="https://www.linkedin.com/in/naufal-maulana-b1689b202"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold bg-emerald-600 text-white hover:bg-emerald-500 transition-colors shadow-md"
            >
              {t.hero.cta}
            </a>
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="border-t border-slate-200 dark:border-slate-800 pt-12 space-y-8"
        >
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              {t.projects.title}
            </h2>
            <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
              {t.projects.tech}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {t.projects.items.map((project: any, index: any) => (
              <div
                key={index}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-lg transition-all overflow-hidden"
              >
                {/* WADAH FOTO WARUNG */}
                {project.image && (
                  <div className="w-full h-64 sm:h-96 overflow-hidden bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                )}

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-emerald-600 dark:text-emerald-400">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-5 leading-relaxed">
                    {project.description}
                  </p>
                  <ul className="space-y-2 text-sm text-slate-800 dark:text-slate-200">
                    {project.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2">
                        <span className="text-emerald-500 mt-0.5">✦</span>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section
          id="experience"
          className="border-t border-slate-200 dark:border-slate-800 pt-12 space-y-8"
        >
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.experience.title}
          </h2>

          <div className="space-y-8 relative border-l-2 border-slate-200 dark:border-slate-700 pl-4 ml-2">
            {t.experience.items.map((exp, index) => (
              <div key={index} className="relative space-y-1">
                <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-slate-50 dark:ring-slate-950 transition-colors"></div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    {exp.period}
                  </span>
                </div>
                <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  {exp.company}
                </p>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed pt-1.5">
                  {exp.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-xs text-center py-8 mt-24">
        © 2026 Naufal Maulana. All rights reserved. Built with Next.js & Clean
        Architecture.
      </footer>
    </div>
  );
}
