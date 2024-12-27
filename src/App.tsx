import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Resume from './pages/Resume';
import ReferralAutomation from './pages/ReferralAutomation';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Analytics from './pages/Analytics';
import Tracker from './pages/Tracker';
import Blog from './pages/Blog';
import ProfileOptimization from './pages/ProfileOptimization';
import JobAutomation from './pages/JobAutomation';
import ResumeBuilder from './pages/ResumeBuilder';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/referral-automation" element={<ReferralAutomation />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/profile-optimization" element={<ProfileOptimization />} />
          <Route path="/job-automation" element={<JobAutomation />} />
          <Route path="/resume-builder" element={<ResumeBuilder />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;