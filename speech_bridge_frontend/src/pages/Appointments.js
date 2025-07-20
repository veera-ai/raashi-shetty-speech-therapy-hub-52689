import React, { useState } from "react";
import "./Appointments.css";

// PUBLIC_INTERFACE
function Appointments() {
  /**
   * Appointment booking - collects name, email, phone, date, and time.
   */
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: ""
  });
  const [submitted, setSubmitted] = useState(false);

  // PUBLIC_INTERFACE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // PUBLIC_INTERFACE
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // In real-world: POST to backend, show error/slots taken state as well.
  };

  if (submitted) {
    return (
      <section className="sb-appt-section">
        <h1>Appointment Booked!</h1>
        <p>We look forward to seeing you, {form.name}! Check your email for confirmation and teletherapy link.</p>
      </section>
    );
  }

  return (
    <section className="sb-appt-section">
      <h1>Book an Appointment</h1>
      <form className="sb-appt-form" onSubmit={handleSubmit}>
        <div className="sb-appt-row">
          <label>
            Name
            <input type="text" required name="name" value={form.name} onChange={handleChange} />
          </label>
          <label>
            Email
            <input type="email" required name="email" value={form.email} onChange={handleChange} />
          </label>
        </div>
        <div className="sb-appt-row">
          <label>
            Phone
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} />
          </label>
        </div>
        <div className="sb-appt-row">
          <label>
            Date
            <input type="date" required name="date" value={form.date} onChange={handleChange} />
          </label>
          <label>
            Time
            <input type="time" required name="time" value={form.time} onChange={handleChange} />
          </label>
        </div>
        <button className="sb-btn sb-btn-main" type="submit">
          Book Appointment
        </button>
      </form>
    </section>
  );
}
export default Appointments;
