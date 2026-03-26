import React from 'react';
import styles from './TeamSection.module.css';

const TeamCard = ({ name, role, photo, tier }) => {
  // tier can be 'head', 'studentHead', 'member'
  const cardClass = `${styles.teamCard} ${styles[tier]}`;
  
  return (
    <div className={cardClass}>
      <div className={styles.imageWrapper}>
        <img src={photo || 'https://via.placeholder.com/150'} alt={name} className={styles.photo} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.role}>{role}</p>
      </div>
    </div>
  );
};

export default TeamCard;
