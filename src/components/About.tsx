import React from 'react';
import { BarChart4, Database, Code, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const About: React.FC = () => {
  const navigate = useNavigate();

  const skills = [
    { 
      category: 'Data Analysis & Insight',
      items: ['SQL (BigQuery)', 'Tableau Cloud dashboards', 'Econometrics & Statistical analysis', 'Stat-testing (t-tests, ANOVA)', 'KPI variance & root-cause'],
      icon: <BarChart4 className="w-10 h-10 text-emerald-400" />
    },
    {
      category: 'Analytics Engineering',
      items: ['BigQuery schema modelling', 'Cloud Run + Python ETL jobs', 'Firebase & LangChain mini-apps', 'GitHub CI/CD & unit tests', 'Cost tuning & query optimization'],
      icon: <Database className="w-10 h-10 text-blue-400" />
    },
    {
      category: 'Data Architecture & Workflow',
      items: ['End-to-end DAG design (Make.com / Airflow)', 'Orchestration + scheduling (Composer)', 'Data catalog / naming standards', 'Data Quality Control Dashboards', 'Row-level security & permissions'],
      icon: <Code className="w-10 h-10 text-red-400" />
    }
  ];

  return (
    <div id="about" className="min-h-screen py-32 bg-gray-900 relative">
      {/* Explore More Indicator - Top Right Only */}
      <div className="absolute top-8 right-8 z-10">
        <button
          onClick={() => navigate('/about')}
          className="group bg-emerald-500/20 hover:bg-emerald-500 border border-emerald-400/50 hover:border-emerald-300 rounded-full px-4 py-2 flex items-center transition-all duration-300 backdrop-blur-sm"
        >
          <span className="text-emerald-300 group-hover:text-white text-sm font-medium mr-2">
            Explore More
          </span>
          <ExternalLink size={16} className="text-emerald-300 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
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
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-red-500 to-orange-500 p-1">
                  <img 
                    src="/images/diego-professional-photo.jpg" 
                    alt="Diego Tejada Cardenas - Professional Photo"
                    className="w-full h-full rounded-xl object-cover object-top"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 rounded-full opacity-70"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange-500 rounded-full opacity-70"></div>
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <div className="bg-gray-800 rounded-xl p-8 h-full border border-gray-700">
                <h3 className="text-3xl font-bold text-white mb-6">Background & Expertise</h3>
                <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                  I'm an economist-turned-data leader who built Weed Me's first cloud analytics backbone. 
                  Today I ship BigQuery pipelines, Tableau dashboards, and internal Firebase apps—plus sprinkle 
                  AI where it saves clicks. My blend of economics, statistics, and product thinking lets me 
                  connect business questions to data architecture—fast.
                </p>
                
                <h4 className="text-xl font-semibold text-white mb-4">What sets me apart:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300">End-to-end ownership – raw data ➜ cleaned ➜ visualised ➜ adopted</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300">Economic lens – price elasticity, Pareto, demand curves baked into reports</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300">Workflow architect – Trello → Motion playbooks that keep projects on rails</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300">Continuous learner – quarterly up-skilling sprints (AI, dbt, LangGraph, etc.)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Approach Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-xl p-8 border border-red-700/30">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">My Approach</h3>
            <p className="text-gray-300 leading-relaxed text-center max-w-4xl mx-auto text-lg">
              I start by listening, then sprint-prototype dashboards in days—not months. Once the answers click, 
              I harden the pipelines in BigQuery, wrap monitoring around them, and document the playbook. 
              Analysts stay in flow, execs stay informed, and the system keeps learning with every question.
            </p>
          </div>
        </div>
        
        {/* Skills Section - Now with only 3 categories */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Skills & Expertise</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors duration-300 border border-gray-700 hover:border-gray-600">
                <div className="flex items-center mb-4">
                  {skill.icon}
                  <h4 className="text-xl font-semibold text-white ml-3">{skill.category}</h4>
                </div>
                <ul className="text-gray-300">
                  {skill.items.map((item, i) => (
                    <li key={i} className="mb-2 flex items-center">
                      <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
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