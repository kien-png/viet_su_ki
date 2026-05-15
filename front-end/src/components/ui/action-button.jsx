import { Link } from 'react-router-dom';

function getVariantClasses(variant) {
  if (variant === 'ghost') {
    return 'border border-amber-200/20 bg-transparent text-parchment hover:border-amber-200/40 hover:bg-white/5';
  }

  if (variant === 'rose') {
    return 'bg-roseclay text-[#271913] hover:bg-[#e0ad9e]';
  }

  return 'bg-brass text-[#22170d] hover:bg-[#d5ae74]';
}

export function ActionButton({ children, to, type = 'button', variant = 'primary' }) {
  const classes = [
    'inline-flex items-center justify-center rounded-sm px-5 py-3 text-xs font-semibold uppercase tracking-[0.28em] transition',
    getVariantClasses(variant)
  ].join(' ');

  if (to) {
    return (
      <Link className={classes} to={to}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type={type}>
      {children}
    </button>
  );
}
