import React, { useState, useRef } from 'react';
import { Upload, FileText, Linkedin, Mail, Plus } from 'lucide-react';

export default function ResumeBuilder() {
  const [showTextEditor, setShowTextEditor] = useState(false);
  const [resumeText, setResumeText] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // You can handle the file here
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result as string;
        // Handle the text content of the file
        console.log(text);
      };
      reader.readAsText(file);
    }
  };

  const handleLinkedInFetch = () => {
    window.open('https://www.linkedin.com', '_blank');
  };

  const handleNaukriFetch = () => {
    window.open('https://www.naukri.com', '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">AI-Powered Resume Builder</h1>
      
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept=".txt,.doc,.docx,.pdf"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <button
          onClick={handleUpload}
          className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <Upload className="w-12 h-12 text-blue-600 mb-4" />
          <span className="text-lg font-medium">Upload Resume</span>
        </button>

        <button
          onClick={() => setShowTextEditor(true)}
          className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <FileText className="w-12 h-12 text-green-600 mb-4" />
          <span className="text-lg font-medium">Paste Text</span>
        </button>

        <button
          onClick={handleLinkedInFetch}
          className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <Linkedin className="w-12 h-12 text-[#0077B5] mb-4" />
          <span className="text-lg font-medium">Fetch from LinkedIn</span>
        </button>

        <button
          onClick={handleNaukriFetch}
          className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <Mail className="w-12 h-12 text-[#FF7555] mb-4" />
          <span className="text-lg font-medium">Fetch from Naukri</span>
        </button>

        <button
          onClick={() => {}}
          className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <Plus className="w-12 h-12 text-purple-600 mb-4" />
          <span className="text-lg font-medium">Create Fresh</span>
        </button>
      </div>

      {/* Text Editor Modal */}
      {showTextEditor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-3xl">
            <h2 className="text-2xl font-bold mb-4">Paste Your Resume Text</h2>
            <textarea
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
              className="w-full h-96 p-4 border border-gray-300 rounded-lg mb-4"
              placeholder="Paste your resume text here..."
            />
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowTextEditor(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Handle the pasted text here
                  console.log(resumeText);
                  setShowTextEditor(false);
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}