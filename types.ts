
export interface Education {
  degree: string;
  institution: string;
  location: string;
  percentage: string;
  period?: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'Programming' | 'Web' | 'Database' | 'Tools' | 'Soft Skills';
}

export interface Certification {
  title: string;
  issuer: string;
  score?: string;
  date?: string;
}

export interface PersonalInfo {
  name: string;
  phone: string;
  email: string;
  objective: string;
  dob: string;
  gender: string;
  languages: string[];
  address: string;
}
