import React from 'react';
import styles from './ProjectsSection.module.css';

// Predefined abstract gradients for cards without images to give them a premium visual header
const gradients = [
  'linear-gradient(135deg, #152445 0%, #731320 100%)', // Navy to Maroon (Brand)
  'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)', // Deep Teal
  'linear-gradient(135deg, #141E30 0%, #243B55 100%)', // Void Blue
  'linear-gradient(135deg, #000000 0%, #434343 100%)', // Ash
];

const ProjectCard = ({ project, onClick }) => {
  // Use id to pick a consistent gradient
  const bgGradient = gradients[(project.id - 1) % gradients.length];

  return (
    <div className={styles.card} onClick={() => onClick(project)}>
      {/* Visual Header / Cover */}
      <div className={styles.cardCover} style={{ background: bgGradient }}>
        <div className={styles.coverOverlay}></div>
        
        <span className={`${styles.statusBadge} ${styles[`statusBadge-${project.status}`]}`}>
          {project.status === 'ongoing' ? 'Ongoing' : 'Completed'}
        </span>
        
        {/* Abstract floating tech icon */}
        <div className={styles.coverIcon}>
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {project.id % 2 === 0 ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            )}
          </svg>
        </div>
      </div>
      
      {/* Content Body */}
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDesc}>{project.shortDesc}</p>
        
        <div className={styles.tagsContainer}>
          {project.tags.map((tag, i) => (
            <span key={i} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
      
      {/* Animated Hover Line */}
      <div className={styles.hoverLine}></div>
    </div>
  );
};

export default ProjectCard;
