import emailjs from '@emailjs/browser';

interface EmailData {
  candidateName: string;
  position: string;
  company: string;
  jobID: string;
  jobURL: string;
  customMessage: string;
  resumeFile?: File;
}

export const sendReferralEmail = async (data: EmailData) => {
  try {
    const templateParams = {
      to_name: data.candidateName,
      position: data.position,
      company: data.company,
      job_id: data.jobID,
      job_url: data.jobURL,
      custom_message: data.customMessage,
    };

    // Replace these with your EmailJS credentials
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    const response = await emailjs.send(
      serviceID,
      templateID,
      templateParams,
      publicKey
    );

    return response;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}; 