import { Link } from "react-router-dom";
import TraceDivider from "../components/TraceDivider";

const values = [
  { glyph: "🛠", title: "Skill Development", desc: "Practical, hands-on skills over theory-heavy lectures." },
  { glyph: "🔬", title: "Hands-on Learning", desc: "Every module ships a real, working project." },
  { glyph: "🏭", title: "Industry Relevance", desc: "Curriculum updated against what companies are hiring for now." },
  { glyph: "💼", title: "Career Readiness", desc: "Resume, interview and portfolio prep built into every track." },
  { glyph: "🧑‍🏫", title: "Expert Guidance", desc: "Mentors who are active practitioners, not just instructors." },
  { glyph: "🤝", title: "Placement Support", desc: "Support continues until you're placed, not until the course ends." },
];

const timeline = [
  { year: "Year 1", title: "Founded in Hyderabad", desc: "Started with a single Full Stack Python batch and a handful of mentors." },
  { year: "Year 2", title: "Expanded into Data & AI", desc: "Added Data Science, Analytics and AI/ML tracks as demand grew." },
  { year: "Year 3", title: "Cloud & Security tracks launch", desc: "Introduced MultiCloud DevOps and Cybersecurity programs." },
  { year: "Today", title: "100+ students trained", desc: "A growing community of working developers, analysts and engineers." },
];

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link><span>/</span><span>About</span></div>
          <span className="eyebrow" style={{ marginTop: 18 }}>OUR STORY</span>
          <h1>Built to be the training institute we wished existed.</h1>
          <p>
            NextGen AI Training Institute is a Hyderabad-based training institute focused on
            one thing: turning motivated beginners into job-ready developers, analysts and
            engineers — with small batches and mentors who actually know your name.
          </p>
        </div>
        <TraceDivider dark />
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <span className="eyebrow">WHO WE ARE</span>
            <h2 style={{ fontSize: "clamp(26px,3.4vw,38px)", marginTop: 14, lineHeight: 1.15 }}>
              A smaller institute, by design.
            </h2>
            <p style={{ marginTop: 16, color: "var(--slate)", fontSize: 15.5, lineHeight: 1.75 }}>
              We deliberately cap our batches at 15 students. That's not a marketing line —
              it's the reason our mentors can review your code every week instead of once a
              month, and the reason our placement team can tailor interview prep to your
              specific target role instead of a generic script.
            </p>
            <p style={{ marginTop: 16, color: "var(--slate)", fontSize: 15.5, lineHeight: 1.75 }}>
              We've trained 100+ students across Software Development, Data & AI, Cloud &
              DevOps and Cybersecurity — many of whom came in with zero technical background
              and walked out with offer letters.
            </p>
            <div className="hero-actions" style={{ marginTop: 26 }}>
              <Link to="/courses" className="btn btn-outline">Browse our courses →</Link>
            </div>
          </div>
          <div className="chip-card">
            <span className="chip-pins"><span /><span /><span /><span /></span>
            <div className="statbar" style={{ border: "none" }}>
              <div style={{ borderRight: "1px solid var(--line)" }}><b>100+</b><span>Students Trained</span></div>
              <div><b>15</b><span>Max Batch Size</span></div>
              <div style={{ borderRight: "1px solid var(--line)" }}><b>8</b><span>Career Tracks</span></div>
              <div><b>4.8★</b><span>Avg. Rating</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">OUR MISSION</span>
            <h2>Mission & core goals</h2>
            <p>We exist to make a tech career achievable for anyone willing to put in consistent, focused work.</p>
          </div>
          <div className="info-grid">
            {values.map((v, i) => (
              <div className="info-card" key={i} style={{ background: "var(--ink-2)", borderColor: "var(--line-dark)" }}>
                <div className="glyph">{v.glyph}</div>
                <h4 style={{ color: "var(--paper)" }}>{v.title}</h4>
                <p style={{ color: "var(--slate-light)" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">OUR JOURNEY</span>
            <h2>How we got here</h2>
          </div>
          <div className="roadmap">
            <div className="roadmap-track">
              {timeline.map((t, i) => (
                <div className="roadmap-item" key={i}>
                  <span className="tag-mono">{t.year}</span>
                  <h3>{t.title}</h3>
                  <p>{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--paper2" style={{ textAlign: "center" }}>
        <div className="container">
          <span className="eyebrow" style={{ justifyContent: "center" }}>WHY CHOOSE US</span>
          <h2 style={{ fontSize: "clamp(26px,3.6vw,38px)", marginTop: 14 }}>
            Small enough to know you. Serious enough to place you.
          </h2>
          <div className="hero-actions" style={{ justifyContent: "center", marginTop: 26 }}>
            <Link to="/placements" className="btn btn-primary">See placement outcomes →</Link>
            <Link to="/contact" className="btn btn-outline">Talk to a counsellor</Link>
          </div>
        </div>
      </section>
    </>
  );
}
