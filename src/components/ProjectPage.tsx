import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronDown, ChevronUp, ExternalLink, FileText, Database, BarChart, Calendar, Users, TrendingUp, Target, Lightbulb, Code, Image as ImageIcon, BarChart3, ArrowUp } from 'lucide-react';
import TableauEmbed from './TableauEmbed';

interface ContentSection {
  id: string;
  title: string;
  type: 'text' | 'tableau' | 'image' | 'metrics';
  content?: string;
  tableauUrl?: string;
  imageUrl?: string;
  imageAlt?: string;
  metrics?: Array<{
    label: string;
    value: string;
    color: string;
  }>;
}

const DogShelterProject: React.FC = () => {
  const navigate = useNavigate();
  const [expandedSections, setExpandedSections] = useState<string[]>(['overview']);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleViewMoreProjects = () => {
    navigate('/projects');
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleDiscussProject = () => {
    navigate('/contact');
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  // Main story sections with placeholders for your content
  const storyContent: ContentSection[] = [
    {
      id: 'overview',
      title: 'Project Overview',
      type: 'text',
      content: `This comprehensive 6-month analysis transformed how Toronto's largest dog shelter operates, 
      resulting in a 32% increase in adoption rates and significant operational improvements. 
      
      The project combined advanced analytics, machine learning, and data visualization to understand 
      adoption patterns, optimize resource allocation, and improve the overall welfare of shelter animals.
      
      [REPLACE WITH YOUR DETAILED PROJECT OVERVIEW - Add your specific goals, methodology overview, and key stakeholders involved]`
    },
    {
      id: 'challenge',
      title: 'The Challenge',
      type: 'text',
      content: `Toronto's shelter faced multiple interconnected challenges:
      
      • Long average stay times affecting animal welfare and operational costs
      • Inefficient resource allocation during peak and low seasons
      • Limited understanding of adoption patterns and preferences
      • Difficulty predicting which animals would find homes quickly
      • Suboptimal matching between potential adopters and available animals
      
      [REPLACE WITH YOUR SPECIFIC CHALLENGES - Detail the exact problems you identified and their impact on the shelter operations]`
    },
    {
      id: 'dog-photos-1',
      title: 'Meet the Shelter Dogs',
      type: 'image',
      imageUrl: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg',
      imageAlt: 'Shelter dogs waiting for adoption',
      content: `[REPLACE WITH YOUR ACTUAL DOG PHOTOS - Add heartwarming images of the actual shelter dogs that were part of your analysis]`
    },
    {
      id: 'dashboard-1',
      title: 'Dashboard 1: Adoption Trends Overview',
      type: 'tableau',
      tableauUrl: 'https://public.tableau.com/views/DogShelterAnalytics/AdoptionTrends',
      content: `This dashboard provides a comprehensive overview of adoption trends over the 5-year analysis period.
      
      Key insights revealed:
      • Seasonal patterns in adoption rates
      • Demographic preferences of adopters
      • Geographic distribution of successful adoptions
      
      [REPLACE WITH YOUR DASHBOARD 1 DESCRIPTION - Explain what this specific dashboard shows and its key insights]`
    },
    {
      id: 'methodology',
      title: 'Data Collection & Methodology',
      type: 'text',
      content: `Our analysis was built on a robust dataset spanning 5 years (2018-2023) with over 25,000 individual dog records.
      
      **Data Sources:**
      • Shelter management system records
      • Adoption application databases
      • Veterinary health records
      • Behavioral assessment scores
      • Follow-up surveys with adopters
      
      **Analytical Approach:**
      • Time series analysis for seasonal patterns
      • Clustering algorithms for dog categorization
      • Predictive modeling for adoption likelihood
      • A/B testing for process improvements
      
      [REPLACE WITH YOUR DETAILED METHODOLOGY - Add your specific data sources, cleaning processes, and analytical techniques]`
    },
    {
      id: 'python-analysis-1',
      title: 'Python Analysis: Breed Popularity Trends',
      type: 'image',
      imageUrl: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
      imageAlt: 'Python analysis showing breed popularity trends',
      content: `This analysis reveals how breed preferences have evolved over the study period.
      
      **Key Findings:**
      • Mixed breeds showed 40% higher adoption rates
      • Seasonal variations in breed preferences
      • Age-breed interaction effects on adoption speed
      
      [REPLACE WITH YOUR PYTHON ANALYSIS 1 - Add your actual static image and detailed explanation of the analysis]`
    },
    {
      id: 'dashboard-2',
      title: 'Dashboard 2: Animal Characteristics Analysis',
      type: 'tableau',
      tableauUrl: 'https://public.tableau.com/views/DogShelterAnalytics/AnimalCharacteristics',
      content: `Deep dive into how animal characteristics influence adoption outcomes.
      
      This dashboard explores:
      • Age distribution and adoption correlation
      • Size preferences among adopters
      • Health status impact on adoption timeline
      • Behavioral assessment scores and outcomes
      
      [REPLACE WITH YOUR DASHBOARD 2 DESCRIPTION - Detail what this dashboard reveals about animal characteristics]`
    },
    {
      id: 'dog-photos-2',
      title: 'Success Stories',
      type: 'image',
      imageUrl: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg',
      imageAlt: 'Happy adopted dogs with their new families',
      content: `[REPLACE WITH SUCCESS STORY PHOTOS - Add before/after photos or images of successfully adopted dogs with their new families]`
    },
    {
      id: 'dashboard-3',
      title: 'Dashboard 3: Seasonal Patterns & Resource Planning',
      type: 'tableau',
      tableauUrl: 'https://public.tableau.com/views/DogShelterAnalytics/SeasonalPatterns',
      content: `Understanding seasonal fluctuations to optimize staffing and resources.
      
      **Seasonal Insights:**
      • Spring surge in adoptions (March-May)
      • Summer plateau with family adoptions
      • Fall peak driven by holiday preparations
      • Winter challenges and strategies
      
      [REPLACE WITH YOUR DASHBOARD 3 DESCRIPTION - Explain seasonal patterns and resource planning insights]`
    },
    {
      id: 'python-analysis-2',
      title: 'Python Analysis: Predictive Modeling Results',
      type: 'image',
      imageUrl: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
      imageAlt: 'Machine learning model performance metrics',
      content: `Our machine learning model achieved 92% accuracy in predicting adoption likelihood.
      
      **Model Performance:**
      • Random Forest classifier with feature importance analysis
      • Cross-validation scores and model stability
      • Feature engineering for behavioral indicators
      
      [REPLACE WITH YOUR PYTHON ANALYSIS 2 - Add your actual model results and performance visualizations]`
    },
    {
      id: 'dashboard-4',
      title: 'Dashboard 4: Adopter Demographics & Preferences',
      type: 'tableau',
      tableauUrl: 'https://public.tableau.com/views/DogShelterAnalytics/AdopterDemographics',
      content: `Comprehensive analysis of adopter profiles and their preferences.
      
      **Demographic Insights:**
      • Age group preferences for different dog types
      • Geographic patterns in adoption behavior
      • First-time vs. experienced pet owner differences
      • Income correlation with adoption choices
      
      [REPLACE WITH YOUR DASHBOARD 4 DESCRIPTION - Detail adopter demographic patterns and insights]`
    },
    {
      id: 'intervention-results',
      title: 'Intervention Implementation & Results',
      type: 'text',
      content: `Based on our analysis, we implemented several data-driven interventions:
      
      **Process Improvements:**
      • Optimized animal profile presentations
      • Improved matching algorithms for adopter-animal pairing
      • Seasonal staffing adjustments
      • Targeted marketing campaigns
      
      **Immediate Impact:**
      • 32% increase in adoption rates within 3 months
      • 25% reduction in average length of stay
      • 40% improvement in adopter satisfaction scores
      
      [REPLACE WITH YOUR INTERVENTION DETAILS - Add specific changes implemented and their measured impacts]`
    },
    {
      id: 'python-analysis-3',
      title: 'Python Analysis: Cost-Benefit Analysis',
      type: 'image',
      imageUrl: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
      imageAlt: 'Cost-benefit analysis visualization',
      content: `Financial impact analysis of the implemented changes.
      
      **Economic Benefits:**
      • $150,000 annual savings in operational costs
      • Reduced veterinary expenses through faster adoptions
      • Improved resource utilization efficiency
      
      [REPLACE WITH YOUR PYTHON ANALYSIS 3 - Add your actual cost-benefit analysis and financial impact visualizations]`
    },
    {
      id: 'dashboard-5',
      title: 'Dashboard 5: Impact Measurement & Future Projections',
      type: 'tableau',
      tableauUrl: 'https://public.tableau.com/views/DogShelterAnalytics/ImpactMeasurement',
      content: `Comprehensive measurement of project impact and future projections.
      
      **Long-term Projections:**
      • Sustained adoption rate improvements
      • Capacity planning for future growth
      • Scalability to other shelter locations
      • Continuous monitoring framework
      
      [REPLACE WITH YOUR DASHBOARD 5 DESCRIPTION - Show long-term impact and future planning insights]`
    },
    {
      id: 'lessons-learned',
      title: 'Lessons Learned & Future Recommendations',
      type: 'text',
      content: `This project provided valuable insights for both data science methodology and animal welfare operations.
      
      **Key Learnings:**
      • Importance of stakeholder engagement throughout the analysis
      • Value of combining quantitative analysis with qualitative insights
      • Need for continuous monitoring and model updates
      • Scalability considerations for multi-location implementations
      
      **Future Recommendations:**
      • Expand analysis to include cat adoption patterns
      • Implement real-time dashboard monitoring
      • Develop mobile app for adopter matching
      • Create predictive alerts for resource planning
      
      [REPLACE WITH YOUR LESSONS LEARNED - Add your specific insights and recommendations for future work]`
    }
  ];

  const projectMetrics = [
    { label: 'Analysis Duration', value: '6 months', color: 'text-red-400' },
    { label: 'Data Points', value: '25,000+', color: 'text-emerald-400' },
    { label: 'Adoption Increase', value: '32%', color: 'text-blue-400' },
    { label: 'Cost Savings', value: '$150K', color: 'text-orange-400' },
    { label: 'Tableau Dashboards', value: '5', color: 'text-purple-400' },
    { label: 'Python Analyses', value: '3', color: 'text-yellow-400' }
  ];

  return (
    <div className="min-h-screen bg-gray-950 pt-20">
      {/* Hero Section */}
      <div 
        className="h-[500px] relative bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg")'
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
              Dog Shelter Analytics
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
              A comprehensive 6-month data science project that increased adoption rates by 32% 
              and transformed operations at Toronto's largest dog shelter through advanced analytics, 
              machine learning, and strategic interventions.
            </p>
          </div>
        </div>
      </div>

      {/* Project Metrics */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-gray-900 rounded-xl p-8 mb-12 border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Project at a Glance</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {projectMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className={`text-3xl font-bold ${metric.color} mb-2`}>
                  {metric.value}
                </div>
                <div className="text-gray-300 text-sm">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Story Content Sections */}
        <div className="space-y-8">
          {storyContent.map((section, index) => (
            <div key={section.id} className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
              {/* Section Header */}
              <button
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-800 transition-colors"
                onClick={() => toggleSection(section.id)}
              >
                <div className="flex items-center">
                  {section.type === 'tableau' && <BarChart3 className="text-emerald-400 mr-3" size={24} />}
                  {section.type === 'image' && <ImageIcon className="text-blue-400 mr-3" size={24} />}
                  {section.type === 'text' && <FileText className="text-orange-400 mr-3" size={24} />}
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{section.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">
                      {section.type === 'tableau' && 'Interactive Tableau Dashboard'}
                      {section.type === 'image' && 'Python Analysis Visualization'}
                      {section.type === 'text' && 'Detailed Analysis & Insights'}
                    </p>
                  </div>
                </div>
                {expandedSections.includes(section.id) ? (
                  <ChevronUp className="text-gray-400" size={24} />
                ) : (
                  <ChevronDown className="text-gray-400" size={24} />
                )}
              </button>

              {/* Section Content */}
              {expandedSections.includes(section.id) && (
                <div className="px-8 pb-8 border-t border-gray-800">
                  <div className="pt-6">
                    {/* Text Content */}
                    {section.type === 'text' && (
                      <div className="prose prose-lg prose-invert max-w-none">
                        <div className="text-gray-300 whitespace-pre-line leading-relaxed">
                          {section.content}
                        </div>
                      </div>
                    )}

                    {/* Tableau Dashboard */}
                    {section.type === 'tableau' && (
                      <div>
                        <div className="mb-6">
                          <p className="text-gray-300 whitespace-pre-line leading-relaxed">
                            {section.content}
                          </p>
                        </div>
                        <TableauEmbed 
                          url={section.tableauUrl || 'https://public.tableau.com/views/example/dashboard'}
                          height={600}
                          title={section.title}
                        />
                        <div className="mt-4 p-4 bg-emerald-900/20 rounded-lg border border-emerald-700/30">
                          <p className="text-emerald-200 text-sm">
                            <strong>Note:</strong> Replace the Tableau URL above with your actual dashboard link. 
                            The embed will automatically format the URL for proper display.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Image/Python Analysis */}
                    {section.type === 'image' && (
                      <div>
                        <div className="mb-6">
                          <p className="text-gray-300 whitespace-pre-line leading-relaxed">
                            {section.content}
                          </p>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                          <img 
                            src={section.imageUrl} 
                            alt={section.imageAlt}
                            className="w-full h-96 object-cover rounded-lg mb-4"
                          />
                          <div className="text-center">
                            <p className="text-gray-400 text-sm">
                              {section.imageAlt}
                            </p>
                          </div>
                        </div>
                        <div className="mt-4 p-4 bg-blue-900/20 rounded-lg border border-blue-700/30">
                          <p className="text-blue-200 text-sm">
                            <strong>Note:</strong> Replace with your actual Python analysis visualization. 
                            Consider adding code snippets or methodology details below the image.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Technical Details Expandable Section */}
        <div className="mt-12 bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
          <button
            className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-800 transition-colors"
            onClick={() => toggleSection('technical-details')}
          >
            <div className="flex items-center">
              <Code className="text-purple-400 mr-3" size={24} />
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white">Technical Implementation Details</h3>
                <p className="text-gray-400 text-sm mt-1">
                  Deep dive into methodology, tools, and technical approach
                </p>
              </div>
            </div>
            {expandedSections.includes('technical-details') ? (
              <ChevronUp className="text-gray-400" size={24} />
            ) : (
              <ChevronDown className="text-gray-400" size={24} />
            )}
          </button>

          {expandedSections.includes('technical-details') && (
            <div className="px-8 pb-8 border-t border-gray-800">
              <div className="pt-6 space-y-8">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Data Architecture & Pipeline</h4>
                  <p className="text-gray-300 mb-4">
                    [ADD YOUR TECHNICAL ARCHITECTURE DETAILS - Describe your data pipeline, storage solutions, and processing frameworks]
                  </p>
                  <div className="bg-gray-950 p-4 rounded-lg">
                    <pre className="text-gray-300 text-sm overflow-x-auto">
                      <code>
{`# Example data pipeline structure
import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split

# Data preprocessing pipeline
def preprocess_shelter_data(df):
    # Add your actual preprocessing steps
    return cleaned_df

# Model training
def train_adoption_model(X, y):
    # Add your actual model training code
    return trained_model`}
                      </code>
                    </pre>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Statistical Methods & Validation</h4>
                  <p className="text-gray-300">
                    [ADD YOUR STATISTICAL METHODOLOGY - Detail your hypothesis testing, validation approaches, and statistical significance measures]
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Tools & Technologies</h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h5 className="font-medium text-red-400 mb-2">Data Processing</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>Python (pandas, numpy)</li>
                        <li>SQL (PostgreSQL)</li>
                        <li>Apache Airflow</li>
                        <li>[Add your tools]</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-emerald-400 mb-2">Machine Learning</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>scikit-learn</li>
                        <li>XGBoost</li>
                        <li>TensorFlow</li>
                        <li>[Add your tools]</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-blue-400 mb-2">Visualization</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>Tableau</li>
                        <li>matplotlib/seaborn</li>
                        <li>Plotly</li>
                        <li>[Add your tools]</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Call to Action - Fixed with proper scroll functionality */}
        <div className="mt-16 bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-xl p-8 border border-red-700/30 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Interested in Similar Analysis?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            This project demonstrates the power of data science in creating positive social impact. 
            I'm passionate about applying analytics to solve real-world problems and would love to 
            discuss how similar approaches could benefit your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleDiscussProject}
              className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors hover:shadow-lg hover:shadow-red-500/25"
            >
              Discuss Your Project
            </button>
            <button
              onClick={handleViewMoreProjects}
              className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors border border-gray-700"
            >
              View More Projects
            </button>
            <button
              onClick={scrollToTop}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center"
            >
              <ArrowUp size={20} className="mr-2" />
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogShelterProject;