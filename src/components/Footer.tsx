
import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">CareerLift</h2>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering job seekers with AI-powered tools to optimize resumes, create compelling cover letters, and find perfect job matches.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Product</h3>
            <ul className="space-y-3">
              {['Resume Optimizer', 'Cover Letter Generator', 'Job Matcher', 'Pricing', 'Testimonials'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} CareerLift. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center text-sm">
              <Mail size={16} className="mr-2" />
              support@careerlift.com
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center text-sm">
              <Phone size={16} className="mr-2" />
              +1 (800) 123-4567
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
