export interface CareerEntry {
  name: string;
  role: string;
  from: string;
  to?: string;
  description?: string;
  skills?: string[];
  logo?: string;
  // Schema.org fields
  startDate: string; // ISO format YYYY-MM
  endDate?: string; // ISO format YYYY-MM or undefined if current
  companyUrl?: string;
  location?: string;
}

export const curriculum: CareerEntry[] = [
  {
    name: 'Akawaka',
    role: 'Développeur web',
    from: '2021',
    startDate: '2021-04',
    companyUrl: 'https://akawaka.fr',
    location: 'Lyon, France',
    description: 'Développement d\'applications web sur mesure pour des clients variés. Architecture logicielle, conseil technique et accompagnement d\'équipes.',
    skills: ['Symfony', 'PHP', 'Docker', 'PostgreSQL', 'TypeScript'],
  },
  {
    name: 'Gamma Software',
    role: 'Développeur PHP / Angular',
    from: '2017',
    to: '2021',
    startDate: '2017-01',
    endDate: '2021-03',
    location: 'Lyon, France',
    description: 'Développement et maintenance d\'applications métier. Migration de systèmes legacy vers des architectures modernes.',
    skills: ['PHP', 'Angular', 'MySQL', 'REST API'],
  },
  {
    name: 'Infostrates',
    role: 'Développeur web',
    from: '2016',
    to: '2017',
    startDate: '2016-01',
    endDate: '2016-12',
    location: 'Lyon, France',
    description: 'Création de sites web et applications pour des clients du secteur public et privé.',
    skills: ['PHP', 'JavaScript', 'WordPress'],
  },
  {
    name: 'Safebrands',
    role: 'Développeur PHP',
    from: '2013',
    to: '2015',
    startDate: '2013-01',
    endDate: '2015-12',
    location: 'Marseille, France',
    description: 'Développement d\'outils internes et d\'interfaces de gestion pour les services de noms de domaine.',
    skills: ['PHP', 'MySQL', 'Linux'],
  },
];
