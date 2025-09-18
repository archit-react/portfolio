import { projects } from "./data";
import ProjectSection from "./ProjectSection";

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-32">
      {projects.map((p, i) => (
        <ProjectSection key={p.title} {...p} reversed={i % 2 === 1} />
      ))}
    </div>
  );
}
