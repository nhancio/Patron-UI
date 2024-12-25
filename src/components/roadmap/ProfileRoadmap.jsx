import React from 'react';
import './ProfileRoadmap.css';

const ProfileRoadmap = ({ userProgress }) => {
  const milestones = [
    { id: 'profile', label: 'Profile Complete', icon: '👤' },
    { id: 'resume', label: 'Resume Uploaded', icon: '📄' },
    { id: 'linkedin', label: 'LinkedIn Connected', icon: '💼' },
    { id: 'naukri', label: 'Naukri Profile', icon: '🔍' },
    { id: 'applications', label: 'Applications Submitted', icon: '📝' },
    { id: 'interviews', label: 'Interviews', icon: '🤝' },
    { id: 'offers', label: 'Offers Received', icon: '🎉' }
  ];

  return (
    <div className="roadmap-container">
      <h2>Your Journey</h2>
      <div className="roadmap">
        {milestones.map((milestone, index) => (
          <div 
            key={milestone.id}
            className={`milestone ${userProgress[milestone.id] ? 'completed' : ''}`}
          >
            <div className="milestone-icon">{milestone.icon}</div>
            <div className="milestone-label">{milestone.label}</div>
            {userProgress[milestone.id] && (
              <div className="completion-date">
                {userProgress[milestone.id].date}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};