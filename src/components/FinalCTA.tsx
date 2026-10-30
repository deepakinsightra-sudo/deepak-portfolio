import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { profile } from '../data/portfolio';
import { useSmoothScroll } from '../hooks/smoothScroll';
import { EASE, Particles } from './fx';
import ContactLinks from './ContactLinks';

export default function FinalCTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollTo } = useSmoothScroll();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 0.2'] });
  const spacing = useTransform(scrollYProgress, [0, 1], ['0.6em', '0.02em']);
  const blur = useTransform(scrollYProgress, [0, 1], ['blur(16px)', 'blur(0px)']);
  const opacity = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  return (
    <section id="contact" ref={ref} className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_60%,rgba(120,21,47,0.18),transparent_70%)]" />
      <Particles count={36} />

      <motion.p className="relative mb-6 text-[11px] font-bold uppercase tracking-[0.5em] text-crimson-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        CONNECT
      </motion.p>
      <motion.h2 className="relative font-display leading-[0.85] text-bone" style={{ fontSize: 'clamp(3.4rem, 13vw, 12rem)', letterSpacing: spacing, filter: blur, opacity }}>
        LET&apos;S TALK GROWTH.
      </motion.h2>

      <motion.div className="relative mt-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-10% 0px' }} transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}>
        <p className="font-sans text-2xl font-semibold tracking-[0.2em] text-bone sm:text-3xl">{profile.displayName.toUpperCase()}</p>
        <p className="mt-2 text-xs font-semibold tracking-[0.4em] text-mist sm:text-sm">{profile.role.toUpperCase()}</p>
      </motion.div>

      <motion.div className="relative mt-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE, delay: 0.25 }}>
        <ContactLinks centered />
      </motion.div>

      <motion.a
        href="/resume.pdf"
        download="Deepak_R_Jagalur_Resume.pdf"
        className="relative mt-5 inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-burgundy px-6 py-3 text-sm font-bold text-white shadow-[0_8px_30px_rgba(120,21,47,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-crimson-2 hover:shadow-[0_10px_38px_rgba(197,29,72,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-crimson-2"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        aria-label="Download Deepak R Jagalur's resume PDF"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <path d="m7 10 5 5 5-5" />
          <path d="M12 15V3" />
        </svg>
        Download My Resume
      </motion.a>

      <div className="relative mt-16 flex flex-wrap justify-center gap-6 text-xs font-semibold tracking-[0.24em] text-smoke">
        <button type="button" onClick={() => scrollTo(0, { offset: 0 })} className="hover:text-bone">↑ BACK TO TOP</button>
      </div>

      <footer className="absolute inset-x-0 bottom-0 px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] text-center">
        <div className="mb-2 text-base"><span className="font-display text-base tracking-[0.12em] text-bone sm:text-xl">{profile.displayName.toUpperCase()}</span></div>
        <p className="text-[11px] leading-relaxed text-smoke">© {new Date().getFullYear()} {profile.displayName}.</p>
      </footer>
    </section>
  );
}
