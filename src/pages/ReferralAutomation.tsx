import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, FileSpreadsheet, Download, Send, AlertCircle } from 'lucide-react';
import EmailTemplate from '../components/referral/EmailTemplate';
import { generateEmailCombinations, parseExcelData } from '../utils/emailGenerator';
import { motion } from 'framer-motion';

interface Contact {
  name: string;
  company: string;
  emails: string[];
}

export default function ReferralAutomation() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [template, setTemplate] = useState(`Hello {name},

This is {userName}, I would like to explore possible career opportunities at {company}.

Please refer me to any relevant roles.
Please find my resume here for your reference:

Resume Link: {resumeLink}

Best regards,
{userName}`);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    try {
      const file = acceptedFiles[0];
      const parsedContacts = await parseExcelData(file);
      
      const contactsWithEmails = parsedContacts.map(contact => ({
        ...contact,
        emails: generateEmailCombinations(contact.name, contact.company)
      }));
      
      setContacts(contactsWithEmails);
    } catch (error) {
      console.error('Error parsing file:', error);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/csv': ['.csv'],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
      'application/vnd.ms-excel': ['.xls'],
    },
    multiple: false
  });

  const handleSendEmails = () => {
    contacts.forEach(contact => {
      const personalizedTemplate = template
        .replace(/{name}/g, contact.name)
        .replace(/{company}/g, contact.company)
        .replace(/{userName}/g, 'Your Name')
        .replace(/{resumeLink}/g, 'https://your-resume-link.com');

      // Try each email combination
      contact.emails.forEach(email => {
        const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&subject=Career Opportunity at ${contact.company}&body=${encodeURIComponent(personalizedTemplate)}`;
        window.open(gmailComposeUrl, '_blank');
      });
    });
  };

  const handleDownloadSample = () => {
    const sampleContent = 'Name,Company\nJohn Doe,Google\nJane Smith,Microsoft';
    const blob = new Blob([sampleContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'referral_template.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 text-transparent bg-clip-text">
          Referral Automation
        </h1>
        <button
          onClick={handleDownloadSample}
          className="flex items-center px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
        >
          <Download className="w-5 h-5 mr-2" />
          Download Template
        </button>
      </div>
      
      <div className="space-y-8">
        {/* File Upload */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <div {...getRootProps()} className="border-2 border-dashed border-violet-200 rounded-lg p-8 text-center cursor-pointer hover:border-violet-400 transition-colors">
            <input {...getInputProps()} />
            <Upload className="w-12 h-12 mx-auto text-violet-400 mb-4" />
            {isDragActive ? (
              <p className="text-lg text-violet-600">Drop your file here...</p>
            ) : (
              <>
                <p className="text-lg text-gray-600 mb-2">
                  Drop your CSV file here, or click to select
                </p>
                <p className="text-sm text-gray-500">
                  Supports CSV files with Name and Company columns
                </p>
              </>
            )}
          </div>

          {contacts.length > 0 && (
            <div className="mt-4">
              <p className="text-sm text-green-600">
                ✓ Loaded {contacts.length} contacts successfully
              </p>
            </div>
          )}
        </motion.div>

        {/* Email Template Editor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h2 className="text-xl font-semibold mb-4">Email Template</h2>
          <div className="mb-4 p-4 bg-violet-50 rounded-lg">
            <div className="flex items-center text-violet-700 mb-2">
              <AlertCircle className="w-5 h-5 mr-2" />
              <span className="font-medium">Available Variables:</span>
            </div>
            <p className="text-sm text-violet-600">
              {'{name}'}, {'{company}'}, {'{userName}'}, {'{resumeLink}'}
            </p>
          </div>
          <EmailTemplate template={template} onChange={setTemplate} />
        </motion.div>

        {/* Send Emails Button */}
        {contacts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-end"
          >
            <button
              onClick={handleSendEmails}
              className="flex items-center px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-lg hover:from-violet-700 hover:to-fuchsia-700 transition-all shadow-lg hover:shadow-xl"
            >
              <Send className="w-5 h-5 mr-2" />
              Send Bulk Emails
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}