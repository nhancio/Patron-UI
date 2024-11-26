import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getRedirectResult } from 'firebase/auth';
import { auth } from './config/firebase';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tracker from './pages/Tracker';
import Profile from './pages/Profile';
import ResumeBuilder from './pages/ResumeBuilder';
import ProfileOptimization from './pages/ProfileOptimization';
import JobAutomation from './pages/JobAutomation';
import ReferralAutomation from './pages/ReferralAutomation';
import Analytics from './pages/Analytics';

export default function App() {
  useEffect(() => {
    // Handle the redirect result
    getRedirectResult(auth).catch((error) => {
      console.error('Redirect sign-in error:', error);
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tracker" element={<Tracker />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/resume-builder" element={<ResumeBuilder />} />
            <Route path="/profile-optimization" element={<ProfileOptimization />} />
            <Route path="/job-automation" element={<JobAutomation />} />
            <Route path="/referral-automation" element={<ReferralAutomation />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}