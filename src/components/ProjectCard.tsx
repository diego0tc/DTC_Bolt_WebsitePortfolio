import React, { useState } from 'react';
import { ExternalLink, PanelRight } from 'lucide-react';
import { Project } from '../types';
import { useNavigate } from 'react-router-dom';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleViewDetails = () => {
    if (project.id === 'dog-shelter-analytics') {
      navigate('/projects/dog-shelter-analytics');
    } else if (project.id === 'toronto-parking-lesson') {
      navigate('/projects/toronto-parking-lesson');
    }
  };

  return (
    <div 
      className="relative overflow-hidden rounded-xl transition-all duration-500 h-[400px] group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        backgroundColor: project.color,
        color: project.contrastColor,
      }}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-500"
        style={{
          backgroundImage: `url('${project.backgroundImage}')`,
          opacity: isHovered ? 0.3 : 0.7,
          transform: isHovered ? 'scale(1.05)' : 'scale(1)'
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      
      <div className="relative z-10 p-6 flex flex-col h-full justify-between">
        <div>
          <div className="flex items-center mb-2">
            <span 
              className={`px-3 py-1 rounded-full text-sm font-medium`}
              style={{ 
                backgroundColor: project.contrastColor,
                color: project.color
              }}
            >
              {project.type === 'tableau' ? 'Tableau' : 
               project.type === 'python' ? 'Python' : 'Analysis'}
            </span>
          </div>
          
          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
          
          <p className={`mb-4 transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-80'}`}>
            {project.description}
          </p>
        </div>
        
        <div>
          <div className="mb-4">
            <h4 className="text-sm font-semibold mb-2">Tools Used:</h4>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, index) => (
                <span 
                  key={index} 
                  className="px-2 py-1 rounded text-xs font-medium"
                  style={{ 
                    backgroundColor: `${project.color}90`,
                    border: `1px solid ${project.contrastColor}`,
                    color: project.contrastColor
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
          
          <div className={`transition-all duration-500 transform ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="flex space-x-3">
              <button 
                onClick={handleViewDetails}
                className="flex items-center px-4 py-2 rounded-lg text-sm font-medium"
                style={{ 
                  backgroundColor: project.contrastColor,
                  color: project.color
                }}
              >
                <PanelRight size={16} className="mr-2" /> View Details
              </button>
              
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 rounded-lg text-sm font-medium border"
                  style={{ 
                    borderColor: project.contrastColor,
                    color: project.contrastColor
                  }}
                >
                  <ExternalLink size={16} className="mr-2" /> Visit Project
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;