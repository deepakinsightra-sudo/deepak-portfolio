import { motion } from 'framer-motion';
import { profile } from '../data/portfolio';
import { useSmoothScroll } from '../hooks/smoothScroll';
import { EASE, Magnetic, Particles } from './fx';
import ToolsStrip from './ToolsStrip';
import ContactLinks from './ContactLinks';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.18 } } };
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export default function Hero() {
  const { scrollTo } = useSmoothScroll();

  return (
    <>
      <section id="top" className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden bg-ink">
        <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_76%_48%,rgba(120,21,47,0.2),transparent_38%),radial-gradient(ellipse_at_8%_90%,rgba(197,29,72,0.08),transparent_34%)]" />
        <Particles className="z-0 opacity-35" />
        <div className="gutter relative z-[1] mx-auto grid min-h-[calc(100svh-5rem)] max-w-[1440px] items-center gap-2 py-20 sm:py-24 lg:grid-cols-[1.06fr_0.94fr] lg:gap-8 lg:py-16">
          <motion.div className="relative z-10 order-1 max-w-3xl" variants={container} initial="hidden" animate="show">
            <motion.p variants={item} className="mb-4 text-[10px] font-bold uppercase tracking-[0.32em] text-crimson-2 sm:text-xs">
              {profile.role}
            </motion.p>
            <motion.h1 variants={item} className="font-display text-[clamp(3.4rem,8vw,7.5rem)] leading-[0.86] tracking-wide text-bone">
              <span className="shimmer-text">{profile.firstName}</span>
            </motion.h1>
            <motion.p variants={item} className="mt-5 font-sans text-sm font-bold tracking-[0.13em] text-crimson-2 sm:text-lg sm:tracking-[0.2em]">
              {profile.seriesTag}
            </motion.p>
            <motion.p variants={item} className="mt-5 max-w-2xl text-[15px] leading-relaxed text-bone/80 sm:text-base">
              {profile.intro}
            </motion.p>
            <motion.p variants={item} className="mt-5 max-w-2xl text-xs font-medium leading-relaxed text-mist sm:text-sm">
              {profile.interests.join(' · ')}
            </motion.p>

            <motion.div variants={item} className="mt-6">
              <ContactLinks />
            </motion.div>

            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
              <Magnetic>
                <button type="button" onClick={() => scrollTo('#journey')} className="flex min-h-12 items-center gap-3 rounded-full bg-burgundy px-6 py-3 text-sm font-bold text-white shadow-[0_8px_30px_rgba(120,21,47,0.28)] transition hover:bg-crimson-2 hover:shadow-[0_10px_38px_rgba(197,29,72,0.35)] sm:px-7">
                  View My Experience <span aria-hidden>↓</span>
                </button>
              </Magnetic>
              {profile.resumePdf && (
                <a href={profile.resumePdf} download className="flex min-h-12 items-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-bone transition hover:border-crimson-2/60 hover:bg-burgundy/15 sm:px-7">
                  Download Resume
                </a>
              )}
            </motion.div>
          </motion.div>

          <motion.div className="relative order-2 mx-auto mt-4 flex h-[min(76svh,660px)] w-full max-w-[650px] items-end justify-center lg:mt-0" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2, ease: EASE }}>
            <div aria-hidden className="absolute bottom-[8%] left-1/2 h-[72%] w-[92%] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(120,21,47,0.4),rgba(120,21,47,0.13)_58%,transparent)] blur-3xl" />
            <img src={profile.portrait.src} alt={profile.portrait.alt} fetchPriority="high" decoding="async" className="relative z-[1] h-full w-full object-contain object-bottom drop-shadow-[0_24px_65px_rgba(0,0,0,0.25)]" />
          </motion.div>
        </div>
      </section>
      <ToolsStrip />
    </>
  );
}
