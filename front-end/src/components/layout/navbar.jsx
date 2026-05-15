import { Link, NavLink } from 'react-router-dom';
import { Reveal } from '../motion/reveal';

const navItems = [
  { to: '/', label: 'Home', exact: true },
  { to: '/map', label: 'Bản đồ' },
  { to: '/timeline', label: 'Timeline' },
  { to: '/characters', label: 'Nhân vật' },
  { to: '/search', label: 'Tìm kiếm' }
];

function getNavClass(isActive) {
  return [
    'text-xs uppercase tracking-[0.32em] transition-colors',
    isActive ? 'text-brass' : 'text-stone-300 hover:text-parchment'
  ].join(' ');
}

export function Navbar() {
  return (
    <Reveal
      as="header"
      className="sticky top-0 z-30 border-b border-amber-200/10 bg-[#090907]/90 backdrop-blur"
      direction="up"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
        <Link className="font-display text-xl text-parchment" to="/">
          Việt Sử Kí Số
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              className={({ isActive }) => getNavClass(isActive)}
              end={item.exact}
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link
          className="rounded-full border border-amber-200/15 bg-white/5 px-4 py-2 text-xs tracking-[0.2em] text-stone-300 transition hover:border-amber-200/30 hover:text-parchment"
          to="/search"
        >
          Tìm kiếm di sản
        </Link>
      </div>
    </Reveal>
  );
}
