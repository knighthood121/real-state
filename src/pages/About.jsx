import React, { useState, useEffect, useRef } from 'react'
import './about.css'
import TeamMember from '../components/TeamMember'
import { fetchTeamMembers } from '../data/teamData'

function About() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
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
  
  // Calculate max scroll width when team members load or window resizes
  useEffect(() => {
    if (teamListRef.current && teamMembers.length > 0) {
      const calculateMaxScroll = () => {
        const container = teamListRef.current;
        setMaxScroll(container.scrollWidth - container.clientWidth);
      };
      
      calculateMaxScroll();
      window.addEventListener('resize', calculateMaxScroll);
      
      return () => window.removeEventListener('resize', calculateMaxScroll);
    }
  }, [teamMembers]);
  
  // Update scroll position when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (teamListRef.current) {
        const newPosition = teamListRef.current.scrollLeft;
        setScrollPosition(newPosition);
        
        // Calculate current index based on scroll position
        if (teamListRef.current.children.length > 0) {
          const itemWidth = teamListRef.current.children[0].offsetWidth;
          const gap = 32; // 2rem gap
          const newIndex = Math.round(newPosition / (itemWidth + gap));
          setCurrentIndex(newIndex);
        }
      }
    };
    
    const container = teamListRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);
  
  // Handle horizontal scroll navigation
  const scrollTeamList = (direction) => {
    if (!teamListRef.current) return;
    
    const isLeft = direction === 'left';
    const newIndex = isLeft ? Math.max(0, currentIndex - 1) : Math.min(teamMembers.length - 1, currentIndex + 1);
    
    const container = teamListRef.current;
    if (container.children[newIndex]) {
      container.scrollTo({
        left: container.children[newIndex].offsetLeft - container.offsetLeft,
        behavior: 'smooth'
      });
      setCurrentIndex(newIndex);
    }
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
          {teamMembers.length > 1 && (
            <div className="navigation-arrows">
              <button 
                className="arrow-left" 
                onClick={() => scrollTeamList('left')}
                disabled={currentIndex <= 0}
                style={{ opacity: currentIndex <= 0 ? 0.5 : 1 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button 
                className="arrow-right" 
                onClick={() => scrollTeamList('right')}
                disabled={currentIndex >= teamMembers.length - 1}
                style={{ opacity: currentIndex >= teamMembers.length - 1 ? 0.5 : 1 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          )}
          
          <div className="team-members" ref={teamListRef}>
            {teamMembers.map(member => (
              <TeamMember key={member.id} member={member} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default About