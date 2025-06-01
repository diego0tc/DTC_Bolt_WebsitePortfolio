export interface Project {
  id: string;
  title: string;
  description: string;
  type: 'tableau' | 'python' | 'analysis';
  backgroundImage: string;
  link?: string;
  tools: string[];
  color: string;
  contrastColor: string;
}

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
}