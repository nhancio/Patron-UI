import React, { useState } from 'react';
import { Upload, FileText, Linkedin, Plus, Sparkles } from 'lucide-react';
import { ResumeProvider } from '../contexts/ResumeContext';
import ResumeForm from '../components/resume-builder/ResumeForm';
import ResumeLivePreview from '../components/resume-builder/ResumeLivePreview';
import { motion } from 'framer-motion';

export default function ResumeBuilder() {
  const [mode, setMode] = useState<'select' | 'create'>('select');

  const handleUpload = () => {
    // Handle file upload
  };

  const handleLinkedInFetch = () => {
    window.open('https://www.linkedin.com', '_blank');
  };

  if (mode === 'create') {
    return (
      <ResumeProvider>
        <div className="h-screen flex bg-gradient-to-br from-violet-50 to-fuchsia-50">
          {/* Left side - Form */}
          <div className="w-1/2 border-r border-violet-200">
            <ResumeForm />
          </div>
          
          {/* Right side - Preview */}
          <div className="w-1/2">
            <ResumeLivePreview />
          </div>
        </div>
      </ResumeProvider>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-fuchsia-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Sparkles className="w-8 h-8 text-violet-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 text-transparent bg-clip-text">
              AI-Powered Resume Builder
            </h1>
          </motion.div>
          <p className="text-lg text-gray-600">Create a standout resume in minutes ✨</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleUpload}
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-8 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Upload className="w-12 h-12 text-violet-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-center">Upload Resume</h3>
            <p className="text-gray-500 text-sm text-center mt-2">Import your existing resume</p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {}}
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-8 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <FileText className="w-12 h-12 text-emerald-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-center">Paste Text</h3>
            <p className="text-gray-500 text-sm text-center mt-2">Copy & paste your content</p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleLinkedInFetch}
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-8 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Linkedin className="w-12 h-12 text-[#0077B5] mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-center">Import from LinkedIn</h3>
            <p className="text-gray-500 text-sm text-center mt-2">Sync with your profile</p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setMode('create')}
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-8 overflow-hidden md:col-span-2 lg:col-span-3"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Plus className="w-12 h-12 text-fuchsia-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-center">Create Fresh Resume</h3>
            <p className="text-gray-500 text-sm text-center mt-2">Start from scratch with AI assistance</p>
          </motion.button>
        </div>
      </div>
    </div>
  );
}