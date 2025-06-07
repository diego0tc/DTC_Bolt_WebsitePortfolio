import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Code, BarChart4, Lightbulb, Database, Award, Calendar, MapPin } from 'lucide-react';

const AboutPage: React.FC = () => {
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
    <div className="min-h-screen bg-gray-900 pt-20">
      {/* Hero Section */}
      <div 
        className="h-[500px] relative bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative">
          <div>
            <button
              onClick={() => navigate('/')}
              className="flex items-center text-gray-300 hover:text-white mb-6 transition-colors"
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
                <div className="w-96 h-96 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-indigo-500 to-purple-600 p-1">
                  <div className="w-full h-full rounded-xl bg-gray-700 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-600 flex items-center justify-center">
                        <span className="text-4xl font-bold">JD</span>
                      </div>
                      <p className="text-lg font-medium">Professional Photo</p>
                      <p className="text-sm mt-1">(LinkedIn Profile Image)</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-indigo-500 rounded-full opacity-70"></div>
                <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-purple-500 rounded-full opacity-70"></div>
              </div>
            </div>
            
            {/* Personal Info */}
            <div className="flex-1">
              <div className="bg-gray-800 rounded-xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">John Doe</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center text-gray-300">
                    <MapPin className="text-indigo-400 mr-3" size={20} />
                    <span>Toronto, ON, Canada</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Calendar className="text-indigo-400 mr-3" size={20} />
                    <span>8+ Years Experience</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Award className="text-indigo-400 mr-3" size={20} />
                    <span>MIT Graduate</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Database className="text-indigo-400 mr-3" size={20} />
                    <span>25+ Projects Completed</span>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                  I'm a passionate data scientist who believes in the power of data to drive meaningful change. 
                  My journey began with a fascination for patterns and numbers, which led me to pursue advanced 
                  studies in data science at MIT. Today, I help organizations unlock the value hidden in their data.
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
          <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 rounded-xl p-8 border border-indigo-700/30">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">My Philosophy</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Innovation First</h3>
                <p className="text-gray-300">Always seeking creative solutions to complex problems through cutting-edge techniques.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart4 className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Data-Driven</h3>
                <p className="text-gray-300">Every decision backed by solid data analysis and statistical rigor.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Impact Focused</h3>
                <p className="text-gray-300">Measuring success by the real-world impact of analytical solutions.</p>
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
                  <span className="text-indigo-400 font-semibold">{item.year}</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-indigo-600 rounded-full mt-2 mr-8"></div>
                <div className="flex-1 bg-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{item.role}</h3>
                  <p className="text-indigo-400 mb-3">{item.company}</p>
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
              <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-white">{achievement.title}</h3>
                  <span className="text-indigo-400 text-sm font-medium">{achievement.year}</span>
                </div>
                <p className="text-gray-300">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Technical Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-300">
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

export default AboutPage;