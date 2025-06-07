import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'toronto-parking-lesson',
    title: 'The New Torontonian Parking Lesson',
    description: 'Comprehensive analysis of parking patterns and urban planning insights in Toronto. This study examines the relationship between urban density, parking availability, and policy impacts on city planning decisions.',
    type: 'tableau',
    backgroundImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    tools: ['Tableau', 'Urban Analytics', 'GIS', 'Data Visualization'],
    color: '#1E3A8A',
    contrastColor: '#F0F9FF',
    link: 'https://public.tableau.com/views/TheNewTorontonianaparkinglesson/Dashboard1'
  },
  {
    id: 'shelter-analytics',
    title: 'Animal Shelter Analytics',
    description: 'Data-driven insights into animal adoption patterns and shelter resource optimization. Analysis focuses on improving adoption rates and understanding seasonal trends in animal care.',
    type: 'tableau',
    backgroundImage: 'https://images.unsplash.com/photo-1415369629372-26f2fe60c467?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    tools: ['Tableau', 'Statistical Analysis', 'Animal Welfare Data', 'Predictive Modeling'],
    color: '#059669',
    contrastColor: '#F0FDF4'
  },
  {
    id: 'economic-analysis',
    title: 'Economic Data Insights',
    description: 'Philosophical approach to economic analysis combining theoretical frameworks with empirical data. Exploring market behaviors through the lens of behavioral economics and policy analysis.',
    type: 'analysis',
    backgroundImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    tools: ['R', 'Python', 'Economic Modeling', 'Statistical Analysis'],
    color: '#7C3AED',
    contrastColor: '#F5F3FF'
  },
  {
    id: 'data-philosophy-research',
    title: 'Philosophy × Data Science',
    description: 'Interdisciplinary research combining philosophical inquiry with modern data analytics. Exploring ethical implications of data science and the epistemological foundations of statistical inference.',
    type: 'analysis',
    backgroundImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    tools: ['Research Methodology', 'Ethics', 'Philosophy', 'Data Science'],
    color: '#DC2626',
    contrastColor: '#FEF2F2'
  },
  {
    id: 'behavioral-economics',
    title: 'Behavioral Economics Study',
    description: 'Quantitative analysis of decision-making patterns and economic behaviors. Research into how psychological factors influence market dynamics and policy effectiveness.',
    type: 'analysis',
    backgroundImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    tools: ['Python', 'SPSS', 'Behavioral Analysis', 'Survey Data'],
    color: '#EA580C',
    contrastColor: '#FFF7ED'
  },
  {
    id: 'policy-impact-analysis',
    title: 'Policy Impact Assessment',
    description: 'Rigorous evaluation of public policy effectiveness through data analysis. Measuring outcomes and identifying areas for improvement in government programs and initiatives.',
    type: 'tableau',
    backgroundImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    tools: ['Tableau', 'Policy Analysis', 'Government Data', 'Impact Evaluation'],
    color: '#0891B2',
    contrastColor: '#F0F9FF'
  }
];

export const socialLinks = [
  {
    name: 'GitHub',
    icon: 'github',
    url: 'https://github.com/diego0tc'
  },
  {
    name: 'LinkedIn', 
    icon: 'linkedin',
    url: 'https://linkedin.com/in/diego-tejada-cardenas'
  },
  {
    name: 'Tableau Public',
    icon: 'bar-chart',
    url: 'https://public.tableau.com/app/profile/diego.tejada.cardenas'
  }
];