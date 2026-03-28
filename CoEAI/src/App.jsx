import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import TeamSection from "./components/Team/TeamSection";
import ProjectsSection from "./components/Projects/ProjectsSection";
import OpportunitiesSection from "./components/Opportunities/OpportunitiesSection";
import EventsSection from "./components/Events/EventsSection";
import CompletedEventsSection from "./components/CompletedEvents/CompletedEventsSection";
import ContactSection from "./components/Contact/ContactSection";

export default function App() {
  return (
    <div style={{ backgroundColor: "#030614" }}>
      <Navbar />
      <Hero />
      <About />
      <TeamSection />
      <ProjectsSection />
      <OpportunitiesSection />
      <EventsSection />
      <CompletedEventsSection />
      <ContactSection />
    </div>
  );
}
