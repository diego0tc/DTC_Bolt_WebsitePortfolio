import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { socialLinks } from '../data/projects';
import { useNavigate, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
    // Scroll to top when navigating to a new page
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first, then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // If on home page, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrollPosition > 50 ? 'bg-gray-900 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => handleNavigation('/')}
            className="text-white font-bold text-2xl hover:text-gray-300 transition-colors"
          >
            DataViz Portfolio
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-white hover:text-gray-300 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('/about')} 
              className="text-white hover:text-gray-300 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => handleNavigation('/projects')} 
              className="text-white hover:text-gray-300 transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => handleNavigation('/resume')} 
              className="text-white hover:text-gray-300 transition-colors"
            >
              Resume
            </button>
            <button 
              onClick={() => handleNavigation('/contact')} 
              className="text-white hover:text-gray-300 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 mt-4 rounded-lg p-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-white hover:text-gray-300 transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavigation('/about')} 
                className="text-white hover:text-gray-300 transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => handleNavigation('/projects')} 
                className="text-white hover:text-gray-300 transition-colors text-left"
              >
                Projects
              </button>
              <button 
                onClick={() => handleNavigation('/resume')} 
                className="text-white hover:text-gray-300 transition-colors text-left"
              >
                Resume
              </button>
              <button 
                onClick={() => handleNavigation('/contact')} 
                className="text-white hover:text-gray-300 transition-colors text-left"
              >
                Contact
              </button>
              
              <div className="pt-2 border-t border-gray-700">
                <div className="flex space-x-4 mt-2">
                  {socialLinks.map((link) => (
                    <a 
                      key={link.name}
                      href={link.url}
                      className="text-white hover:text-gray-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;