import React, { useState, useEffect, useRef } from 'react'
import './about.css'
import TeamMember from '../components/TeamMember'
import { fetchTeamMembers } from '../data/teamData'

function About() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const teamListRef = useRef(null);
  
  // Fetch team data on component mount
  useEffect(() => {
    const getTeamData = async () => {
      try {
        setLoading(true);
        const data = await fetchTeamMembers();
        setTeamMembers(data);
      } catch (error) {
        console.error('Error fetching team data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    getTeamData();
  }, []);
  
  // Handle horizontal scroll navigation
  const scrollTeamList = (direction) => {
    if (!teamListRef.current) return;
    
    const container = teamListRef.current;
    const scrollAmount = direction === 'left' ? -380 : 380;
    
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div className="about-container">
      <div className="about-header">
        <h1 className="about-title">Meet our Team</h1>
        <p className="about-motto">
          Our motto is short and sweet. The perfect team turns
          individual brilliance into collective excellence.
        </p>
      </div>
      
      {loading ? (
        <div className="loading">Loading team data...</div>
      ) : (
        <div className="team-members-container">
          <div className="team-members" ref={teamListRef}>
            {teamMembers.map(member => (
              <TeamMember key={member.id} member={member} />
            ))}
          </div>
          
          {teamMembers.length > 2 && (
            <div className="navigation-arrows">
              <button className="arrow-left" onClick={() => scrollTeamList('left')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button className="arrow-right" onClick={() => scrollTeamList('right')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default About