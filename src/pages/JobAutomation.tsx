import React, { useState } from 'react';
import { Search, MapPin, ExternalLink } from 'lucide-react';

export default function JobAutomation() {
  const [keywords, setKeywords] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    const searchQuery = encodeURIComponent(`${keywords} ${location}`);
    window.open(`https://www.linkedin.com/jobs/search/?keywords=${searchQuery}`, '_blank');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Job Application Automation</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-6">
        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <p className="text-blue-800">Please enable this extension to start your job automation journey.</p>
              <a
                href="https://chromewebstore.google.com/detail/autoapply-ai-free/lljlidmjadaibchdnjlchinbdemkonlm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-2 text-blue-600 hover:text-blue-800"
              >
                Get Extension
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <div className="flex items-center">
                  <Search className="w-4 h-4 mr-2" />
                  Role/Keywords
                </div>
              </label>
              <input
                type="text"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., Software Engineer"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Location
                </div>
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., San Francisco"
              />
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Start Automation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}