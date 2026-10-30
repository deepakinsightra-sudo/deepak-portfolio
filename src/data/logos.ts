export type LogoDefinition = {
  name: string;
  src?: string;
  accent?: string;
  lightFrame?: boolean;
};

export const careerLogoDefinitions: Record<string, LogoDefinition> = {
  'Insightra Medicals': { name: 'Insightra Medicals', src: '/LOGO%20AND%20PHOTOS/Insightra-Medical-Logo-1.jpg', accent: '#9f314b', lightFrame: true },
  'Vachana Investments': { name: 'Vachana Investments', src: '/LOGO%20AND%20PHOTOS/Vcahan%20Logo.jpg', accent: '#9f314b', lightFrame: true },
  'GEPL Capitals': { name: 'GEPL Capitals', src: '/assets/logos/gepl-capital.png', accent: '#9f314b', lightFrame: true },
  IndiaMART: { name: 'IndiaMART', src: '/assets/logos/indiamart.jpg', accent: '#9f314b', lightFrame: true },
};

export const technologyLogoDefinitions: LogoDefinition[] = [
  { name: 'Salesforce', src: '/LOGO%20AND%20PHOTOS/salesforce%20Logo.png', accent: '#00a1e0', lightFrame: true },
  { name: 'Meta Ads', src: '/assets/logos/meta.svg', accent: '#0866ff' },
  { name: 'Google Ads', src: '/assets/logos/google-ads.svg', accent: '#4285f4' },
  { name: 'Pabbly Connect', src: '/LOGO%20AND%20PHOTOS/pably.jpg', accent: '#22a97c', lightFrame: true },
  { name: 'Razorpay', src: '/assets/logos/razorpay.svg', accent: '#0c2451' },
  { name: 'Mailchimp', src: '/assets/logos/mailchimp.svg', accent: '#ffe01b' },
  { name: 'Google Sheets', src: '/assets/logos/google-sheets.svg', accent: '#34a853' },
  { name: 'WhatsApp Business API', src: '/assets/logos/whatsapp.svg', accent: '#25d366' },
];

export type VerifiedCertification = {
  issuer: string;
  credential: string;
  verificationUrl?: string;
};

/** Keep empty until Deepak-specific credentials and verification links are supplied. */
export const deepakVerifiedCertifications: VerifiedCertification[] = [];
