import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, MapPin, Clock, BarChart3, Lightbulb, Target, Maximize2, MousePointer, Scroll } from 'lucide-react';
import TableauEmbed from './TableauEmbed';

const ParkingProjectPage: React.FC = () => {
  const navigate = useNavigate();
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

  const enableInteraction = () => {
    setIsInteractionEnabled(true);
  };

  const disableInteraction = () => {
    setIsInteractionEnabled(false);
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

        {/* Enhanced Dashboard Section - Intuitive Overlay Design */}
        <div className="bg-gray-900 rounded-xl p-8 mb-12 border border-gray-800">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <BarChart3 className="text-blue-400 mr-3" size={24} />
              <h2 className="text-2xl font-bold text-white">Interactive Infographic Dashboard</h2>
            </div>
            
            {/* Quick Action Button */}
            <button
              onClick={handleFullscreen}
              className="flex items-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all text-sm font-medium hover:shadow-lg hover:shadow-red-500/25"
            >
              <Maximize2 size={16} className="mr-2" />
              Open Full Experience
            </button>
          </div>
          
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

          {/* Dashboard Container with Smart Overlay */}
          <div className="relative group">
            {/* Intuitive Overlay - Only shows when NOT interactive */}
            {!isInteractionEnabled && (
              <div className="absolute inset-0 z-20 rounded-lg">
                {/* Invisible clickable area */}
                <div 
                  className="absolute inset-0 cursor-pointer"
                  onClick={enableInteraction}
                />
                
                {/* Visual overlay that appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg flex items-center justify-center">
                  <div className="bg-blue-500/90 backdrop-blur-sm text-white px-8 py-4 rounded-xl flex items-center space-x-3 transform scale-95 group-hover:scale-100 transition-all duration-300 shadow-2xl">
                    <MousePointer size={24} />
                    <div>
                      <div className="font-semibold">Click to Explore Dashboard</div>
                      <div className="text-sm text-blue-100">Enable scrolling and interaction</div>
                    </div>
                  </div>
                </div>

                {/* Corner indicator - always visible */}
                <div className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm border border-gray-600 flex items-center">
                  <Scroll size={16} className="mr-2 text-blue-400" />
                  <span className="text-gray-300">Scroll Mode</span>
                </div>
              </div>
            )}

            {/* Exit interaction button - only shows when interactive */}
            {isInteractionEnabled && (
              <div className="absolute top-4 right-4 z-30">
                <button
                  onClick={disableInteraction}
                  className="bg-red-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition-all flex items-center border border-red-400"
                >
                  <Scroll size={16} className="mr-2" />
                  Exit Dashboard
                </button>
              </div>
            )}

            <TableauEmbed 
              url="https://public.tableau.com/views/TheNewTorontonianaparkinglesson/Dashboard1"
              height={700}
              title="The New Torontonian Parking Lesson Dashboard"
              interactive={isInteractionEnabled}
            />
          </div>
          
          {/* Smart Instructions */}
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-700/30">
              <h4 className="text-blue-200 font-medium mb-2 flex items-center">
                <MousePointer size={16} className="mr-2" />
                How to Navigate:
              </h4>
              <p className="text-blue-200 text-sm">
                <strong>Scroll Mode:</strong> Perfect for reading through the infographic story. 
                Click anywhere on the dashboard to enable full interaction when you want to explore specific data points.
              </p>
            </div>
            <div className="p-4 bg-emerald-900/20 rounded-lg border border-emerald-700/30">
              <h4 className="text-emerald-200 font-medium mb-2 flex items-center">
                <Maximize2 size={16} className="mr-2" />
                Best Experience:
              </h4>
              <p className="text-emerald-200 text-sm">
                For the complete infographic experience with full Tableau features, 
                click "Open Full Experience" to view in a new tab with optimal sizing.
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