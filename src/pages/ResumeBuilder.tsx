import React, { useState } from 'react';
import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';
import { Download, FileText, Plus, Trash2 } from 'lucide-react';

interface ResumeData {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
  };
  education: Array<{
    degree: string;
    school: string;
    year: string;
    gpa: string;
  }>;
  experience: Array<{
    title: string;
    company: string;
    duration: string;
    points: string[];
  }>;
  skills: string[];
  projects: Array<{
    name: string;
    description: string;
    technologies: string;
  }>;
}

function ResumeBuilder() {
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      location: '',
      linkedin: '',
    },
    education: [{
      degree: '',
      school: '',
      year: '',
      gpa: '',
    }],
    experience: [{
      title: '',
      company: '',
      duration: '',
      points: [''],
    }],
    skills: [''],
    projects: [{
      name: '',
      description: '',
      technologies: '',
    }],
  });

  const handlePersonalInfoChange = (field: string, value: string) => {
    setResumeData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value
      }
    }));
  };

  const addExperience = () => {
    setResumeData(prev => ({
      ...prev,
      experience: [...prev.experience, {
        title: '',
        company: '',
        duration: '',
        points: [''],
      }]
    }));
  };

  const addProject = () => {
    setResumeData(prev => ({
      ...prev,
      projects: [...prev.projects, {
        name: '',
        description: '',
        technologies: '',
      }]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-screen">
        {/* Left Panel - Input Form */}
        <div className="w-1/2 overflow-y-auto p-6 border-r border-gray-200">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">Resume Builder</h2>

            {/* Personal Information */}
            <section className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    value={resumeData.personalInfo.name}
                    onChange={(e) => handlePersonalInfoChange('name', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      value={resumeData.personalInfo.email}
                      onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                    <input
                      type="tel"
                      value={resumeData.personalInfo.phone}
                      onChange={(e) => handlePersonalInfoChange('phone', e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Experience Section */}
            <section className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Experience</h3>
                <button
                  onClick={addExperience}
                  className="flex items-center text-blue-600 hover:text-blue-700"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Add Experience
                </button>
              </div>
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="mb-6 pb-6 border-b border-gray-200 last:border-0">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Title</label>
                        <input
                          type="text"
                          value={exp.title}
                          onChange={(e) => {
                            const newExp = [...resumeData.experience];
                            newExp[index].title = e.target.value;
                            setResumeData({ ...resumeData, experience: newExp });
                          }}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Company</label>
                        <input
                          type="text"
                          value={exp.company}
                          onChange={(e) => {
                            const newExp = [...resumeData.experience];
                            newExp[index].company = e.target.value;
                            setResumeData({ ...resumeData, experience: newExp });
                          }}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Duration</label>
                      <input
                        type="text"
                        value={exp.duration}
                        onChange={(e) => {
                          const newExp = [...resumeData.experience];
                          newExp[index].duration = e.target.value;
                          setResumeData({ ...resumeData, experience: newExp });
                        }}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </section>

            {/* Projects Section */}
            <section className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Projects</h3>
                <button
                  onClick={addProject}
                  className="flex items-center text-blue-600 hover:text-blue-700"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Add Project
                </button>
              </div>
              {resumeData.projects.map((project, index) => (
                <div key={index} className="mb-6 pb-6 border-b border-gray-200 last:border-0">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Project Name</label>
                      <input
                        type="text"
                        value={project.name}
                        onChange={(e) => {
                          const newProjects = [...resumeData.projects];
                          newProjects[index].name = e.target.value;
                          setResumeData({ ...resumeData, projects: newProjects });
                        }}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Description</label>
                      <textarea
                        value={project.description}
                        onChange={(e) => {
                          const newProjects = [...resumeData.projects];
                          newProjects[index].description = e.target.value;
                          setResumeData({ ...resumeData, projects: newProjects });
                        }}
                        rows={3}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>

        {/* Right Panel - Preview */}
        <div className="w-1/2 bg-white p-8 overflow-y-auto">
          {/* Resume Preview */}
          <div className="max-w-[21cm] mx-auto bg-white shadow-lg p-8 min-h-[29.7cm]">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">{resumeData.personalInfo.name}</h1>
              <div className="text-gray-600 mt-2">
                {resumeData.personalInfo.email} • {resumeData.personalInfo.phone}
              </div>
              <div className="text-gray-600">
                {resumeData.personalInfo.location}
              </div>
            </div>

            {/* Experience */}
            <div className="mb-8">
              <h2 className="text-xl font-bold border-b-2 border-gray-200 mb-4">Experience</h2>
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between">
                    <div className="font-semibold">{exp.title}</div>
                    <div className="text-gray-600">{exp.duration}</div>
                  </div>
                  <div className="text-gray-700">{exp.company}</div>
                </div>
              ))}
            </div>

            {/* Projects */}
            <div className="mb-8">
              <h2 className="text-xl font-bold border-b-2 border-gray-200 mb-4">Projects</h2>
              {resumeData.projects.map((project, index) => (
                <div key={index} className="mb-4">
                  <div className="font-semibold">{project.name}</div>
                  <div className="text-gray-700">{project.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// PDF Document Component
const ResumePDF = ({ data }: { data: ResumeData }) => (
  <Document>
    <Page size="A4">
      {/* PDF content will go here */}
    </Page>
  </Document>
);

export default ResumeBuilder;