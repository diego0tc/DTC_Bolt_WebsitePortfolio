import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, MapPin, Clock, BarChart3, Lightbulb, Target, Maximize2, Eye, Play, Pause } from 'lucide-react';
import TableauEmbed from './TableauEmbed';

const ParkingProjectPage: React.FC = () => {
  const navigate = useNavigate();
  const [dashboardMode, setDashboardMode] = useState<'preview' | 'interactive' | 'fullscreen'>('preview');
  const [isInteractionEnabled, setIsInteractionEnabled] = useState(false);

  const projectStats = [
    { label: 'Project Duration', value: 'Weekend', color: 'text-red-400' },
    { label: 'Data Sources', value: '3', color: 'text-emerald-400' },
    { label: 'Key Insights', value: '5', color: 'text-blue-400' },
    { label: 'Dashboard Views', value: '1', color: 'text-orange-400' }
  ];

  const handleFullscreen = () => {
    window.open('https://public.tableau.com/views/TheNewTorontonianaparkinglesson/Dashboard1', '_blank');
  };

  const toggleInteraction = () => {
    setIsInteractionEnabled(!isInteractionEnabled);
    if (!isInteractionEnabled) {
      setDashboardMode('interactive');
    } else {
      setDashboardMode('preview');
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 pt-20">
      {/* Hero Section */}
      <div 
        className="h-[400px] relative bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/449824/pexels-photo-449824.jpeg")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/70 to-gray-950"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative">
          <div className="max-w-4xl">
            <button
              onClick={() => navigate('/')}
              className="flex items-center text-gray-300 hover:text-red-400 mb-6 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Projects
            </button>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              The New Torontonian Parking Lesson
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
              A weekend data exploration into Toronto's parking patterns, revealing insights 
              about urban density, policy impacts, and the evolving relationship between 
              city planning and resident behavior.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Project Stats */}
        <div className="bg-gray-900 rounded-xl p-8 mb-12 border border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {projectStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Overview */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
            <div className="flex items-center mb-6">
              <Target className="text-red-400 mr-3" size={24} />
              <h2 className="text-2xl font-bold text-white">Project Goals</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                As a new Torontonian, I wanted to understand the city's parking landscape 
                and how urban planning decisions impact daily life for residents.
              </p>
              <p>
                [REPLACE WITH YOUR SPECIFIC GOALS - Add your personal motivation for this 
                weekend project and what you hoped to discover about Toronto's parking situation]
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Analyze parking availability patterns across different neighborhoods</li>
                <li>Understand the relationship between transit access and parking demand</li>
                <li>Explore policy impacts on parking behavior</li>
                <li>[Add your specific objectives]</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
            <div className="flex items-center mb-6">
              <Clock className="text-emerald-400 mr-3" size={24} />
              <h2 className="text-2xl font-bold text-white">Quick Analysis Approach</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                This weekend project focused on rapid insights using publicly available data 
                and efficient visualization techniques.
              </p>
              <p>
                [REPLACE WITH YOUR METHODOLOGY - Describe your weekend approach, data sources, 
                and analytical techniques used for this quick turnaround project]
              </p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">Data Sources</h4>
                  <ul className="text-sm space-y-1">
                    <li>City of Toronto Open Data</li>
                    <li>TTC Route Information</li>
                    <li>[Add your sources]</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Tools Used</h4>
                  <ul className="text-sm space-y-1">
                    <li>Tableau</li>
                    <li>Excel/Google Sheets</li>
                    <li>[Add your tools]</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Dashboard Section with Multiple Interaction Options */}
        <div className="bg-gray-900 rounded-xl p-8 mb-12 border border-gray-800">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <BarChart3 className="text-blue-400 mr-3" size={24} />
              <h2 className="text-2xl font-bold text-white">Interactive Dashboard</h2>
            </div>
            
            {/* Dashboard Control Panel */}
            <div className="flex items-center space-x-3">
              {/* Interaction Toggle */}
              <button
                onClick={toggleInteraction}
                className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  isInteractionEnabled 
                    ? 'bg-emerald-500 text-white hover:bg-emerald-600' 
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
                title={isInteractionEnabled ? 'Disable interaction (scroll-friendly)' : 'Enable interaction'}
              >
                {isInteractionEnabled ? (
                  <>
                    <Pause size={16} className="mr-2" />
                    Interactive Mode
                  </>
                ) : (
                  <>
                    <Play size={16} className="mr-2" />
                    Enable Interaction
                  </>
                )}
              </button>

              {/* View Options */}
              <button
                onClick={() => setDashboardMode('preview')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  dashboardMode === 'preview' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
                title="Preview mode (scroll-friendly)"
              >
                <Eye size={16} />
              </button>

              {/* Fullscreen Button */}
              <button
                onClick={handleFullscreen}
                className="flex items-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all text-sm font-medium"
                title="Open in new tab (full Tableau experience)"
              >
                <Maximize2 size={16} className="mr-2" />
                Full Screen
              </button>
            </div>
          </div>
          
          {/* Dashboard Description */}
          <div className="mb-6">
            <p className="text-gray-300 leading-relaxed">
              This dashboard provides a comprehensive view of Toronto's parking landscape, 
              combining multiple data sources to reveal patterns and insights about urban mobility.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              [REPLACE WITH YOUR DASHBOARD DESCRIPTION - Explain what your specific dashboard 
              shows and guide users on how to interact with it for maximum insights]
            </p>
          </div>

          {/* Interaction Mode Indicator */}
          {dashboardMode !== 'preview' && (
            <div className="mb-4 p-3 bg-emerald-900/20 rounded-lg border border-emerald-700/30">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
                <p className="text-emerald-200 text-sm">
                  <strong>Interactive Mode Active:</strong> You can now interact with the dashboard. 
                  Click "Preview Mode\" or scroll outside the dashboard area to continue reading.
                </p>
              </div>
            </div>
          )}

          {/* Dashboard Container with Conditional Interaction */}
          <div className="relative">
            {/* Overlay for Preview Mode */}
            {!isInteractionEnabled && (
              <div 
                className="absolute inset-0 z-10 bg-transparent cursor-pointer group"
                onClick={toggleInteraction}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 rounded-lg flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-blue-500 text-white px-6 py-3 rounded-lg flex items-center">
                    <Play size={20} className="mr-2" />
                    Click to Enable Interaction
                  </div>
                </div>
              </div>
            )}

            <TableauEmbed 
              url="https://public.tableau.com/views/TheNewTorontonianaparkinglesson/Dashboard1"
              height={700}
              title="The New Torontonian Parking Lesson Dashboard"
              interactive={isInteractionEnabled}
            />
          </div>
          
          {/* Dashboard Instructions */}
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-700/30">
              <h4 className="text-blue-200 font-medium mb-2">📊 Interactive Features:</h4>
              <p className="text-blue-200 text-sm">
                Use filters and hover over data points to explore different neighborhoods, 
                time periods, and parking metrics. [Add specific interaction instructions]
              </p>
            </div>
            <div className="p-4 bg-red-900/20 rounded-lg border border-red-700/30">
              <h4 className="text-red-200 font-medium mb-2">🚀 Pro Tip:</h4>
              <p className="text-red-200 text-sm">
                For the best experience, click "Full Screen" to open the dashboard in a new tab 
                with full Tableau functionality and larger viewing area.
              </p>
            </div>
          </div>
        </div>

        {/* Key Insights */}
        <div className="bg-gray-900 rounded-xl p-8 mb-12 border border-gray-800">
          <div className="flex items-center mb-6">
            <Lightbulb className="text-yellow-400 mr-3" size={24} />
            <h2 className="text-2xl font-bold text-white">Key Insights</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Urban Planning Patterns</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>[REPLACE WITH YOUR INSIGHT 1 - Add your specific finding about urban planning]</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>[REPLACE WITH YOUR INSIGHT 2 - Add another key discovery]</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>[REPLACE WITH YOUR INSIGHT 3 - Add third important finding]</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Policy & Behavioral Impact</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>[REPLACE WITH YOUR INSIGHT 4 - Add finding about policy impacts]</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>[REPLACE WITH YOUR INSIGHT 5 - Add insight about resident behavior]</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>[REPLACE WITH YOUR INSIGHT 6 - Add additional discovery]</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Personal Reflection */}
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl p-8 mb-12 border border-blue-700/30">
          <div className="flex items-center mb-6">
            <MapPin className="text-blue-400 mr-3" size={24} />
            <h2 className="text-2xl font-bold text-white">New Torontonian Perspective</h2>
          </div>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed mb-4">
              As someone new to Toronto, this analysis provided valuable insights into how the city 
              functions and how data can help newcomers understand urban dynamics.
            </p>
            <p className="text-gray-300 leading-relaxed">
              [REPLACE WITH YOUR PERSONAL REFLECTION - Share your experience as a new Torontonian, 
              what surprised you about the parking data, and how this analysis changed your 
              understanding of the city. Make this personal and authentic to your experience.]
            </p>
          </div>
        </div>

        {/* Methodology & Data Sources */}
        <div className="bg-gray-900 rounded-xl p-8 mb-12 border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-6">Methodology & Sources</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Weekend Workflow</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-300">
                <li>Data collection from public sources</li>
                <li>Quick data cleaning and preparation</li>
                <li>Exploratory analysis in Tableau</li>
                <li>Dashboard creation and refinement</li>
                <li>Insight synthesis and documentation</li>
              </ol>
              <p className="text-gray-300 mt-4 text-sm">
                [REPLACE WITH YOUR ACTUAL WORKFLOW - Detail your specific weekend process]
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Data Sources</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <ExternalLink size={16} className="mr-2 mt-1 text-blue-400 flex-shrink-0" />
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    City of Toronto Open Data Portal
                  </a>
                </li>
                <li className="flex items-start">
                  <ExternalLink size={16} className="mr-2 mt-1 text-blue-400 flex-shrink-0" />
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    [REPLACE WITH YOUR ACTUAL DATA SOURCE 2]
                  </a>
                </li>
                <li className="flex items-start">
                  <ExternalLink size={16} className="mr-2 mt-1 text-blue-400 flex-shrink-0" />
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    [REPLACE WITH YOUR ACTUAL DATA SOURCE 3]
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-xl p-8 border border-red-700/30 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Explore the Full Dashboard</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            This weekend project demonstrates how quick data exploration can yield valuable insights. 
            Dive into the interactive dashboard to discover your own patterns and insights about Toronto's parking landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://public.tableau.com/views/TheNewTorontonianaparkinglesson/Dashboard1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center"
            >
              <ExternalLink size={20} className="mr-2" />
              Open in Tableau Public
            </a>
            <button
              onClick={() => navigate('/projects')}
              className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors border border-gray-700"
            >
              View More Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkingProjectPage;