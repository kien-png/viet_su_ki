export function PanelCard({ children, className = '' }) {
  return (
    <div
      className={`rounded-sm border border-amber-200/15 bg-gradient-to-b from-white/5 to-transparent p-5 shadow-glow ${className}`}
    >
      {children}
    </div>
  );
}
