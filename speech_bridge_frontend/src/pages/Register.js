import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

/**
 * Registration page for new users.
 * Features:
 * - Form collects: name, email, password
 * - Client-side validation (simple)
 * - UI states: loading, success, error
 * - Mock submission logic (integrate real backend later)
 * - Redirects to login on success
 */
// PUBLIC_INTERFACE
function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const navigate = useNavigate();

  // Validate form input
  function validate() {
    if (!form.name.trim()) {
      setErr("Name is required.");
      return false;
    }
    if (!validateEmail(form.email)) {
      setErr("Please enter a valid email address.");
      return false;
    }
    if (form.password.length < 6) {
      setErr("Password must be at least 6 characters.");
      return false;
    }
    return true;
  }

  function validateEmail(email) {
    // Simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // PUBLIC_INTERFACE
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErr(null);
  };

  // PUBLIC_INTERFACE
  const handleSubmit = async e => {
    e.preventDefault();
    setErr(null);
    setSuccessMsg("");
    if (!validate()) return;

    setLoading(true);

    // Mock: simulate backend registration call
    setTimeout(() => {
      setLoading(false);
      // Pretend user registration is always successful if email not already 'taken'
      if (form.email === "user@mail.com") {
        setErr("This email is already registered. Try logging in.");
      } else {
        setSuccessMsg("Registration successful! Redirecting to login...");
        setTimeout(() => navigate("/login"), 1200);
      }
    }, 1200);
  };

  return (
    <section className="sb-login-page">
      <h1>Sign Up</h1>
      <form className="sb-login-form" autoComplete="off" onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          required
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          disabled={loading}
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          disabled={loading}
        />
        <input
          name="password"
          type="password"
          required
          placeholder="Password (min 6 chars)"
          value={form.password}
          onChange={handleChange}
          disabled={loading}
        />
        <button
          className="sb-btn sb-btn-main"
          type="submit"
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
      {err && <div className="sb-login-err">{err}</div>}
      {successMsg && (
        <div className="sb-login-err" style={{ background: "#e2ffe2", color: "green" }}>
          {successMsg}
        </div>
      )}
      <p className="sb-login-hint">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </section>
  );
}

export default Register;
