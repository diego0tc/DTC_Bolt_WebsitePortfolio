import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { socialLinks } from '../data/projects';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate();
  
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

  const scrollTo = (id: string) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
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
          <div className="text-white font-bold text-2xl">DataViz Portfolio</div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollTo('home')} className="text-white hover:text-gray-300 transition-colors">Home</button>
            <button onClick={() => scrollTo('about')} className="text-white hover:text-gray-300 transition-colors">About</button>
            <button onClick={() => scrollTo('projects')} className="text-white hover:text-gray-300 transition-colors">Projects</button>
            <button onClick={() => navigate('/resume')} className="text-white hover:text-gray-300 transition-colors">Resume</button>
            <button onClick={() => scrollTo('contact')} className="text-white hover:text-gray-300 transition-colors">Contact</button>
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
              <button onClick={() => scrollTo('home')} className="text-white hover:text-gray-300 transition-colors text-left">Home</button>
              <button onClick={() => scrollTo('about')} className="text-white hover:text-gray-300 transition-colors text-left">About</button>
              <button onClick={() => scrollTo('projects')} className="text-white hover:text-gray-300 transition-colors text-left">Projects</button>
              <button onClick={() => navigate('/resume')} className="text-white hover:text-gray-300 transition-colors text-left">Resume</button>
              <button onClick={() => scrollTo('contact')} className="text-white hover:text-gray-300 transition-colors text-left">Contact</button>
              
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