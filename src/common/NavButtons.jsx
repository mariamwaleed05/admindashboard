import React from 'react';
import './NavButtons.css';

const NavButtons = () => {
  return (
    <div className="nav-wrapper">
      
      {/* Search Bar Component */}
      <div className="search-container">
        <svg 
          className="search-icon" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        {/* Invisible input to make it functional, remove if strictly visual */}
        <input type="text" className="search-input" />
      </div>

      {/* Globe Button */}
      <button className="nav-btn" aria-label="Language">
        <svg 
          className="nav-icon" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      </button>

      {/* Notification Button */}
      <button className="nav-btn" aria-label="Notifications">
        <div className="notification-badge"></div>
        <svg 
          className="nav-icon" 
          viewBox="0 0 24 24" 
          fill="currentColor" /* Filled white as per image */
          stroke="none"
        >
           <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
           <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      </button>

    </div>
  );
};

export default NavButtons;