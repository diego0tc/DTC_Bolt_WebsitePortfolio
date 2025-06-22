// Personal information for Diego Tejada Cardenas
// This file contains real personal and professional contact information

export const personalInfo = {
  name: {
    full: 'Diego Tejada Cardenas',
    short: 'Diego TC',
    display: 'Diego Tejada Cárdenas'
  },
  
  contact: {
    email: 'diego.tejada.cardenas@gmail.com', // Real professional email
    location: 'Toronto, ON, Canada',
    timezone: 'EST (UTC-5)',
    availability: 'Open to new opportunities'
  },
  
  professional: {
    title: 'Lead Data Analyst & Analytics Engineer',
    tagline: 'Turning Questions into Business Living Systems',
    specialties: [
      'Lead Data Analyst',
      'Analytics Engineer', 
      'Data Architect'
    ],
    
    elevator_pitch: 'Data analyst with expertise in economics and philosophy, specializing in transforming complex datasets into actionable business insights through advanced analytics and visualization.',
    
    core_skills: [
      'Tableau Development',
      'Statistical Analysis',
      'Economic Modeling',
      'Data Visualization',
      'Business Intelligence',
      'SQL & Database Design',
      'Python & R Programming',
      'Philosophy & Ethics in Data'
    ]
  },
  
  social: {
    linkedin: {
      url: 'https://linkedin.com/in/diego-tejada-cardenas',
      display: 'diego-tejada-cardenas'
    },
    github: {
      url: 'https://github.com/diego0tc',
      display: 'diego0tc'  
    },
    tableau: {
      url: 'https://public.tableau.com/app/profile/diego.tejada.cardenas',
      display: 'diego.tejada.cardenas'
    }
  },
  
  bio: {
    short: 'Data analyst combining economics, philosophy, and advanced analytics to drive business decisions.',
    
    medium: 'Experienced data analyst with a unique background combining economics and philosophy with modern analytics. Specializes in Tableau visualization, statistical modeling, and transforming complex business questions into data-driven solutions.',
    
    long: 'Diego Tejada Cárdenas is a Lead Data Analyst and Analytics Engineer with a distinctive approach that bridges economics, philosophy, and data science. With expertise in Tableau development, statistical analysis, and business intelligence, Diego specializes in transforming complex business challenges into elegant, data-driven solutions. His philosophical background brings a unique perspective to data ethics and methodology, while his economics foundation ensures business relevance in every analysis. Based in Toronto, Diego is passionate about uncovering the stories hidden in data and building living systems that continuously generate business value.'
  },
  
  preferences: {
    contact_method: 'LinkedIn for professional inquiries',
    project_types: [
      'Business Intelligence Development',
      'Tableau Dashboard Creation', 
      'Economic Analysis & Modeling',
      'Data Strategy Consulting',
      'Analytics Process Optimization'
    ],
    
    collaboration_style: 'Methodical, analytical, and philosophy-driven approach to problem-solving',
    
    availability_note: 'Always interested in discussing new opportunities, data projects, and sharing insights about analytics.'
  }
};

// Export individual pieces for easy access
export const { name, contact, professional, social, bio, preferences } = personalInfo; 