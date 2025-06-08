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
    <div id="home" className="min-h-screen bg-gray-950 relative flex items-center">
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center"
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
            <div className="bg-gray-800/70 backdrop-blur-sm p-4 rounded-lg flex items-center border border-gray-700/50 hover:border-red-400/50 transition-all duration-300">
              <Database className="text-red-400 mr-3" />
              <span className="text-white">Data Engineering</span>
            </div>
            <div className="bg-gray-800/70 backdrop-blur-sm p-4 rounded-lg flex items-center border border-gray-700/50 hover:border-emerald-400/50 transition-all duration-300">
              <BarChart className="text-emerald-400 mr-3" />
              <span className="text-white">Data Visualization</span>
            </div>
            <div className="bg-gray-800/70 backdrop-blur-sm p-4 rounded-lg flex items-center border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300">
              <Terminal className="text-blue-400 mr-3" />
              <span className="text-white">Machine Learning</span>
            </div>
          </div>
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition-all duration-300 flex items-center mx-auto shadow-lg hover:shadow-red-500/25"
          >
            View About <ArrowDown className="ml-2" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;