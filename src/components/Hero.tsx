import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Database, BarChart, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && animationPhase === 0) {
            // Start the guided animation sequence
            startGuidedAnimation();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(title);
    return () => observer.disconnect();
  }, [animationPhase]);

  const startGuidedAnimation = () => {
    // Phase 1: Title appears (immediately)
    setAnimationPhase(1);
    
    // Phase 2: Subtitle appears (after 1500ms - same timing as third animation)
    setTimeout(() => {
      setAnimationPhase(2);
    }, 1500);
    
    // Phase 3: Skills pills appear (after 3500ms - bigger gap for text focus)
    setTimeout(() => {
      setAnimationPhase(3);
    }, 3500);
    
    // Phase 4: Button appears (after 4900ms - same gap as before)
    setTimeout(() => {
      setAnimationPhase(4);
    }, 4900);
  };

  return (
    <div id="home" className="min-h-screen bg-gray-950 relative flex items-center">
      {/* Background image - ALWAYS visible from start, part of the initial render */}
      <div 
        className="absolute inset-0 opacity-15 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg')"
        }}
      ></div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Phase 1: Main Title - same timing, good movement */}
          <h1 
            ref={titleRef} 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-1500 ease-out transform ${
              animationPhase >= 1 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-12 scale-95'
            }`}
          >
            Data Science & Analytics Portfolio
          </h1>
          
          {/* Phase 2: Subtitle - SAME movement and timing as third animation */}
          <p 
            className={`text-xl md:text-2xl text-gray-300 mb-8 transition-all duration-1000 ease-out transform ${
              animationPhase >= 2 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-6 scale-95'
            }`}
          >
            Transforming complex data into actionable insights and elegant solutions
          </p>
          
          {/* Phase 3: Skills Pills - PERFECT timing and movement kept exactly the same */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div 
              className={`bg-gray-800/70 backdrop-blur-sm p-4 rounded-lg flex items-center border border-gray-700/50 hover:border-red-400/50 transition-all duration-1000 ease-out transform ${
                animationPhase >= 3 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-6 scale-95'
              }`}
              style={{ transitionDelay: animationPhase >= 3 ? '200ms' : '0ms' }}
            >
              <Database className="text-red-400 mr-3" />
              <span className="text-white">Data Engineering</span>
            </div>
            <div 
              className={`bg-gray-800/70 backdrop-blur-sm p-4 rounded-lg flex items-center border border-gray-700/50 hover:border-emerald-400/50 transition-all duration-1000 ease-out transform ${
                animationPhase >= 3 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-6 scale-95'
              }`}
              style={{ transitionDelay: animationPhase >= 3 ? '400ms' : '0ms' }}
            >
              <BarChart className="text-emerald-400 mr-3" />
              <span className="text-white">Data Visualization</span>
            </div>
            <div 
              className={`bg-gray-800/70 backdrop-blur-sm p-4 rounded-lg flex items-center border border-gray-700/50 hover:border-blue-400/50 transition-all duration-1000 ease-out transform ${
                animationPhase >= 3 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-6 scale-95'
              }`}
              style={{ transitionDelay: animationPhase >= 3 ? '600ms' : '0ms' }}
            >
              <Terminal className="text-blue-400 mr-3" />
              <span className="text-white">Machine Learning</span>
            </div>
          </div>
          
          {/* Phase 4: Call to Action Button - same perfect timing */}
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className={`bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition-all duration-1000 ease-out flex items-center mx-auto shadow-lg hover:shadow-red-500/25 transform ${
              animationPhase >= 4 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-6 scale-95'
            }`}
          >
            View About <ArrowDown className="ml-2" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;