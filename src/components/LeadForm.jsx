import { useState } from "react";
import { courses } from "../data/courses";

export default function LeadForm({ dark = false, presetCourse = "", compact = false }) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="form-success">
        ✓ Thanks{name ? `, ${name.split(" ")[0]}` : ""} — a NextGen AI counsellor will call
        you within 30 minutes (9 AM – 9 PM, every day).
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="lf-name">Full name *</label>
          <input id="lf-name" required placeholder="Your name"
            value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="lf-phone">Phone number *</label>
          <input id="lf-phone" required type="tel" placeholder="10-digit mobile number" />
        </div>
      </div>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="lf-email">Email address *</label>
          <input id="lf-email" required type="email" placeholder="you@example.com" />
        </div>
        <div className="field">
          <label htmlFor="lf-course">Interested course</label>
          <select id="lf-course" defaultValue={presetCourse}>
            <option value="">Select a course</option>
            {courses.map((c) => (
              <option key={c.slug} value={c.slug}>{c.title}</option>
            ))}
          </select>
        </div>
      </div>
      {!compact && (
        <div className="form-grid">
          <div className="field">
            <label htmlFor="lf-batch">Preferred batch</label>
            <select id="lf-batch" defaultValue="">
              <option value="">Select a batch timing</option>
              <option>Weekday morning (Mon–Fri, 8–10 AM)</option>
              <option>Weekday evening (Mon–Fri, 7–9 PM)</option>
              <option>Weekend (Sat–Sun, 9 AM–1 PM)</option>
              <option>I need help deciding</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="lf-bg">Current background</label>
            <select id="lf-bg" defaultValue="">
              <option value="">Select your background</option>
              <option>Fresh graduate (no prior experience)</option>
              <option>Working professional — non-tech</option>
              <option>Working professional — tech, switching roles</option>
              <option>Already a developer, going deeper</option>
            </select>
          </div>
        </div>
      )}
      <button type="submit" className="btn btn-primary btn-block">
        🚀 Submit — get called back within 30 minutes
      </button>
      <p className="form-note">No spam. No pushy sales calls. Just honest answers from our team.</p>
    </form>
  );
}
