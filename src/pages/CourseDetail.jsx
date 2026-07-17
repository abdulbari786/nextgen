import { Link, useParams, Navigate } from "react-router-dom";
import TraceDivider from "../components/TraceDivider";
import CurriculumAccordion from "../components/CurriculumAccordion";
import FAQAccordion from "../components/FAQAccordion";
import LeadForm from "../components/LeadForm";
import CourseCard from "../components/CourseCard";
import { getCourseBySlug, courses } from "../data/courses";

export default function CourseDetail() {
  const { slug } = useParams();
  const course = getCourseBySlug(slug);

  if (!course) return <Navigate to="/courses" replace />;

  const related = courses.filter((c) => c.slug !== course.slug && c.category === course.category).slice(0, 3);
  const discount = Math.round(((course.originalFee - course.fee) / course.originalFee) * 100);

  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span>/</span>
            <Link to="/courses">Courses</Link><span>/</span>
            <span>{course.title}</span>
          </div>
          <span className="eyebrow" style={{ marginTop: 18 }}>New batch forming — seats limited</span>
          <h1>{course.glyph} {course.title}</h1>
          <p>{course.tagline}</p>
          <div className="hero-actions" style={{ marginTop: 26 }}>
            <a href="#enroll" className="btn btn-primary">Enroll Now — Save ₹{(course.originalFee - course.fee).toLocaleString("en-IN")} →</a>
            <a href="#enroll" className="btn btn-outline">▷ Free Demo Class</a>
          </div>
          <div className="hero-stats" style={{ marginTop: 44 }}>
            <div className="hero-stat"><b>{course.stats.placed}</b><span>Students placed</span></div>
            <div className="hero-stat"><b>{course.stats.rating}★</b><span>Google rating</span></div>
            <div className="hero-stat"><b>{course.stats.support}</b><span>Placement support</span></div>
            <div className="hero-stat"><b>{course.stats.experience}</b><span>Years experience</span></div>
          </div>
        </div>
        <TraceDivider dark />
      </section>

      {/* FEE + QUICK FACTS */}
      <section className="section--tight">
        <div className="container">
          <div className="chip-card" style={{ padding: "30px 30px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr auto", gap: 24, alignItems: "center" }}>
            <span className="chip-pins"><span /><span /><span /><span /></span>
            <div>
              <span className="eyebrow">Course Fee</span>
              <div style={{ marginTop: 8, fontFamily: "var(--display)", fontSize: 26, fontWeight: 700 }}>
                ₹{course.fee.toLocaleString("en-IN")}{" "}
                <span style={{ fontFamily: "var(--mono)", fontSize: 14, color: "var(--slate)", textDecoration: "line-through", fontWeight: 400 }}>
                  ₹{course.originalFee.toLocaleString("en-IN")}
                </span>{" "}
                <span style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--good)" }}>{discount}% OFF</span>
              </div>
            </div>
            <div><span className="eyebrow">🗓 Duration</span><div style={{ marginTop: 8, fontWeight: 600 }}>{course.duration}</div></div>
            <div><span className="eyebrow">🎓 Level</span><div style={{ marginTop: 8, fontWeight: 600 }}>{course.level}</div></div>
            <div><span className="eyebrow">💻 Mode</span><div style={{ marginTop: 8, fontWeight: 600 }}>{course.mode}</div></div>
            <a href="#enroll" className="btn btn-primary btn-sm">Secure Your Seat</a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section">
        <div className="container two-col">
          <div>
            <span className="eyebrow">ABOUT THIS COURSE</span>
            <h2 style={{ fontSize: "clamp(26px,3.4vw,38px)", marginTop: 14, lineHeight: 1.15 }}>
              Unlock your potential: {course.title.toLowerCase()}
            </h2>
            {course.description.map((p, i) => (
              <p key={i} style={{ marginTop: 16, color: "var(--slate)", fontSize: 15.5, lineHeight: 1.7 }}>{p}</p>
            ))}
          </div>
          <div className="info-grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {course.highlights.map((h, i) => (
              <div className="info-card" key={i}>
                <div className="glyph">{h.glyph}</div>
                <h4>{h.title}</h4>
                <p>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="section section--dark">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">PROGRAM STRUCTURE</span>
            <h2>Your path, mapped month by month</h2>
            <p>A structured {course.duration.toLowerCase()} journey — from fundamentals to a deployed, interview-ready project.</p>
          </div>
          <div className="roadmap">
            <div className="roadmap-track">
              {course.roadmap.map((r, i) => (
                <div className="roadmap-item" key={i}>
                  <span className="tag-mono">{r.phase}</span>
                  <h3>{r.title}</h3>
                  <p>{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL LEARN */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">WHAT YOU'LL LEARN</span>
            <h2>Core topics covered in this program</h2>
            <p>Everything you need to go from fundamentals to a job-ready, portfolio-backed skill set.</p>
          </div>
          <div className="info-grid">
            {course.learn.map((l, i) => (
              <div className="info-card" key={i}>
                <div className="glyph">{l.glyph}</div>
                <h4>{l.title}</h4>
                <p>{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO CAN JOIN */}
      <section className="section section--paper2">
        <div className="container two-col">
          <div>
            <span className="eyebrow">WHO CAN JOIN</span>
            <h2 style={{ fontSize: "clamp(26px,3.4vw,38px)", marginTop: 14 }}>This course is for everyone</h2>
            <p style={{ marginTop: 16, color: "var(--slate)", fontSize: 15.5, lineHeight: 1.7 }}>
              No strict eligibility criteria — curiosity and consistency matter more than
              your starting point.
            </p>
            <div style={{ marginTop: 24 }}>
              <span className="eyebrow" style={{ marginBottom: 12, display: "inline-flex" }}>Helpful, not required</span>
              <ul style={{ marginTop: 10 }}>
                {course.prerequisites.map((p, i) => (
                  <li key={i} style={{ padding: "8px 0", fontSize: 14, color: "var(--ink)", display: "flex", gap: 8 }}>
                    <span style={{ color: "var(--good)" }}>✓</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="info-grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {course.audience.map((a, i) => (
              <div className="info-card" key={i}>
                <div className="glyph">{a.glyph}</div>
                <h4>{a.title}</h4>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="section section--dark">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">TOOLS & TECHNOLOGIES</span>
            <h2>The exact stack companies hire for</h2>
            <p>Every framework, library and tool you'll use — and ship real projects with — throughout the program.</p>
          </div>
          <div className="pill-cloud">
            {course.techStack.map((t) => <span className="pill" key={t}>{t}</span>)}
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="section" id="curriculum">
        <div className="container">
          <div className="flex-between" style={{ marginBottom: 40 }}>
            <div className="section-head" style={{ marginBottom: 0 }}>
              <span className="eyebrow">COURSE CURRICULUM</span>
              <h2>{course.title} in {course.duration}</h2>
              <p>{course.curriculum.length} structured modules, real projects throughout, and a deployed capstone at the end.</p>
            </div>
            <a href="#enroll" className="btn btn-primary">Enroll Now</a>
          </div>
          <CurriculumAccordion modules={course.curriculum} />
        </div>
      </section>

      {/* CAREER OPPORTUNITIES */}
      <section className="section section--paper2">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">CAREER OPPORTUNITIES</span>
            <h2>Where this course can take you</h2>
            <p>Graduates of this program go on to roles like these across product companies, startups and IT services firms.</p>
          </div>
          <div className="role-grid">
            {course.careers.map((r, i) => (
              <div className="role-card" key={i}>
                <span className="role-tag">{r.tag}</span>
                <h4>{r.title}</h4>
                <p>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">FAQ</span>
            <h2>Frequently asked questions</h2>
            <p>Still deciding? Our counsellors are available 9 AM – 9 PM every day.</p>
          </div>
          <FAQAccordion items={course.faqs} />
        </div>
      </section>

      {/* ENROLL FORM */}
      <section className="section section--dark" id="enroll">
        <div className="container two-col">
          <div>
            <span className="eyebrow">RESERVE YOUR SEAT</span>
            <h2 style={{ fontSize: "clamp(26px,3.4vw,38px)", marginTop: 14 }}>Batch fills fast — apply today</h2>
            <p style={{ marginTop: 16, color: "var(--slate-light)", fontSize: 15.5, lineHeight: 1.7 }}>
              Fill in your details and a counsellor will call you within 30 minutes
              (9 AM – 9 PM, every day) to help you choose the right batch.
            </p>
            <div className="statbar" style={{ marginTop: 30 }}>
              <div><b>{course.duration.split(" ")[0]}</b><span>{course.duration.includes("Month") ? "Months" : "Duration"}</span></div>
              <div><b>{course.curriculum.length}</b><span>Modules</span></div>
              <div><b>{course.curriculum.length}</b><span>Projects</span></div>
              <div><b>2</b><span>Certificates</span></div>
            </div>
          </div>
          <div className="chip-card">
            <span className="chip-pins"><span /><span /><span /><span /></span>
            <LeadForm dark presetCourse={course.slug} />
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">RELATED PROGRAMS</span>
              <h2>Explore more in {course.category}</h2>
            </div>
            <div className="course-grid">
              {related.map((c) => <CourseCard key={c.slug} course={c} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
