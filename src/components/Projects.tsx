import React, { useState, useEffect } from 'react';
import { Filter, ArrowRight, ExternalLink, Grid, BarChart } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import { Project } from '../types';
import { useNavigate } from 'react-router-dom';

const Projects: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<string>('all');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [isAnimated, setIsAnimated] = useState(false);
  
  useEffect(() => {
    const filtered = filter === 'all' 
      ? projects 
      : projects.filter(project => project.type === filter);
    setFilteredProjects(filtered);
  }, [filter]);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('projects');
      if (!element) return;
      
      const position = element.getBoundingClientRect();
      
      if (position.top < window.innerHeight - 200 && !isAnimated) {
        setIsAnimated(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isAnimated]);

  return (
    <div id="projects" className="min-h-screen py-32 bg-gray-900 relative">
      {/* Explore More Indicator */}
      <div className="absolute top-8 right-8 z-10">
        <button
          onClick={() => navigate('/projects')}
          className="group bg-purple-600/20 hover:bg-purple-600 border border-purple-500/50 hover:border-purple-400 rounded-full px-4 py-2 flex items-center transition-all duration-300 backdrop-blur-sm"
        >
          <Grid size={16} className="text-purple-300 group-hover:text-white mr-2" />
          <span className="text-purple-300 group-hover:text-white text-sm font-medium mr-2">
            Browse All
          </span>
          <ExternalLink size={16} className="text-purple-300 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
        </button>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Projects</h2>
          <button
            onClick={() => navigate('/projects')}
            className="ml-4 group text-purple-400 hover:text-purple-300 transition-colors"
            title="View all projects with advanced filtering"
          >
            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Quick Stats */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-800/50 rounded-lg px-6 py-3 flex items-center space-x-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">{projects.length}</div>
              <div className="text-xs text-gray-400">Total Projects</div>
            </div>
            <div className="w-px h-8 bg-gray-600"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">{projects.filter(p => p.type === 'tableau').length}</div>
              <div className="text-xs text-gray-400">Dashboards</div>
            </div>
            <div className="w-px h-8 bg-gray-600"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">{projects.filter(p => p.type === 'python').length}</div>
              <div className="text-xs text-gray-400">Python</div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="bg-gray-800 p-1 rounded-lg inline-flex relative">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                filter === 'all' 
                  ? 'bg-indigo-600 text-white' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('tableau')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                filter === 'tableau' 
                  ? 'bg-indigo-600 text-white' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <span className="hidden md:inline">Tableau Dashboards</span>
              <span className="md:hidden">Tableau</span>
            </button>
            <button
              onClick={() => setFilter('python')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                filter === 'python' 
                  ? 'bg-indigo-600 text-white' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Python Projects
            </button>
            <button
              onClick={() => setFilter('analysis')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                filter === 'analysis' 
                  ? 'bg-indigo-600 text-white' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Data Analysis
            </button>

            {/* Advanced filters indicator */}
            <button
              onClick={() => navigate('/projects')}
              className="ml-2 px-3 py-2 bg-gray-700 hover:bg-purple-600 rounded-md transition-colors group"
              title="Advanced filtering & search"
            >
              <Filter size={16} className="text-gray-400 group-hover:text-white" />
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {filteredProjects.slice(0, 6).map((project, index) => (
            <div 
              key={project.id}
              className={`transition-all duration-500 transform ${
                isAnimated 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}

          {/* Show more indicator if there are more projects */}
          {projects.length > 6 && (
            <div className="md:col-span-2 lg:col-span-3 mt-8">
              <div className="bg-gradient-to-r from-purple-900/20 to-indigo-900/20 rounded-xl p-8 border border-purple-700/30 text-center">
                <BarChart className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {projects.length - 6} More Projects Available
                </h3>
                <p className="text-gray-300 mb-6">
                  Explore the complete portfolio with advanced filtering, search, and detailed project breakdowns
                </p>
                <button
                  onClick={() => navigate('/projects')}
                  className="group bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-300 flex items-center mx-auto"
                >
                  <span className="mr-2">View All Projects</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          )}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            <Filter className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p className="text-xl">No projects found for this filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;