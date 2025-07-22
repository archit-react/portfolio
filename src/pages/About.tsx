// src/pages/About.tsx
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="px-6 py-20 max-w-4xl mx-auto text-gray-900 dark:text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
      <p className="text-lg leading-relaxed text-center">
        Front-End Engineer with 1 year of experience crafting responsive,
        scalable web apps using React, TypeScript, and Tailwind CSS. Focused on
        clean architecture, reusable components, and performance-first UI.
        Shipped production-grade projects across dashboards, AI tools, and
        modern UIs with real-time features, markdown editing, and Firebase sync.
      </p>
    </motion.section>
  );
}
