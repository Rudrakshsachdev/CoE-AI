import React, { useEffect, useRef, useState } from 'react';
import styles from './TeamSection.module.css';
import TeamCard from './TeamCard';
import Radar from './Radar';

import photoAnurag from '../../assets/team/anurag.png';
import photoRudraksh from '../../assets/team/rudraksh.png';
import photoDevansh from '../../assets/team/devansh.png';
import photoJasnoor from '../../assets/team/jasnoor.png';

const useScrollReveal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
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
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);
  return [ref, isVisible];
};

const TeamSection = () => {
  const [sectionRef, isVisible] = useScrollReveal();

  const members = [
    { name: "Aarav", role: "AI Researcher", photo: "" },
    { name: "Isha", role: "Data Scientist", photo: "" },
    { name: "Kabir", role: "Software Engineer", photo: "" },
    { name: "Myra", role: "UI/UX Designer", photo: "" },
  ];

  return (
    <section className={styles.teamSection} id="team" ref={sectionRef}>
      <div className={styles.radarBackground}>
        <Radar color="#00f0ff" backgroundColor="#010308" mouseInfluence={0.15} />
      </div>
      <div className={styles.bgGlow}></div>
      
      <div className={`${styles.container} ${isVisible ? styles.reveal : ''}`}>
        
        <div className={styles.header}>
          <div className={styles.label}>Our Leadership</div>
          <h2 className={styles.title}>Meet the <span className={styles.cyanAccent}>Team</span></h2>
          <p className={styles.description}>
            The brilliant minds driving innovation, research, and community growth at CoE AI.
          </p>
        </div>

        {/* --- TREE STRUCTURE --- */}
        <div className={styles.treeContainer}>
          
          {/* LEVEL 1: HEAD */}
          <div className={styles.level1}>
            <TeamCard 
              name="Prof. Anurag" 
              role="CoE Head" 
              photo={photoAnurag} 
              tier="head" 
            />
          </div>

          {/* CONNECTOR L1 to L2 */}
          <div className={styles.connectorVertMain}></div>
          <div className={styles.connectorHorizL2}></div>
          
          {/* LEVEL 2: STUDENT HEADS */}
          <div className={styles.level2}>
            <div className={styles.connectorVertDrop}></div>
            <div className={styles.connectorVertDrop}></div>
            <div className={styles.connectorVertDrop}></div>
            
            <div className={styles.studentHeadsGrid}>
              <TeamCard 
                name="Rudraksh" 
                role="Event Head" 
                photo={photoRudraksh} 
                tier="studentHead" 
              />
              <TeamCard 
                name="Devansh" 
                role="Social Media Head" 
                photo={photoDevansh} 
                tier="studentHead" 
              />
              <TeamCard 
                name="Jasnoor" 
                role="Technical Head" 
                photo={photoJasnoor} 
                tier="studentHead" 
              />
            </div>
          </div>

          {/* CONNECTOR L2 to L3 */}
          <div className={styles.connectorVertSecondary}></div>
          
          {/* LEVEL 3: MEMBERS */}
          <div className={styles.level3}>
             <h3 className={styles.membersTitle}>Club Members</h3>
             <div className={styles.membersGrid}>
                {members.map((m, i) => (
                  <TeamCard 
                    key={i} 
                    name={m.name} 
                    role={m.role} 
                    photo={m.photo} 
                    tier="member" 
                  />
                ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TeamSection;
