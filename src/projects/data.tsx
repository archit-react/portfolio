import type { ReactNode } from "react";

export type Project = {
  icon: string;
  title: string;
  description: string;
  cta: { label: string; href?: string };
  codeFile: string;
  codeSnippet: string;
  demo: ReactNode;
};

export const projects: Project[] = [
  {
    icon: "Rev9",
    title: "Revenue Dashboard",
    description:
      "Full-stack MERN analytics app with charts, export, dark/light theme, and micro-animations. Built to be 2025-modern and recruiter-ready.",
    cta: { label: "View Project", href: "/rev9" },
    codeFile: "src/pages/Rev9/Dashboard.tsx",
    codeSnippet: `export default function Dashboard() {
  return (
    <section className="p-6">
      <h1 className="text-xl font-semibold">Revenue Overview</h1>
      <RevenueTrend data={chartData} />
      {/* pie between trend & analytics */}
      <RevenueDistribution segments={segments} />
      <AnalyticalOverview />
    </section>
  );
}`,
    demo: (
      <div className="text-center">
        <p className="mb-1 text-sm opacity-80">Revenue this month</p>
        <p className="text-3xl font-bold">$42,300</p>
        <p className="text-sm opacity-80">▲ 12.4% vs last month</p>
      </div>
    ),
  },
  {
    icon: "Bud8",
    title: "AI Chatbot",
    description:
      "Conversational assistant with context memory, typing indicators, and clean chat UI using React + Tailwind.",
    cta: { label: "Try Chatbot", href: "/chatbot" },
    codeFile: "src/pages/Chatbot/index.tsx",
    codeSnippet: `const [messages, setMessages] = useState([{ role: "bot", text: "Hi! Ask me anything." }]);
function send(text: string) {
  setMessages((m) => [...m, { role: "user", text }]);
  // call API, stream reply...
}`,
    demo: (
      <div className="space-y-2 text-sm">
        <p>
          <strong>User:</strong> What's the weather today?
        </p>
        <p>
          <strong>Bot:</strong> Sunny with a high of 28°C
        </p>
      </div>
    ),
  },
  {
    icon: "CodeZ",
    title: "AI Code Generator",
    description:
      "Prompt-to-component generator that outputs type-safe React + TS. Ships with copy and download actions.",
    cta: { label: "Generate Code", href: "/codegen" },
    codeFile: "src/lib/generator.ts",
    codeSnippet: `export function genButton(label: string) {
  return \`<button className="px-4 py-2 rounded-md">\${label}</button>\`;
}`,
    demo: (
      <div className="flex items-center justify-center gap-3">
        <button className="px-4 py-2 rounded-md bg-white/80 dark:bg-black/30">
          Click Me
        </button>
        <span className="text-sm opacity-80">Generated snippet</span>
      </div>
    ),
  },
];
