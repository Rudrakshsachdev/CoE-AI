import React, { useState, useEffect, useRef } from 'react';
import styles from './EventsSection.module.css';
import EventCard from './EventCard';
import EventModal from './EventModal';

import hackathonImg from '../../assets/event-hackathon.png';
import workshopImg from '../../assets/event-workshop.png';
import seminarImg from '../../assets/event-seminar.png';

export const eventsData = [
  {
    id: 1,
    title: "AI Hackathon 2026",
    status: "upcoming",
    tag: "Hackathon",
    shortDesc: "48-hour competitive coding and AI model building event.",
    fullDesc: "Join us for the largest AI hackathon on campus, where students from all backgrounds converge to build innovative solutions using LLMs, computer vision, and more.\n\nTeams will have access to powerful compute clusters and mentorship from industry experts to accelerate their builds and validate their ideas.",
    date: "October 15-17, 2026",
    location: "CoE AI Lab, Main Building",
    mainImage: hackathonImg,
    highlights: ["$5,000 Prize Pool", "Networking with Top Tech Firms", "Free Food & Swag", "Cloud Compute Credits for everyone"],
    speakers: [{ name: "Alex Mercer", role: "Sr. Research Scientist" }],
    registrationLink: "#"
  },
  {
    id: 2,
    title: "Deep Learning Workshop",
    status: "upcoming",
    tag: "Workshop",
    shortDesc: "Hands-on session covering advanced neural network architectures.",
    fullDesc: "This intensive workshop focuses on practical applications of Deep Learning. Participants will learn how to design, train, and deploy models using PyTorch and TensorFlow.\n\nWe will cover transformers, state space models, and diffusion concepts. Prior programming experience is required.",
    date: "November 5, 2026",
    location: "Virtual (Zoom)",
    mainImage: workshopImg,
    highlights: ["Interactive Coding Sessions", "Certificate of Completion", "Access to Recorded Materials"],
    speakers: [{ name: "Dr. Elena Rostova", role: "AI Professor" }],
    registrationLink: "#"
  }
];

const EventsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => { if (headerRef.current) observer.unobserve(headerRef.current); };
  }, []);

  const handleCardClick = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  return (
    <section className={styles.section} id="events">
      <div className={styles.bgGlow}></div>
      <div className={styles.bgGlowCyan}></div>
      
      <div className={styles.container}>
        
        <div ref={headerRef} className={`${styles.header} ${isVisible ? styles.reveal : ''}`}>
          <h2 className={styles.title}>Events & <span className={styles.cyanAccent}>Activities</span></h2>
          <p className={styles.subtitle}>
            Showcasing innovation, collaboration, and learning through our events
          </p>
        </div>

        <div className={styles.eventsGrid}>
          {eventsData.map(event => (
            <EventCard key={event.id} event={event} onClick={handleCardClick} />
          ))}
        </div>

      </div>

      <EventModal 
        event={selectedEvent} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

    </section>
  );
};

export default EventsSection;
