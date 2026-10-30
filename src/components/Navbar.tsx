import { useEffect, useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { sectionMeta, type SectionId } from '../data/portfolio';
import { useSmoothScroll } from '../hooks/smoothScroll';
import { EASE } from './fx';

export default function Navbar({ order }: { order: SectionId[] }) {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [active, setActive] = useState<string>('top');
  const { scrollTo } = useSmoothScroll();

  useMotionValueEvent(scrollY, 'change', (y) => {
    const previous = scrollY.getPrevious() ?? 0;
    setSolid(y > 40);
    setHidden(y > 400 && y > previous && !mobileNav);
  });

  useEffect(() => {
    const ids = ['top', ...order, 'contact'];
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id));
    }, { rootMargin: '-45% 0px -50% 0px' });
    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) io.observe(element);
    });
    return () => io.disconnect();
  }, [order]);

  const go = (id: string) => {
    setMobileNav(false);
    scrollTo(`#${id}`, { offset: id === 'top' ? 0 : -64 });
  };
  const links = [...order.map((id) => ({ id, label: sectionMeta[id].nav })), { id: 'contact', label: 'Contact' }];

  return (
    <motion.header className="fixed inset-x-0 top-0 z-[60]" animate={{ y: hidden ? '-100%' : '0%' }} transition={{ duration: 0.45, ease: EASE }}>
      <div className={`gutter flex h-16 items-center justify-between gap-6 transition-[background,backdrop-filter] duration-500 md:h-[72px] ${solid || mobileNav ? 'bg-ink/80 backdrop-blur-xl' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
        <button type="button" onClick={() => go('top')} className="font-display text-base tracking-[0.12em] text-bone sm:text-xl" aria-label="Deepak R Jagalur, back to top">
          DEEPAK R JAGALUR<span className="ml-1 text-crimson-2">.</span>
        </button>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {links.map((link) => <NavLink key={link.id} label={link.label} active={active === link.id} onClick={() => go(link.id)} />)}
        </nav>
        <button type="button" className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden" aria-label={mobileNav ? 'Close menu' : 'Open menu'} aria-expanded={mobileNav} onClick={() => setMobileNav((value) => !value)}>
          <motion.span className="block h-0.5 w-5 bg-bone" animate={{ rotate: mobileNav ? 45 : 0, y: mobileNav ? 4 : 0 }} />
          <motion.span className="block h-0.5 w-5 bg-bone" animate={{ rotate: mobileNav ? -45 : 0, y: mobileNav ? -4 : 0 }} />
        </button>
      </div>
      {mobileNav && (
        <motion.nav aria-label="Primary navigation" className="gutter border-b border-white/5 bg-ink/95 pb-6 pt-2 backdrop-blur-xl lg:hidden" initial={{ clipPath: 'inset(0 0 100% 0)' }} animate={{ clipPath: 'inset(0 0 0% 0)' }} exit={{ clipPath: 'inset(0 0 100% 0)' }} transition={{ duration: 0.4, ease: EASE }}>
          {links.map((link, index) => (
            <motion.button key={link.id} type="button" onClick={() => go(link.id)} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * index }} className={`block w-full py-3 text-left font-display text-3xl tracking-wide ${active === link.id ? 'text-crimson-2' : 'text-bone'}`}>
              {link.label}
            </motion.button>
          ))}
        </motion.nav>
      )}
    </motion.header>
  );
}

function NavLink({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className={`relative text-[13px] font-medium transition ${active ? 'text-bone' : 'text-mist hover:text-bone'}`}>
      {label}
      {active && <motion.span layoutId="nav-underline" className="absolute -bottom-1.5 left-0 right-0 h-[2px] rounded bg-crimson" />}
    </button>
  );
}
