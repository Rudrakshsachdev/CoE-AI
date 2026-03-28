import React, { useEffect, useState } from 'react';
import styles from './CompletedEvents.module.css';

const CompletedEventModal = ({ event, isOpen, onClose }) => {
  const [activeImage, setActiveImage] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (event && event.gallery && event.gallery.length > 0) {
        setActiveImage(event.gallery[0]);
      } else if (event) {
        setActiveImage(event.mainImage);
      }
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, event]);

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

        {/* Modal Gallery Section */}
        <div className={styles.modalGallery}>
          <img src={activeImage} alt={event.title} className={styles.galleryMainImage} />
          <div className={styles.galleryOverlay}></div>
        </div>

        {/* Navigation for gallery images */}
        {event.gallery && event.gallery.length > 1 && (
          <div className={styles.galleryStrip}>
            {event.gallery.map((img, idx) => (
              <img 
                key={idx} 
                src={img} 
                alt={`${event.title} thumb ${idx}`} 
                className={`${styles.galleryThumb} ${activeImage === img ? styles.activeThumb : ''}`}
                onClick={() => setActiveImage(img)}
              />
            ))}
          </div>
        )}

        {/* Modal Body */}
        <div className={styles.modalBody}>
          <div className={styles.modalHeader}>
            <span className={styles.modalTag}>{event.type}</span>
            <h2 className={styles.modalTitle}>{event.title}</h2>
            <div className={styles.modalMeta}>
              <div className={styles.modalMetaItem}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                {event.date}
              </div>
              <div className={styles.modalMetaItem}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                {event.location}
              </div>
              <div className={styles.modalMetaItem}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                {event.attendance} Attendees
              </div>
            </div>
          </div>

          <div className={styles.modalMainContent}>
            {/* Left Column: The Story */}
            <div className={styles.modalLeftColumn}>
              <h3 className={styles.modalSectionTitle}>The Event Story</h3>
              <div className={styles.modalStory}>
                {event.fullDesc.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} style={{ marginBottom: '20px' }}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Right Column: Key Highlights */}
            <div className={styles.modalRightColumn}>
              <h3 className={styles.modalSectionTitle}>Key Highlights</h3>
              <div className={styles.highlightsList}>
                {event.highlights.map((highlight, idx) => (
                  <div key={idx} className={styles.highlightsItem}>
                    <div className={styles.highlightsNumber}>{String(idx + 1).padStart(2, '0')}</div>
                    <div className={styles.highlightsText}>{highlight}</div>
                  </div>
                ))}
              </div>

              {event.speakers && event.speakers.length > 0 && (
                <div style={{ marginTop: '50px' }}>
                  <h3 className={styles.modalSectionTitle}>Featured Speakers</h3>
                  <div className={styles.highlightsList}>
                    {event.speakers.map((speaker, idx) => (
                      <div key={idx} className={styles.highlightsItem} style={{ borderLeftColor: '#731320' }}>
                        <div className={styles.highlightsText}>
                          <div style={{ fontWeight: 800, color: '#fff' }}>{speaker.name}</div>
                          <div style={{ fontSize: '0.85rem', color: '#a1a1aa' }}>{speaker.role}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletedEventModal;
