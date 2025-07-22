import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="sticky top-0 z-50 bg-transparent backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px- py-0 flex justify-between items-center">
        {/* Left - Logo/Name */}
        <div className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          Archit Sharma
        </div>

        {/* Right - Navigation */}
        <nav className="flex items-center space-x-4">
          <a href="#home" className="text-sm font-medium hover:text-blue-600">
            Home
          </a>
          <a
            href="#projects"
            className="text-sm font-medium hover:text-blue-600"
          >
            Projects
          </a>
          <a href="#about" className="text-sm font-medium hover:text-blue-600">
            About
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-blue-600"
          >
            Resume
          </a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-2 p-2 rounded-full hover:scale-110 transition"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </nav>
      </div>
    </header>
  );
}
