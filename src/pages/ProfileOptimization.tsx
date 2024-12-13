import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

export default function ProfileOptimization() {
  const handleLinkedInOptimize = () => {
    window.open('https://www.linkedin.com/in/edit', '_blank');
  };

  const handleNaukriOptimize = () => {
    window.open('https://www.naukri.com/mnjuser/profile', '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Profile Optimization</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Linkedin className="w-8 h-8 text-[#0077B5]" />
                <h2 className="text-xl font-semibold ml-2">LinkedIn</h2>
              </div>
              <div className="text-2xl font-bold">85%</div>
            </div>
            <button
              onClick={handleLinkedInOptimize}
              className="w-full bg-[#0077B5] text-white py-2 rounded-lg hover:bg-[#006399] transition-colors"
            >
              Optimize LinkedIn Profile
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Mail className="w-8 h-8 text-[#FF7555]" />
                <h2 className="text-xl font-semibold ml-2">Naukri</h2>
              </div>
              <div className="text-2xl font-bold">72%</div>
            </div>
            <button
              onClick={handleNaukriOptimize}
              className="w-full bg-[#FF7555] text-white py-2 rounded-lg hover:bg-[#FF6B4A] transition-colors"
            >
              Optimize Naukri Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}