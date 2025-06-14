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
import ParkingProjectPage from './components/ParkingProjectPage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';
import LoadingScreen from './components/LoadingScreen';
import { Project } from './types';

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

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

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

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
          <Route path="/projects/toronto-parking-lesson" element={<ParkingProjectPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;