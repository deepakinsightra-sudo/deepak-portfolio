import { profile } from '../data/portfolio';

type IconName = 'phone' | 'mail' | 'linkedin';

function ContactIcon({ name }: { name: IconName }) {
  if (name === 'linkedin') {
    return <span aria-hidden className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#0A66C2] text-[10px] font-bold text-white">in</span>;
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0">
      {name === 'phone' ? <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7A2 2 0 0 1 22 16.92z" /> : <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </>}
    </svg>
  );
}

export default function ContactLinks({ centered = false }: { centered?: boolean }) {
  const links = [
    ...(profile.phone ? [{ label: profile.phone, href: 'tel:+919844258258', icon: 'phone' as const, aria: `Call Deepak R Jagalur at ${profile.phone}` }] : []),
    ...(profile.email ? [{ label: profile.email, href: `mailto:${profile.email}`, icon: 'mail' as const, aria: `Email Deepak R Jagalur at ${profile.email}` }] : []),
    ...(profile.links.linkedin ? [{ label: 'LinkedIn', href: profile.links.linkedin, icon: 'linkedin' as const, aria: 'Open Deepak R Jagalur on LinkedIn', external: true }] : []),
  ];

  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${centered ? 'justify-center' : ''}`} aria-label="Contact Deepak R Jagalur">
      {links.map((link) => (
        <a key={link.icon} href={link.href} aria-label={link.aria} target={link.external ? '_blank' : undefined} rel={link.external ? 'noreferrer' : undefined} className="inline-flex min-h-10 min-w-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 text-xs font-semibold text-bone/85 transition hover:border-crimson-2/50 hover:bg-burgundy/20 hover:text-bone focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crimson-2">
          <ContactIcon name={link.icon} />
          <span className="break-all">{link.label}</span>
        </a>
      ))}
    </div>
  );
}
