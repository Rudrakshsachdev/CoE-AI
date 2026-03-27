import React, { useState, useEffect, useRef } from 'react';
import styles from './ProjectsSection.module.css';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export const projectsData = [
  {
    id: 1,
    title: "Campus 360",
    status: "completed",
    tags: ["React", "AI", "Next.js", "Tailwind CSS"],
    shortDesc: "Comprehensive campus management and navigation built with AI optimizations.",
    fullDesc: "Campus 360 is an ambitious project aiming to digitize and optimize campus facilities using intelligent pathing and real-time scheduling APIs. It solves the pain point of fragmented university information systems by consolidating them into one interactive platform.",
    technologies: ["React.js", "Next.js", "Tailwind CSS"],
    features: [
      "Real-time interactive campus map",
      "AI-driven event recommendations",
      "Unified student dashboard",
      "Automated attendance tracking"
    ],
    creators: [
      { name: "Khushi Diwan", role: "Full Stack Developer" },
      { name: "Om Rohilla", role: "AI Integration" }
    ],
    github: "#",
    live: "#"
  },
  {
    id: 2,
    title: "Faculty Connect",
    status: "completed",
    tags: ["React", "Supabase", "Tailwind CSS", "Cloudinary", "Framer Motion", "Vercel", "Google Apps Script API"],
    shortDesc: "Direct portal connecting students to academic faculty and researchers.",
    fullDesc: "Faculty Connect streamlines the communication process between students and academic staff. By using smart matching algorithms, the platform suggests the best faculty members for mentorship based on a student's project interests or research goals.",
    technologies: ["React", "Supabase", "Tailwind CSS", "Cloudinary", "Framer Motion", "Vercel", "Google Apps Script API"],
    features: [
      "Smart faculty-student matching",
      "Secure messaging system",
      "Appointment scheduling",
      "Office hours directory"
    ],
    creators: [
      { name: "Rudraksh Sachdeva", role: "AI & Full Stack Developer" },
      { name: "Yug Prakash", role: "Frontend Developer" }
    ],
    github: "#",
    live: "#"
  },
  {
    id: 3,
    title: "Mentor-Mentee",
    status: "ongoing",
    tags: ["ML", "Data", "Web"],
    shortDesc: "A complete ecosystem for tracking and facilitating mentorship at scale.",
    fullDesc: "The Mentor-Mentee platform was built to systematically track mentorship progress, establish KPIs for student success, and ensure that every student has access to guidance. This product has securely managed over 500+ student profiles.",
    technologies: ["Vue.js", "Python", "PostgreSQL"],
    features: [
      "Comprehensive profile tracking",
      "Progress analytics & dashboards",
      "Automated feedback generation",
      "Historical mentorship data mapping"
    ],
    creators: [
      { name: "Devansh Datta", role: "Project Architect" },
      { name: "Sangita", role: "Data Scientist" }
    ],
    github: "#",
    live: "#"
  }
];

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState('ongoing'); // 'ongoing' | 'completed'
  const [selectedProject, setSelectedProject] = useState(null);
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

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const filteredProjects = projectsData.filter(p => p.status === activeTab);

  return (
    <section className={styles.section} id="projects">
      <div className={styles.bgGlow}></div>
      
      <div className={styles.container}>
        
        <div ref={headerRef} className={`${styles.header} ${isVisible ? styles.reveal : ''}`}>
          <h2 className={styles.title}>Projects & <span className={styles.cyanAccent}>Work</span></h2>
          <p className={styles.subtitle}>
            Exploring innovation through real-world AI solutions and impactful student-led projects
          </p>
        </div>

        <div className={styles.tabsContainer}>
          <button 
            className={`${styles.tabBtn} ${activeTab === 'ongoing' ? styles.active : ''}`}
            onClick={() => setActiveTab('ongoing')}
          >
            Ongoing Projects
          </button>
          <button 
            className={`${styles.tabBtn} ${activeTab === 'completed' ? styles.active : ''}`}
            onClick={() => setActiveTab('completed')}
          >
            Completed Projects
          </button>
        </div>

        <div className={styles.projectsGrid}>
          {filteredProjects.length > 0 ? (
            filteredProjects.map(proj => (
              <ProjectCard key={proj.id} project={proj} onClick={handleCardClick} />
            ))
          ) : (
            <div className={styles.emptyState}>No projects found for this category.</div>
          )}
        </div>

      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

    </section>
  );
};

export default ProjectsSection;
