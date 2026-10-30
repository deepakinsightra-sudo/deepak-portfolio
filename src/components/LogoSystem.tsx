import { useState } from 'react';
import { motion } from 'framer-motion';
import { deepakVerifiedCertifications, technologyLogoDefinitions, type LogoDefinition, type VerifiedCertification } from '../data/logos';

type LogoMarkProps = {
  logo: LogoDefinition;
  variant?: 'career' | 'technology' | 'issuer';
};

/** Shared accessible brand mark. Missing/unverified artwork becomes a plain wordmark placeholder. */
export function LogoMark({ logo, variant = 'technology' }: LogoMarkProps) {
  const [failed, setFailed] = useState(false);
  const hasImage = Boolean(logo.src) && !failed;
  const size = variant === 'career' ? 'h-12 w-28 px-2' : variant === 'issuer' ? 'h-10 w-24 px-2' : 'h-12 w-12 p-2';
  const imageSize = variant === 'technology' ? 'h-8 w-8' : 'max-h-8 max-w-full';

  return (
    <span
      role="img"
      aria-label={`${logo.name} logo${hasImage ? '' : ' text placeholder'}`}
      className={`group/mark inline-flex shrink-0 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] text-center text-[#d6cbd0] transition duration-300 hover:border-white/20 hover:bg-white/[0.09] ${size}`}
      style={{ ['--logo-accent' as string]: logo.accent ?? '#b34961' }}
    >
      {hasImage ? (
        <img
          src={logo.src}
          alt=""
          aria-hidden="true"
          loading="lazy"
          onError={() => setFailed(true)}
          className={`${imageSize} object-contain opacity-70 transition duration-300 group-hover/mark:opacity-100 ${logo.lightFrame ? 'rounded-md bg-white p-1' : ''}`}
        />
      ) : (
        <span className="font-sans text-[10px] font-semibold leading-tight tracking-wide transition-colors duration-300 group-hover/mark:text-[color:var(--logo-accent)]">
          {logo.name}
        </span>
      )}
    </span>
  );
}

export function TechnologyLogoGrid() {
  return (
    <section aria-labelledby="technology-ecosystem-title" className="gutter mt-14">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-crimson-2">Technology Ecosystem</p>
          <h3 id="technology-ecosystem-title" className="mt-2 font-display text-3xl tracking-wide text-bone sm:text-4xl">Tools in Practice</h3>
        </div>
        <p className="max-w-sm text-xs leading-relaxed text-smoke">A connected stack for acquisition, lead management, payments and customer communication.</p>
      </div>
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 xl:grid-cols-8">
        {technologyLogoDefinitions.map((logo, index) => (
          <motion.div
            key={logo.name}
            role="group"
            aria-label={`${logo.name} technology`}
            className="group flex min-h-[112px] flex-col items-center justify-center gap-3 rounded-xl border border-white/[0.07] bg-ink-2/80 px-2 py-4 text-center transition duration-300 hover:-translate-y-1 hover:border-[#C51D48]/40 hover:bg-[#78152F]/20"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.035 }}
          >
            <LogoMark logo={logo} />
            <span className="text-[11px] font-medium leading-snug text-mist transition group-hover:text-bone">{logo.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/** Issuer strip for verified credentials; never pass legacy or unverified records. */
export function CertificationIssuerGrid({ credentials = deepakVerifiedCertifications }: { credentials?: VerifiedCertification[] }) {
  const issuers = Array.from(new Set(credentials.map((credential) => credential.issuer)));
  if (!credentials.length) {
    return (
      <div className="rounded-xl border border-dashed border-white/15 bg-white/[0.02] px-5 py-6 text-sm text-mist">
        Verified certification issuers will appear here once Deepak’s credentials are added.
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {issuers.map((issuer) => (
        <div key={issuer} className="flex flex-wrap items-center gap-3 rounded-xl border border-white/[0.08] bg-ink-2/70 p-3">
          <LogoMark logo={{ name: issuer }} variant="issuer" />
          <ul className="min-w-0 flex-1 space-y-1">
            {credentials.filter((credential) => credential.issuer === issuer).map((credential) => (
              <li key={credential.credential} className="text-sm text-bone/80">
                {credential.verificationUrl ? <a href={credential.verificationUrl} target="_blank" rel="noreferrer" className="transition hover:text-bone">{credential.credential} ↗</a> : credential.credential}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
