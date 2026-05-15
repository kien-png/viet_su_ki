export function InfoTag({ children, tone = 'default' }) {
  const toneClass =
    tone === 'rose'
      ? 'border-roseclay/30 bg-roseclay/10 text-roseclay'
      : 'border-amber-200/20 bg-amber-200/5 text-brass';

  return (
    <span
      className={`inline-flex items-center rounded-sm border px-2 py-1 text-[10px] uppercase tracking-[0.28em] ${toneClass}`}
    >
      {children}
    </span>
  );
}
