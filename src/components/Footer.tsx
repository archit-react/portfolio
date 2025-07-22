export default function Footer() {
  return (
    <footer className="py-6 px-4 bg-gray-100 dark:bg-gray-900 text-center text-sm text-gray-600 dark:text-gray-400">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-2">
        <p>
          &copy; {new Date().getFullYear()} Archit.dev — All rights reserved.
        </p>

        <div className="flex space-x-4">
          <a
            href="https://github.com/archit-react"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/archit-react"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:therethough@gmail.com"
            className="hover:text-rose-500 dark:hover:text-rose-400 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
