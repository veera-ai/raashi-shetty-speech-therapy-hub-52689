import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

// PUBLIC_INTERFACE
function Header({ isAuthenticated, onLogout }) {
  /**
   * Top navigation header with menu links.
   * Props:
   * - isAuthenticated: Boolean representing logged-in state
   * - onLogout: handler
   */
  return (
    <nav className="sb-header" aria-label="Main Navigation">
      <div className="sb-logo">
        <Link to="/">Raashi Shetty <span className="sb-highlight">Speech Therapy Hub</span></Link>
      </div>
      <ul className="sb-nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/videos">Videos</Link></li>
        <li><Link to="/appointments">Appointments</Link></li>
        <li><Link to="/payments">Payments</Link></li>
        <li><Link to="/testimonials">Testimonials</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/chat">Chat</Link></li>
        {isAuthenticated ? (
          <li><button className="sb-link-btn" onClick={onLogout}>Logout</button></li>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Sign Up</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}
export default Header;
