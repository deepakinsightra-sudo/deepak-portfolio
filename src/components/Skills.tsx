import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { skillCategories, skillEvidence, type Skill } from '../data/portfolio';
import { EASE, SectionHeading } from './fx';
import { TechnologyLogoGrid } from './LogoSystem';

const HUES = ['#C51D48', '#B51C43', '#9B1A3B', '#A52A4A', '#843047', '#78152F'];
const TARGET_OPPORTUNITIES = [
  'SaaS Sales Leadership',
  'IT Services Sales',
  'Business Development',
  'Customer Success Management',
  'Strategic Account Management',
  'Revenue Operations',
  'Growth Marketing',
  'Customer Retention and Renewal Management',
];

export default function Skills() {
  const [cat, setCat] = useState(0);
  const category = skillCategories[cat];
  const hue = HUES[cat % HUES.length];

  return (
    <>
      <SectionHeading kicker="Expertise" title="Leadership Expertise" aside={<p className="max-w-xs text-sm text-mist">Core strengths across SaaS sales, customer success, revenue growth and financial services.</p>} />

      <div className="gutter mb-8 grid gap-4 rounded-xl border border-white/10 bg-ink-2/50 p-5 sm:p-6 lg:grid-cols-[190px_minmax(0,1fr)] lg:gap-8">
        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-crimson-2">Career positioning</p>
        <div>
          <p className="text-sm font-semibold leading-relaxed text-bone sm:text-base">
            Sales &amp; Revenue Growth Leader <span className="text-crimson-2">|</span> SaaS &amp; IT Sales <span className="text-crimson-2">|</span> Customer Success <span className="text-crimson-2">|</span> Account Management <span className="text-crimson-2">|</span> Retention &amp; Renewals <span className="text-crimson-2">|</span> Marketing Automation
          </p>
          <p className="mt-3 text-xs leading-relaxed text-mist">
            <span className="font-semibold text-bone/80">Target opportunities:</span> {TARGET_OPPORTUNITIES.join(' · ')}
          </p>
        </div>
      </div>

      <div className="gutter grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-14">
        {/* expertise categories */}
        <div className="rail -mx-[var(--gutter)] flex gap-2 overflow-x-auto px-[var(--gutter)] lg:mx-0 lg:flex-col lg:gap-1 lg:overflow-visible lg:px-0" role="tablist" aria-label="Skill categories">
          {skillCategories.map((c, i) => (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={i === cat}
              onClick={() => setCat(i)}
              className={`group relative shrink-0 rounded-lg px-4 py-3 text-left transition lg:px-5 ${i === cat ? 'text-bone' : c.priority || c.domain ? 'text-bone/75 hover:text-bone' : 'text-smoke hover:text-bone'}`}
            >
              {i === cat && <motion.span layoutId="skill-tab" className="absolute inset-0 rounded-lg bg-white/[0.07] ring-1 ring-white/10" transition={{ duration: 0.45, ease: EASE }} />}
              {i === cat && <motion.span layoutId="skill-bar" className="absolute bottom-2 left-0 top-2 hidden w-[3px] rounded lg:block" style={{ background: hue }} />}
              <span className="relative flex items-center gap-2 font-display text-2xl tracking-wide lg:text-[1.7rem]">
                {c.title}
              {(c.priority || c.domain) && <span className="rounded-full border border-[#C51D48]/40 px-2 py-0.5 font-sans text-[8px] font-bold uppercase tracking-[0.16em] text-[#E5A0AE]">{c.priority ? 'Core' : 'Domain'}</span>}
              </span>
              <span className="relative hidden text-xs text-smoke lg:block">
                {c.skills.length} skills · {c.subtitle}
              </span>
            </button>
          ))}
        </div>

        {/* skill cards */}
        <div className="min-h-[340px]">
          <AnimatePresence mode="wait">
            <motion.div key={category.id} initial="hidden" animate="show" exit="exit" transition={{ staggerChildren: 0.05 }}>
              <motion.p
                className="mb-5 text-sm text-mist"
                variants={{ hidden: { opacity: 0 }, show: { opacity: 1 }, exit: { opacity: 0 } }}
              >
                <span className="font-semibold text-bone">{category.title}</span> — {category.subtitle}
              </motion.p>
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 xl:grid-cols-4">
                {category.skills.map((s) => (
                  <SkillCard key={s.name} skill={s} hue={hue} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <TechnologyLogoGrid />
    </>
  );
}

function SkillCard({ skill, hue }: { skill: Skill; hue: string }) {
  const [open, setOpen] = useState(false);
  const evidence = skillEvidence[skill.name]?.filter(Boolean) ?? [];

  return (
    <motion.button
      type="button"
      onHoverStart={() => setOpen(true)}
      onHoverEnd={() => setOpen(false)}
      onClick={() => setOpen((o) => !o)}
      aria-expanded={open}
      variants={{
        hidden: { opacity: 0, y: 24, scale: 0.94, filter: 'blur(6px)' },
        show: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', transition: { duration: 0.55, ease: EASE } },
        exit: { opacity: 0, y: -12, transition: { duration: 0.2 } },
      }}
      whileHover={{ y: -6 }}
      className="group relative flex min-h-[148px] flex-col overflow-hidden rounded-xl bg-ink-2 p-4 text-left ring-1 ring-white/10 transition-shadow duration-500 hover:ring-white/20"
      style={{ boxShadow: open ? `0 18px 50px -12px ${hue}55, 0 0 0 1px ${hue}66` : undefined }}
    >
      <div aria-hidden className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition duration-500 group-hover:opacity-60" style={{ background: hue }} />
      <motion.span
        className="relative flex h-12 w-12 items-center justify-center rounded-lg font-display text-2xl tracking-wide"
        style={{ background: `${hue}1f`, color: hue, boxShadow: `inset 0 0 0 1px ${hue}55` }}
        animate={open ? { rotate: [0, -8, 8, 0], scale: 1.08 } : { rotate: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        aria-hidden
      >
        {skill.mono}
      </motion.span>
      <span className="relative mt-4 flex items-center gap-2 text-[15px] font-semibold text-bone">
        {skill.name}
        {skill.note && (
          <span className="rounded px-1.5 py-px text-[9px] font-bold uppercase tracking-wider text-ink" style={{ background: hue }}>
            {skill.note}
          </span>
        )}
      </span>
      <AnimatePresence initial={false}>
        {open && evidence.length > 0 && (
          <motion.span
            className="relative mt-2 block text-[11px] leading-snug text-mist"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {evidence.join(' · ')}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
