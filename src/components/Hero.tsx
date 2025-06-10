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
    
    // Phase 2: Subtitle appears (after 800ms)
    setTimeout(() => {
      setAnimationPhase(2);
    }, 800);
    
    // Phase 3: Skills pills appear (after 1400ms)
    setTimeout(() => {
      setAnimationPhase(3);
    }, 1400);
    
    // Phase 4: Button appears (after 2000ms)
    setTimeout(() => {
      setAnimationPhase(4);
    }, 2000);
  };

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
          {/* Phase 1: Main Title */}
          <h1 
            ref={titleRef} 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-1000 transform ${
              animationPhase >= 1 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-8 scale-95'
            }`}
          >
            Data Science & Analytics Portfolio
          </h1>
          
          {/* Phase 2: Subtitle */}
          <p 
            className={`text-xl md:text-2xl text-gray-300 mb-8 transition-all duration-800 transform ${
              animationPhase >= 2 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: animationPhase >= 2 ? '0ms' : '0ms' }}
          >
            Transforming complex data into actionable insights and elegant solutions
          </p>
          
          {/* Phase 3: Skills Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div 
              className={`bg-gray-800/70 backdrop-blur-sm p-4 rounded-lg flex items-center border border-gray-700/50 hover:border-red-400/50 transition-all duration-700 transform ${
                animationPhase >= 3 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-4 scale-95'
              }`}
              style={{ transitionDelay: animationPhase >= 3 ? '100ms' : '0ms' }}
            >
              <Database className="text-red-400 mr-3" />
              <span className="text-white">Data Engineering</span>
            </div>
            <div 
              className={`bg-gray-800/70 backdrop-blur-sm p-4 rounded-lg flex items-center border border-gray-700/50 hover:border-emerald-400/50 transition-all duration-700 transform ${
                animationPhase >= 3 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-4 scale-95'
              }`}
              style={{ transitionDelay: animationPhase >= 3 ? '200ms' : '0ms' }}
            >
              <BarChart className="text-emerald-400 mr-3" />
              <span className="text-white">Data Visualization</span>
            </div>
            <div 
              className={`bg-gray-800/70 backdrop-blur-sm p-4 rounded-lg flex items-center border border-gray-700/50 hover:border-blue-400/50 transition-all duration-700 transform ${
                animationPhase >= 3 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-4 scale-95'
              }`}
              style={{ transitionDelay: animationPhase >= 3 ? '300ms' : '0ms' }}
            >
              <Terminal className="text-blue-400 mr-3" />
              <span className="text-white">Machine Learning</span>
            </div>
          </div>
          
          {/* Phase 4: Call to Action Button */}
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className={`bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition-all duration-700 flex items-center mx-auto shadow-lg hover:shadow-red-500/25 transform ${
              animationPhase >= 4 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-4 scale-95'
            }`}
            style={{ transitionDelay: animationPhase >= 4 ? '0ms' : '0ms' }}
          >
            View About <ArrowDown className="ml-2" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;