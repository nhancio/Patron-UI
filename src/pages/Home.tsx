import React from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  UserCheck,
  Briefcase,
  Video,
  LineChart,
  Share2,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import FeatureCard from '../components/FeatureCard';

export default function Home() {
  const navigate = useNavigate();

  const features = [
    {
      title: 'AI-Powered Resume Builder',
      description: 'Create professional resumes with AI-driven suggestions and optimization tips.',
      icon: FileText,
      color: 'bg-blue-500',
      onClick: () => navigate('/resume-builder'),
    },
    {
      title: 'Profile Optimization',
      description: 'Enhance your LinkedIn and professional profiles with AI-powered recommendations.',
      icon: UserCheck,
      color: 'bg-green-500',
      onClick: () => navigate('/profile-optimization'),
    },
    {
      title: 'Job Application Automation',
      description: 'Automate your job applications across multiple platforms with smart tracking.',
      icon: Briefcase,
      color: 'bg-purple-500',
      onClick: () => navigate('/job-automation'),
    },
    {
      title: 'Interview Preparation AI',
      description: 'Practice with AI-powered mock interviews and receive instant feedback.',
      icon: Video,
      color: 'bg-red-500',
      onClick: () => window.open('https://yoodli.ai/', '_blank'),
    },
    {
      title: 'Analytics & Insights',
      description: 'Track your application success rates and receive personalized improvement tips.',
      icon: LineChart,
      color: 'bg-indigo-500',
      onClick: () => navigate('/analytics'),
    },
    {
      title: 'Referral Automation',
      description: 'Automate referral emails using Excel templates for bulk outreach.',
      icon: Share2,
      color: 'bg-amber-500',
      onClick: () => navigate('/referral-automation'),
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Your AI-Powered Job Search Assistant
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Streamline your job search with AI-powered tools for resume building,
          profile optimization, and automated applications.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <FeatureCard {...feature} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}