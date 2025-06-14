import React, { useState } from 'react';
import { Send, Linkedin, Github, ExternalLink, MessageSquare } from 'lucide-react';
import { socialLinks } from '../data/projects';
import { useNavigate } from 'react-router-dom';

const Contact: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset the submitted state after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'github':
        return <Github size={24} />;
      case 'linkedin':
        return <Linkedin size={24} />;
      default:
        return null;
    }
  };

  return (
    <div id="contact" className="min-h-screen py-32 bg-gray-900 relative">
      {/* Explore More Indicator - Top Right Only */}
      <div className="absolute top-8 right-8 z-10">
        <button
          onClick={() => navigate('/contact')}
          className="group bg-violet-500/20 hover:bg-violet-500 border border-violet-400/50 hover:border-violet-300 rounded-full px-4 py-2 flex items-center transition-all duration-300 backdrop-blur-sm"
        >
          <MessageSquare size={16} className="text-violet-300 group-hover:text-white mr-2" />
          <span className="text-violet-300 group-hover:text-white text-sm font-medium mr-2">
            Full Contact
          </span>
          <ExternalLink size={16} className="text-violet-300 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
        </button>
      </div>

      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Get In Touch</h2>
        
        <div className="md:flex md:space-x-10">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="bg-gray-800 rounded-lg p-6 h-full border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always interested in discussing new opportunities, collaborating on data projects, 
                or sharing insights about analytics and data science. Feel free to reach out through 
                any of the platforms below or send me a message directly.
              </p>
              
              <div className="space-y-6">
                <h4 className="text-white font-medium text-lg">Connect with me on:</h4>
                <div className="grid grid-cols-1 gap-4">
                  {socialLinks.map((link, index) => (
                    <a 
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 bg-gray-750 rounded-lg hover:bg-red-500 transition-all duration-300 group border border-gray-700 hover:border-red-400"
                      aria-label={link.name}
                    >
                      <div className="text-red-400 group-hover:text-white transition-colors mr-3">
                        {getIcon(link.icon)}
                      </div>
                      <span className="text-gray-300 group-hover:text-white transition-colors font-medium">
                        {link.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-red-900/20 rounded-lg border border-red-700/50">
                <p className="text-red-200 text-sm">
                  <strong>Preferred contact:</strong> LinkedIn for professional inquiries and networking.
                </p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
              
              {isSubmitted ? (
                <div className="bg-emerald-800/20 border border-emerald-700 text-emerald-400 rounded-lg p-4 flex items-center">
                  <div className="w-10 h-10 bg-emerald-500/30 rounded-full flex items-center justify-center mr-4">
                    <Send size={20} className="text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-medium">Message sent successfully</h4>
                    <p className="text-sm">Thank you for reaching out. I'll get back to you shortly.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-750 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-750 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-gray-750 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                      placeholder="Tell me about your project, collaboration ideas, or just say hello..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`bg-red-500 text-white px-6 py-3 rounded-lg flex items-center justify-center w-full font-medium transition-all
                      ${isSubmitting 
                        ? 'opacity-70 cursor-not-allowed' 
                        : 'hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/25'}`
                      }
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                          <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send size={16} className="ml-2" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;