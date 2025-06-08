import React, { useState, useEffect } from 'react';

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const phases = [
      { duration: 800, phase: 1 }, // Name appears
      { duration: 1200, phase: 2 }, // Name with subtitle
      { duration: 600, phase: 3 },  // Fade out preparation
    ];

    let timeoutId: NodeJS.Timeout;
    
    const runPhases = (index: number) => {
      if (index < phases.length) {
        setCurrentPhase(phases[index].phase);
        timeoutId = setTimeout(() => runPhases(index + 1), phases[index].duration);
      } else {
        // Start fade out
        setIsVisible(false);
        timeoutId = setTimeout(() => {
          onComplete();
        }, 500); // Allow fade out animation to complete
      }
    };

    // Start the sequence
    timeoutId = setTimeout(() => runPhases(0), 300);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-30"></div>
      </div>

      <div className="text-center relative">
        {/* Main name animation */}
        <div className="relative">
          <h1 
            className={`text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 transition-all duration-700 transform ${
              currentPhase >= 1 
                ? 'opacity-100 scale-100 translate-y-0' 
                : 'opacity-0 scale-95 translate-y-4'
            }`}
          >
            Diego
          </h1>
          
          {/* Animated underline */}
          <div 
            className={`h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto transition-all duration-700 ${
              currentPhase >= 1 
                ? 'w-full opacity-100' 
                : 'w-0 opacity-0'
            }`}
          ></div>
        </div>

        {/* Subtitle animation */}
        <div 
          className={`mt-6 transition-all duration-700 transform ${
            currentPhase >= 2 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide">
            Data Science Portfolio
          </p>
          
          {/* Loading dots */}
          <div className="flex justify-center mt-4 space-x-1">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>

        {/* Decorative elements */}
        <div 
          className={`absolute -top-8 -left-8 w-16 h-16 border-2 border-blue-400/30 rounded-full transition-all duration-1000 ${
            currentPhase >= 1 
              ? 'opacity-100 rotate-180' 
              : 'opacity-0 rotate-0'
          }`}
        ></div>
        <div 
          className={`absolute -bottom-8 -right-8 w-12 h-12 border-2 border-purple-400/30 rounded-full transition-all duration-1000 ${
            currentPhase >= 2 
              ? 'opacity-100 rotate-180' 
              : 'opacity-0 rotate-0'
          }`}
        ></div>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-32 h-1 bg-gray-700 rounded-full overflow-hidden">
          <div 
            className={`h-full bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 ${
              currentPhase >= 3 ? 'w-full' : currentPhase >= 2 ? 'w-2/3' : currentPhase >= 1 ? 'w-1/3' : 'w-0'
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;