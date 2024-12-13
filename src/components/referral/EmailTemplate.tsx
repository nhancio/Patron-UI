import React from 'react';
import { Editor } from '@monaco-editor/react';

interface EmailTemplateProps {
  template: string;
  onChange: (value: string) => void;
}

export default function EmailTemplate({ template, onChange }: EmailTemplateProps) {
  return (
    <div className="h-[400px] border rounded-lg overflow-hidden">
      <Editor
        height="100%"
        defaultLanguage="markdown"
        value={template}
        onChange={(value) => onChange(value || '')}
        theme="vs-light"
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          wordWrap: 'on',
          lineNumbers: 'off',
          padding: { top: 16, bottom: 16 },
        }}
      />
    </div>
  );
}