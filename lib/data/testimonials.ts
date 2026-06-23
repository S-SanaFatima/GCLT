export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  designation: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      'GCLT provided me with rigorous academic training that bridged traditional Islamic scholarship with contemporary research methodologies. The faculty are exceptional.',
    name: 'Ayesha Khan',
    designation: 'Research Associate, Islamabad',
  },
  {
    id: 2,
    quote:
      'The Technical Approaches to Research programme transformed how I approach academic writing and publication. Highly recommended for aspiring scholars.',
    name: 'Dr. Hassan Ali',
    designation: 'Assistant Professor, Lahore',
  },
  {
    id: 3,
    quote:
      'Attending GCLT\'s conference on AI & Society was a landmark experience. The institution truly bridges tradition, technology, and leadership.',
    name: 'Prof. Sarah Ahmed',
    designation: 'Universiti Malaya, Malaysia',
  },
  {
    id: 4,
    quote:
      'The Diploma in Financial Jurisprudence gave me practical skills I use daily in my work with Islamic financial institutions.',
    name: 'Muhammad Farooq',
    designation: 'Islamic Banking Professional',
  },
  {
    id: 5,
    quote:
      'GCLT\'s interdisciplinary approach and international faculty network make it a unique institution in Pakistan\'s academic landscape.',
    name: 'Dr. Fatima Zahra',
    designation: 'Postdoctoral Researcher, UK',
  },
];
