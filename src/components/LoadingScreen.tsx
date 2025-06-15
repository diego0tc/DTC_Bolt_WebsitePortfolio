import React, { useState, useEffect } from 'react';
import { BarChart3, Database, TrendingUp } from 'lucide-react';

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
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-950 via-slate-900 to-gray-900 transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Abstract data visualization background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg")'
        }}
      ></div>

      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-emerald-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-orange-400 rounded-full animate-ping opacity-30"></div>
        <div className="absolute top-1/3 left-1/2 w-1 h-1 bg-violet-400 rounded-full animate-pulse opacity-40"></div>
      </div>

      <div className="text-center relative z-10">
        {/* Professional icon representation */}
        <div 
          className={`mb-8 transition-all duration-700 transform ${
            currentPhase >= 1 
              ? 'opacity-100 scale-100 translate-y-0' 
              : 'opacity-0 scale-95 translate-y-4'
          }`}
        >
          <div className="relative">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl">
              <div className="flex space-x-1">
                <BarChart3 className="text-white" size={20} />
                <Database className="text-white" size={20} />
                <TrendingUp className="text-white" size={20} />
              </div>
            </div>
            {/* Floating data points around the icon */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-emerald-400 rounded-full animate-bounce opacity-80"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400 rounded-full animate-pulse opacity-70"></div>
            <div className="absolute top-1/2 -left-4 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-60"></div>
          </div>
        </div>

        {/* Main name animation - FIXED: Better spacing between name and underline */}
        <div className="relative px-8">
          <h1 
            className={`text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 transition-all duration-700 transform ${
              currentPhase >= 1 
                ? 'opacity-100 scale-100 translate-y-0' 
                : 'opacity-0 scale-95 translate-y-4'
            }`}
            style={{ 
              lineHeight: '1.1',
              paddingBottom: '1.5rem', // INCREASED: More space below the text before underline
              marginBottom: '0.5rem'
            }}
          >
            Diego
          </h1>
          
          {/* Animated underline - FIXED: Proper spacing from name */}
          <div 
            className={`h-1 bg-gradient-to-r from-red-400 to-orange-400 mx-auto transition-all duration-700 ${
              currentPhase >= 1 
                ? 'w-full opacity-100' 
                : 'w-0 opacity-0'
            }`}
          ></div>
        </div>

        {/* Subtitle animation - Kept original spacing */}
        <div 
          className={`mt-6 transition-all duration-700 transform ${
            currentPhase >= 2 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide leading-relaxed px-4">
            Analytics Engineer & Data Analyst
          </p>
          
          {/* Role indicators */}
          <div className="flex justify-center mt-4 space-x-6 text-sm text-gray-400">
            <span className="flex items-center">
              <BarChart3 size={16} className="mr-1 text-red-400" />
              Analytics
            </span>
            <span className="flex items-center">
              <Database size={16} className="mr-1 text-emerald-400" />
              Engineering
            </span>
            <span className="flex items-center">
              <TrendingUp size={16} className="mr-1 text-blue-400" />
              Insights
            </span>
          </div>
          
          {/* Loading dots */}
          <div className="flex justify-center mt-6 space-x-1">
            <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>

        {/* Decorative elements */}
        <div 
          className={`absolute -top-8 -left-8 w-16 h-16 border-2 border-red-400/30 rounded-full transition-all duration-1000 ${
            currentPhase >= 1 
              ? 'opacity-100 rotate-180' 
              : 'opacity-0 rotate-0'
          }`}
        ></div>
        <div 
          className={`absolute -bottom-8 -right-8 w-12 h-12 border-2 border-orange-400/30 rounded-full transition-all duration-1000 ${
            currentPhase >= 2 
              ? 'opacity-100 rotate-180' 
              : 'opacity-0 rotate-0'
          }`}
        ></div>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-32 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div 
            className={`h-full bg-gradient-to-r from-red-400 to-orange-400 transition-all duration-300 ${
              currentPhase >= 3 ? 'w-full' : currentPhase >= 2 ? 'w-2/3' : currentPhase >= 1 ? 'w-1/3' : 'w-0'
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;