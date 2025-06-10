import React, { useState, useEffect } from 'react';
import { BarChart3, Database, TrendingUp } from 'lucide-react';

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [selectedBackground, setSelectedBackground] = useState('');

  // Array of beautiful data/analytics themed background images
  const backgroundImages = [
    'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg', // Data visualization charts
    'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg', // Business analytics charts
    'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg', // Data dashboard screens
    'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg', // Team analyzing data
    'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg', // Modern office with screens
    'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg', // Abstract data patterns
    'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg', // Financial charts and graphs
    'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg' // Analytics workspace
  ];

  useEffect(() => {
    // Get the next background image in sequence
    const getNextBackgroundImage = () => {
      // Get current index from localStorage, default to 0
      const currentIndex = parseInt(localStorage.getItem('backgroundIndex') || '0', 10);
      
      // Calculate next index (cycle back to 0 after reaching the end)
      const nextIndex = (currentIndex + 1) % backgroundImages.length;
      
      // Store the next index for the next visitor
      localStorage.setItem('backgroundIndex', nextIndex.toString());
      
      // Return the current image for this visitor
      return backgroundImages[currentIndex];
    };

    // Set the background for this loading session
    setSelectedBackground(getNextBackgroundImage());

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
  }, [onComplete, backgroundImages]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-950 via-slate-900 to-gray-900 transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Single selected background image for this session */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url("${selectedBackground}")`,
          filter: 'blur(1px) brightness(0.7)'
        }}
      />

      {/* Enhanced animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-emerald-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-orange-400 rounded-full animate-ping opacity-30"></div>
        <div className="absolute top-1/3 left-1/2 w-1 h-1 bg-violet-400 rounded-full animate-pulse opacity-40"></div>
        
        {/* Additional floating particles */}
        <div className="absolute top-1/5 right-1/5 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce opacity-50" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 right-2/3 w-1 h-1 bg-pink-400 rounded-full animate-ping opacity-35" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 left-1/5 w-2 h-2 bg-yellow-400 rounded-full animate-pulse opacity-45" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/5 right-1/2 w-1 h-1 bg-indigo-400 rounded-full animate-bounce opacity-40" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/6 left-3/4 w-1.5 h-1.5 bg-teal-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '0.3s' }}></div>
        
        {/* Data flow lines */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-400/30 to-transparent animate-pulse"></div>
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/25 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="text-center relative z-10">
        {/* Professional icon representation with enhanced glow */}
        <div 
          className={`mb-8 transition-all duration-700 transform ${
            currentPhase >= 1 
              ? 'opacity-100 scale-100 translate-y-0' 
              : 'opacity-0 scale-95 translate-y-4'
          }`}
        >
          <div className="relative">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-red-500/30">
              <div className="flex space-x-1">
                <BarChart3 className="text-white" size={20} />
                <Database className="text-white" size={20} />
                <TrendingUp className="text-white" size={20} />
              </div>
            </div>
            {/* Enhanced floating data points around the icon */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-emerald-400 rounded-full animate-bounce opacity-80 shadow-lg shadow-emerald-400/50"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400 rounded-full animate-pulse opacity-70 shadow-lg shadow-blue-400/50"></div>
            <div className="absolute top-1/2 -left-4 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-60 shadow-lg shadow-yellow-400/50"></div>
            <div className="absolute top-0 left-1/2 w-2 h-2 bg-violet-400 rounded-full animate-bounce opacity-65 shadow-lg shadow-violet-400/50" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-0 right-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse opacity-70 shadow-lg shadow-cyan-400/50" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Main name animation with enhanced gradient */}
        <div className="relative">
          <h1 
            className={`text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 transition-all duration-700 transform ${
              currentPhase >= 1 
                ? 'opacity-100 scale-100 translate-y-0' 
                : 'opacity-0 scale-95 translate-y-4'
            }`}
            style={{
              filter: 'drop-shadow(0 0 20px rgba(239, 68, 68, 0.3))'
            }}
          >
            Diego
          </h1>
          
          {/* Enhanced animated underline with glow */}
          <div 
            className={`h-1 bg-gradient-to-r from-red-400 to-orange-400 mx-auto transition-all duration-700 shadow-lg shadow-red-400/50 ${
              currentPhase >= 1 
                ? 'w-full opacity-100' 
                : 'w-0 opacity-0'
            }`}
          ></div>
        </div>

        {/* Subtitle animation with enhanced styling */}
        <div 
          className={`mt-6 transition-all duration-700 transform ${
            currentPhase >= 2 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide">
            Analytics Engineer & Data Scientist
          </p>
          
          {/* Enhanced role indicators with glow effects */}
          <div className="flex justify-center mt-4 space-x-6 text-sm text-gray-400">
            <span className="flex items-center group">
              <BarChart3 size={16} className="mr-1 text-red-400 group-hover:drop-shadow-lg transition-all" />
              <span className="group-hover:text-red-300 transition-colors">Analytics</span>
            </span>
            <span className="flex items-center group">
              <Database size={16} className="mr-1 text-emerald-400 group-hover:drop-shadow-lg transition-all" />
              <span className="group-hover:text-emerald-300 transition-colors">Engineering</span>
            </span>
            <span className="flex items-center group">
              <TrendingUp size={16} className="mr-1 text-blue-400 group-hover:drop-shadow-lg transition-all" />
              <span className="group-hover:text-blue-300 transition-colors">Insights</span>
            </span>
          </div>
          
          {/* Enhanced loading dots with staggered animation */}
          <div className="flex justify-center mt-6 space-x-1">
            <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce shadow-lg shadow-red-400/50"></div>
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce shadow-lg shadow-orange-400/50" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce shadow-lg shadow-yellow-400/50" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>

        {/* Enhanced decorative elements with glow */}
        <div 
          className={`absolute -top-8 -left-8 w-16 h-16 border-2 border-red-400/30 rounded-full transition-all duration-1000 shadow-lg shadow-red-400/20 ${
            currentPhase >= 1 
              ? 'opacity-100 rotate-180' 
              : 'opacity-0 rotate-0'
          }`}
        ></div>
        <div 
          className={`absolute -bottom-8 -right-8 w-12 h-12 border-2 border-orange-400/30 rounded-full transition-all duration-1000 shadow-lg shadow-orange-400/20 ${
            currentPhase >= 2 
              ? 'opacity-100 rotate-180' 
              : 'opacity-0 rotate-0'
          }`}
        ></div>
        
        {/* Additional decorative data elements */}
        <div 
          className={`absolute -top-12 right-4 w-8 h-8 border border-emerald-400/40 rounded-lg transition-all duration-1000 ${
            currentPhase >= 1 
              ? 'opacity-60 rotate-45' 
              : 'opacity-0 rotate-0'
          }`}
        ></div>
        <div 
          className={`absolute -bottom-12 left-4 w-6 h-6 border border-blue-400/40 rounded-lg transition-all duration-1000 ${
            currentPhase >= 2 
              ? 'opacity-60 rotate-45' 
              : 'opacity-0 rotate-0'
          }`}
        ></div>
      </div>

      {/* Enhanced progress indicator with glow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-32 h-1 bg-gray-800 rounded-full overflow-hidden shadow-lg">
          <div 
            className={`h-full bg-gradient-to-r from-red-400 to-orange-400 transition-all duration-300 shadow-lg shadow-red-400/50 ${
              currentPhase >= 3 ? 'w-full' : currentPhase >= 2 ? 'w-2/3' : currentPhase >= 1 ? 'w-1/3' : 'w-0'
            }`}
          ></div>
        </div>
        <p className="text-xs text-gray-400 text-center mt-2">Loading Analytics Portfolio...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;