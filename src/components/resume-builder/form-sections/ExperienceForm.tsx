import React from 'react';
import { useResumeContext } from '../../../contexts/ResumeContext';
import FormField from '../../common/FormField';
import { Plus, Trash2 } from 'lucide-react';

export default function ExperienceForm() {
  const { resumeData, updateExperience, addExperience, removeExperience } = useResumeContext();

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Work Experience</h2>
        <button
          onClick={addExperience}
          className="flex items-center text-blue-600 hover:text-blue-700"
        >
          <Plus className="w-4 h-4 mr-1" />
          Add Experience
        </button>
      </div>

      {resumeData.experiences?.map((exp, index) => (
        <div key={index} className="border rounded-lg p-4 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">Experience {index + 1}</h3>
            <button
              onClick={() => removeExperience(index)}
              className="text-red-500 hover:text-red-600"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>

          <FormField
            label="Company"
            value={exp.company}
            onChange={(value) => updateExperience(index, 'company', value)}
            placeholder="Company Name"
          />
          <FormField
            label="Role"
            value={exp.role}
            onChange={(value) => updateExperience(index, 'role', value)}
            placeholder="Software Engineer"
          />
          <FormField
            label="Duration"
            value={exp.duration}
            onChange={(value) => updateExperience(index, 'duration', value)}
            placeholder="Jan 2020 - Present"
          />
          <FormField
            label="Description"
            value={exp.description}
            onChange={(value) => updateExperience(index, 'description', value)}
            placeholder="• Developed and maintained..."
            multiline
            rows={4}
          />
        </div>
      ))}
    </div>
  );
}