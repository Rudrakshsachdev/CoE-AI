import React, { useEffect } from 'react';
import styles from './EventsSection.module.css';

const EventModal = ({ event, isOpen, onClose }) => {
  
  // Prevent scrolling on body when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !event) return null;

  return (
    <div 
      className={`${styles.modalOverlay} ${isOpen ? styles.visible : ''}`} 
      onClick={onClose}
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          ×
        </button>

        {/* Hero Section of Modal */}
        <div className={styles.modalHero}>
          <img src={event.mainImage} alt={event.title} className={styles.modalHeroImage} />
          <div className={styles.modalHeroOverlay}></div>
        </div>

        {/* Modal Body */}
        <div className={styles.modalBody}>
          
          <div className={styles.modalHeaderRow}>
            <div className={styles.modalHeaderInfo}>
              <h2 className={styles.modalTitle}>{event.title}</h2>
              <div className={styles.modalMeta}>
                <span className={styles.modalMetaItem}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  {event.date}
                </span>
                <span className={styles.modalMetaItem}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  {event.location}
                </span>
              </div>
            </div>
            <div className={`${styles.modalStatus} ${event.status === 'upcoming' ? styles['status-upcoming'] : styles['status-completed']}`}>
              {event.status}
            </div>
          </div>

          <div className={styles.modalContentGrid}>
            {/* Left Column */}
            <div className={styles.modalLeftColumn}>
              <h3 className={styles.sectionTitle}>About The Event</h3>
              <div className={styles.modalDesc}>
                {/* Support multiline description */}
                {event.fullDesc.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} style={{ marginBottom: '16px' }}>{paragraph}</p>
                ))}
              </div>

              {event.highlights && event.highlights.length > 0 && (
                <>
                  <h3 className={styles.sectionTitle}>Key Highlights</h3>
                  <ul className={styles.highlightsList}>
                    {event.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            {/* Right Column */}
            <div className={styles.modalRightColumn}>
              {event.speakers && event.speakers.length > 0 && (
                <>
                  <h3 className={styles.sectionTitle}>Guests & Speakers</h3>
                  <div className={styles.guestList}>
                    {event.speakers.map((speaker, idx) => (
                      <div key={idx} className={styles.guestItem}>
                        <div>
                          <div className={styles.guestName}>{speaker.name}</div>
                          <div className={styles.guestRole}>{speaker.role}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {event.status === 'upcoming' && event.registrationLink && (
                <div className={styles.registerBtnWrapper}>
                  <a href={event.registrationLink} className={styles.registerBtn} target="_blank" rel="noopener noreferrer">
                    Register Now
                  </a>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EventModal;
