import { Link } from "react-router-dom";
import TraceDivider from "../components/TraceDivider";
import { testimonials } from "../data/testimonials";

const companies = ["Amazon","TCS","Infosys","Wipro","Cognizant","Deloitte","Accenture","HCL","Capgemini","Freshworks","Hexaware","Tech Mahindra","Zoho"];

const process = [
  { phase: "Step 1", title: "Career mapping", desc: "One-on-one session to align your target role with a realistic timeline." },
  { phase: "Step 2", title: "Resume & LinkedIn build", desc: "Line-by-line resume review and a LinkedIn profile built to get noticed." },
  { phase: "Step 3", title: "Mock interviews", desc: "Multiple rounds of technical and HR mock interviews with real feedback." },
  { phase: "Step 4", title: "Hiring drives", desc: "Access to dedicated hiring drives with our 200+ partner companies." },
  { phase: "Step 5", title: "Offer negotiation", desc: "Guidance on evaluating and negotiating your offer with confidence." },
];

export default function Placements() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link><span>/</span><span>Placements</span></div>
          <span className="eyebrow" style={{ marginTop: 18 }}>PLACEMENT SUPPORT</span>
          <h1>Support that continues until you're placed.</h1>
          <p>
            Placement isn't a bonus module tacked onto the end of a course — it's built into
            every track from week one, with resume support, mock interviews and hiring
            drives with our partner companies.
          </p>
        </div>
        <TraceDivider dark />
      </section>

      <section className="section--tight">
        <div className="container">
          <div className="statbar">
            <div><b>100+</b><span>Students Trained</span></div>
            <div><b>90%+</b><span>Placement Support</span></div>
            <div><b>200+</b><span>Hiring Partners</span></div>
            <div><b>₹3.5–9L</b><span>Package Range</span></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">OUR PROCESS</span>
            <h2>How we get you from course to career</h2>
            <p>A structured, five-step placement process that runs alongside — and continues after — your course.</p>
          </div>
          <div className="roadmap">
            <div className="roadmap-track">
              {process.map((p, i) => (
                <div className="roadmap-item" key={i}>
                  <span className="tag-mono">{p.phase}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container" style={{ paddingBottom: 10 }}>
          <p style={{ textAlign: "center", fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.1em", color: "var(--slate-light)", textTransform: "uppercase", marginBottom: 30 }}>
            Hiring partners our students have joined
          </p>
        </div>
        <div className="marquee">
          <div className="marquee-track">
            {[...companies, ...companies].map((c, i) => <span key={i}>{c}</span>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="center-head">
            <span className="eyebrow">RECENT OUTCOMES</span>
            <h2 style={{ fontSize: "clamp(26px,3.6vw,38px)", marginTop: 14 }}>A few recent placements</h2>
            <p>Real students, real companies, real offers — across every track we run.</p>
          </div>
          <div className="testi-grid">
            {testimonials.slice(3, 6).map((t, i) => (
              <div className="testi-card" key={i}>
                <div className="testi-stars">★★★★★</div>
                <p className="quote">"{t.quote}"</p>
                <div className="testi-person">
                  <div className="testi-avatar">{t.initials}</div>
                  <div><b>{t.name}</b><span>{t.role} · {t.company}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper2" style={{ textAlign: "center" }}>
        <div className="container">
          <span className="eyebrow" style={{ justifyContent: "center" }}>READY TO START?</span>
          <h2 style={{ fontSize: "clamp(26px,3.6vw,38px)", marginTop: 14 }}>
            Your placement journey starts on day one.
          </h2>
          <div className="hero-actions" style={{ justifyContent: "center", marginTop: 26 }}>
            <Link to="/courses" className="btn btn-primary">Explore courses →</Link>
            <Link to="/contact" className="btn btn-outline">Talk to a counsellor</Link>
          </div>
        </div>
      </section>
    </>
  );
}
