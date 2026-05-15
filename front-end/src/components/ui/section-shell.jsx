export function SectionShell({ children, className = '' }) {
  return <section className={`mx-auto max-w-6xl px-4 sm:px-6 ${className}`}>{children}</section>;
}
