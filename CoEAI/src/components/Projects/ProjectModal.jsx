import React, { useEffect } from 'react';
import styles from './ProjectsSection.module.css';

const ProjectModal = ({ project, isOpen, onClose }) => {
  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  if (!project) return null;

  return (
    <div className={`${styles.modalOverlay} ${isOpen ? styles.visible : ''}`} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">×</button>
        
        <h2 className={styles.modalTitle}>{project.title}</h2>
        <div className={`${styles.modalStatus} ${styles[`status-${project.status}`]}`}>
          {project.status === 'ongoing' ? 'Ongoing Project' : 'Completed Project'}
        </div>
        
        <p className={styles.modalDesc}>{project.fullDesc}</p>

        <h3 className={styles.sectionTitle}>Technologies Used</h3>
        <div className={styles.techGrid}>
          {project.technologies.map((tech, i) => (
            <span key={i} className={styles.techItem}>{tech}</span>
          ))}
        </div>

        <h3 className={styles.sectionTitle}>Key Features</h3>
        <ul className={styles.featureList}>
          {project.features.map((feat, i) => (
            <li key={i}>{feat}</li>
          ))}
        </ul>

        <h3 className={styles.sectionTitle}>Built By</h3>
        <div className={styles.creatorGrid}>
          {project.creators.map((creator, i) => (
            <div key={i} className={styles.creatorItem}>
              <span className={styles.creatorName}>{creator.name}</span>
              <span className={styles.creatorRole}>{creator.role}</span>
            </div>
          ))}
        </div>

        <div className={styles.actionLinks}>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className={`${styles.linkBtn} ${styles.primary}`}>
            View Repository
          </a>
          <a href={project.live} target="_blank" rel="noopener noreferrer" className={`${styles.linkBtn} ${styles.secondary}`}>
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
