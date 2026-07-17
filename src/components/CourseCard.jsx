import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <article className="course-card">
      <div className="course-card-top">
        <span className="badge">{course.category}</span>
        <span className="glyph-box">{course.glyph}</span>
      </div>
      <div className="course-card-body">
        <h3>{course.title}</h3>
        <p>{course.tagline}</p>
        <div className="meta-row">
          <span>⏱ {course.duration}</span>
          <span>👥 {course.batch}</span>
        </div>
        <div className="cta-row">
          <span className="price">
            ₹{course.fee.toLocaleString("en-IN")}
            <small>₹{course.originalFee.toLocaleString("en-IN")}</small>
          </span>
          <Link to={`/courses/${course.slug}`} className="arrow-link">
            View course →
          </Link>
        </div>
      </div>
    </article>
  );
}
