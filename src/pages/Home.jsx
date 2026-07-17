import { Link } from "react-router-dom";
import TraceDivider from "../components/TraceDivider";
import CourseCard from "../components/CourseCard";
import { courses, categories } from "../data/courses";
import { testimonials } from "../data/testimonials";

const companies = ["Amazon","TCS","Infosys","Wipro","Cognizant","Deloitte","Accenture","HCL","Capgemini","Freshworks","Hexaware","Tech Mahindra"];

function HeroDiagram() {
  const nodes = [
    { x: 60, y: 40, label: "PYTHON", color: "var(--gold)" },
    { x: 340, y: 20, label: "AI / ML", color: "var(--cyan)" },
    { x: 60, y: 300, label: "CLOUD", color: "var(--cyan)" },
    { x: 340, y: 320, label: "SECURITY", color: "var(--gold)" },
    { x: 20, y: 170, label: "JAVA", color: "var(--gold)" },
    { x: 380, y: 170, label: "DATA", color: "var(--cyan)" },
  ];
  const cx = 200, cy = 170;
  return (
    <svg viewBox="0 0 400 340" role="img" aria-label="Career paths converging diagram">
      {nodes.map((n, i) => (
        <path key={i} d={`M${n.x},${n.y} L${cx},${cy}`} stroke="rgba(245,242,234,0.22)" strokeWidth="1" strokeDasharray="3 5" />
      ))}
      <circle cx={cx} cy={cy} r="46" fill="var(--ink-2)" stroke="var(--gold)" strokeWidth="1.5" />
      <text x={cx} y={cy - 4} textAnchor="middle" fill="var(--paper)" fontFamily="var(--display)" fontSize="13" fontWeight="700">YOU,</text>
      <text x={cx} y={cy + 14} textAnchor="middle" fill="var(--gold)" fontFamily="var(--mono)" fontSize="10">HIRED</text>
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="5" fill={n.color} />
          <circle cx={n.x} cy={n.y} r="9" fill="none" stroke={n.color} strokeWidth="1" opacity="0.4" />
          <text x={n.x} y={n.y - 16} textAnchor="middle" fill="var(--slate-light)" fontFamily="var(--mono)" fontSize="10" letterSpacing="0.06em">
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="hero-badge">● New batches forming — limited seats</div>
            <h1>
              Every career path leads back to <em>one decision.</em>
            </h1>
            <p className="hero-sub">
              NextGen AI Training Institute trains 100+ students a year across Full Stack
              Development, Data Science & AI, Cloud DevOps and Cybersecurity — with live
              mentors, real projects, and dedicated placement support in Hyderabad.
            </p>
            <div className="hero-actions">
              <Link to="/courses" className="btn btn-primary">Explore Courses →</Link>
              <Link to="/contact" className="btn btn-outline">▷ Book a Free Demo Class</Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat"><b>100+</b><span>Students trained</span></div>
              <div className="hero-stat"><b>4.8★</b><span>Google rating</span></div>
              <div className="hero-stat"><b>90%+</b><span>Placement support</span></div>
              <div className="hero-stat"><b>8</b><span>Live tech tracks</span></div>
            </div>
          </div>
          <div className="hero-diagram">
            <HeroDiagram />
          </div>
        </div>
        <TraceDivider dark />
      </section>

      {/* CATEGORIES */}
      <section className="section section--dark">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">01 / PROGRAMS</span>
            <h2>Pick your track. We'll build the map.</h2>
            <p>Four tracks, eight job-focused programs — each one built around live projects, not just recorded lectures.</p>
          </div>
          <div className="cat-grid">
            {categories.map((cat) => (
              <div className="cat-card" key={cat.key}>
                <div className="glyph">{cat.glyph}</div>
                <h3>{cat.title}</h3>
                <p>{cat.desc}</p>
                <div className="tag-row">
                  {cat.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED COURSES */}
      <section className="section">
        <div className="container">
          <div className="flex-between" style={{ marginBottom: 48 }}>
            <div className="section-head" style={{ marginBottom: 0 }}>
              <span className="eyebrow">02 / COURSES</span>
              <h2>Our most-enrolled programs</h2>
              <p>Every course ships with live mentorship, real projects and placement support baked in — not sold as an add-on.</p>
            </div>
            <Link to="/courses" className="btn btn-outline">View all courses</Link>
          </div>
          <div className="course-grid">
            {courses.slice(0, 6).map((c) => <CourseCard key={c.slug} course={c} />)}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section section--paper2">
        <div className="container two-col">
          <div>
            <span className="eyebrow">03 / WHY NEXTGEN AI</span>
            <h2 style={{ fontSize: "clamp(28px,3.6vw,40px)", marginTop: 14, lineHeight: 1.15 }}>
              Small batches. Real mentors. No autopilot.
            </h2>
            <p style={{ marginTop: 16, color: "var(--slate)", fontSize: 16, lineHeight: 1.65 }}>
              We deliberately keep our institute smaller than the big-box training chains.
              That means your mentor knows your name, your code gets reviewed every week,
              and your placement prep is built around your actual target role — not a
              generic script.
            </p>
            <div className="hero-actions" style={{ marginTop: 28 }}>
              <Link to="/about" className="btn btn-outline">More about us →</Link>
            </div>
          </div>
          <div className="roadmap">
            <div className="roadmap-track">
              <div className="roadmap-item">
                <span className="tag-mono">Max 15 / batch</span>
                <h3>Small, mentor-led batches</h3>
                <p>Every batch is capped so mentors can actually review your code and answer your questions — not just present slides.</p>
              </div>
              <div className="roadmap-item">
                <span className="tag-mono">5 live projects</span>
                <h3>Projects that mirror real jobs</h3>
                <p>Every course ships with hands-on, portfolio-ready projects instead of disconnected exercises.</p>
              </div>
              <div className="roadmap-item">
                <span className="tag-mono">200+ hiring partners</span>
                <h3>Placement support that doesn't stop</h3>
                <p>Mock interviews, resume reviews and dedicated hiring drives until you're placed — not just until the course ends.</p>
              </div>
              <div className="roadmap-item">
                <span className="tag-mono">Flexible batches</span>
                <h3>Built for working schedules too</h3>
                <p>Weekday, evening and weekend batches so a full-time job or college schedule is never a blocker.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STAT BAR */}
      <section className="section--tight section--dark">
        <div className="container">
          <div className="statbar">
            <div><b>100+</b><span>Students Trained</span></div>
            <div><b>8</b><span>Career Tracks</span></div>
            <div><b>4.8★</b><span>Average Rating</span></div>
            <div><b>90%+</b><span>Placement Support</span></div>
          </div>
        </div>
        <TraceDivider dark />
      </section>

      {/* HIRING PARTNERS MARQUEE */}
      <section className="section--dark" style={{ paddingBottom: 0 }}>
        <div className="container" style={{ paddingBottom: 20, paddingTop: 30 }}>
          <p style={{ textAlign: "center", fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.1em", color: "var(--slate-light)", textTransform: "uppercase" }}>
            Where our students get hired
          </p>
        </div>
        <div className="marquee">
          <div className="marquee-track">
            {[...companies, ...companies].map((c, i) => <span key={i}>{c}</span>)}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS PREVIEW */}
      <section className="section">
        <div className="container">
          <div className="center-head">
            <span className="eyebrow">04 / STUDENT STORIES</span>
            <h2 style={{ fontSize: "clamp(28px,3.6vw,40px)", marginTop: 14 }}>Real students. Real offers.</h2>
            <p>A hundred careers in progress — here's what a few of them sound like.</p>
          </div>
          <div className="testi-grid">
            {testimonials.slice(0, 3).map((t, i) => (
              <div className="testi-card" key={i}>
                <div className="testi-stars">★★★★★</div>
                <p className="quote">"{t.quote}"</p>
                <div className="testi-person">
                  <div className="testi-avatar">{t.initials}</div>
                  <div>
                    <b>{t.name}</b>
                    <span>{t.role} · {t.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <Link to="/testimonials" className="btn btn-outline">Read more student stories →</Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section section--dark" style={{ textAlign: "center", paddingBottom: 110 }}>
        <div className="container">
          <span className="eyebrow" style={{ justifyContent: "center" }}>ENROLL TODAY</span>
          <h2 style={{ fontSize: "clamp(30px,4.4vw,48px)", marginTop: 16, maxWidth: 680, marginInline: "auto" }}>
            Your next role starts with one enrollment.
          </h2>
          <p style={{ marginTop: 16, color: "var(--slate-light)", maxWidth: 520, marginInline: "auto" }}>
            Join the next batch at NextGen AI Training Institute, Hyderabad — mentors ready,
            seats limited.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center", marginTop: 30 }}>
            <Link to="/contact" className="btn btn-primary">Enroll Now →</Link>
            <a href="tel:+919876543210" className="btn btn-outline">📞 Call +91 98765 43210</a>
          </div>
        </div>
      </section>
    </>
  );
}
