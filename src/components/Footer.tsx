import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark-light py-8 mt-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h4 className="text-lg font-medium text-white mb-2">Digital Addiction Among Teenagers in India</h4>
            <p className="text-sm text-gray-400">A System Thinking Approach</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <NavLink to="/" className="text-sm text-gray-400 hover:text-accent transition-colors">
              Home
            </NavLink>
            <NavLink to="/process" className="text-sm text-gray-400 hover:text-accent transition-colors">
              Process
            </NavLink>
            <NavLink to="/cld-narrative" className="text-sm text-gray-400 hover:text-accent transition-colors">
              CLD & Narrative
            </NavLink>
            <NavLink to="/system-insights" className="text-sm text-gray-400 hover:text-accent transition-colors">
              System Insights
            </NavLink>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-dark-lighter text-center">
          <p className="text-xs text-gray-500">
            © {year} Digital Addiction Research. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;