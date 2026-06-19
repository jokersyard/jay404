export const CodeBlock = ({ code, language = 'javascript', className = '' }) => {
  return (
    <pre className={`bg-slate-900 p-4 rounded overflow-x-auto ${className}`}>
      <code className={`language-${language} text-sm text-slate-300`}>
        {code}
      </code>
    </pre>
  );
};
