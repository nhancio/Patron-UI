import React, { createContext, useContext, useState } from 'react';

interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
}

interface Project {
  name: string;
  technologies: string;
  description: string;
}

interface ResumeData {
  name: string;
  mobile: string;
  email: string;
  college: string;
  cgpa: string;
  experiences: Experience[];
  projects: Project[];
}

interface ResumeContextType {
  resumeData: ResumeData;
  updateBasicInfo: (field: keyof ResumeData, value: string) => void;
  updateExperience: (index: number, field: keyof Experience, value: string) => void;
  addExperience: () => void;
  removeExperience: (index: number) => void;
  updateProject: (index: number, field: keyof Project, value: string) => void;
  addProject: () => void;
  removeProject: (index: number) => void;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export function ResumeProvider({ children }: { children: React.ReactNode }) {
  const [resumeData, setResumeData] = useState<ResumeData>({
    name: '',
    mobile: '',
    email: '',
    college: '',
    cgpa: '',
    experiences: [],
    projects: [],
  });

  const updateBasicInfo = (field: keyof ResumeData, value: string) => {
    setResumeData((prev) => ({ ...prev, [field]: value }));
  };

  const updateExperience = (index: number, field: keyof Experience, value: string) => {
    setResumeData((prev) => ({
      ...prev,
      experiences: prev.experiences.map((exp, i) =>
        i === index ? { ...exp, [field]: value } : exp
      ),
    }));
  };

  const addExperience = () => {
    setResumeData((prev) => ({
      ...prev,
      experiences: [...prev.experiences, { company: '', role: '', duration: '', description: '' }],
    }));
  };

  const removeExperience = (index: number) => {
    setResumeData((prev) => ({
      ...prev,
      experiences: prev.experiences.filter((_, i) => i !== index),
    }));
  };

  const updateProject = (index: number, field: keyof Project, value: string) => {
    setResumeData((prev) => ({
      ...prev,
      projects: prev.projects.map((proj, i) =>
        i === index ? { ...proj, [field]: value } : proj
      ),
    }));
  };

  const addProject = () => {
    setResumeData((prev) => ({
      ...prev,
      projects: [...prev.projects, { name: '', technologies: '', description: '' }],
    }));
  };

  const removeProject = (index: number) => {
    setResumeData((prev) => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index),
    }));
  };

  return (
    <ResumeContext.Provider
      value={{
        resumeData,
        updateBasicInfo,
        updateExperience,
        addExperience,
        removeExperience,
        updateProject,
        addProject,
        removeProject,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
}

export function useResumeContext() {
  const context = useContext(ResumeContext);
  if (context === undefined) {
    throw new Error('useResumeContext must be used within a ResumeProvider');
  }
  return context;
}