import React, { useEffect, useState } from "react";
import "./Testimonials.css";

// Testimonials data:
const TESTIMONIALS = [
  {
    name: "Priya G.",
    text: "Raashi's approach transformed my son's communication. She's kind, knowledgeable, and creative.",
    relation: "Parent",
    photo: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    name: "Vikram S.",
    text: "The parent resources and detailed feedback made all the difference for our speech journey!",
    relation: "Parent",
    photo: "https://randomuser.me/api/portraits/men/33.jpg"
  },
  {
    name: "Ishita R.",
    text: "Thanks to the online sessions, my daughter now speaks with so much more confidence.",
    relation: "Parent",
    photo: "https://randomuser.me/api/portraits/women/70.jpg"
  },
  {
    name: "Rohan L.",
    text: "AI Chatbot helped us find answers late at night! Great support.",
    relation: "Caregiver",
    photo: "https://randomuser.me/api/portraits/men/19.jpg"
  }
];

// PUBLIC_INTERFACE
function Testimonials() {
  /**
   * Carousel for testimonials.
   */
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const tmo = setTimeout(() => setIdx((idx+1)%TESTIMONIALS.length), 5200);
    return () => clearTimeout(tmo);
  }, [idx]);

  // PUBLIC_INTERFACE
  const prev = () => setIdx(idx === 0 ? TESTIMONIALS.length - 1 : idx - 1);
  // PUBLIC_INTERFACE
  const next = () => setIdx((idx + 1) % TESTIMONIALS.length);

  return (
    <section className="sb-testimonials-page">
      <h1>What Clients Say</h1>
      <div className="sb-testimonial-carousel">
        <button aria-label="Prev" className="sb-carousel-arrow" onClick={prev}>&lt;</button>
        <div className="sb-testimonial-card">
          <img src={TESTIMONIALS[idx].photo} alt={TESTIMONIALS[idx].name} />
          <blockquote>“{TESTIMONIALS[idx].text}”</blockquote>
          <div className="sb-testimonial-person">
            {TESTIMONIALS[idx].name} <span className="sb-testimonial-rel">{TESTIMONIALS[idx].relation}</span>
          </div>
        </div>
        <button aria-label="Next" className="sb-carousel-arrow" onClick={next}>&gt;</button>
      </div>
    </section>
  );
}
export default Testimonials;
