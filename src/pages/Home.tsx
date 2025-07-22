import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.section
      id="home"
      className="max-w-5xl mx-auto px-6 pt-6 pb-6 text-center flex flex-col items-center justify-center"
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
        Front-End Engineer building modern web experiences.
      </h1>

      <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
        Front-End Engineer with hands-on experience in building clean,
        high-performance UIs using React, TypeScript, and Tailwind CSS. Focused
        on delivering user-first design, scalable components, and
        production-grade apps that ship fast and look sharp.
      </p>
    </motion.section>
  );
}
