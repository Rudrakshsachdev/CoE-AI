import React from 'react';
import styles from './CompletedEvents.module.css';

const CompletedEventCard = ({ event, onClick }) => {
  return (
    <div className={styles.card} onClick={() => onClick(event)}>
      {/* Background Image Wrapper */}
      <div className={styles.cardImageWrapper}>
        <img 
          src={event.mainImage} 
          alt={event.title} 
          className={styles.cardImage} 
          loading="lazy"
        />
      </div>

      {/* Gradient Overlay for Text Readability */}
      <div className={styles.cardOverlay}></div>

      {/* Cyber Glow Effect */}
      <div className={styles.cyanGlow}></div>

      {/* Card Content */}
      <div className={styles.cardContent}>
        <span className={styles.cardTag}>{event.type}</span>
        
        <div className={styles.cardDate}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          {event.date}
        </div>

        <h3 className={styles.cardTitle}>{event.title}</h3>
      </div>
    </div>
  );
};

export default CompletedEventCard;
