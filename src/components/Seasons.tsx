import { motion } from 'framer-motion';
import { experience } from '../data/portfolio';
import { careerLogoDefinitions } from '../data/logos';
import { EASE, SectionHeading } from './fx';
import { LogoMark } from './LogoSystem';

export default function Seasons() {
  return (
    <>
      <SectionHeading kicker="Career" title="Experience" aside={<p className="max-w-xs text-sm text-mist">A career spanning financial services, investment management and client growth.</p>} />
      <div className="gutter relative grid gap-4 md:grid-cols-2">
        <div aria-hidden className="absolute bottom-8 left-[calc(var(--gutter)+1rem)] top-8 hidden w-px bg-gradient-to-b from-transparent via-[#78152F]/70 to-transparent md:block" />
        {experience.map((role, index) => (
          <motion.article
            key={`${role.company}-${role.role}`}
            className="glass relative overflow-hidden rounded-2xl p-6 sm:p-8"
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-5% 0px' }}
            transition={{ duration: 0.7, delay: Math.min(index, 3) * 0.08, ease: EASE }}
          >
            <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C51D48]/55 to-transparent" />
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <LogoMark logo={careerLogoDefinitions[role.company] ?? { name: role.company }} variant="career" />
                <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-crimson-2">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="mt-3 font-display text-3xl leading-none tracking-wide text-bone sm:text-4xl">{role.role}</h3>
                <p className="mt-2 text-sm font-medium text-mist">{role.company}</p>
                </div>
              </div>
              <span className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] font-semibold tracking-wide text-mist">{role.period}</span>
            </div>
          </motion.article>
        ))}
      </div>
    </>
  );
}
