import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/internships", label: "Internships" },
  { to: "/placements", label: "Placements" },
  { to: "/about", label: "About" },
  { to: "/testimonials", label: "Reviews" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="brand">
          <span className="brand-mark" />
          <span className="brand-name">
            NextGen AI
            <span>Training Institute</span>
          </span>
        </Link>

        <nav className="nav-links">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"}
              className={({ isActive }) => (isActive ? "active" : "")}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-cta">
          <Link to="/contact" className="btn btn-outline btn-sm">Student Portal</Link>
          <Link to="/contact" className="btn btn-primary btn-sm">Free Demo</Link>
          <button className="nav-toggle" aria-label="Toggle menu" onClick={() => setOpen((o) => !o)}>
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      <div className={`mobile-panel ${open ? "open" : ""}`}>
        <div className="container">
          {links.map((l) => (
            <Link key={l.to} to={l.to}>{l.label}</Link>
          ))}
          <Link to="/contact" className="btn btn-primary btn-block">Book Free Demo Class</Link>
        </div>
      </div>
    </header>
  );
}
