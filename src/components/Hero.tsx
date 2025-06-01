import React, { useEffect, useRef } from 'react';
import { ArrowDown, Database, BarChart, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            title.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(title);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="home" className="min-h-screen bg-gray-900 relative flex items-center">
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg')"
        }}
      ></div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 opacity-0 transition-opacity duration-1000">
            Data Science & Analytics Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Transforming complex data into actionable insights and elegant solutions
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-gray-800 bg-opacity-70 p-4 rounded-lg flex items-center">
              <Database className="text-blue-400 mr-3" />
              <span className="text-white">Data Engineering</span>
            </div>
            <div className="bg-gray-800 bg-opacity-70 p-4 rounded-lg flex items-center">
              <BarChart className="text-purple-400 mr-3" />
              <span className="text-white">Data Visualization</span>
            </div>
            <div className="bg-gray-800 bg-opacity-70 p-4 rounded-lg flex items-center">
              <Terminal className="text-green-400 mr-3" />
              <span className="text-white">Machine Learning</span>
            </div>
          </div>
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors flex items-center mx-auto"
          >
            View Projects <ArrowDown className="ml-2" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;