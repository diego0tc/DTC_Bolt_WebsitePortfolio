import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import ProjectDetail from './components/ProjectDetail';
import ProjectPage from './components/ProjectPage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';
import { Project } from './types';

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const MainContent = () => (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <ProjectDetail 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );

  return (
    <Router>
      <div className="bg-gray-900 min-h-screen text-white">
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects/dog-shelter-analytics" element={<ProjectPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;