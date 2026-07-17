import { Link } from "react-router-dom";
import TraceDivider from "../components/TraceDivider";
import { testimonials } from "../data/testimonials";

export default function TestimonialsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link><span>/</span><span>Reviews</span></div>
          <span className="eyebrow" style={{ marginTop: 18 }}>STUDENT STORIES</span>
          <h1>100+ students. Real stories.</h1>
          <p>
            From complete beginners to career switchers — here's what our students say about
            learning at NextGen AI Training Institute.
          </p>
        </div>
        <TraceDivider dark />
      </section>

      <section className="section">
        <div className="container">
          <div className="testi-grid">
            {testimonials.map((t, i) => (
              <div className="testi-card" key={i}>
                <div className="testi-stars">★★★★★</div>
                <p className="quote">"{t.quote}"</p>
                <div style={{ fontFamily: "var(--mono)", fontSize: 11.5, color: "var(--gold-dim)" }}>{t.course}</div>
                <div className="testi-person">
                  <div className="testi-avatar">{t.initials}</div>
                  <div><b>{t.name}</b><span>{t.role} · {t.company}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark" style={{ textAlign: "center" }}>
        <div className="container">
          <span className="eyebrow" style={{ justifyContent: "center" }}>YOUR STORY IS NEXT</span>
          <h2 style={{ fontSize: "clamp(26px,3.6vw,38px)", marginTop: 14 }}>Ready to write your own?</h2>
          <div className="hero-actions" style={{ justifyContent: "center", marginTop: 26 }}>
            <Link to="/courses" className="btn btn-primary">Explore courses →</Link>
            <Link to="/contact" className="btn btn-outline">Book a free demo class</Link>
          </div>
        </div>
      </section>
    </>
  );
}
