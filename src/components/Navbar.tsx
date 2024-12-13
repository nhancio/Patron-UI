import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Briefcase } from 'lucide-react';
import AuthModal from './AuthModal';

export default function Navbar() {
  const location = useLocation();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600';
  };

  return (
    <>
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <Briefcase className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">Patron</span>
              </Link>
            </div>
            
            <div className="flex items-center space-x-8">
              <Link to="/" className={`${isActive('/')} transition-colors duration-200 font-medium`}>
                Home
              </Link>
              <Link 
                to="/blog" 
                className="py-4 px-2 text-gray-500 hover:text-blue-500 transition duration-300"
              >
                Blog
              </Link>
              <Link to="/tracker" className={`${isActive('/tracker')} transition-colors duration-200 font-medium`}>
                Tracker
              </Link>
              <Link to="/profile" className={`${isActive('/profile')} transition-colors duration-200 font-medium`}>
                Profile
              </Link>
              <button 
                onClick={() => setIsAuthModalOpen(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  );
}