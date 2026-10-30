import { motion } from 'framer-motion';
import { profile } from '../data/portfolio';
import { technologyLogoDefinitions, type LogoDefinition } from '../data/logos';
import { LogoMark } from './LogoSystem';

const github: LogoDefinition = { name: 'GitHub', accent: '#F5F5F5' };

export default function ToolsStrip() {
  const tools = [...technologyLogoDefinitions, github];

  return (
    <section aria-labelledby="tools-strip-title" className="gutter border-y border-white/[0.07] bg-[linear-gradient(90deg,rgba(120,21,47,0.1),rgba(17,17,17,0.82)_28%,rgba(17,17,17,0.82)_72%,rgba(120,21,47,0.1))] py-7 sm:py-9">
      <div className="mx-auto max-w-[1440px]">
        <h2 id="tools-strip-title" className="mb-5 text-center text-[10px] font-bold uppercase tracking-[0.32em] text-mist sm:mb-6">Tools I Work With</h2>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-5 lg:grid-cols-9">
          {tools.map((tool, index) => {
            const content = <><LogoMark logo={tool} /><span className="text-[10px] font-medium leading-tight text-mist transition group-hover:text-bone sm:text-[11px]">{tool.name}</span></>;
            const classes = 'group flex min-h-[92px] min-w-0 flex-col items-center justify-center gap-2 rounded-xl border border-white/[0.06] bg-black/15 px-1.5 py-3 text-center transition duration-300 hover:-translate-y-0.5 hover:border-crimson-2/35 hover:bg-burgundy/10';

            return (
              <motion.div key={tool.name} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.025 }}>
                {tool.name === 'GitHub' && profile.links.github ? (
                  <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="Open Deepak R Jagalur's GitHub profile" className={classes}>{content}</a>
                ) : <div className={classes} role="group" aria-label={`${tool.name} tool`}>{content}</div>}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
