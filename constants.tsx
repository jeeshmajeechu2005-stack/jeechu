
// This file provides the portfolio data for Jeeshma C.
import { Education, Skill, Certification, PersonalInfo } from './types';

export const PERSONAL_INFO: PersonalInfo = {
  name: "Jeeshma C",
  objective: "To secure a challenging position in a reputable organization where I can utilize my technical skills and contribute to the growth of the company while enhancing my own knowledge and expertise.",
  email: "jeeshmac@example.com",
  phone: "+91 9876543210",
  languages: ["English", "Malayalam", "Hindi"],
  address: "Palakkad, Kerala, India",
  dob: "2002-05-15",
  gender: "Female"
};

export const EDUCATIONS: Education[] = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Government Engineering College",
    location: "Palakkad",
    percentage: "8.5 CGPA",
    period: "2020 - 2024"
  },
  {
    degree: "Higher Secondary",
    institution: "V.V.M.H.S.S Marakkara",
    location: "Malappuram",
    percentage: "95%",
    period: "2018 - 2020"
  }
];

export const SKILLS: Skill[] = [
  { name: "Python", level: 90, category: 'Programming' },
  { name: "C", level: 80, category: 'Programming' },
  { name: "HTML/CSS", level: 85, category: 'Web' },
  { name: "React", level: 75, category: 'Web' },
  { name: "JavaScript", level: 80, category: 'Web' },
  { name: "SQL", level: 70, category: 'Database' },
  { name: "Git", level: 85, category: 'Tools' },
  { name: "Problem Solving", level: 95, category: 'Soft Skills' }
];

export const CERTIFICATIONS: Certification[] = [
  { title: "Python for Data Science", issuer: "NPTEL", date: "2023" },
  { title: "NCC C-Certificate", issuer: "National Cadet Corps", date: "2022" },
  { title: "Front-end Development", issuer: "Coursera", date: "2023" }
];

export const EXTRA_CURRICULAR = [
  "National Cadet Corps (NCC) - Senior Under Officer",
  "Active participant in college coding competitions",
  "NSS Volunteer",
  "Public Speaking and Leadership"
];
