// src/pages/Projects.tsx
import { motion } from "framer-motion";

export default function Projects() {
  const projectList = [
    {
      title: "AI Code Generator",
      description:
        "Generates code with Gemini AI in real-time using typewriter animation and syntax highlighting.",
      link: "https://ai-code-generator-navy.vercel.app/",
    },
    {
      title: "AI ChatBot",
      description:
        "Chat interface powered by Gemini API with model switcher, scroll memory, and dark/light mode.",
      link: "https://ai-chat-bot-app-seven.vercel.app/",
    },
    {
      title: "Admin Dashboard",
      description:
        "Dashboard with charts, filters, role-based views, dark mode, and animated analytics panels.",
      link: "https://admin-dashboard-green-nine.vercel.app/",
    },
    {
      title: "Post Scheduler UI",
      description:
        "Create, edit, and schedule posts with local cache, alarm reminders, and custom date picker.",
      link: "https://post-scheduler-ui.vercel.app/",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="px-6 max-w-6xl mx-auto text-gray-900 dark:text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-6 mt-1">Projects</h2>{" "}
      {/* Added negative margin-top */}
      <div className="grid gap-6 sm:grid-cols-2">
        {" "}
        {projectList.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-xl border border-gray-200 dark:border-gray-700 backdrop-blur-md bg-white/40 dark:bg-white/10 transition hover:scale-[1.015] hover:shadow-md hover:border-blue-500 dark:hover:border-blue-400"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition">
              {project.title}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {project.description}
            </p>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}
