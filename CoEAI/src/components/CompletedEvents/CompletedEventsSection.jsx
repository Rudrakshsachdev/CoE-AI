import React, { useState, useEffect, useRef } from 'react';
import styles from './CompletedEvents.module.css';
import CompletedEventCard from './CompletedEventCard';
import CompletedEventModal from './CompletedEventModal';

// High-quality imagery from assets
import expoImg from '../../assets/event-expo.png';
import codejamImg from '../../assets/event-codejam.png';
import roboticsImg from '../../assets/event-robotics.png';
import hackathonImg from '../../assets/event-hackathon.png';
import workshopImg from '../../assets/event-workshop.png';
import seminarImg from '../../assets/event-seminar.png';

export const completedEventsData = [
  {
    id: 'ce1',
    title: "AI National Expo 2025",
    type: "Exhibition",
    date: "March 15, 2025",
    location: "Pragati Maidan, New Delhi",
    attendance: "2500+",
    mainImage: expoImg,
    gallery: [expoImg, codejamImg, roboticsImg],
    fullDesc: "The AI National Expo 2025 was a landmark event for the Center of Excellence. It brought together industry leaders, researchers, and students to showcase the most advanced AI solutions currently being developed in India.\n\nOver 50+ startups participated, and our students presented 12 innovative projects ranging from autonomous drones to healthcare diagnostic tools. The event was inaugurated by the Ministry of Electronics and Information Technology.",
    highlights: [
      "Showcased 12+ student-led AI projects to industry giants.",
      "Keynote speech by Global AI Ethics lead at Google.",
      "Facilitated 5+ industry-academia partnerships.",
      "Over 2500 attendees including 300+ corporate delegates."
    ],
    speakers: [
      { name: "Mr. Rajeev Chandrasekhar", role: "Union Minister" },
      { name: "Dr. Amara Singh", role: "Stanford AI Researcher" }
    ]
  },
  {
    id: 'ce2',
    title: "Neural Hackathon '24",
    type: "Hackathon",
    date: "December 10, 2024",
    location: "CoE Innovation Lab",
    attendance: "450",
    mainImage: hackathonImg,
    gallery: [hackathonImg, workshopImg, expoImg],
    fullDesc: "An intense 48-hour sprint where teams worked around the clock to build functional prototypes using Large Language Models. This hackathon focused on 'AI for Social Good', challenging participants to solve local community issues.\n\nThe winning team developed a real-time sign language translator using computer vision, which is now being further developed as a product within the CoE incubator.",
    highlights: [
      "48 hours of non-stop innovation and building.",
      "Mentorship from 10+ senior engineers from Meta and Microsoft.",
      "Winner awarded $2,000 and 12-month incubation support.",
      "100% submission rate for all 80 registered teams."
    ],
    speakers: [
      { name: "Sarah Chen", role: "Sr. Engineer, OpenAI" }
    ]
  },
  {
    id: 'ce3',
    title: "Robotics & AI Summit",
    type: "Summit",
    date: "October 22, 2024",
    location: "University Auditorium",
    attendance: "800",
    mainImage: roboticsImg,
    gallery: [roboticsImg, expoImg, seminarImg],
    fullDesc: "The Summit explored the intersection of mechanical engineering and artificial intelligence. We demonstrated the capabilities of LLMs in controlling physical hardware and optimizing manufacturing processes.\n\nDemonstrations included autonomous navigation, swarm robotics, and precise robotic arm manipulation using reinforcement learning models trained in our specialized labs.",
    highlights: [
      "Live demonstrations of 5 autonomous robotic systems.",
      "Workshops on Reinforcement Learning for physical hardware.",
      "Panel discussion on 'The Future of Manufacturing with AGI'.",
      "Interactive session with 10+ robotics startups."
    ],
    speakers: [
      { name: "Dr. Marcus Thorne", role: "Director of MIT Robotics Lab" }
    ]
  },
  {
    id: 'ce4',
    title: "Deep Learning Bootcamp",
    type: "Workshop",
    date: "August 5, 2024",
    location: "Virtual / Hybrid",
    attendance: "1200",
    mainImage: workshopImg,
    gallery: [workshopImg, codejamImg, seminarImg],
    fullDesc: "A week-long intensive bootcamp designed to take students from basics to advanced transformer architectures. This event was highly interactive, featuring daily coding challenges and peer-to-peer review sessions.\n\nParticipants built their own custom GPT models from scratch, learning about weight initialization, backpropagation, and distributed training techniques.",
    highlights: [
      "Comprehensive curriculum from GANs to Transformers.",
      "1200+ global participants via hybrid engagement.",
      "95% course completion rate.",
      "Distribution of industry-recognized DL certification."
    ],
    speakers: [
      { name: "Andrew Ng (Guest Video Message)", role: "DeepLearning.AI" }
    ]
  },
  {
    id: 'ce5',
    title: "Spring Code Jam",
    type: "Competition",
    date: "April 18, 2024",
    location: "Tech Hub Lounge",
    attendance: "300",
    mainImage: codejamImg,
    gallery: [codejamImg, roboticsImg, workshopImg],
    fullDesc: "A fast-paced, 12-hour algorithmic challenge focusing on AI optimization. Competitors were tasked with reducing the latency of existing inference engines and optimizing memory usage on edge devices.\n\nThe event was highly competitive, with the top 3 finalists being within 2ms of each other's execution times.",
    highlights: [
      "Fastest inference challenge: 2ms latency target.",
      "Edge AI optimization workshop conducted during the jam.",
      "Direct recruitment interviews for final year students.",
      "Winners received internship offers from leading AI labs."
    ]
  },
  {
    id: 'ce6',
    title: "Ethical AI Seminar",
    type: "Seminar",
    date: "February 12, 2024",
    location: "Innovation Hall",
    attendance: "600",
    mainImage: seminarImg,
    gallery: [seminarImg, expoImg, workshopImg],
    fullDesc: "A dedicated session on the ethical implications of AGI and the importance of alignment. We discussed bias in datasets, the impact of AI on the labor market, and the need for transparent, explainable AI systems.\n\nThe seminar sparked a 3-hour long debate between academia and industry representatives, leading to the formation of the CoE AI Ethics Student Body.",
    highlights: [
      "Debate session: AI Alignment vs Acceleration.",
      "Launch of the CoE Ethical AI whitepaper.",
      "Formation of the student-led AI ethics council.",
      "Workshop on bias detection and mitigation strategies."
    ],
    speakers: [
      { name: "Prof. Clara Bell", role: "AI Ethics Lead" }
    ]
  }
];

const CompletedEventsSection = () => {
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
    <section className={styles.section} id="highlights">
      <div className={styles.bgGlow}></div>
      <div className={styles.bgGlowCyan}></div>
      
      <div className={styles.container}>
        
        <div ref={headerRef} className={`${styles.header} ${isVisible ? styles.reveal : ''}`}>
          <h2 className={styles.title}>Completed <span className={styles.cyanAccent}>Events</span></h2>
          <p className={styles.subtitle}>
            Highlights from our past workshops, hackathons, and seminars showcasing innovation and collaborative learning.
          </p>
        </div>

        <div className={styles.eventsGrid}>
          {completedEventsData.map(event => (
            <CompletedEventCard key={event.id} event={event} onClick={handleCardClick} />
          ))}
        </div>

      </div>

      <CompletedEventModal 
        event={selectedEvent} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

    </section>
  );
};

export default CompletedEventsSection;
