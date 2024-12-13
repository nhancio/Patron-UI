import React from 'react';
import { useResumeContext } from '../../../contexts/ResumeContext';
import FormField from '../../common/FormField';

export default function BasicInfoForm() {
  const { resumeData, updateBasicInfo } = useResumeContext();

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Basic Information</h2>
      <FormField
        label="Full Name"
        value={resumeData.name}
        onChange={(value) => updateBasicInfo('name', value)}
        placeholder="John Doe"
      />
      <FormField
        label="Mobile"
        value={resumeData.mobile}
        onChange={(value) => updateBasicInfo('mobile', value)}
        placeholder="+91 9999999999"
      />
      <FormField
        label="Email"
        value={resumeData.email}
        onChange={(value) => updateBasicInfo('email', value)}
        placeholder="john@example.com"
        type="email"
      />
      <FormField
        label="College"
        value={resumeData.college}
        onChange={(value) => updateBasicInfo('college', value)}
        placeholder="University Name"
      />
      <FormField
        label="CGPA"
        value={resumeData.cgpa}
        onChange={(value) => updateBasicInfo('cgpa', value)}
        placeholder="3.8"
        type="number"
        step="0.01"
        min="0"
        max="4"
      />
    </div>
  );
}