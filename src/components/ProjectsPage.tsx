import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Filter, Search, Calendar, ExternalLink, PanelRight } from 'lucide-react';
import { projects } from '../data/projects';
import { Project } from '../types';

const ProjectsPage: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [sortBy, setSortBy] = useState<string>('recent');

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
    
    // Apply sorting
    if (sortBy === 'alphabetical') {
      filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    }
    
    setFilteredProjects(filtered);
  }, [filter, searchTerm, sortBy]);

  const handleProjectClick = (project: Project) => {
    if (project.id === 'dog-shelter-analytics') {
      navigate('/projects/dog-shelter-analytics');
    } else if (project.id === 'toronto-parking-lesson') {
      navigate('/projects/toronto-parking-lesson');
    }
  };

  const projectStats = {
    total: projects.length,
    tableau: projects.filter(p => p.type === 'tableau').length,
    python: projects.filter(p => p.type === 'python').length,
    analysis: projects.filter(p => p.type === 'analysis').length
  };

  return (
    <div className="min-h-screen bg-gray-950 pt-20">
      {/* Hero Section */}
      <div 
        className="h-[400px] relative bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/70 to-gray-950"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative">
          <div>
            <button
              onClick={() => navigate('/')}
              className="flex items-center text-gray-300 hover:text-red-400 mb-6 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </button>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              My Projects
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              A comprehensive collection of data science projects showcasing analytics, 
              machine learning, and visualization expertise across various industries.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gray-900 rounded-lg p-6 text-center border border-gray-800">
            <div className="text-3xl font-bold text-red-400 mb-2">{projectStats.total}</div>
            <div className="text-gray-300">Total Projects</div>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 text-center border border-gray-800">
            <div className="text-3xl font-bold text-emerald-400 mb-2">{projectStats.tableau}</div>
            <div className="text-gray-300">Tableau Dashboards</div>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 text-center border border-gray-800">
            <div className="text-3xl font-bold text-blue-400 mb-2">{projectStats.python}</div>
            <div className="text-gray-300">Python Projects</div>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 text-center border border-gray-800">
            <div className="text-3xl font-bold text-orange-400 mb-2">{projectStats.analysis}</div>
            <div className="text-gray-300">Data Analysis</div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-gray-900 rounded-lg p-6 mb-12 border border-gray-800">
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
            <div className="flex gap-4 items-center">
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

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:border-red-500 focus:outline-none"
              >
                <option value="recent">Most Recent</option>
                <option value="alphabetical">Alphabetical</option>
              </select>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="group bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer border border-gray-800 hover:border-gray-700"
              onClick={() => handleProjectClick(project)}
            >
              <div 
                className="h-48 bg-cover bg-center relative"
                style={{ backgroundImage: `url('${project.backgroundImage}')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span 
                    className="px-3 py-1 rounded-full text-sm font-medium"
                    style={{ 
                      backgroundColor: project.color,
                      color: project.contrastColor
                    }}
                  >
                    {project.type === 'tableau' ? 'Tableau' : 
                     project.type === 'python' ? 'Python' : 'Analysis'}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tools.slice(0, 3).map((tool, toolIndex) => (
                      <span 
                        key={toolIndex}
                        className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs border border-gray-700"
                      >
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 3 && (
                      <span className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs border border-gray-700">
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
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live
                    </a>
                  )}
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
          <h2 className="text-2xl font-bold text-white mb-4">Interested in Collaboration?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, innovative ideas, or opportunities to 
            create impactful data solutions together.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors hover:shadow-lg hover:shadow-red-500/25"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;