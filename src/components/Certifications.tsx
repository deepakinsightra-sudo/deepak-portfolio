import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { certificationCategories, credentials, type CertificationCategory, type Credential } from '../data/certifications';
import { EASE, SectionHeading } from './fx';

type CategoryFilter = 'All' | CertificationCategory;

const categoryCounts = credentials.reduce<Record<string, number>>((counts, credential) => {
  counts[credential.category] = (counts[credential.category] ?? 0) + 1;
  return counts;
}, {});

function fileUrl(path: string) {
  return encodeURI(path);
}

function CertificateCard({ credential, index }: { credential: Credential; index: number }) {
  const pdf = fileUrl(credential.pdfPath);
  const fileName = credential.pdfPath.split('/').pop() ?? 'certificate.pdf';

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.42, delay: Math.min(index, 5) * 0.035, ease: EASE }}
      className="group flex min-h-[300px] flex-col rounded-2xl border border-white/[0.09] bg-[linear-gradient(145deg,rgba(120,21,47,0.22),rgba(15,15,15,0.96)_58%)] p-5 shadow-[0_14px_40px_rgba(0,0,0,0.16)] transition duration-300 hover:-translate-y-1 hover:border-[#C51D48]/50 hover:shadow-[0_20px_48px_rgba(120,21,47,0.2)] sm:p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <span
          role="img"
          aria-label={`${credential.issuer} issuer text mark`}
          className="inline-flex min-h-9 max-w-[75%] items-center rounded-lg border border-white/10 bg-black/25 px-3 py-2 text-[10px] font-semibold leading-snug tracking-wide text-bone/75"
        >
          {credential.issuer}
        </span>
        <span className="shrink-0 rounded-full border border-[#C51D48]/35 bg-[#78152F]/30 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-[#E6ACB8]">
          {credential.category.split(' & ')[0]}
        </span>
      </div>

      <h3 className="mt-5 font-display text-[1.45rem] leading-tight tracking-wide text-bone sm:text-[1.65rem]">
        {credential.title}
      </h3>
      {credential.edition && <p className="mt-2 text-xs leading-relaxed text-[#d3a1ad]">{credential.edition}</p>}

      <dl className="mt-5 space-y-2 border-t border-white/[0.08] pt-4 text-xs">
        <div className="flex gap-2">
          <dt className="shrink-0 text-smoke">Completed</dt>
          <dd className="text-bone/80">{credential.completed}</dd>
        </div>
        {credential.credentialId && (
          <div className="flex gap-2">
            <dt className="shrink-0 text-smoke">Credential ID</dt>
            <dd className="break-all font-mono text-[10px] leading-relaxed text-bone/70">{credential.credentialId}</dd>
          </div>
        )}
      </dl>

      <div className="mt-auto flex flex-wrap gap-2 pt-6">
        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View certificate PDF: ${credential.title}`}
          className="inline-flex min-h-10 flex-1 items-center justify-center rounded-lg border border-[#C51D48]/55 bg-[#78152F]/45 px-3 py-2 text-xs font-semibold text-bone transition hover:border-[#C51D48] hover:bg-[#78152F]/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C51D48]"
        >
          View Certificate
        </a>
        <a
          href={pdf}
          download={fileName}
          aria-label={`Download certificate PDF: ${credential.title}`}
          className="inline-flex min-h-10 flex-1 items-center justify-center rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2 text-xs font-semibold text-mist transition hover:border-white/25 hover:text-bone focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C51D48]"
        >
          Download PDF
        </a>
        {credential.verificationUrl && (
          <a
            href={credential.verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Verify credential: ${credential.title}`}
            className="inline-flex min-h-10 w-full items-center justify-center rounded-lg border border-white/[0.07] px-3 py-2 text-xs font-medium text-mist transition hover:border-[#C51D48]/45 hover:text-bone focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C51D48]"
          >
            Verify Credential <span aria-hidden className="ml-1">↗</span>
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function Certifications() {
  const [filter, setFilter] = useState<CategoryFilter>('All');
  const [query, setQuery] = useState('');

  const shownCredentials = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    return credentials.filter((credential) => {
      const matchesCategory = filter === 'All' || credential.category === filter;
      const matchesQuery = !normalizedQuery
        || credential.title.toLocaleLowerCase().includes(normalizedQuery)
        || credential.issuer.toLocaleLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [filter, query]);

  const filters: CategoryFilter[] = ['All', ...certificationCategories];

  return (
    <div className="gutter" aria-labelledby="certifications-title">
      <SectionHeading kicker="Professional Learning" title="Certifications & Learning" />
      <div className="mb-8 flex flex-col gap-5 rounded-2xl border border-white/[0.08] bg-ink-2/65 p-5 sm:p-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-crimson-2">DEEPAK R JAGALUR</p>
          <h2 id="certifications-title" className="mt-2 max-w-3xl font-display text-[clamp(1.65rem,4vw,2.5rem)] leading-tight tracking-wide text-bone">
            Certificates &amp; Professional Learning
          </h2>
          <p className="mt-2 text-sm text-mist">{credentials.length} credentials across sales, customer relationships, marketing and strategy.</p>
        </div>
        <label className="block w-full lg:max-w-sm">
          <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-smoke">Search by title or issuer</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search certificates..."
            className="min-h-11 w-full rounded-lg border border-white/10 bg-black/25 px-4 text-sm text-bone outline-none transition placeholder:text-smoke focus:border-[#C51D48]/70 focus:ring-2 focus:ring-[#C51D48]/25"
          />
        </label>
      </div>

      <div className="mb-7 flex flex-wrap gap-2" role="group" aria-label="Filter certificates by category">
        {filters.map((item) => {
          const active = filter === item;
          const count = item === 'All' ? credentials.length : categoryCounts[item] ?? 0;
          return (
            <button
              key={item}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(item)}
              className={`min-h-10 rounded-full border px-4 py-2 text-xs font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C51D48] ${active ? 'border-[#C51D48]/70 bg-[#78152F]/65 text-bone' : 'border-white/10 bg-white/[0.025] text-mist hover:border-white/20 hover:text-bone'}`}
            >
              {item} <span className={active ? 'ml-1 text-[#E4A5B2]' : 'ml-1 text-smoke'}>{count}</span>
            </button>
          );
        })}
      </div>

      <p className="mb-4 text-xs text-smoke" aria-live="polite">
        Showing {shownCredentials.length} of {credentials.length} credentials
      </p>
      <AnimatePresence mode="popLayout">
        {shownCredentials.length ? (
          <motion.div layout className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {shownCredentials.map((credential, index) => (
              <CertificateCard key={`${credential.title}-${credential.credentialId ?? credential.pdfPath}`} credential={credential} index={index} />
            ))}
          </motion.div>
        ) : (
          <motion.p key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="rounded-xl border border-dashed border-white/15 px-5 py-10 text-center text-sm text-mist">
            No credentials match that search. Try another title or issuer.
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
