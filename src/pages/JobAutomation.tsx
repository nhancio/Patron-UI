import React, { useState } from 'react';
// import { ExternalLink } from 'some-library'; // Comment out if not used
import { Search, Download, AlertCircle } from 'lucide-react';

function JobAutomation() {
  const [jobPreferences, setJobPreferences] = useState({
    jobTitle: '',
    location: '',
    experienceLevel: 'entry',
    jobType: 'full-time',
    remote: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setJobPreferences(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleAutomate = () => {
    const searchQuery = encodeURIComponent(
      `${jobPreferences.jobTitle} ${jobPreferences.location}`
    );
    const linkedInURL = `https://www.linkedin.com/jobs/search/?keywords=${searchQuery}&location=${jobPreferences.location}`;
    window.open(linkedInURL, '_blank');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Job Application Automation</h1>

      {/* Extension Installation Guide */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
        <div className="flex items-start">
          <AlertCircle className="w-6 h-6 text-blue-500 mr-3 mt-1" />
          <div>
            <h2 className="text-lg font-semibold text-blue-900 mb-2">Before You Start</h2>
            <p className="text-blue-800 mb-4">
              To use the automation feature, you'll need to install the Teemo AI Auto Apply extension:
            </p>
            <a 
              href="https://chromewebstore.google.com/detail/teemo-ai-auto-apply-ai-fr/lljlidmjadaibchdnjlchinbdemkonlm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              <Download className="w-5 h-5 mr-2" />
              Install Extension
            </a>
          </div>
        </div>
      </div>

      {/* Job Preferences Form */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-6">Job Search Preferences</h2>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Job Title / Keywords
            </label>
            <input
              type="text"
              name="jobTitle"
              value={jobPreferences.jobTitle}
              onChange={handleInputChange}
              placeholder="e.g. Software Engineer, Product Manager"
              className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={jobPreferences.location}
              onChange={handleInputChange}
              placeholder="e.g. New York, Remote"
              className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Experience Level
            </label>
            <select
              name="experienceLevel"
              value={jobPreferences.experienceLevel}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="entry">Entry Level</option>
              <option value="mid">Mid Level</option>
              <option value="senior">Senior Level</option>
              <option value="executive">Executive</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Job Type
            </label>
            <select
              name="jobType"
              value={jobPreferences.jobType}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
              <option value="contract">Contract</option>
              <option value="internship">Internship</option>
            </select>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="remote"
              checked={jobPreferences.remote}
              onChange={handleInputChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label className="ml-2 block text-sm text-gray-700">
              Remote Jobs Only
            </label>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">How It Works</h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>Install the Teemo AI Auto Apply extension from the link above</li>
          <li>Fill in your job search preferences</li>
          <li>Click the "Start Automation" button below</li>
          <li>LinkedIn will open in a new tab with your search results</li>
          <li>Use the extension to automatically apply to jobs</li>
        </ol>
      </div>

      {/* Action Button */}
      <button
        onClick={handleAutomate}
        disabled={!jobPreferences.jobTitle || !jobPreferences.location}
        className={`w-full flex items-center justify-center px-6 py-3 rounded-md text-white text-lg
          ${(!jobPreferences.jobTitle || !jobPreferences.location)
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700'}`}
      >
        <Search className="w-5 h-5 mr-2" />
        Start Automation
      </button>

      <p className="mt-4 text-sm text-gray-600 text-center">
        Make sure you have installed the extension before starting the automation process.
      </p>
    </div>
  );
}

export default JobAutomation;