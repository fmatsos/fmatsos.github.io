export interface ExternalLink {
  href: string;
  title: string;
  picto: string;
  alt: string;
}

export const links: ExternalLink[] = [
  {
    href: 'https://github.com/fmatsos',
    title: 'Suivre sur GitHub',
    picto: '/images/svg/github.svg',
    alt: 'Github icon',
  },
  {
    href: 'https://www.linkedin.com/in/fmatsos',
    title: 'Suivre sur LinkedIn',
    picto: '/images/svg/linkedin.svg',
    alt: 'LinkedIn icon',
  },
  {
    href: 'mailto:mathilde@akawaka.fr',
    title: 'Demander une prestation',
    picto: '/images/svg/contact.svg',
    alt: 'Contact icon',
  },
];

// URLs for Schema.org sameAs (social profiles)
export const socialProfileUrls: string[] = [
  'https://github.com/fmatsos',
  'https://www.linkedin.com/in/fmatsos',
];
