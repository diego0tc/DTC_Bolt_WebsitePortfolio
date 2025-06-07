import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'dog-shelter-analytics',
    title: 'Dog Shelter Analytics',
    description: 'Developed a comprehensive analytics dashboard for a local dog shelter, helping optimize adoption rates and resource allocation. The analysis increased successful adoptions by 32% within six months.',
    type: 'tableau',
    backgroundImage: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg',
    tools: ['Tableau', 'Python', 'SQL', 'Excel'],
    color: '#8B5E3C',
    contrastColor: '#F5F0E9'
  },
  {
    id: 'toronto-insurance',
    title: 'Toronto Car Insurance Analytics',
    description: 'Created a geospatial analysis of car insurance claims across Toronto, identifying high-risk areas and potential fraud patterns. This project saved the company over $2.1M annually in claim assessments.',
    type: 'analysis',
    backgroundImage: 'https://images.pexels.com/photos/1707820/pexels-photo-1707820.jpeg',
    tools: ['Python', 'GeoJSON', 'Pandas', 'Scikit-learn'],
    color: '#2B3F87',
    contrastColor: '#E9EEF8'
  },
  {
    id: 'healthcare-prediction',
    title: 'Healthcare Patient Prediction',
    description: 'Developed a machine learning model to predict patient readmission risks for a major healthcare provider. The model achieved 87% accuracy and has been implemented in 12 hospitals.',
    type: 'python',
    backgroundImage: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg',
    tools: ['Python', 'TensorFlow', 'Scikit-learn', 'AWS SageMaker'],
    color: '#1E6C67',
    contrastColor: '#E5F4F3'
  },
  {
    id: 'retail-optimization',
    title: 'Retail Supply Chain Optimization',
    description: 'Created a supply chain optimization tool that reduced inventory costs by 18% while maintaining product availability. Implemented dashboard visualizations for real-time monitoring.',
    type: 'tableau',
    backgroundImage: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg',
    tools: ['Tableau', 'R', 'SQL', 'Power BI'],
    color: '#782F40',
    contrastColor: '#F5E9EC'
  },
  {
    id: 'dataclean-package',
    title: 'DataClean Python Package',
    description: 'Developed and published an open-source Python package for automated data cleaning and preprocessing, now with over 50,000 downloads on PyPI.',
    type: 'python',
    backgroundImage: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
    tools: ['Python', 'Pandas', 'NumPy', 'SciPy'],
    color: '#3A506B',
    contrastColor: '#EBF0F5'
  },
  {
    id: 'social-media-sentiment',
    title: 'Social Media Sentiment Analysis',
    description: 'Built an NLP model to analyze customer sentiment from social media data, helping a major brand improve their customer service response strategy.',
    type: 'analysis',
    backgroundImage: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg',
    tools: ['Python', 'NLTK', 'Transformers', 'Hugging Face'],
    color: '#5D5179',
    contrastColor: '#EEE9F4'
  }
];

export const socialLinks = [
  {
    name: 'GitHub',
    icon: 'github',
    url: 'https://github.com/datascientist'
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    url: 'https://linkedin.com/in/datascientist'
  }
];