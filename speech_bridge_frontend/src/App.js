import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import VideoGallery from "./pages/VideoGallery";
import Appointments from "./pages/Appointments";
import Payments from "./pages/Payments";
import Testimonials from "./pages/Testimonials";
import Milestones from "./pages/Milestones";
import Questionnaire from "./pages/Questionnaire";
import AIChat from "./pages/AIChat";
import Login from "./pages/Login";

// PUBLIC_INTERFACE
function App() {
  /**
   * Main component - manages theme, routes, and auth state.
   */
  const [theme, setTheme] = useState("light");
  const [isAuthenticated, setAuthenticated] = useState(false);

  // Effect to apply theme to <html> element.
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  }, []);

  // Simulate logout
  const handleLogout = () => setAuthenticated(false);

  return (
    <Router>
      <div className="App">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
        <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
        <div style={{ marginTop: 10 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/videos" element={<VideoGallery />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/payments" element={isAuthenticated ? <Payments /> : <Navigate to="/login" />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/resources" element={<Milestones />} />
            <Route path="/milestones" element={<Milestones />} />
            <Route path="/questionnaire" element={<Questionnaire />} />
            <Route path="/chat" element={<AIChat />} />
            <Route path="/login" element={<Login onLogin={() => setAuthenticated(true)} />} />
            {/* Not Found fallback */}
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
