export type SocialIconKey = 'Github' | 'Linkedin' | 'Envelope';

export interface SummaryType {
  title: string;
  subTitle: string;
}

export interface SocialItemType {
  icon: SocialIconKey;
  name: string;
  link: string;
}

export interface ExperienceItemType {
  jobTitle: string;
  companyName: string;
  date: string;
  companyDesc: string;
  bulletPoints: string[];
}

export interface PortfolioInfo {
  summaryInfo: SummaryType;
  socials: SocialItemType[];
  expInfo: ExperienceItemType[];
}
