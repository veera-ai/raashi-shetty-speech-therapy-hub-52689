import React, { useState } from "react";
import "./Login.css";

// PUBLIC_INTERFACE
function Login({ onLogin }) {
  /**
   * Basic user sign-in form for session management (hooks ready for secure backend).
   */
  const [form, setForm] = useState({email: "", password: ""});
  const [err, setErr] = useState(null);

  // PUBLIC_INTERFACE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErr(null);
  };
  // PUBLIC_INTERFACE
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulated login; backend should verify.
    if (form.email === "user@mail.com" && form.password === "test123") {
      onLogin();
    } else {
      setErr("Invalid credentials. Please try again.");
    }
  };
  return (
    <section className="sb-login-page">
      <h1>Login</h1>
      <form className="sb-login-form" autoComplete="off" onSubmit={handleSubmit}>
        <input name="email" type="email" required placeholder="Email" value={form.email} onChange={handleChange}/>
        <input name="password" type="password" required placeholder="Password" value={form.password} onChange={handleChange}/>
        <button className="sb-btn sb-btn-main" type="submit">Login</button>
      </form>
      {err && <div className="sb-login-err">{err}</div>}
      <p className="sb-login-hint">
        <em>Demo: user@mail.com | test123</em>
      </p>
    </section>
  );
}
export default Login;
