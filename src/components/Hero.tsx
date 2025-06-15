import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Database, BarChart4, Code } from 'lucide-react';

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
    
    // Phase 2: Subtitle appears (after 2500ms - BIG gap for title focus)
    setTimeout(() => {
      setAnimationPhase(2);
    }, 2500);
    
    // Phase 3: Skills pills appear (after 5500ms - BIG gap for subtitle focus)
    setTimeout(() => {
      setAnimationPhase(3);
    }, 5500);
    
    // Phase 4: Buttons appear (FASTER: 8500ms → 6500ms - 2 seconds shorter)
    setTimeout(() => {
      setAnimationPhase(4);
    }, 6500);
  };

  return (
    <div id="home" className="min-h-screen bg-gray-950 relative flex items-center">
      {/* Background image - ALWAYS visible from the very start, no animation */}
      <div 
        className="absolute inset-0 opacity-15 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg')"
        }}
      ></div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Phase 1: Main Title - NOW follows third animation timing and movement */}
          <h1 
            ref={titleRef} 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-1000 ease-out transform ${
              animationPhase >= 1 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-6 scale-95'
            }`}
          >
            Your Professional Tagline Goes Here
          </h1>
          
          {/* Phase 2: Subtitle - Real personal tagline with bolt-ui animations */}
          <p 
            className={`text-xl md:text-2xl text-gray-300 mb-8 transition-all duration-1000 ease-out transform ${
              animationPhase >= 2 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-6 scale-95'
            }`}
          >
            Your compelling professional description that captures your unique value proposition
          </p>
          
          {/* Phase 3: Skills Pills - PERFECT timing and movement kept exactly the same */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div 
              className={`bg-gray-800/70 backdrop-blur-sm p-4 rounded-lg flex items-center border border-gray-700/50 hover:border-emerald-400/50 transition-all duration-1000 ease-out transform ${
                animationPhase >= 3 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-6 scale-95'
              }`}
              style={{ transitionDelay: animationPhase >= 3 ? '200ms' : '0ms' }}
            >
              <BarChart4 className="text-emerald-400 mr-3" />
              <span className="text-white">Data Analysis & Insight</span>
            </div>
            <div 
              className={`bg-gray-800/70 backdrop-blur-sm p-4 rounded-lg flex items-center border border-gray-700/50 hover:border-emerald-400/50 transition-all duration-1000 ease-out transform ${
                animationPhase >= 3 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-6 scale-95'
              }`}
              style={{ transitionDelay: animationPhase >= 3 ? '400ms' : '0ms' }}
            >
              <Database className="text-blue-400 mr-3" />
              <span className="text-white">Analytics Engineering</span>
            </div>
            <div 
              className={`bg-gray-800/70 backdrop-blur-sm p-4 rounded-lg flex items-center border border-gray-700/50 hover:border-red-400/50 transition-all duration-1000 ease-out transform ${
                animationPhase >= 3 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-6 scale-95'
              }`}
              style={{ transitionDelay: animationPhase >= 3 ? '600ms' : '0ms' }}
            >
              <Code className="text-red-400 mr-3" />
              <span className="text-white">Data Architecture & Workflow</span>
            </div>
          </div>
          
          {/* Phase 4: Dual Call to Action Buttons - Sales-oriented approach */}
          <div className={`flex flex-col sm:flex-row justify-center gap-4 transition-all duration-1000 ease-out transform ${
            animationPhase >= 4 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-6 scale-95'
          }`}>
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-red-500 text-white px-8 py-4 rounded-full hover:bg-red-600 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-red-500/25 transform hover:scale-105"
            >
              About Me <ArrowDown className="ml-2" size={16} />
            </button>
            
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-500 text-white px-8 py-4 rounded-full hover:bg-blue-600 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-blue-500/25 transform hover:scale-105"
            >
              View Projects <ArrowDown className="ml-2" size={16} />
            </button>
          </div>
          
          {/* Sales-oriented tagline */}
          <p className={`text-gray-400 text-sm mt-4 transition-all duration-1000 ease-out transform ${
            animationPhase >= 4 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4'
          }`} style={{ transitionDelay: animationPhase >= 4 ? '300ms' : '0ms' }}>
            Ready to turn your data challenges into business advantages?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;