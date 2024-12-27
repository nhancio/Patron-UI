import React from 'react';
import ProfileRoadmap from '../../components/roadmap/ProfileRoadmap';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-info">
          <h2>John Doe</h2>
          <p>john.doe@example.com</p>
        </div>
        <button className="sign-out-button">Sign Out</button>
      </div>

      <div className="connected-accounts">
        <h3>Connected Accounts</h3>
        <ul>
          <li>LinkedIn</li>
          <li>Naukri</li>
          <li>Google</li>
        </ul>
        <button className="download-resume-button">Download Latest Resume</button>
      </div>

      <div className="roadmap-section">
        <ProfileRoadmap />
      </div>
    </div>
  );
};

export default Profile;