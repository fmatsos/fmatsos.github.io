export interface CareerEntry {
  name: string;
  role: string;
  from: string;
  to?: string;
}

export const curriculum: CareerEntry[] = [
  {
    name: 'Akawaka',
    role: 'Développeur web',
    from: '2021',
  },
  {
    name: 'Gamma Software',
    role: 'Développeur PHP / Angular',
    from: '2017',
    to: '2021',
  },
  {
    name: 'Infrostrates',
    role: 'Développeur web',
    from: '2016',
    to: '2017',
  },
  {
    name: 'Safebrands',
    role: 'Développeur PHP',
    from: '2013',
    to: '2015',
  },
];
