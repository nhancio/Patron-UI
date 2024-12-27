import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import * as XLSX from 'xlsx';
import { Download, Upload, Send } from 'lucide-react';

interface CandidateData {
  fullName: string;
  company: string;
  generatedEmails: string[];
}

function ReferralAutomation() {
  const [candidates, setCandidates] = useState<CandidateData[]>([]);
  const [emailTemplate, setEmailTemplate] = useState(`Dear {{name}},

I hope this email finds you well. I came across an exciting opportunity at {{company}} that I believe would be a great fit for your skills and experience.

{{custom_message}}

Best regards,
[Your name]`);
  const [customMessage, setCustomMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const generateEmails = (fullName: string, company: string): string[] => {
    const names = fullName.toLowerCase().split(' ');
    const emails = [];
    
    if (names.length >= 2) {
      // Format: firstname.lastname@company.com
      emails.push(`${names[0]}.${names[names.length - 1]}@${company.toLowerCase()}.com`);
      
      // Format: lastname.firstname@company.com
      emails.push(`${names[names.length - 1]}.${names[0]}@${company.toLowerCase()}.com`);
    }
    
    return emails;
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      try {
        const data = event.target?.result;
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet) as { fullName: string; company: string }[];

        const processedData = jsonData.map(row => ({
          fullName: row.fullName,
          company: row.company,
          generatedEmails: generateEmails(row.fullName, row.company)
        }));

        setCandidates(processedData);
      } catch (error) {
        console.error('Error processing file:', error);
        alert('Error processing file. Please make sure it matches the template format.');
      }
    };

    reader.readAsArrayBuffer(file);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
      'application/vnd.ms-excel': ['.xls']
    }
  });

  const downloadTemplate = () => {
    const template = [
      { fullName: 'John Smith Doe', company: 'Example' },
      { fullName: 'Jane Marie Johnson', company: 'Sample' }
    ];

    const ws = XLSX.utils.json_to_sheet(template);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Template");
    XLSX.writeFile(wb, "referral_template.xlsx");
  };

  const handleSendEmails = async () => {
    setIsProcessing(true);
    try {
      // Implement your email sending logic here
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulated delay
      alert('Emails sent successfully!');
    } catch (error) {
      alert('Error sending emails. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Referral Automation</h1>

      <div className="space-y-8">
        {/* Template Download */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Download Template</h2>
          <button
            onClick={downloadTemplate}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Excel Template
          </button>
        </div>

        {/* File Upload */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Upload Candidate Data</h2>
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer
              ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
          >
            <input {...getInputProps()} />
            <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
            <p className="text-gray-600">
              {isDragActive ? "Drop the file here" : "Drag and drop your Excel file here, or click to select"}
            </p>
          </div>
        </div>

        {/* Email Template */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Email Template</h2>
          <textarea
            value={emailTemplate}
            onChange={(e) => setEmailTemplate(e.target.value)}
            className="w-full h-48 p-4 border rounded-md mb-4"
            placeholder="Enter your email template..."
          />
          <div className="mb-4">
            <h3 className="font-medium mb-2">Custom Message</h3>
            <textarea
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              className="w-full h-24 p-4 border rounded-md"
              placeholder="Enter your custom message..."
            />
          </div>
          <div className="text-sm text-gray-600 mb-4">
            Available variables: {'{{'}<span>name</span>{'}}'},  {'{{'}<span>company</span>{'}}'},  {'{{'}<span>custom_message</span>{'}}'}
          </div>
        </div>

        {/* Preview */}
        {candidates.length > 0 && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Generated Emails</h2>
            <div className="space-y-4">
              {candidates.map((candidate, index) => (
                <div key={index} className="border-b pb-4">
                  <p className="font-medium">{candidate.fullName}</p>
                  <p className="text-gray-600">{candidate.company}</p>
                  <div className="mt-2">
                    {candidate.generatedEmails.map((email, emailIndex) => (
                      <div key={emailIndex} className="text-sm text-blue-600">
                        {email}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={handleSendEmails}
              disabled={isProcessing}
              className={`mt-6 flex items-center px-4 py-2 rounded-md text-white
                ${isProcessing ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
            >
              <Send className="w-5 h-5 mr-2" />
              {isProcessing ? 'Sending...' : 'Send Emails'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ReferralAutomation;