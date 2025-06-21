import React, { useState, useEffect } from 'react';
import { Filter, ExternalLink, Grid, Search, PanelRight, ChevronDown, ChevronRight } from 'lucide-react';
import { projects } from '../data/projects';
import { Project } from '../types';
import { useNavigate } from 'react-router-dom';

interface CategoryConfig {
  id: string;
  name: string;
  subcategories: {
    id: string;
    name: string;
    projectTypes: string[];
  }[];
}

const Projects: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [isAnimated, setIsAnimated] = useState(false);
  const [showSubcategories, setShowSubcategories] = useState(false);

  // Define the hierarchical category structure
  const categories: CategoryConfig[] = [
    {
      id: 'analytics',
      name: 'Analytics',
      subcategories: [
        { id: 'tableau', name: 'Tableau', projectTypes: ['tableau'] },
        { id: 'python', name: 'Python', projectTypes: ['python'] },
        { id: 'statistical', name: 'Statistical Analysis', projectTypes: ['analysis'] },
        { id: 'visualization', name: 'Data Visualization', projectTypes: ['tableau', 'python'] }
      ]
    },
    {
      id: 'analytics-eng',
      name: 'Analytics Eng.',
      subcategories: [
        { id: 'etl', name: 'ETL Pipelines', projectTypes: ['python', 'analysis'] },
        { id: 'modeling', name: 'Data Modeling', projectTypes: ['analysis', 'python'] },
        { id: 'automation', name: 'Automation', projectTypes: ['python'] },
        { id: 'quality', name: 'Data Quality', projectTypes: ['analysis'] }
      ]
    },
    {
      id: 'architecture-pm',
      name: 'Architecture / PM',
      subcategories: [
        { id: 'strategy', name: 'Data Strategy', projectTypes: ['analysis'] },
        { id: 'governance', name: 'Data Governance', projectTypes: ['analysis'] },
        { id: 'architecture', name: 'System Architecture', projectTypes: ['analysis'] },
        { id: 'project-mgmt', name: 'Project Management', projectTypes: ['analysis', 'tableau'] }
      ]
    }
  ];
  
  useEffect(() => {
    let filtered = projects;
    
    // Apply category and subcategory filters
    if (selectedCategory !== 'all') {
      const category = categories.find(cat => cat.id === selectedCategory);
      if (category && selectedSubcategory !== 'all') {
        const subcategory = category.subcategories.find(sub => sub.id === selectedSubcategory);
        if (subcategory) {
          filtered = filtered.filter(project => 
            subcategory.projectTypes.includes(project.type)
          );
        }
      } else if (category) {
        // Show all projects that match any subcategory in this category
        const allTypesInCategory = category.subcategories.flatMap(sub => sub.projectTypes);
        filtered = filtered.filter(project => 
          allTypesInCategory.includes(project.type)
        );
      }
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
  }, [selectedCategory, selectedSubcategory, searchTerm, categories]);

  useEffect(() => {
    // Reset subcategory when category changes
    if (selectedCategory === 'all') {
      setSelectedSubcategory('all');
      setShowSubcategories(false);
    } else {
      setSelectedSubcategory('all');
      setShowSubcategories(true);
    }
  }, [selectedCategory]);
  
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

  const getProjectCountForCategory = (categoryId: string): number => {
    if (categoryId === 'all') return projects.length;
    
    const category = categories.find(cat => cat.id === categoryId);
    if (!category) return 0;
    
    const allTypesInCategory = category.subcategories.flatMap(sub => sub.projectTypes);
    return projects.filter(project => allTypesInCategory.includes(project.type)).length;
  };

  const getProjectCountForSubcategory = (categoryId: string, subcategoryId: string): number => {
    const category = categories.find(cat => cat.id === categoryId);
    if (!category) return 0;
    
    const subcategory = category.subcategories.find(sub => sub.id === subcategoryId);
    if (!subcategory) return 0;
    
    return projects.filter(project => 
      subcategory.projectTypes.includes(project.type)
    ).length;
  };

  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);

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
          
          {/* Explore More Button */}
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
            <div className="text-2xl font-bold text-emerald-400 mb-2">{getProjectCountForCategory('analytics')}</div>
            <div className="text-gray-300 text-sm">Analytics</div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 text-center border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
            <div className="text-2xl font-bold text-blue-400 mb-2">{getProjectCountForCategory('analytics-eng')}</div>
            <div className="text-gray-300 text-sm">Analytics Eng.</div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 text-center border border-gray-800 hover:border-orange-500/50 transition-all duration-300">
            <div className="text-2xl font-bold text-orange-400 mb-2">{getProjectCountForCategory('architecture-pm')}</div>
            <div className="text-gray-300 text-sm">Architecture / PM</div>
          </div>
        </div>
        
        {/* Enhanced Search and Hierarchical Filters */}
        <div className="bg-gray-900 rounded-lg p-6 mb-10 border border-gray-800">
          <div className="space-y-4">
            {/* Search */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
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

              {/* Reset Filters Button */}
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedSubcategory('all');
                  setSearchTerm('');
                }}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white rounded-lg transition-all text-sm"
              >
                Reset Filters
              </button>
            </div>

            {/* Main Categories */}
            <div>
              <h4 className="text-white font-medium mb-3 flex items-center">
                <Filter className="mr-2" size={16} />
                Categories
              </h4>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center ${
                    selectedCategory === 'all' 
                      ? 'bg-red-500 text-white' 
                      : 'bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  All Projects ({projects.length})
                </button>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center ${
                      selectedCategory === category.id 
                        ? 'bg-emerald-500 text-white' 
                        : 'bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700'
                    }`}
                  >
                    {category.name} ({getProjectCountForCategory(category.id)})
                    {selectedCategory === category.id ? (
                      <ChevronDown className="ml-1" size={14} />
                    ) : (
                      <ChevronRight className="ml-1" size={14} />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Subcategories */}
            {showSubcategories && selectedCategoryData && (
              <div className="border-t border-gray-700 pt-4">
                <h4 className="text-white font-medium mb-3">
                  {selectedCategoryData.name} Subcategories
                </h4>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedSubcategory('all')}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                      selectedSubcategory === 'all' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                    }`}
                  >
                    All {selectedCategoryData.name}
                  </button>
                  {selectedCategoryData.subcategories.map((subcategory) => (
                    <button
                      key={subcategory.id}
                      onClick={() => setSelectedSubcategory(subcategory.id)}
                      className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                        selectedSubcategory === subcategory.id 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                      }`}
                    >
                      {subcategory.name} ({getProjectCountForSubcategory(selectedCategory, subcategory.id)})
                    </button>
                  ))}
                </div>
              </div>
            )}
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
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedSubcategory('all');
                setSearchTerm('');
              }}
              className="mt-4 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
            >
              Reset All Filters
            </button>
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