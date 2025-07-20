import React, { useState } from "react";
import "./Questionnaire.css";

// PUBLIC_INTERFACE
function Questionnaire() {
  /**
   * Questionnaire for parents - collects detailed intake before the session.
   */
  const [form, setForm] = useState({
    childName: "",
    childAge: "",
    concerns: "",
    milestones: "",
    medical: "",
    language: "",
    expectations: ""
  });
  const [submitted, setSubmitted] = useState(false);

  // PUBLIC_INTERFACE
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  // PUBLIC_INTERFACE
  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    // POST to backend for storage/notification.
  };
  if (submitted)
    return (
      <section className="sb-q-page">
        <h1>Thank You for Your Submission!</h1>
        <p>
          The information you provided helps us personalize your child's experience. We look forward to helping you!
        </p>
      </section>
    );
  return (
    <section className="sb-q-page">
      <h1>Parent Intake Questionnaire</h1>
      <form className="sb-q-form" onSubmit={handleSubmit}>
        <label>
          Child's Name
          <input type="text" name="childName" required value={form.childName} onChange={handleChange} />
        </label>
        <label>
          Child's Age
          <input type="text" name="childAge" required value={form.childAge} onChange={handleChange} />
        </label>
        <label>
          Primary Concerns
          <textarea name="concerns" required value={form.concerns} onChange={handleChange}></textarea>
        </label>
        <label>
          Any speech/milestones noticed or delayed?
          <textarea name="milestones" value={form.milestones} onChange={handleChange}></textarea>
        </label>
        <label>
          Relevant medical/developmental history
          <textarea name="medical" value={form.medical} onChange={handleChange}></textarea>
        </label>
        <label>
          Main language(s) spoken at home
          <input type="text" name="language" value={form.language} onChange={handleChange}/>
        </label>
        <label>
          What are your expectations from therapy?
          <textarea name="expectations" value={form.expectations} onChange={handleChange}></textarea>
        </label>
        <button className="sb-btn sb-btn-main" type="submit">
          Submit Questionnaire
        </button>
      </form>
    </section>
  );
}
export default Questionnaire;
