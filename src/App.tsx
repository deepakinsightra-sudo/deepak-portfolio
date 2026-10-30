import type { ReactNode } from 'react';
import { LayoutGroup, motion } from 'framer-motion';
import { profile, type SectionId } from './data/portfolio';
import { SmoothScrollProvider } from './hooks/smoothScroll';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Scene from './components/Scene';
import About from './components/About';
import Seasons from './components/Seasons';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import FinalCTA from './components/FinalCTA';
import { EASE } from './components/fx';

const order: SectionId[] = ['about', 'journey', 'moments', 'skills', 'certifications'];

export default function App() {
  return (
    <SmoothScrollProvider>
      <LayoutGroup>
        <div className="grain" aria-hidden />
        <CustomCursor />
        <motion.div initial={{ opacity: 0, scale: 1.02, filter: 'blur(8px)' }} animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }} transition={{ duration: 0.9, ease: EASE }}>
          <Navbar order={order} />
          <main aria-label={`${profile.fullName} portfolio`}>
            <Hero />
            {order.map((id) => {
              const sections: Record<SectionId, ReactNode> = {
                about: <About />,
                journey: <Seasons />,
                originals: null,
                picks: null,
                skills: <Skills />,
                certifications: <Certifications />,
                moments: <Impact />,
                story: null,
              };
              return <Scene key={id} id={id}>{sections[id]}</Scene>;
            })}
            <FinalCTA />
          </main>
        </motion.div>
      </LayoutGroup>
    </SmoothScrollProvider>
  );
}

function Impact() {
  const outcomes = [
    { value: '~₹25L → ~₹50L', label: 'Monthly brokerage revenue' },
    { value: '100%', label: 'Revenue growth' },
    { value: '~₹5–6Cr', label: 'Annual brokerage revenue' },
    { value: '~70–80%', label: 'Revenue from existing customers' },
  ];

  return (
    <div className="gutter">
      <div className="mb-8 max-w-4xl">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-crimson-2">Impact</p>
        <h2 className="mt-3 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.92] tracking-wide text-bone">Turning Customer Relationships Into Sustainable Revenue</h2>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-mist sm:text-lg">
          As a business growth leader in financial services, I focus on building sustainable revenue through customer retention, relationship-led selling and systematic business expansion.
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-bone/75 sm:text-base">
          Under my leadership, the team grew monthly brokerage revenue from approximately ₹25 lakh to ₹50 lakh, representing 100% growth, while generating approximately ₹5–6 crore in annual brokerage revenue.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {outcomes.map((outcome, index) => (
          <motion.div
            key={outcome.label}
            className="glass rounded-2xl p-6 sm:p-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.06, ease: EASE }}
          >
            <p className="font-display text-4xl leading-none tracking-wide text-bone sm:text-5xl">{outcome.value}</p>
            <p className="mt-3 text-xs font-semibold uppercase leading-relaxed tracking-[0.14em] text-mist">{outcome.label}</p>
          </motion.div>
        ))}
      </div>

      <article className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(120,21,47,0.25),rgba(17,17,17,0.92)_58%)] p-6 sm:p-9">
        <div className="max-w-4xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-crimson-2">Growth Initiative</p>
          <h3 className="mt-3 font-display text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] tracking-wide text-bone">End-to-End Marketing Automation &amp; Customer Lifecycle Management</h3>
          <p className="mt-4 text-sm leading-relaxed text-mist sm:text-base">
            Built and managed an integrated digital marketing and automation ecosystem connecting paid acquisition, landing-page conversion, lead management, payment processing and post-purchase engagement.
          </p>
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-2" aria-label="Digital lead conversion workflow">
          {['Paid Acquisition', 'Landing Pages', 'Lead Management', 'Payment Processing', 'Post-Purchase Engagement'].map((step, index) => (
            <span key={step} className="flex items-center gap-2">
              <span className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-bone/85 sm:text-xs">{step}</span>
              {index < 4 && <span aria-hidden className="text-crimson-2/80">→</span>}
            </span>
          ))}
        </div>

        <div className="mt-8 grid gap-8 border-t border-white/10 pt-7 lg:grid-cols-[1.15fr_0.85fr]">
          <ul className="space-y-3 text-sm leading-relaxed text-bone/80">
            <li>Managed lead-generation campaigns through Meta Ads and Google Ads.</li>
            <li>Developed landing pages to capture and convert prospective customers.</li>
            <li>Integrated lead forms with Google Sheets for centralised data collection.</li>
            <li>Designed Pabbly Connect workflows to automate data movement and customer communication.</li>
            <li>Integrated Razorpay payment events with automated confirmation processes.</li>
            <li>Automated email confirmations, mailing-list subscriptions, WhatsApp onboarding and payment-status updates.</li>
            <li>Established post-purchase communication workflows for ongoing customer engagement and future updates.</li>
          </ul>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-mist">Technology</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {['Meta Ads', 'Google Ads', 'Landing Pages', 'Google Sheets', 'Pabbly Connect', 'Razorpay', 'Email Automation', 'WhatsApp API'].map((technology) => (
                <span key={technology} className="rounded-full border border-[#78152F]/35 bg-[#78152F]/15 px-3 py-1.5 text-[11px] font-medium text-bone/85">{technology}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-7 rounded-xl border border-white/10 bg-black/20 p-5 sm:p-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-crimson-2">Business value</p>
          <p className="mt-2 text-sm leading-relaxed text-bone/80 sm:text-base">
            Connected multiple customer touchpoints into a coordinated acquisition, conversion and post-purchase servicing workflow, reducing manual coordination and improving operational consistency.
          </p>
        </div>
      </article>

      <div className="mt-8 grid gap-6 rounded-2xl border border-white/10 bg-ink-2/70 p-6 sm:p-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
        <div>
          <h3 className="font-display text-2xl tracking-wide text-bone">Relationship-led growth</h3>
          <p className="mt-3 text-sm leading-relaxed text-mist sm:text-base">
            An estimated 70–80% of revenue comes from existing customers through upselling, cross-selling and deeper engagement. Internal automation workflows for client follow-ups and servicing help reduce manual operational effort while improving consistency and responsiveness.
          </p>
        </div>
        <blockquote className="flex items-center border-l-2 border-[#78152F] pl-5 font-serif text-2xl italic leading-snug text-bone sm:text-3xl">
          Retain customers. Expand relationships. Build recurring revenue.
        </blockquote>
      </div>
    </div>
  );
}
