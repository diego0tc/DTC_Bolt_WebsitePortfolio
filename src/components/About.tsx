import React from 'react';
import { Code, BarChart4, Lightbulb, Database } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { 
      category: 'Data Analysis',
      items: ['SQL', 'Python', 'R', 'Excel', 'Statistical Analysis', 'A/B Testing'],
      icon: <BarChart4 className="w-10 h-10 text-blue-400" />
    },
    {
      category: 'Data Science',
      items: ['Machine Learning', 'Deep Learning', 'NLP', 'Time Series Analysis', 'Clustering', 'Regression'],
      icon: <Lightbulb className="w-10 h-10 text-yellow-400" />
    },
    {
      category: 'Data Engineering',
      items: ['ETL Pipelines', 'AWS', 'Spark', 'Kafka', 'Airflow', 'Databricks'],
      icon: <Database className="w-10 h-10 text-green-400" />
    },
    {
      category: 'Programming',
      items: ['Python', 'SQL', 'JavaScript', 'R', 'Scala', 'Java'],
      icon: <Code className="w-10 h-10 text-purple-400" />
    }
  ];

  return (
    <div id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">About Me</h2>
        
        <div className="md:flex md:space-x-8 mb-16">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="bg-gray-700 rounded-lg p-6 h-full">
              <h3 className="text-2xl font-bold text-white mb-4">Background</h3>
              <p className="text-gray-300 leading-relaxed">
                With over 8 years of experience in data science and analytics, I specialize in transforming 
                complex data into actionable insights. My expertise spans across multiple industries including 
                healthcare, finance, and retail, where I've delivered impactful solutions that drive business growth.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                I hold a Master's degree in Data Science from MIT and have multiple certifications in 
                advanced analytics and machine learning techniques.
              </p>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <div className="bg-gray-700 rounded-lg p-6 h-full">
              <h3 className="text-2xl font-bold text-white mb-4">My Approach</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I believe in a holistic approach to data projects, emphasizing not just technical excellence but also 
                business context and stakeholder needs. My methodology combines rigorous analysis with 
                creative problem-solving to deliver solutions that are both technically sound and 
                commercially valuable.
              </p>
              
              <h4 className="text-xl font-semibold text-white mb-3">What sets me apart:</h4>
              <ul className="list-disc pl-5 text-gray-300 space-y-2 mb-6">
                <li>Strong focus on translating technical findings into business value</li>
                <li>Ability to communicate complex concepts to non-technical stakeholders</li>
                <li>Experience leading cross-functional data teams</li>
                <li>Commitment to ethical data practices and responsible AI</li>
              </ul>
            </div>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-8 text-center">Skills & Expertise</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-6">
              <div className="flex items-center mb-4">
                {skill.icon}
                <h4 className="text-xl font-semibold text-white ml-3">{skill.category}</h4>
              </div>
              <ul className="text-gray-300">
                {skill.items.map((item, i) => (
                  <li key={i} className="mb-2 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;