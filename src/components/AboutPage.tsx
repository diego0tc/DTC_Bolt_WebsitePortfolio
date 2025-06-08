import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BarChart4, Database, GitBranch, Award, Calendar, MapPin } from 'lucide-react';

const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  const skills = [
    { 
      category: 'Data Analysis & Insight',
      items: ['SQL', 'Python', 'R', 'Statistical Analysis', 'A/B Testing', 'Data Visualization'],
      icon: <BarChart4 className="w-10 h-10 text-emerald-400" />
    },
    {
      category: 'Analytics Engineering',
      items: ['ETL Pipelines', 'Data Modeling', 'dbt', 'Airflow', 'Data Quality', 'Performance Optimization'],
      icon: <Database className="w-10 h-10 text-blue-400" />
    },
    {
      category: 'Data Architecture & Workflow',
      items: ['AWS', 'Spark', 'Kafka', 'Databricks', 'CI/CD', 'Infrastructure as Code'],
      icon: <GitBranch className="w-10 h-10 text-red-400" />
    }
  ];

  const achievements = [
    {
      title: "Led Data Science Team",
      description: "Successfully managed a team of 8 data scientists across 3 major projects",
      year: "2023"
    },
    {
      title: "Published Research Paper",
      description: "Co-authored paper on 'Predictive Analytics in Healthcare' - cited 150+ times",
      year: "2022"
    },
    {
      title: "AWS Certified",
      description: "Achieved AWS Machine Learning Specialty certification",
      year: "2022"
    },
    {
      title: "Industry Speaker",
      description: "Keynote speaker at Toronto Data Science Conference",
      year: "2021"
    }
  ];

  const timeline = [
    {
      year: "2023-Present",
      role: "Senior Data Scientist",
      company: "TechCorp Inc.",
      description: "Leading advanced analytics initiatives and ML model development"
    },
    {
      year: "2020-2023",
      role: "Data Scientist",
      company: "Analytics Co.",
      description: "Developed predictive models and automated reporting systems"
    },
    {
      year: "2018-2020",
      role: "Data Analyst",
      company: "StartupXYZ",
      description: "Built data pipelines and created business intelligence dashboards"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 pt-20">
      {/* Hero Section */}
      <div 
        className="h-[500px] relative bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/70 to-gray-950"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative">
          <div>
            <button
              onClick={() => navigate('/')}
              className="flex items-center text-gray-300 hover:text-red-400 mb-6 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </button>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Passionate data scientist with 8+ years of experience transforming complex data 
              into actionable business insights across multiple industries.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Profile Section */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            {/* Professional Photo */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-96 h-96 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-red-500 to-orange-500 p-1">
                  <div className="w-full h-full rounded-xl bg-gray-800 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-700 flex items-center justify-center">
                        <span className="text-4xl font-bold">D</span>
                      </div>
                      <p className="text-lg font-medium">Professional Photo</p>
                      <p className="text-sm mt-1">(LinkedIn Profile Image)</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-red-500 rounded-full opacity-70"></div>
                <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-orange-500 rounded-full opacity-70"></div>
              </div>
            </div>
            
            {/* Personal Info */}
            <div className="flex-1">
              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
                <h2 className="text-3xl font-bold text-white mb-6">Diego Tejada Cardenas</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center text-gray-300">
                    <MapPin className="text-red-400 mr-3" size={20} />
                    <span>Toronto, ON, Canada</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Calendar className="text-emerald-400 mr-3" size={20} />
                    <span>8+ Years Experience</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Award className="text-blue-400 mr-3" size={20} />
                    <span>Economics Graduate</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Database className="text-orange-400 mr-3" size={20} />
                    <span>25+ Projects Completed</span>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                  I'm a passionate data scientist who believes in the power of data to drive meaningful change. 
                  My journey began with a fascination for patterns and numbers, which led me to pursue advanced 
                  studies in economics and data science. Today, I help organizations unlock the value hidden in their data.
                </p>
                
                <p className="text-gray-300 leading-relaxed text-lg">
                  When I'm not analyzing data, you can find me contributing to open-source projects, 
                  mentoring aspiring data scientists, or exploring Toronto's vibrant tech scene.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-xl p-8 border border-red-700/30">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">My Philosophy</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart4 className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Insight-Driven</h3>
                <p className="text-gray-300">Transforming raw data into meaningful insights that drive strategic decisions.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Engineering Excellence</h3>
                <p className="text-gray-300">Building robust, scalable data infrastructure that powers analytics at scale.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GitBranch className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Workflow Optimization</h3>
                <p className="text-gray-300">Designing efficient data architectures that streamline analytics workflows.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Professional Journey</h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-32 text-right mr-8">
                  <span className="text-red-400 font-semibold">{item.year}</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-red-500 rounded-full mt-2 mr-8"></div>
                <div className="flex-1 bg-gray-900 rounded-lg p-6 border border-gray-800">
                  <h3 className="text-xl font-semibold text-white mb-2">{item.role}</h3>
                  <p className="text-red-400 mb-3">{item.company}</p>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Key Achievements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors border border-gray-800">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-white">{achievement.title}</h3>
                  <span className="text-red-400 text-sm font-medium">{achievement.year}</span>
                </div>
                <p className="text-gray-300">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section - Now with only 3 categories */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Technical Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors duration-300 border border-gray-800">
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

export default AboutPage;