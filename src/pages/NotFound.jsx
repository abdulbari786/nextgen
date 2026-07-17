import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section section--dark" style={{ textAlign: "center", minHeight: "60vh", display: "flex", alignItems: "center" }}>
      <div className="container">
        <span className="eyebrow" style={{ justifyContent: "center" }}>404 / NODE NOT FOUND</span>
        <h1 style={{ fontSize: "clamp(40px,7vw,90px)", marginTop: 16 }}>Dead trace.</h1>
        <p style={{ marginTop: 16, color: "var(--slate-light)", maxWidth: 460, marginInline: "auto" }}>
          This page doesn't exist on our circuit. Let's route you back somewhere useful.
        </p>
        <div className="hero-actions" style={{ justifyContent: "center", marginTop: 30 }}>
          <Link to="/" className="btn btn-primary">Back to Home</Link>
          <Link to="/courses" className="btn btn-outline">Browse Courses</Link>
        </div>
      </div>
    </section>
  );
}
