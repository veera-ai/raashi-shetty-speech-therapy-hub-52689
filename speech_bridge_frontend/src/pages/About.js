import React from "react";
import "./About.css";

// PUBLIC_INTERFACE
function About() {
  /**
   * About page - info, credentials, mission
   */
  return (
    <section className="sb-about-page">
      <div className="sb-about-card">
        <img
          src="https://randomuser.me/api/portraits/women/68.jpg"
          className="sb-profile-img"
          alt="Photo of Raashi Shetty"
          width={180}
        />
        <div className="sb-about-content">
          <h2>Raashi Shetty, MSc CCC-SLP</h2>
          <p className="sb-profession">Speech Language Pathologist</p>
          <p>
            With over 10 years of experience empowering children and families, I am dedicated to providing approachable, evidence-based speech and language therapy and resources. My mission is to build awareness, support development, and inspire progress for each individual journey.
          </p>
          <ul className="sb-credits">
            <li>Certified with American Speech-Language-Hearing Association (ASHA)</li>
            <li>Specialized in early childhood interventions and multilingual development</li>
            <li>Driven by parent education, holistic approaches, and ongoing professional development</li>
          </ul>
        </div>
      </div>
      <div className="sb-about-summary">
        <h3>Why Speech Therapy?</h3>
        <p>
          Speech and language are vital foundations for confidence, learning, and connection. With the right support, milestones can be nurtured at every age. This platform is a hub for guidance, therapy, awareness, and community.
        </p>
      </div>
    </section>
  );
}
export default About;
