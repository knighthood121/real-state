import React, { useEffect } from 'react';
// import '../styles/Project.css';
import Project1 from '../asets/Project1.jpg';
import Project2 from '../asets/Project2.png';
import Project3 from '../asets/Project3.png';
import Project4 from '../asets/Project4.png';
import Project5 from '../asets/Project5.png';
import './Project.css';

function Project() {
    const project =[
        {
            id:1,
            title:'Vivid Visions',
            category:'Architecture',
            year:'2024',
            image:Project1,
        },
        {
            id:2,
            title:'Timeless Touch',
            category:'Interior Design',
            year:'2024',
            image:Project2,
        },
        {
            id:3,
            title:'Urban Oasis',
            category:'Interior Design',
            year:'2024',
            image:Project3,
        },
        {
            id:4,
            title:'Luxe Layers',
            category:'Interior Design',
            year:'2024',
            image:Project4,
        },
        {
            id:5,
            title:'Haven & Harmony',
            category:'Interior Design',
            year:'2024',
            image:Project5,
        }
    ]

    useEffect(() => {
        const handleScroll = () => {
            const images = document.querySelectorAll('.projectImage');
            
            images.forEach((image) => {
                const parent = image.closest('.projectImageContainer');
                if (!parent) return;
                
                const rect = parent.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                
                if (isVisible) {
                    const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
                    const scale = 1 + Math.min(scrollPercent * 0.3, 0.3);
                    image.style.transform = `scale(${scale})`;
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    return (
        <div className="projectContainer">
            <div className="projectContent">
                <div className="projectHeader">
                    <div className="projectMeta">
                        <span className="projectLabel">PROJECTS</span>
                        <h1 className="projectTitle">See our latest work</h1>
                        <p className="projectDescription">
                            Showcasing Thoughtfully Curated Spaces and Transformative Designs.
                        </p>
                    </div>
                </div>
                
                <div className="projectShowcase">
                    {project.map((item) => (
                        <div key={item.id} className="projectCard">
                            <div className="projectImageContainer">
                                <img 
                                    src={item.image} 
                                    alt="Modern architectural design with wooden panels and glass walls" 
                                    className="projectImage"
                                />
                            </div>
                            <div className="projectInfo">
                                <h2 className="showcaseTitle">
                                    <span className="titleText">{item.title}</span>
                                    <span className="titleArrow">↗</span>
                                </h2>
                                <div className="categoryInfo">
                                    <span>{item.category}</span>
                                    <span className="divider">/</span>
                                    <span>{item.year}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Project;