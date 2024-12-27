import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './TopNav.css';

const TopNav = () => {
  return (
    <nav className="top-nav">
      <div className="nav-logo">MyApp</div>
      <div className="nav-links">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/profile">
          <FontAwesomeIcon icon={faUser} className="profile-icon" />
        </a>
      </div>
    </nav>
  );
};

export default TopNav;
