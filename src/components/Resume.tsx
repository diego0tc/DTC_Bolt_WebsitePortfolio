import React from 'react';
import { Download, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Resume: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-950 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-gray-400 hover:text-red-400 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Portfolio
          </button>
          <a
            href="/resume.pdf"
            download
            className="flex items-center bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors hover:shadow-lg hover:shadow-red-500/25"
          >
            <Download size={20} className="mr-2" />
            Download PDF
          </a>
        </div>

        <div className="bg-gray-900 rounded-lg shadow-xl p-8 max-w-4xl mx-auto border border-gray-800">
          <h1 className="text-3xl font-bold text-white mb-6">Diego Tejada Cardenas</h1>
          <p className="text-gray-400 mb-6">Senior Data Scientist & Analytics Engineer</p>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4 border-b border-gray-700 pb-2">Professional Summary</h2>
            <p className="text-gray-300">
              Experienced Data Scientist with 8+ years of expertise in machine learning, statistical analysis, and data visualization.
              Proven track record of delivering impactful solutions across healthcare, finance, and retail sectors.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4 border-b border-gray-700 pb-2">Experience</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-red-400">Senior Data Scientist</h3>
              <p className="text-gray-400">TechCorp Inc. | 2020 - Present</p>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
                <li>Led a team of 5 data scientists in developing predictive models for customer churn</li>
                <li>Implemented ML pipelines that reduced processing time by 40%</li>
                <li>Developed real-time analytics dashboard used by 100+ stakeholders</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-red-400">Data Analyst</h3>
              <p className="text-gray-400">Analytics Co. | 2018 - 2020</p>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
                <li>Conducted A/B tests resulting in 25% increase in user engagement</li>
                <li>Built ETL pipelines processing 1TB+ of data daily</li>
                <li>Created automated reporting systems saving 20 hours per week</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4 border-b border-gray-700 pb-2">Education</h2>
            
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-red-400">Master of Science in Economics</h3>
              <p className="text-gray-400">University of Toronto | 2018</p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold text-red-400">Bachelor of Science in Economics</h3>
              <p className="text-gray-400">University of Toronto | 2016</p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4 border-b border-gray-700 pb-2">Skills</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <h3 className="text-lg font-semibold text-red-400 mb-2">Programming</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>Python</li>
                  <li>R</li>
                  <li>SQL</li>
                  <li>JavaScript</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">Data Science</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>Machine Learning</li>
                  <li>Deep Learning</li>
                  <li>NLP</li>
                  <li>Statistical Analysis</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Tools</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>Tableau</li>
                  <li>AWS</li>
                  <li>Docker</li>
                  <li>Git</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-4 border-b border-gray-700 pb-2">Certifications</h2>
            <ul className="text-gray-300 space-y-2">
              <li>AWS Certified Machine Learning Specialist</li>
              <li>Google Professional Data Engineer</li>
              <li>Tableau Desktop Specialist</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;