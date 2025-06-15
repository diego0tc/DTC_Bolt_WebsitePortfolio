import React, { useState, useEffect } from 'react';
import { Filter, ExternalLink, Grid, Search, PanelRight } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import { Project } from '../types';
import { useNavigate } from 'react-router-dom';

const Projects: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [isAnimated, setIsAnimated] = useState(false);
  
  useEffect(() => {
    let filtered = projects;
    
    // Apply type filter
    if (filter !== 'all') {
      filtered = filtered.filter(project => project.type === filter);
    }
    
    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tools.some(tool => tool.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    setFilteredProjects(filtered);
  }, [filter, searchTerm]);
  
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
    <div id="projects" className="min-h-screen py-32 bg-gray-950 relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg')"
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-between items-start mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Projects</h2>
          
          {/* Explore More Button - Now positioned next to title for better visibility */}
          <button
            onClick={() => navigate('/projects')}
            className="group bg-blue-500/20 hover:bg-blue-500 border border-blue-400/50 hover:border-blue-300 rounded-full px-6 py-3 flex items-center transition-all duration-300 backdrop-blur-sm"
          >
            <Grid size={16} className="text-blue-300 group-hover:text-white mr-2" />
            <span className="text-blue-300 group-hover:text-white text-sm font-medium mr-2">
              Browse All
            </span>
            <ExternalLink size={16} className="text-blue-300 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
          </button>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-900 rounded-lg p-4 text-center border border-gray-800 hover:border-red-500/50 transition-all duration-300">
            <div className="text-2xl font-bold text-red-400 mb-2">{projects.length}</div>
            <div className="text-gray-300 text-sm">Total Projects</div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 text-center border border-gray-800 hover:border-emerald-500/50 transition-all duration-300">
            <div className="text-2xl font-bold text-emerald-400 mb-2">{projects.filter(p => p.type === 'tableau').length}</div>
            <div className="text-gray-300 text-sm">Dashboards</div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 text-center border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
            <div className="text-2xl font-bold text-blue-400 mb-2">{projects.filter(p => p.type === 'python').length}</div>
            <div className="text-gray-300 text-sm">Python</div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 text-center border border-gray-800 hover:border-orange-500/50 transition-all duration-300">
            <div className="text-2xl font-bold text-orange-400 mb-2">{projects.filter(p => p.type === 'analysis').length}</div>
            <div className="text-gray-300 text-sm">Analysis</div>
          </div>
        </div>
        
        {/* Enhanced Search and Filters */}
        <div className="bg-gray-900 rounded-lg p-6 mb-10 border border-gray-800">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-red-500 focus:outline-none"
              />
            </div>

            {/* Filters */}
            <div className="flex bg-gray-800 p-1 rounded-lg border border-gray-700">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  filter === 'all' 
                    ? 'bg-red-500 text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('tableau')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  filter === 'tableau' 
                    ? 'bg-emerald-500 text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Tableau
              </button>
              <button
                onClick={() => setFilter('python')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  filter === 'python' 
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Python
              </button>
              <button
                onClick={() => setFilter('analysis')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  filter === 'analysis' 
                    ? 'bg-orange-500 text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Analysis
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`group rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500 cursor-pointer border border-gray-800 hover:border-gray-700 relative min-h-[400px] bg-cover bg-center ${
                isAnimated 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-20 opacity-0'
              }`}
              style={{ 
                backgroundImage: `url('${project.backgroundImage || 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg'}')`,
                transitionDelay: `${index * 100}ms`
              }}
              onClick={() => {
                if (project.id === 'dog-shelter-analytics') {
                  navigate('/projects/dog-shelter-analytics');
                } else if (project.id === 'toronto-parking-lesson') {
                  navigate('/projects/toronto-parking-lesson');
                }
              }}
            >
              {/* Full overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/60 to-gray-950/30 group-hover:from-gray-950/95 group-hover:via-gray-950/70 group-hover:to-gray-950/40 transition-all duration-300"></div>
              
              {/* Content overlaid on background */}
              <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                {/* Top section: Badge */}
                <div className="flex justify-between items-start">
                  <span 
                    className="px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm"
                    style={{ 
                      backgroundColor: project.color || '#dc2626',
                      color: project.contrastColor || '#ffffff'
                    }}
                  >
                    {project.type === 'tableau' ? 'Tableau' : 
                     project.type === 'python' ? 'Python' : 'Analysis'}
                  </span>
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-white/70 hover:text-white transition-colors backdrop-blur-sm bg-gray-900/20 rounded-full px-3 py-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={14} className="mr-1" />
                      Live
                    </a>
                  )}
                </div>

                {/* Bottom section: Main content */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tools.slice(0, 3).map((tool, toolIndex) => (
                        <span 
                          key={toolIndex}
                          className="px-2 py-1 bg-gray-900/60 backdrop-blur-sm text-gray-200 rounded text-xs border border-gray-600/50"
                        >
                          {tool}
                        </span>
                      ))}
                      {project.tools.length > 3 && (
                        <span className="px-2 py-1 bg-gray-900/60 backdrop-blur-sm text-gray-200 rounded text-xs border border-gray-600/50">
                          +{project.tools.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <button className="flex items-center text-red-400 hover:text-red-300 transition-colors">
                      <PanelRight size={16} className="mr-2" />
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            <Filter className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p className="text-xl mb-2">No projects found</p>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-xl p-8 border border-red-700/30 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Want to See More Details?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Explore the complete projects gallery with advanced filtering, search capabilities, and detailed project breakdowns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/projects')}
              className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors hover:shadow-lg hover:shadow-red-500/25"
            >
              View All Projects
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors border border-gray-600"
            >
              Discuss a Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;