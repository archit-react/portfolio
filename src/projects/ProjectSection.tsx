import React from "react";
import CodeBlock from "./ui/CodeBlock";
import DemoCard from "./ui/DemoCard";

type ProjectSectionProps = {
  icon: string; // material icon name
  title: string;
  description: string;
  cta: { label: string; href?: string };
  codeFile: string;
  codeSnippet: string;
  demo: React.ReactNode;
  reversed?: boolean; // alternate layout
};

export default function ProjectSection(props: ProjectSectionProps) {
  const {
    icon,
    title,
    description,
    cta,
    codeFile,
    codeSnippet,
    demo,
    reversed,
  } = props;

  return (
    <div className="grid md:grid-cols-2 gap-16 items-center">
      {/* Text column */}
      <div className={reversed ? "md:order-2" : ""}>
        <span className="material-icons text-primary text-4xl mb-4">
          {icon}
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
          {title}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          {description}
        </p>
        <a
          href={cta.href || "#"}
          className="inline-block bg-primary px-6 py-3 rounded-md font-semibold text-gray-900 hover:opacity-90 transition-opacity"
        >
          {cta.label} →
        </a>
      </div>

      {/* Code + demo column */}
      <div className={reversed ? "md:order-1 space-y-4" : "space-y-4"}>
        <CodeBlock fileLabel={codeFile} code={codeSnippet} />
        <DemoCard>{demo}</DemoCard>
      </div>
    </div>
  );
}
