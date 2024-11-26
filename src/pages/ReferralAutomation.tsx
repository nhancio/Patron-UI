import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, FileSpreadsheet, Download } from 'lucide-react';

export default function ReferralAutomation() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
      'application/vnd.ms-excel': ['.xls'],
    },
  });

  const handleDownloadSample = () => {
    // Handle sample excel download
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Referral Automation</h1>
        <button
          onClick={handleDownloadSample}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Download className="w-5 h-5 mr-2" />
          Download Sample Excel
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div {...getRootProps()} className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 transition-colors">
          <input {...getInputProps()} />
          <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
          {isDragActive ? (
            <p className="text-lg text-gray-600">Drop the Excel file here...</p>
          ) : (
            <>
              <p className="text-lg text-gray-600 mb-2">
                Drag & drop your Excel file here, or click to select
              </p>
              <p className="text-sm text-gray-500">
                Supports .xlsx and .xls files
              </p>
            </>
          )}
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Template Format</h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center mb-4">
              <FileSpreadsheet className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-sm font-medium">Required Excel Columns:</span>
            </div>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
              <li>Recipient Email</li>
              <li>Candidate Name</li>
              <li>Position</li>
              <li>Company</li>
              <li>Custom Message (Optional)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}