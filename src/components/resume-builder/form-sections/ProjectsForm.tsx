import React from 'react';
import { useResumeContext } from '../../../contexts/ResumeContext';
import FormField from '../../common/FormField';
import { Plus, Trash2 } from 'lucide-react';

export default function ProjectsForm() {
  const { resumeData, updateProject, addProject, removeProject } = useResumeContext();

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Projects</h2>
        <button
          onClick={addProject}
          className="flex items-center text-blue-600 hover:text-blue-700"
        >
          <Plus className="w-4 h-4 mr-1" />
          Add Project
        </button>
      </div>

      {resumeData.projects?.map((project, index) => (
        <div key={index} className="border rounded-lg p-4 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">Project {index + 1}</h3>
            <button
              onClick={() => removeProject(index)}
              className="text-red-500 hover:text-red-600"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>

          <FormField
            label="Project Name"
            value={project.name}
            onChange={(value) => updateProject(index, 'name', value)}
            placeholder="Project Name"
          />
          <FormField
            label="Technologies Used"
            value={project.technologies}
            onChange={(value) => updateProject(index, 'technologies', value)}
            placeholder="React, Node.js, MongoDB"
          />
          <FormField
            label="Description"
            value={project.description}
            onChange={(value) => updateProject(index, 'description', value)}
            placeholder="• Implemented feature..."
            multiline
            rows={4}
          />
        </div>
      ))}
    </div>
  );
}