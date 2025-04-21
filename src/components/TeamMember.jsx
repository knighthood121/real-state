import React from 'react';
import './teamMember.css';

const TeamMember = ({ member }) => {
  return (
    <div className="team-member">
      <div className="member-card">
        {member.image ? (
          <div className="image-container">
            <img 
              src={member.image} 
              alt={member.name} 
              className="member-image"
            />
          </div>
        ) : (
          <div 
            className="member-fallback" 
            style={{ backgroundColor: member.backgroundColor }}
          >
            <div className="member-initials">
              {member.name.split(' ').map(word => word[0]).join('')}
            </div>
          </div>
        )}
      </div>
      <h2 className="member-name">{member.name}</h2>
      <p className="member-role">{member.role}</p>
      <a href={member.socialLink} target="_blank" rel="noopener noreferrer" className="social-link">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="linkedin-icon">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      </a>
    </div>
  );
};

export default TeamMember; 