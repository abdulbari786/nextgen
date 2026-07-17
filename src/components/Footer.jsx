import { Link } from "react-router-dom";
import { courses } from "../data/courses";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="brand">
              <span className="brand-mark" />
              <span className="brand-name" style={{ color: "var(--paper)" }}>
                NextGen AI
                <span>Training Institute</span>
              </span>
            </Link>
            <p>
              Hyderabad-based training institute helping 100+ students build careers in
              software development, data & AI, cloud and cybersecurity — with live mentors
              and dedicated placement support.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Instagram">◎</a>
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="YouTube">▶</a>
            </div>
          </div>

          <div>
            <h5>Courses</h5>
            <ul>
              {courses.slice(0, 6).map((c) => (
                <li key={c.slug}><Link to={`/courses/${c.slug}`}>{c.title}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h5>Institute</h5>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/placements">Placements</Link></li>
              <li><Link to="/testimonials">Student Reviews</Link></li>
              <li><Link to="/internships">Internships</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h5>Reach Us</h5>
            <ul>
              <li><a href="tel:+919876543210">📞 +91 98765 43210</a></li>
              <li><a href="mailto:hello@nextgenai.training">✉ hello@nextgenai.training</a></li>
              <li><a href="#">📍 3rd Floor, Sindhura Chambers, Ameerpet, Hyderabad, Telangana 500038</a></li>
              <li><Link to="/contact">Book a free demo class →</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} NextGen AI Training Institute. All rights reserved.</span>
          <span style={{ display: "flex", gap: 18 }}>
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
