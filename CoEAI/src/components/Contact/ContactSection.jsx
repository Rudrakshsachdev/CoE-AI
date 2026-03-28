import React, { useRef, useState } from "react";
import styles from "./ContactSection.module.css";

const quickFaqs = [
  "How can I apply for research assistant roles?",
  "Do you offer mentorship for first-year students?",
  "Can industry partners host workshops with CoE AI?",
];

const ContactSection = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("Thanks! Your message has been received. We will get back to you shortly.");

    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <section className={styles.section} id="contact">
      <div className={styles.glowTop}></div>
      <div className={styles.glowBottom}></div>

      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.kicker}>Contact Us</p>
          <h2 className={styles.title}>
            Let&apos;s Build <span>Something Meaningful</span>
          </h2>
          <p className={styles.subtitle}>
            Reach out for collaborations, student opportunities, workshops, mentorship, or partnership discussions.
          </p>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.infoPanel}>
            <div className={styles.infoCard}>
              <h3>General Inquiries</h3>
              <a href="mailto:coeai@iilm.edu">coeai@iilm.edu</a>
              <p>For student programs, memberships, and center activities.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Industry & Partnerships</h3>
              <a href="mailto:partnerships.coeai@iilm.edu">partnerships.coeai@iilm.edu</a>
              <p>For corporate collaborations, sponsored labs, and campus initiatives.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Visit Us</h3>
              <p>IILM University, Greater Noida</p>
              <p>Center of Excellence AI Lab, Innovation Block</p>
              <p>Mon - Fri, 10:00 AM - 6:00 PM</p>
            </div>
          </div>

          <div className={styles.formPanel}>
            <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row}>
                <label htmlFor="name">Full Name</label>
                <input id="name" type="text" name="name" required placeholder="Your name" />
              </div>

              <div className={styles.rowSplit}>
                <div className={styles.row}>
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" name="email" required placeholder="you@example.com" />
                </div>
                <div className={styles.row}>
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" type="tel" name="phone" placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>

              <div className={styles.row}>
                <label htmlFor="topic">Topic</label>
                <select id="topic" name="topic" defaultValue="General Inquiry" required>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Student Opportunity">Student Opportunity</option>
                  <option value="Research Collaboration">Research Collaboration</option>
                  <option value="Industry Partnership">Industry Partnership</option>
                </select>
              </div>

              <div className={styles.row}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  placeholder="Tell us about your idea or request..."
                ></textarea>
              </div>

              <button type="submit" className={styles.submitBtn}>
                Send Message
              </button>

              {status ? <p className={styles.success}>{status}</p> : null}
            </form>
          </div>
        </div>

        <div className={styles.faqStrip}>
          <p className={styles.faqTitle}>Frequently Asked</p>
          <div className={styles.faqItems}>
            {quickFaqs.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
