import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

// PUBLIC_INTERFACE
function Home() {
  /**
   * Main landing - intro, access points, highlights
   */
  return (
    <main className="sb-home-main">
      <section className="sb-home-hero">
        <h1>
          Speech, Language, &amp; Confidence. <br />
          <span className="sb-home-highlight">Empowered with Care.</span>
        </h1>
        <p className="sb-home-subtitle">
          Welcome to your hub for awareness, therapy, and milestones—
          <strong> online and in-person</strong>.
        </p>
        <div className="sb-home-actions">
          <Link className="sb-btn sb-btn-main" to="/appointments">Book Appointment</Link>
          <Link className="sb-btn" to="/videos">Free &amp; Premium Videos</Link>
        </div>
      </section>
      <section className="sb-home-grid">
        <div className="sb-home-card">
          <h3>💬 AI Speech Helper</h3>
          <p>Got a question? Try our AI-powered speech therapy chat for on-demand answers.</p>
          <Link to="/chat">Open Chat</Link>
        </div>
        <div className="sb-home-card">
          <h3>🎉 Latest Milestones</h3>
          <p>Find out what to expect at every age and tips for home support.</p>
          <Link to="/milestones">Explore Milestones</Link>
        </div>
        <div className="sb-home-card">
          <h3>📄 Parent Questionnaire</h3>
          <p>Let us tailor care—fill out our detailed intake form before your session.</p>
          <Link to="/questionnaire">Fill Questionnaire</Link>
        </div>
        <div className="sb-home-card">
          <h3>❤️ Testimonials</h3>
          <p>Stories of transformation from families and clients.</p>
          <Link to="/testimonials">Read Reviews</Link>
        </div>
      </section>
    </main>
  );
}
export default Home;
