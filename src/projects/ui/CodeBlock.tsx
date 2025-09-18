
type CodeBlockProps = {
  fileLabel?: string;
  code: string;
};

export default function CodeBlock({ fileLabel, code }: CodeBlockProps) {
  return (
    <div className="bg-code-bg-dark rounded-lg p-4 shadow-sm">
      {fileLabel ? (
        <p className="text-sm text-gray-400 mb-2">{fileLabel}</p>
      ) : null}
      <pre className="overflow-x-auto">
        <code className="text-white text-sm leading-6">{code}</code>
      </pre>
    </div>
  );
}
