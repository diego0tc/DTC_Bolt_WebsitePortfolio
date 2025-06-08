import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Send, Linkedin, Github, MessageCircle, Clock, CheckCircle } from 'lucide-react';
import { socialLinks } from '../data/projects';

const ContactPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '', projectType: '' });
      
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

  const collaborationTypes = [
    {
      title: "Data Science Consulting",
      description: "Strategic guidance on data science initiatives and implementation",
      icon: <MessageCircle className="text-red-400" size={24} />
    },
    {
      title: "Project Collaboration",
      description: "Joint development of analytics solutions and research projects",
      icon: <CheckCircle className="text-emerald-400" size={24} />
    },
    {
      title: "Speaking & Workshops",
      description: "Technical presentations and training sessions for your team",
      icon: <Clock className="text-blue-400" size={24} />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 pt-20">
      {/* Hero Section */}
      <div 
        className="h-[400px] relative bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/70 to-gray-950"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative">
          <div>
            <button
              onClick={() => navigate('/')}
              className="flex items-center text-gray-300 hover:text-red-400 mb-6 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </button>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Let's Connect
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Ready to turn your data into actionable insights? Let's discuss how we can 
              collaborate to solve your most challenging analytics problems.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Collaboration Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">How We Can Work Together</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {collaborationTypes.map((type, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6 text-center hover:bg-gray-800 transition-colors border border-gray-800">
                <div className="flex justify-center mb-4">
                  {type.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
                <p className="text-gray-300">{type.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
            
            {isSubmitted ? (
              <div className="bg-emerald-800/20 border border-emerald-700 text-emerald-400 rounded-lg p-6 flex items-center">
                <div className="w-12 h-12 bg-emerald-500/30 rounded-full flex items-center justify-center mr-4">
                  <Send size={24} className="text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">Message sent successfully!</h3>
                  <p className="text-sm">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">Name *</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">Email *</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-gray-300 mb-2 font-medium">Project Type</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                  >
                    <option value="">Select project type (optional)</option>
                    <option value="consulting">Data Science Consulting</option>
                    <option value="collaboration">Project Collaboration</option>
                    <option value="speaking">Speaking Engagement</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2 font-medium">Subject *</label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                    placeholder="Brief description of your inquiry"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                    placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-red-500 text-white px-8 py-3 rounded-lg flex items-center justify-center w-full font-medium transition-all text-lg
                    ${isSubmitting 
                      ? 'opacity-70 cursor-not-allowed' 
                      : 'hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/25'}`
                    }
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={20} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Social Links */}
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-6">Connect on Social</h2>
              <p className="text-gray-300 mb-6">
                Follow my work and connect with me on professional platforms for ongoing 
                discussions about data science, analytics, and industry trends.
              </p>
              
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-red-500 transition-all duration-300 group border border-gray-700 hover:border-red-400"
                    aria-label={link.name}
                  >
                    <div className="text-red-400 group-hover:text-white transition-colors mr-4">
                      {getIcon(link.icon)}
                    </div>
                    <div>
                      <span className="text-white group-hover:text-white transition-colors font-medium text-lg">
                        {link.name}
                      </span>
                      <p className="text-gray-400 group-hover:text-gray-200 text-sm">
                        {link.name === 'LinkedIn' ? 'Professional networking and career updates' : 'Code repositories and open source contributions'}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-xl p-8 border border-red-700/30">
              <h3 className="text-xl font-bold text-white mb-4">Response Time</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Clock className="text-red-400 mr-3" size={20} />
                  <span className="text-gray-300">Email: Within 24 hours</span>
                </div>
                <div className="flex items-center">
                  <Linkedin className="text-red-400 mr-3" size={20} />
                  <span className="text-gray-300">LinkedIn: Within 48 hours</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                For urgent matters, LinkedIn messaging typically gets the fastest response.
              </p>
            </div>

            {/* Availability */}
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">Current Availability</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">New Projects</span>
                  <span className="px-3 py-1 bg-emerald-500 text-white rounded-full text-sm">Available</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Consulting</span>
                  <span className="px-3 py-1 bg-emerald-500 text-white rounded-full text-sm">Available</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Speaking Events</span>
                  <span className="px-3 py-1 bg-yellow-500 text-white rounded-full text-sm">Limited</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;