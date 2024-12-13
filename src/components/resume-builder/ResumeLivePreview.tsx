import React from 'react';
import { useResumeContext } from '../../contexts/ResumeContext';
import { motion } from 'framer-motion';

export default function ResumeLivePreview() {
  const { resumeData } = useResumeContext();
  
  return (
    <div className="h-full bg-white shadow-inner p-8 overflow-y-auto">
      <div className="sticky top-0 bg-white py-4 -mt-8 -mx-8 px-8 mb-6 border-b">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 text-transparent bg-clip-text">
          Live Preview
        </h2>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-[800px] mx-auto space-y-6"
      >
        {/* Basic Info Section */}
        <motion.div 
          layout
          className="text-center pb-4"
        >
          <h1 className="text-3xl font-bold bg-gradient-to-r from-violet-900 to-fuchsia-900 text-transparent bg-clip-text">
            {resumeData.name || 'Your Name'}
          </h1>
          <div className="text-gray-600 space-x-2 mt-2">
            {resumeData.email && <span>{resumeData.email}</span>}
            {resumeData.mobile && <span>• {resumeData.mobile}</span>}
          </div>
          {resumeData.college && (
            <div className="mt-1 text-gray-600">
              {resumeData.college} {resumeData.cgpa && `• CGPA: ${resumeData.cgpa}`}
            </div>
          )}
        </motion.div>

        {/* Work Experience Section */}
        {(resumeData.experiences?.length > 0) && (
          <motion.div layout>
            <h2 className="text-lg font-semibold border-b border-violet-200 mb-3 pb-1">
              Work Experience
            </h2>
            <div className="space-y-4">
              {resumeData.experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="ml-4"
                >
                  <div className="font-medium text-violet-900">{exp.company}</div>
                  <div className="text-fuchsia-700">{exp.role}</div>
                  <div className="text-gray-500 text-sm">{exp.duration}</div>
                  <ul className="list-disc ml-4 mt-1 text-gray-700">
                    {exp.description?.split('\n').map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Projects Section */}
        {(resumeData.projects?.length > 0) && (
          <motion.div layout>
            <h2 className="text-lg font-semibold border-b border-violet-200 mb-3 pb-1">
              Projects
            </h2>
            <div className="space-y-4">
              {resumeData.projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="ml-4"
                >
                  <div className="font-medium text-violet-900">{project.name}</div>
                  <div className="text-fuchsia-700">{project.technologies}</div>
                  <ul className="list-disc ml-4 mt-1 text-gray-700">
                    {project.description?.split('\n').map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}