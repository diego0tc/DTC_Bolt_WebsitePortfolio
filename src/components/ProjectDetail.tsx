import React, { useState, useEffect } from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Project } from '../types';
import TableauEmbed from './TableauEmbed';

interface ProjectDetailProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (project) {
      // Animate in
      setIsVisible(true);
    } else {
      // Animate out
      setIsVisible(false);
    }
  }, [project]);
  
  if (!project) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div 
        className={`relative bg-gray-900 w-full max-w-4xl max-h-[90vh] overflow-auto rounded-lg shadow-xl transition-all duration-500 transform border border-gray-800 ${
          isVisible ? 'scale-100' : 'scale-95'
        }`}
        style={{ 
          borderTop: `4px solid ${project.color}`
        }}
      >
        <div 
          className="h-48 bg-cover bg-center"
          style={{
            backgroundImage: `url('${project.backgroundImage}')`,
            position: 'relative'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
          <div className="absolute top-4 left-4">
            <button 
              onClick={onClose}
              className="bg-gray-950/80 hover:bg-gray-950 text-white p-2 rounded-full transition-colors border border-gray-700"
            >
              <ArrowLeft size={20} />
            </button>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex flex-wrap items-center mb-4 gap-2">
            <h2 className="text-2xl font-bold text-white mr-2">{project.title}</h2>
            <span 
              className={`px-3 py-1 rounded-full text-sm font-medium`}
              style={{ 
                backgroundColor: project.color,
                color: project.contrastColor
              }}
            >
              {project.type === 'tableau' ? 'Tableau' : 
               project.type === 'python' ? 'Python' : 'Analysis'}
            </span>
          </div>
          
          <p className="text-gray-300 mb-8">{project.description}</p>
          
          {project.type === 'tableau' && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Dashboard Preview</h3>
              <TableauEmbed url="https://public.tableau.com/views/example/dashboard" height={400} />
            </div>
          )}
          
          {project.type === 'python' && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Code Sample</h3>
              <div className="bg-gray-950 p-4 rounded-lg overflow-x-auto border border-gray-800">
                <pre className="text-gray-300 text-sm">
                  <code>
{`import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Load the dataset
data = pd.read_csv('project_data.csv')

# Clean and preprocess the data
data.dropna(inplace=True)
data['date'] = pd.to_datetime(data['date'])

# Create visualizations
plt.figure(figsize=(12, 6))
sns.lineplot(x='date', y='value', hue='category', data=data)
plt.title('Value Trends by Category')
plt.savefig('trend_analysis.png')

# Perform statistical analysis
results = data.groupby('category').agg({
    'value': ['mean', 'median', 'std', 'min', 'max']
})

print(results)`}
                  </code>
                </pre>
              </div>
            </div>
          )}
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">Key Findings</h3>
            <ul className="list-disc pl-5 text-gray-300 space-y-2">
              <li>Identified pattern X that led to a 15% improvement in metric Y</li>
              <li>Developed a predictive model with 92% accuracy</li>
              <li>Reduced processing time by 40% through optimization</li>
              <li>Created visualization dashboard used by 100+ stakeholders</li>
            </ul>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 rounded-md text-sm font-medium"
                  style={{ 
                    backgroundColor: `${project.color}`,
                    color: project.contrastColor
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
          
          {project.link && (
            <div className="flex justify-end">
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all"
                style={{ 
                  backgroundColor: project.color,
                  color: project.contrastColor
                }}
              >
                <ExternalLink size={16} className="mr-2" /> Visit Project
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;