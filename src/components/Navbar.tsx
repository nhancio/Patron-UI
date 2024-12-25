import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Briefcase, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { auth } from '../config/firebase';
import AuthModal from './AuthModal';

export default function Navbar() {
  const location = useLocation();
  const { user } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

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
                className={`${isActive('/blog')} transition-colors duration-200 font-medium`}
              >
                Blog
              </Link>
              <Link 
                to="/guidance" 
                className={`${isActive('/guidance')} transition-colors duration-200 font-medium flex items-center`}
              >
                <span className="relative inline-flex">
                  1-on-1 Guidance
                </span>
              </Link>
              
              {/* Profile/Sign In Button */}
              {user ? (
                <div className="relative">
                  <button 
                    onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                    className="flex items-center justify-center w-10 h-10 rounded-full text-white hover:bg-black-800 transition-colors duration-200"
                  >
                    {user.photoURL ? (
                      <img 
                        src={user.photoURL} 
                        alt={user.displayName || 'User'} 
                        className="w-8 h-8 rounded-full object-cover" // Updated sizing
                      />
                    ) : (
                      <span className="text-lg font-semibold bg-black rounded-full">
                        {(user.displayName || user.email || 'U').charAt(0).toUpperCase()}
                      </span>
                    )}
                  </button>

                  {isProfileMenuOpen && (
                    <>
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                        <Link 
                          to="/profile"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          onClick={() => setIsProfileMenuOpen(false)}
                        >
                          Profile
                        </Link>
                        <button 
                          onClick={() => {
                            auth.signOut();
                            setIsProfileMenuOpen(false);
                          }}
                          className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          Sign Out
                        </button>
                      </div>
                      <div 
                        className="fixed inset-0 z-40"
                        onClick={() => setIsProfileMenuOpen(false)}
                      />
                    </>
                  )}
                </div>
              ) : (
                <button 
                  onClick={() => setIsAuthModalOpen(true)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  );
}