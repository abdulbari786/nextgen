import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import TraceDivider from "../components/TraceDivider";
import { courses } from "../data/courses";

const filters = ["All", "Software Development", "Data & AI", "Cloud & DevOps", "Cybersecurity"];

export default function Courses() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => (active === "All" ? courses : courses.filter((c) => c.category === active)),
    [active]
  );

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span>/</span><span>Courses</span>
          </div>
          <span className="eyebrow" style={{ marginTop: 18 }}>ALL PROGRAMS</span>
          <h1>Job-focused courses, built around real projects.</h1>
          <p>
            Eight programs across Software Development, Data & AI, Cloud & DevOps and
            Cybersecurity — each with live mentors, small batches, and placement support
            from day one.
          </p>
        </div>
        <TraceDivider dark />
      </section>

      <section className="section">
        <div className="container">
          <div className="flex-between" style={{ marginBottom: 40 }}>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className="btn btn-sm"
                  style={{
                    background: active === f ? "var(--ink)" : "transparent",
                    color: active === f ? "var(--paper)" : "var(--ink)",
                    border: "1px solid var(--ink)",
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
            <span style={{ fontFamily: "var(--mono)", fontSize: 12.5, color: "var(--slate)" }}>
              {filtered.length} program{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>

          <div className="course-grid">
            {filtered.map((c) => <CourseCard key={c.slug} course={c} />)}
          </div>
        </div>
      </section>

      <section className="section section--dark" style={{ textAlign: "center" }}>
        <div className="container">
          <span className="eyebrow" style={{ justifyContent: "center" }}>NOT SURE WHICH TRACK?</span>
          <h2 style={{ fontSize: "clamp(26px,3.6vw,38px)", marginTop: 14, maxWidth: 620, marginInline: "auto" }}>
            Talk to a counsellor — no pressure, just clarity.
          </h2>
          <div className="hero-actions" style={{ justifyContent: "center", marginTop: 26 }}>
            <Link to="/contact" className="btn btn-primary">Book a Free Demo Class →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
