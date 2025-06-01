import React, { useState, useEffect } from 'react';
import { Filter } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import { Project } from '../types';

const Projects: React.FC = () => {
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
    <div id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Projects</h2>
        
        <div className="flex justify-center mb-10">
          <div className="bg-gray-800 p-1 rounded-lg inline-flex">
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
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
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