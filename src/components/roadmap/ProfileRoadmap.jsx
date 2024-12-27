import React from 'react';
import './ProfileRoadmap.css';

const ProfileRoadmap = () => {
  const milestones = [
    'Resume Creation',
    'LinkedIn & Naukri Account Creation',
    'LinkedIn & Naukri Account Optimization',
    'Referral Automation',
    'Jobs Automation',
    'Applications Tracking',
    'Interview Preparation',
    'Success!'
  ];

  return (
    <div className="roadmap-container">
      <h2>Your Journey</h2>
      <div className="roadmap-line">
        {milestones.map((milestone, index) => (
          <div key={index} className="milestone">
            <div className="milestone-dot"></div>
            <div className="milestone-label">{milestone}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileRoadmap;