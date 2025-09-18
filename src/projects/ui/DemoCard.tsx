// src/projects/ui/DemoCard.tsx
import type { PropsWithChildren } from "react";

type DemoCardProps = PropsWithChildren<{
  title?: string;
  center?: boolean;
}>;

export default function DemoCard({ title, center, children }: DemoCardProps) {
  return (
    <div
      className={[
        "bg-gradient-to-r from-green-300 to-blue-300",
        "dark:from-green-500 dark:to-blue-500",
        "rounded-lg p-6 shadow-sm",
        "text-gray-800 dark:text-white",
      ].join(" ")}
    >
      {title ? <p className="mb-2 font-medium">{title}</p> : null}
      <div className={center ? "text-center" : ""}>{children}</div>
    </div>
  );
}
