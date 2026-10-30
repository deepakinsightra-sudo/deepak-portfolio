export type CertificationCategory =
  | 'Sales & Business Development'
  | 'Customer Success & Communication'
  | 'Marketing & Growth'
  | 'Project Management & Strategy';

export type Credential = {
  title: string;
  issuer: string;
  recipient: string;
  completed: string;
  category: CertificationCategory;
  edition?: string;
  credentialId?: string;
  verificationUrl?: string;
  pdfPath: string;
};

const source = '/certifications/Certifications/Certifications';
const sales = 'Sales';
const marketing = 'Marketing';
const project = 'Project Management';
const linkedIn = 'LinkedIn Learning';
const coursera = (id: string) => `https://coursera.org/verify/${id}`;

/**
 * Curated from the supplied OCR inventory. Duplicate files sharing both title
 * and certificate ID are represented once; original PDFs remain in public/.
 * OCR-uncertain IDs are intentionally omitted.
 */
export const credentials: Credential[] = [
  // Sales & Business Development (12)
  { title: 'Business-to-Business Sales', issuer: linkedIn, recipient: 'Deepak R', completed: 'Jun 14, 2022 at 07:18 PM UTC', category: 'Sales & Business Development', credentialId: 'AUcoKBjNCunYaWhoag2DzbCV9zL5', pdfPath: `${source}/${sales}/CertificateOfCompletion_BusinesstoBusiness Sales.pdf` },
  { title: 'Essential New Skills in Sales', issuer: linkedIn, recipient: 'Deepak R', completed: 'Jun 3, 2022 at 09:52 AM UTC', category: 'Sales & Business Development', edition: 'Learning Path · 4 hours 30 minutes', credentialId: 'ARulimjnQYSAPbhROyAoVCKZW7dU', pdfPath: `${source}/${sales}/CertificateOfCompletion_Essential New Skills in Sales.pdf` },
  { title: 'Learning LinkedIn Sales Navigator', issuer: linkedIn, recipient: 'Deepak R', completed: 'Jun 2, 2022 at 06:07 PM UTC', category: 'Sales & Business Development', credentialId: 'Ac2RpibDdEAEZziZEyWPapbaNWfN', pdfPath: `${source}/${sales}/CertificateOfCompletion_Learning LinkedIn Sales Navigator.pdf` },
  { title: 'Purpose-Driven Sales', issuer: linkedIn, recipient: 'Deepak R', completed: 'Jun 3, 2022 at 02:38 AM UTC', category: 'Sales & Business Development', credentialId: 'AXu15_6J3Cg_fra9-z_pbMp-dXgT', pdfPath: `${source}/${sales}/CertificateOfCompletion_PurposeDriven Sales.pdf` },
  { title: 'Sales Operations', issuer: linkedIn, recipient: 'Deepak R', completed: 'Jun 4, 2022 at 07:31 AM UTC', category: 'Sales & Business Development', credentialId: 'AS-KtGxnEIHsh_3Q-tt72jCTQc03', pdfPath: `${source}/${sales}/CertificateOfCompletion_Sales Operations.pdf` },
  { title: 'Shane Snow on Storytelling', issuer: linkedIn, recipient: 'Deepak R', completed: 'Jun 1, 2022 at 03:20 PM UTC', category: 'Sales & Business Development', edition: 'PMI Registered Education Provider · 1.00 PDU', credentialId: 'ASIUqFHovREs5yfQ5_GTxKar0zrQ', pdfPath: `${source}/${sales}/CertificateOfCompletion_Shane Snow on Storytelling.pdf` },
  { title: 'Solution Sales', issuer: linkedIn, recipient: 'Deepak R Jagalur', completed: 'Jun 24, 2022 at 08:55 AM UTC', category: 'Sales & Business Development', credentialId: 'AV6kwjCxUDyAVJdEHFPWj38cJThx', pdfPath: `${source}/${sales}/CertificateOfCompletion_Solution Sales.pdf` },
  { title: 'The Persuasion Code, Part 2: The Neuroscience of Selling Remotely', issuer: linkedIn, recipient: 'Deepak R', completed: 'Jun 3, 2022 at 09:52 AM UTC', category: 'Sales & Business Development', credentialId: 'AdTX0ZCD4Dh5sh054RHvPR7ASL11', pdfPath: `${source}/${sales}/CertificateOfCompletion_The Persuasion Code Part 2 The Neuroscience of Selling Remotely.pdf` },
  { title: 'Fundamentals of Technology Sales', issuer: 'University of Maryland, College Park · Coursera', recipient: 'Deepak Jagalur', completed: 'Jul 2, 2022', category: 'Sales & Business Development', credentialId: '9FMWBH2NGVXA', verificationUrl: coursera('9FMWBH2NGVXA'), pdfPath: `${source}/${sales}/Coursera 9FMWBH2NGVXA.pdf` },
  { title: 'Groundwork for Success in Sales Development', issuer: 'Salesforce and SV Academy · Coursera', recipient: 'Deepak Jagalur', completed: 'Jun 28, 2022', category: 'Sales & Business Development', credentialId: 'E3KLJERGHKNX', verificationUrl: coursera('E3KLJERGHKNX'), pdfPath: `${source}/${sales}/Coursera E3KLJERGHKNX.pdf` },
  { title: 'Customer Segmentation and Prospecting', issuer: 'Northwestern University · Coursera', recipient: 'Deepak Jagalur', completed: 'Jun 28, 2022', category: 'Sales & Business Development', credentialId: 'Y3BW6RT2SU2P', verificationUrl: coursera('Y3BW6RT2SU2P'), pdfPath: `${source}/${sales}/Coursera Y3BW6RT2SU2P.pdf` },
  { title: 'Diploma in Sales and Distribution Management', issuer: 'Alison', recipient: 'Deepak R Jagalur', completed: 'Not provided', category: 'Sales & Business Development', edition: 'Learner Achievement Verification · score 88%', pdfPath: `${source}/${sales}/Learner-Verification-2229-6461535.pdf` },

  // Customer Success & Communication (5)
  { title: 'Communicating with Empathy', issuer: linkedIn, recipient: 'Deepak R', completed: 'Jun 14, 2022 at 04:41 PM UTC', category: 'Customer Success & Communication', edition: 'PMI Registered Education Provider · 1.00 PDU', credentialId: 'AZ8ilE3b4qYRAsJ1dZUKOygM9pd4', pdfPath: `${source}/${marketing}/CertificateOfCompletion_Communicating with Empathy (1).pdf` },
  { title: 'Customer Service Foundations', issuer: linkedIn, recipient: 'Deepak R', completed: 'Jun 5, 2022 at 07:37 AM UTC', category: 'Customer Success & Communication', edition: 'NASBA CPE · 3.00 credits', pdfPath: `${source}/${sales}/CertificateOfCompletion_Customer Service Foundations (1).pdf` },
  { title: 'Customer Service Foundations', issuer: linkedIn, recipient: 'Deepak R', completed: 'Jun 5, 2022 at 06:47 AM UTC', category: 'Customer Success & Communication', edition: 'PMI Registered Education Provider · 1.75 PDUs', credentialId: 'AZkgJ8CfIqlGT59Ri7E9uw9Q4eDJ', pdfPath: `${source}/${sales}/CertificateOfCompletion_Customer Service Foundations.pdf` },
  { title: "Effective Communication for Today's Leader", issuer: 'Tecnológico de Monterrey · Coursera', recipient: 'Deepak Jagalur', completed: 'Jul 11, 2022', category: 'Customer Success & Communication', credentialId: 'UJDMX4UZZGDZ', verificationUrl: coursera('UJDMX4UZZGDZ'), pdfPath: `${source}/${sales}/Coursera UJDMX4UZZGDZ.pdf` },
  { title: 'Interpersonal Communication', issuer: linkedIn, recipient: 'Deepak R', completed: 'Jun 3, 2022 at 06:08 PM UTC', category: 'Customer Success & Communication', edition: 'PMI Registered Education Provider · 0.50 PDU', pdfPath: `${source}/${sales}/CertificateOfCompletion_Interpersonal Communication.pdf` },

  // Marketing & Growth (7)
  { title: 'B2B Marketing Foundations', issuer: linkedIn, recipient: 'Deepak R', completed: 'May 31, 2022 at 02:50 AM UTC', category: 'Marketing & Growth', edition: 'PMI Registered Education Provider · 1.00 PDU', pdfPath: `${source}/${marketing}/CertificateOfCompletion_B2B Marketing Foundations.pdf` },
  { title: 'Become a Public Relations Specialist', issuer: linkedIn, recipient: 'Deepak R', completed: 'Jun 1, 2022 at 03:20 PM UTC', category: 'Marketing & Growth', edition: 'Learning Path · 10 hours 37 minutes', credentialId: 'ATXw6gTTp1fVn1GthWh5PG1-RhCc', pdfPath: `${source}/${marketing}/CertificateOfCompletion_Become a Public Relations Specialist.pdf` },
  { title: 'Building a Winning Enterprise Marketing Strategy', issuer: linkedIn, recipient: 'Deepak R', completed: 'May 31, 2022 at 12:44 PM UTC', category: 'Marketing & Growth', credentialId: 'AWASMGWjJkFlRrNNCZP6gYrrvU7S', pdfPath: `${source}/${marketing}/CertificateOfCompletion_Building a Winning Enterprise Marketing Strategy.pdf` },
  { title: 'Digital Marketing Foundations', issuer: linkedIn, recipient: 'Deepak R Jagalur', completed: 'Jun 24, 2022 at 08:04 AM UTC', category: 'Marketing & Growth', credentialId: 'AYhHiECZ8D61g8tWsSlgVZEvZpwK', pdfPath: `${source}/${marketing}/CertificateOfCompletion_Digital Marketing Foundations.pdf` },
  { title: 'Marketing Communications', issuer: linkedIn, recipient: 'Deepak R', completed: 'Jun 1, 2022 at 03:11 AM UTC', category: 'Marketing & Growth', edition: 'Standard course completion · 1 hour 34 minutes', credentialId: 'Adf3ms6P8VZ2eSPef5msfk0vTn44', pdfPath: `${source}/${marketing}/CertificateOfCompletion_Marketing Communications.pdf` },
  { title: 'Marketing Communications', issuer: linkedIn, recipient: 'Deepak R', completed: 'Jun 1, 2022 at 05:20 PM UTC', category: 'Marketing & Growth', edition: 'NASBA CPE · 4.00 credits', credentialId: 'AWqnoztCML-r99sTeGT2hCBNpJAk', pdfPath: `${source}/${marketing}/CertificateOfCompletion_Marketing Communications (1).pdf` },
  { title: 'Public Relations Foundations', issuer: linkedIn, recipient: 'Deepak R', completed: 'Jun 1, 2022 at 04:26 PM UTC', category: 'Marketing & Growth', edition: 'NASBA CPE · 3.00 credits', pdfPath: `${source}/${marketing}/CertificateOfCompletion_Public Relations Foundations.pdf` },

  // Project Management & Strategy (8)
  { title: 'Become a Project Manager', issuer: linkedIn, recipient: 'Deepak R Jagalur', completed: 'Jun 16, 2022 at 05:16 PM UTC', category: 'Project Management & Strategy', edition: 'Learning Path · 11 hours 55 minutes', credentialId: 'AVJkpry8TEGPos2vfGPcPRrG297G', pdfPath: `${source}/${project}/CertificateOfCompletion_Become a Project Manager.pdf` },
  { title: 'Business Analysis Foundations', issuer: linkedIn, recipient: 'Deepak R Jagalur', completed: 'Jun 3, 2022 at 05:00 PM UTC', category: 'Project Management & Strategy', edition: 'NASBA CPE · 3.40 credits', pdfPath: `${source}/${project}/CertificateOfCompletion_Business Analysis Foundations (3).pdf` },
  { title: 'Business Analysis Foundations', issuer: linkedIn, recipient: 'Deepak R', completed: 'Jun 3, 2022 at 04:38 PM UTC', category: 'Project Management & Strategy', edition: 'Shared credential ID; PMI PDU and IIBA CDU endorsement editions', credentialId: 'AV35EKzAHkBOykpLiYMz_V2knHjU', pdfPath: `${source}/${project}/CertificateOfCompletion_Business Analysis Foundations.pdf` },
  { title: 'Operations Management Foundations', issuer: linkedIn, recipient: 'Deepak R', completed: 'Jun 14, 2022 at 07:20 PM UTC', category: 'Project Management & Strategy', edition: 'PMI Registered Education Provider · 2.25 PDUs', credentialId: 'AVhGx0ddlnfeyeP18MOGH091bcHz', pdfPath: `${source}/${project}/CertificateOfCompletion_Operations Management Foundations.pdf` },
  { title: 'Strategic Planning Foundations', issuer: linkedIn, recipient: 'Deepak R', completed: 'Jun 2, 2022 at 02:00 PM UTC', category: 'Project Management & Strategy', edition: 'PMI Registered Education Provider · 1.25 PDUs', credentialId: 'AYWkq78MSm2-f5KoDAh190Avf2jS', pdfPath: `${source}/${project}/CertificateOfCompletion_Strategic Planning Foundations (1).pdf` },
  { title: 'Strategic Planning Foundations', issuer: linkedIn, recipient: 'Deepak R', completed: 'Jun 2, 2022 at 02:26 PM UTC', category: 'Project Management & Strategy', edition: 'NASBA CPE · 2.60 credits', pdfPath: `${source}/${project}/CertificateOfCompletion_Strategic Planning Foundations.pdf` },
  { title: 'Strategic Thinking', issuer: linkedIn, recipient: 'Deepak R', completed: 'Jun 4, 2022 at 02:44 AM UTC', category: 'Project Management & Strategy', edition: 'PMI Registered Education Provider · 0.50 PDU', credentialId: 'AYddYT970yLdUCOwEHtPoAt9guTj', pdfPath: `${source}/${project}/CertificateOfCompletion_Strategic Thinking.pdf` },
  { title: 'Supply Chain and Operations Management Tips', issuer: linkedIn, recipient: 'Deepak R', completed: 'Jun 5, 2022 at 05:00 AM UTC', category: 'Project Management & Strategy', edition: '2 hours 50 minutes', credentialId: 'AXIyMlVcvRct50x19TEcFtH3p2ip', pdfPath: `${source}/${project}/CertificateOfCompletion_Supply Chain and Operations Management Tips.pdf` },
];

export const certificationCategories: CertificationCategory[] = [
  'Sales & Business Development',
  'Customer Success & Communication',
  'Marketing & Growth',
  'Project Management & Strategy',
];
