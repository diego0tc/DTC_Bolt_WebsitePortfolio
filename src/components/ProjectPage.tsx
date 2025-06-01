import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronDown, ChevronUp, ExternalLink, FileText, Database, BarChart } from 'lucide-react';
import TableauEmbed from './TableauEmbed';

interface Section {
  id: string;
  title: string;
  content: string;
}

const DogShelterProject: React.FC = () => {
  const navigate = useNavigate();
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const technicalDetails: Section[] = [
    {
      id: 'data-collection',
      title: 'Data Collection & Preprocessing',
      content: `The analysis was based on 5 years of shelter data, encompassing over 25,000 dog records. 
      Key data points included breed information, age, health status, behavioral assessments, and length of stay.
      Data cleaning involved handling missing values using advanced imputation techniques and standardizing 
      categorical variables for consistent analysis.`
    },
    {
      id: 'methodology',
      title: 'Methodology & Analysis Approach',
      content: `We employed a multi-faceted analytical approach:
      1. Time Series Analysis: Identifying seasonal patterns in adoption rates
      2. Clustering Analysis: Grouping dogs by adoption likelihood
      3. Predictive Modeling: Developing an adoption time prediction model
      4. A/B Testing: Evaluating the effectiveness of different profile presentation strategies`
    },
    {
      id: 'tools',
      title: 'Tools & Technologies Used',
      content: `• Python (pandas, scikit-learn, statsmodels)
      • SQL for data extraction and transformation
      • Tableau for interactive visualizations
      • Excel for stakeholder-friendly reporting
      • Custom ETL pipeline for daily data updates`
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      {/* Hero Section */}
      <div 
        className="h-[400px] relative bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative">
          <div>
            <button
              onClick={() => navigate('/')}
              className="flex items-center text-gray-300 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Projects
            </button>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Dog Shelter Analytics
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              How data-driven insights increased adoption rates by 32% and 
              optimized resource allocation at Toronto's largest dog shelter
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Project Overview */}
        <div className="bg-gray-800 rounded-xl p-8 mb-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center text-indigo-400 mb-2">
                <FileText size={24} className="mr-2" />
                <h3 className="text-lg font-semibold">Project Duration</h3>
              </div>
              <p className="text-gray-300">6 months (Jan - June 2023)</p>
            </div>
            <div>
              <div className="flex items-center text-green-400 mb-2">
                <Database size={24} className="mr-2" />
                <h3 className="text-lg font-semibold">Data Volume</h3>
              </div>
              <p className="text-gray-300">25,000+ records analyzed</p>
            </div>
            <div>
              <div className="flex items-center text-purple-400 mb-2">
                <BarChart size={24} className="mr-2" />
                <h3 className="text-lg font-semibold">Key Impact</h3>
              </div>
              <p className="text-gray-300">32% increase in adoption rates</p>
            </div>
          </div>
        </div>

        {/* Story Sections */}
        <div className="prose prose-lg prose-invert max-w-none mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">The Challenge</h2>
          <p className="text-gray-300">
            Toronto's largest dog shelter faced significant challenges in optimizing their adoption process
            and resource allocation. Long stay times were affecting both the animals' well-being and the
            shelter's operational costs. The shelter needed a data-driven approach to understand adoption
            patterns and improve their processes.
          </p>
          
          <div className="my-12">
            <TableauEmbed 
              url="https://public.tableau.com/views/DogShelterAnalytics/AdoptionTrends"
              height={500}
            />
          </div>

          <h2 className="text-3xl font-bold text-white mb-6">Key Findings</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Adoption Patterns</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Peak adoption periods during spring and early fall</li>
                <li>Higher adoption rates for puppies and young adults</li>
                <li>Breed popularity fluctuations based on seasonal factors</li>
              </ul>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Resource Optimization</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Identified peak staffing needs based on visitor patterns</li>
                <li>Optimized medical resource allocation</li>
                <li>Improved space utilization through predictive modeling</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Details (Expandable) */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Technical Deep Dive</h2>
          <div className="space-y-4">
            {technicalDetails.map(section => (
              <div key={section.id} className="bg-gray-800 rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                  onClick={() => toggleSection(section.id)}
                >
                  <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                  {expandedSections.includes(section.id) ? (
                    <ChevronUp className="text-gray-400" />
                  ) : (
                    <ChevronDown className="text-gray-400" />
                  )}
                </button>
                {expandedSections.includes(section.id) && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 whitespace-pre-line">{section.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Results & Impact */}
        <div className="bg-indigo-900/30 rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Results & Impact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Quantitative Impact</h3>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  32% increase in successful adoptions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  25% reduction in average stay duration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  20% decrease in operational costs
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Qualitative Impact</h3>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  Improved staff resource allocation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  Better matching of dogs with potential adopters
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  Enhanced visitor experience through data-driven insights
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sources & References */}
        <div className="bg-gray-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Sources & References</h2>
          <ul className="text-gray-300 space-y-4">
            <li className="flex items-start">
              <ExternalLink size={20} className="mr-2 mt-1 text-indigo-400" />
              <a href="#" className="hover:text-indigo-400 transition-colors">
                Toronto Animal Services Annual Report 2023
              </a>
            </li>
            <li className="flex items-start">
              <ExternalLink size={20} className="mr-2 mt-1 text-indigo-400" />
              <a href="#" className="hover:text-indigo-400 transition-colors">
                Canadian Animal Shelter Statistics Database
              </a>
            </li>
            <li className="flex items-start">
              <ExternalLink size={20} className="mr-2 mt-1 text-indigo-400" />
              <a href="#" className="hover:text-indigo-400 transition-colors">
                Research Paper: "Data-Driven Approaches in Animal Shelter Management"
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DogShelterProject;