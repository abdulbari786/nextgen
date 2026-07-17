import { Link } from "react-router-dom";
import TraceDivider from "../components/TraceDivider";
import { courses } from "../data/courses";

export default function Internships() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link><span>/</span><span>Internships</span></div>
          <span className="eyebrow" style={{ marginTop: 18 }}>LEARN WHILE YOU EARN</span>
          <h1>Real projects, real internship certificates.</h1>
          <p>
            Every NextGen AI course can be paired with a structured internship — apply what
            you're learning to live-style project work and graduate with an internship
            certificate alongside your course certification.
          </p>
        </div>
        <TraceDivider dark />
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">HOW IT WORKS</span>
            <h2>Internship, built into your track</h2>
            <p>Add 4–8 weeks of guided project work to any course — supervised by mentors, structured like a real internship.</p>
          </div>
          <div className="info-grid">
            <div className="info-card">
              <div className="glyph">📋</div>
              <h4>Real-style briefs</h4>
              <p>Work from project briefs modelled on actual client and product requirements.</p>
            </div>
            <div className="info-card">
              <div className="glyph">🧑‍🏫</div>
              <h4>Mentor supervision</h4>
              <p>Weekly check-ins and code reviews from an assigned mentor throughout.</p>
            </div>
            <div className="info-card">
              <div className="glyph">📜</div>
              <h4>Verifiable certificate</h4>
              <p>An internship completion certificate you can add to your resume and LinkedIn.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">AVAILABLE TRACKS</span>
            <h2>Pair an internship with any course</h2>
            <p>Every program below can be extended with a hands-on internship module.</p>
          </div>
          <div className="cat-grid">
            {courses.map((c) => (
              <Link to={`/courses/${c.slug}`} className="cat-card" key={c.slug} style={{ display: "block" }}>
                <div className="glyph">{c.glyph}</div>
                <h3>{c.title} + Internship</h3>
                <p>{c.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper2" style={{ textAlign: "center" }}>
        <div className="container">
          <span className="eyebrow" style={{ justifyContent: "center" }}>GET STARTED</span>
          <h2 style={{ fontSize: "clamp(26px,3.6vw,38px)", marginTop: 14 }}>Ask about internship-paired batches</h2>
          <div className="hero-actions" style={{ justifyContent: "center", marginTop: 26 }}>
            <Link to="/contact" className="btn btn-primary">Talk to a counsellor →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
