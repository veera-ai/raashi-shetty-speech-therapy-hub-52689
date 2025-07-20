import React from "react";
import "./Milestones.css";

// Data: Simplified milestone samples
const MILESTONES = [
  {
    age: "12 months",
    items: [
      "Babbles with changes in tone (sounds more like speech)",
      "Responds to simple requests",
      "Waves 'bye-bye'"
    ],
    tip: "Respond to your baby's sounds. Copy and add words."
  },
  {
    age: "2 years",
    items: [
      "Says sentences with 2-4 words",
      "Follows simple instructions",
      "Points to things or pictures"
    ],
    tip: "Label things you see, read with your child daily."
  },
  {
    age: "3 years",
    items: [
      "Follows 2-step instructions",
      "Has a word for almost everything",
      "Talks well enough for strangers to understand"
    ],
    tip: "Encourage choices: 'Apple or banana?' Repeat and expand sentences."
  },
  {
    age: "5 years",
    items: [
      "Says most sounds correctly",
      "Tells short stories",
      "Uses future tense"
    ],
    tip: "Ask your child questions about their day, listen and expand."
  }
];

// PUBLIC_INTERFACE
function Milestones() {
  /**
   * Milestones information - cards for ages and guidance.
   */
  return (
    <section className="sb-milestones-page">
      <h1>Speech &amp; Language Milestones</h1>
      <div className="sb-milestone-grid">
        {MILESTONES.map(m => (
          <div className="sb-milestone-card" key={m.age}>
            <div className="sb-milestone-age">{m.age}</div>
            <ul>
              {m.items.map(item => <li key={item}>{item}</li>)}
            </ul>
            <div className="sb-milestone-tip"><b>Tip:</b> {m.tip}</div>
          </div>
        ))}
      </div>
      <div style={{marginTop: 30, textAlign: "center"}}>
        <em>These are examples. Every child develops at their own pace. For concerns, reach out for a consult.</em>
      </div>
    </section>
  );
}
export default Milestones;
