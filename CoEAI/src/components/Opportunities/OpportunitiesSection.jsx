import React, { useEffect, useRef, useState } from "react";
import styles from "./OpportunitiesSection.module.css";

const opportunityTracks = [
  {
    id: "industry",
    label: "Industry",
    opportunities: [
      {
        id: "industry-internship",
        title: "AI Product Internship",
        commitment: "12 Weeks",
        mode: "Hybrid",
        level: "Intermediate",
        description:
          "Work with partner startups to shape real AI features, from data exploration to model evaluation and shipping MVP workflows.",
        perks: [
          "Mentor-led sprint reviews",
          "Letter of recommendation",
          "Performance stipend",
        ],
      },
      {
        id: "industry-devrel",
        title: "Developer Relations Fellow",
        commitment: "6 Weeks",
        mode: "On-Campus",
        level: "Beginner Friendly",
        description:
          "Lead technical demos, build mini-project walkthroughs, and support onboarding events for new CoE AI members.",
        perks: [
          "Speaking opportunities",
          "Community leadership credit",
          "Portfolio-ready content",
        ],
      },
    ],
  },
  {
    id: "research",
    label: "Research",
    opportunities: [
      {
        id: "research-assistant",
        title: "Research Assistantship",
        commitment: "1 Semester",
        mode: "Lab + Remote",
        level: "Advanced",
        description:
          "Join faculty-guided research pods on LLM evaluation, multimodal reasoning, and efficient inference pipelines.",
        perks: [
          "Publication support",
          "Conference prep mentoring",
          "Compute credits",
        ],
      },
      {
        id: "research-open-source",
        title: "Open Source ML Maintainer",
        commitment: "8 Weeks",
        mode: "Remote",
        level: "Intermediate",
        description:
          "Contribute to maintained toolchains for experiment tracking, dataset curation, and reproducible AI workflows.",
        perks: [
          "GitHub profile boost",
          "Peer code review circles",
          "Maintainer badge",
        ],
      },
    ],
  },
  {
    id: "entrepreneurship",
    label: "Entrepreneurship",
    opportunities: [
      {
        id: "startup-studio",
        title: "Startup Studio Cohort",
        commitment: "10 Weeks",
        mode: "Hybrid",
        level: "All Levels",
        description:
          "Validate AI startup ideas with market mentors, prototype quickly, and pitch to an invited panel of founders and investors.",
        perks: ["Prototype grants", "Pitch day access", "Founder office hours"],
      },
      {
        id: "innovation-lead",
        title: "Campus Innovation Lead",
        commitment: "4 Months",
        mode: "On-Campus",
        level: "Leadership",
        description:
          "Design challenge themes, coordinate teams, and run innovation showcases that connect students with industry stakeholders.",
        perks: [
          "Leadership certificate",
          "Event ownership",
          "Direct recruiter visibility",
        ],
      },
    ],
  },
];

const OpportunitiesSection = () => {
  const [activeTrack, setActiveTrack] = useState(opportunityTracks[0].id);
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
      { threshold: 0.15 },
    );

    if (headerRef.current) observer.observe(headerRef.current);

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
    };
  }, []);

  const selectedTrack = opportunityTracks.find(
    (track) => track.id === activeTrack,
  );

  return (
    <section className={styles.section} id="opportunities">
      <div className={styles.auroraLeft}></div>
      <div className={styles.auroraRight}></div>
      <div className={styles.gridTexture}></div>

      <div className={styles.container}>
        <div
          ref={headerRef}
          className={`${styles.header} ${isVisible ? styles.reveal : ""}`}
        >
          <div className={styles.liveBadge}>Open Now: 12 Opportunities</div>
          <h2 className={styles.title}>
            Build Your <span className={styles.accent}>Next Big Step</span>
          </h2>
          <p className={styles.subtitle}>
            Explore curated pathways in industry, research, and entrepreneurship
            designed to move your ideas into impact.
          </p>
        </div>

        <div className={styles.trackSwitch}>
          {opportunityTracks.map((track) => (
            <button
              key={track.id}
              className={`${styles.trackButton} ${activeTrack === track.id ? styles.active : ""}`}
              onClick={() => setActiveTrack(track.id)}
              aria-pressed={activeTrack === track.id}
              type="button"
            >
              {track.label}
            </button>
          ))}
        </div>

        <div className={styles.cardsGrid}>
          {selectedTrack?.opportunities.map((item, index) => (
            <article
              key={item.id}
              className={styles.card}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.metaRow}>
                <span className={styles.level}>{item.level}</span>
                <span className={styles.mode}>{item.mode}</span>
              </div>

              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>

              <div className={styles.commitment}>{item.commitment}</div>

              <ul className={styles.perkList}>
                {item.perks.map((perk) => (
                  <li key={perk}>{perk}</li>
                ))}
              </ul>

              <a href="#" className={styles.applyLink}>
                View Details
              </a>
            </article>
          ))}
        </div>

        <div className={styles.ctaPanel}>
          <p className={styles.ctaText}>
            Not sure which path is right for you?
          </p>
          <a href="#" className={styles.ctaButton}>
            Book a 1:1 Mentorship Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default OpportunitiesSection;
