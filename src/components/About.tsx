import React from 'react';
import { Code, BarChart4, Lightbulb, Database, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const About: React.FC = () => {
  const navigate = useNavigate();

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
    <div id="about" className="min-h-screen py-32 bg-gray-800 relative">
      {/* Explore More Indicator - Top Right Only */}
      <div className="absolute top-8 right-8 z-10">
        <button
          onClick={() => navigate('/about')}
          className="group bg-indigo-600/20 hover:bg-indigo-600 border border-indigo-500/50 hover:border-indigo-400 rounded-full px-4 py-2 flex items-center transition-all duration-300 backdrop-blur-sm"
        >
          <span className="text-indigo-300 group-hover:text-white text-sm font-medium mr-2">
            Explore More
          </span>
          <ExternalLink size={16} className="text-indigo-300 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
        </button>
      </div>

      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">About Me</h2>
        
        {/* Profile Section with Photo */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            {/* Professional Photo */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-indigo-500 to-purple-600 p-1">
                  <div className="w-full h-full rounded-xl bg-gray-700 flex items-center justify-center">
                    {/* Placeholder for professional photo */}
                    <div className="text-center text-gray-400">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-600 flex items-center justify-center">
                        <span className="text-3xl font-bold">JD</span>
                      </div>
                      <p className="text-sm">Professional Photo</p>
                      <p className="text-xs mt-1">(LinkedIn Profile Image)</p>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-indigo-500 rounded-full opacity-70"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-70"></div>
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <div className="bg-gray-700 rounded-xl p-8 h-full">
                <h3 className="text-3xl font-bold text-white mb-6">Background & Expertise</h3>
                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                  With over 8 years of experience in data science and analytics, I specialize in transforming 
                  complex data into actionable insights. My expertise spans across multiple industries including 
                  healthcare, finance, and retail, where I've delivered impactful solutions that drive business growth.
                </p>
                <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                  I hold a Master's degree in Data Science from MIT and have multiple certifications in 
                  advanced analytics and machine learning techniques.
                </p>
                
                <h4 className="text-xl font-semibold text-white mb-4">What sets me apart:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300">Strong focus on translating technical findings into business value</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300">Ability to communicate complex concepts to non-technical stakeholders</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300">Experience leading cross-functional data teams</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300">Commitment to ethical data practices and responsible AI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Approach Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 rounded-xl p-8 border border-indigo-700/30">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">My Approach</h3>
            <p className="text-gray-300 leading-relaxed text-center max-w-4xl mx-auto text-lg">
              I believe in a holistic approach to data projects, emphasizing not just technical excellence but also 
              business context and stakeholder needs. My methodology combines rigorous analysis with 
              creative problem-solving to deliver solutions that are both technically sound and 
              commercially valuable.
            </p>
          </div>
        </div>
        
        {/* Skills Section */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Skills & Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors duration-300">
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
    </div>
  );
};

export default About;