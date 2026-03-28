import React from 'react';
import styles from './EventsSection.module.css';

const EventCard = ({ event, onClick }) => {
  return (
    <div className={styles.card} onClick={() => onClick(event)}>
      
      {/* Background Image */}
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

      {/* Card Content */}
      <div className={styles.cardContent}>
        <span className={styles.cardTag}>{event.tag}</span>
        
        <h3 className={styles.cardTitle}>{event.title}</h3>
        
        <p className={styles.cardDesc}>{event.shortDesc}</p>
        
        <div className={styles.cardDate}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          {event.date}
        </div>
      </div>

      {/* Decorative Bottom Glow Line */}
      <div className={styles.hoverLine}></div>
    </div>
  );
};

export default EventCard;
