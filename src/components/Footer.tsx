import React from 'react';
import { socialLinks } from '../data/projects';
import { ArrowUp, Github, Linkedin, Twitter, BookOpen } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'github':
        return <Github size={20} />;
      case 'linkedin':
        return <Linkedin size={20} />;
      case 'twitter':
        return <Twitter size={20} />;
      case 'book-open':
        return <BookOpen size={20} />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-gray-950 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-white font-bold text-2xl mb-6 md:mb-0">Diego Portfolio</div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-400 transition-colors"
                aria-label={link.name}
              >
                {getIcon(link.icon)}
              </a>
            ))}
          </div>
          
          <button
            onClick={scrollToTop}
            className="bg-gray-800 hover:bg-red-500 text-white p-3 rounded-full transition-all duration-300 border border-gray-700 hover:border-red-400"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Diego Data Analytics Portfolio. All rights reserved.</p>
          <p className="mt-2">Designed and built with React, TypeScript, and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;