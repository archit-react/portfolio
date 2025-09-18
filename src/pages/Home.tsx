// src/pages/Home.tsx

export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200">
      {/* Hero with header merged */}
      <section
        className="
          relative
          w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] /* full-bleed */
          pt-28 pb-16 lg:pt-44 lg:pb-28
          overflow-hidden
          bg-gradient-to-br from-green-300 via-yellow-200 to-green-300
          dark:from-emerald-900 dark:via-yellow-900 dark:to-emerald-900
        "
      >
        {/* Header */}
        <header className="absolute inset-x-0 top-0 z-50">
          <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
            <a
              href="#top"
              className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white"
            />
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a
                href="#about"
                className="text-gray-900 dark:text-gray-100 hover:text-amber-600 dark:hover:text-amber-400"
              >
                About
              </a>
              <a
                href="#contact" /* was "#projects" */
                className="text-gray-900 dark:text-gray-100 hover:text-amber-600 dark:hover:text-amber-400"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-900 dark:text-gray-100 hover:text-amber-600 dark:hover:text-amber-400"
              >
                Contact
              </a>
            </nav>
          </div>
        </header>

        {/* Hero content */}
        <div className="mx-auto max-w-6xl px-14 text-center relative z-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-yellow-600 relative mb-9 -left-5">
            Introduction
          </p>

          <h1 className="mt-2 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-900 dark:text-white">
            Archit Sharma
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            A full-stack developer who ships clean, accessible UIs and robust
            APIs. I love TypeScript, React, Tailwind, Node.js, MongoDB, and good
            CI/CD. Currently building delightful product experiences and
            data-driven dashboards.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#contact" /* was "#projects" */
              className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-6 py-3
                       text-white font-semibold hover:bg-gray-800 dark:bg-white dark:text-gray-900
                       dark:hover:bg-gray-200 transition-colors"
            >
              View my work
            </a>

            {/* Command box */}
            <div className="inline-flex items-center gap-3 rounded-lg bg-black/70 text-white dark:bg-gray-800/80 px-4 py-3 backdrop-blur-sm">
              <code className="text-sm">
                $ pnpm create vite my-portfolio --template react-ts
              </code>
              <button
                className="text-gray-300 hover:text-white"
                aria-label="Copy command"
                onClick={() =>
                  navigator.clipboard.writeText(
                    "pnpm create vite my-portfolio --template react-ts"
                  )
                }
              >
                <svg width="18" height="18" fill="none" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 16H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6m2 2h-6a2 2 0 0 0-2 2v6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Have a project in mind?
          </h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            I’m open to full-time roles and interesting freelance work.
          </p>
        </div>
      </section>
    </main>
  );
}
