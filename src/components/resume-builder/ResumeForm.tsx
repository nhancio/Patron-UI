import React from 'react';
import { useResumeContext } from '../../contexts/ResumeContext';
import ExperienceForm from './form-sections/ExperienceForm';
import ProjectsForm from './form-sections/ProjectsForm';
import BasicInfoForm from './form-sections/BasicInfoForm';
import { motion } from 'framer-motion';

export default function ResumeForm() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-full overflow-y-auto p-6 space-y-8"
    >
      <div className="sticky top-0 bg-gradient-to-br from-violet-50 to-fuchsia-50 py-4 -mt-6 -mx-6 px-6 mb-6">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 text-transparent bg-clip-text">
          Build Your Resume
        </h1>
      </div>
      <BasicInfoForm />
      <ExperienceForm />
      <ProjectsForm />
    </motion.div>
  );
}