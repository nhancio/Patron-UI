import React, { useState, useEffect } from 'react';
import { Briefcase, Mail } from 'lucide-react';
import { getAnalytics } from '../services/analytics';

export default function Analytics() {
  const [stats, setStats] = useState({ jobsApplied: 0, referralsSent: 0 });

  useEffect(() => {
    const fetchAnalytics = async () => {
      // Uncomment when Firebase is set up
      // const userId = auth.currentUser?.uid;
      // if (userId) {
      //   const data = await getAnalytics(userId);
      //   setStats(data);
      // }
      
      // Using mock data for now
      const data = await getAnalytics('mock-user-id');
      setStats(data);
    };

    fetchAnalytics();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Analytics & Insights</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Briefcase className="w-8 h-8 text-blue-600" />
              <h2 className="text-xl font-semibold ml-2">Jobs Applied</h2>
            </div>
            <span className="text-3xl font-bold text-blue-600">{stats.jobsApplied}</span>
          </div>
          <p className="text-gray-600">Total job applications submitted</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Mail className="w-8 h-8 text-green-600" />
              <h2 className="text-xl font-semibold ml-2">Referrals Sent</h2>
            </div>
            <span className="text-3xl font-bold text-green-600">{stats.referralsSent}</span>
          </div>
          <p className="text-gray-600">Total referral emails sent</p>
        </div>
      </div>
    </div>
  );
}